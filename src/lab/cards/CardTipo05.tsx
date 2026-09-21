import { useState } from 'react';

import type { ProductoTienda } from './datos';
import { IconoBolso, IconoEstrella } from './iconos';

import './estilos/CardTipo05.scss';

/** Ficha de tienda con selector de color, valoración y precio. */
export default function CardTipo05({ producto }: { producto: ProductoTienda }) {
  const [variante, setVariante] = useState(0);

  return (
    <div className="ContenedorCardTipo05">
      <div className="CardTipo05 flex flex-column align-items-center justify-content-start">
        <div className="SeccIcons w-full flex align-items-center justify-content-between">
          {/* El logotipo puede faltar: no todos los originales siguen en pie. */}
          {producto.marca ? <img src={producto.marca} alt="" /> : <span />}
          <div className="SeccIconBolso flex align-items-center justify-content-center">
            <IconoBolso />
          </div>
        </div>

        <div className="SeccImg w-full flex align-items-center justify-content-center relative">
          {producto.variantes.map((item, i) => (
            <img
              key={item.color}
              src={item.img}
              alt={i === variante ? producto.nombre : ''}
              className={`absolute ${i === variante ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="SeccTitleProduct w-full flex align-items-center justify-content-start">
          {producto.nombre}
        </div>

        <div className="SeccDescriptionProduct w-full flex flex-column align-items-center justify-content-center">
          <div className="Text w-full">{producto.descripcion}</div>
          <div
            className="Calificacion w-full flex align-items-center justify-content-start"
            aria-label={`${producto.estrellas} de 5`}
          >
            {[...Array(5)].map((_, i) => (
              <IconoEstrella
                key={i}
                style={
                  producto.estrellas > i
                    ? { fill: '#000', stroke: 'transparent' }
                    : { fill: 'transparent', stroke: '#000' }
                }
              />
            ))}
          </div>
        </div>

        <div className="SeccExtraDate flex w-full align-items-center justify-content-between">
          <div className="Color flex align-items-center justify-content-start">
            <p>Colour:</p>
            {producto.variantes.slice(0, 4).map((item, i) => (
              <div
                key={item.color}
                role="button"
                tabIndex={0}
                aria-label={`Color ${i + 1}`}
                className={`relative flex align-items-center justify-content-center ${
                  i === variante ? 'active' : ''
                }`}
                onClick={() => setVariante(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setVariante(i);
                  }
                }}
                style={{ backgroundColor: item.color }}
              >
                <div className="absolute circle" style={{ border: `1.2px solid ${item.color}` }} />
              </div>
            ))}
          </div>
          <div className="Price flex flex-column align-items-end justify-content-center">
            <p>${producto.precio}</p>
            <p>Nine dollar Only</p>
          </div>
        </div>

        <button type="button" className="w-full flex-align-items-center justify-content-center">
          add to card
        </button>
      </div>
    </div>
  );
}
