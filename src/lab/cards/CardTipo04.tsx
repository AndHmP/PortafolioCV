import { useState } from 'react';
import type { CSSProperties } from 'react';

import type { Zapatilla } from './datos';

import './estilos/CardTipo04.scss';

const TALLAS = ['7', '8', '9', '10'];

/**
 * Card de producto que despliega tallas y colores al pasar el cursor.
 *
 * Dos arreglos sobre el original: el texto de fondo se declaraba en un
 * atributo inventado (`textBefore`), que React no llega a pintar en el DOM y
 * dejaba el `attr()` del CSS vacío; ahora es un `data-` válido. Y el color de
 * realce viaja como variable CSS en vez de como `<style>` inyectado.
 */
export default function CardTipo04({ producto }: { producto: Zapatilla }) {
  const [activa, setActiva] = useState(false);

  return (
    <div
      className="ContenedorCardTipo04"
      style={{ '--color-producto': producto.colores[0] } as CSSProperties}
    >
      <div
        className={`CardTipo04 relative flex flex-column align-items-center justify-content-center ${
          activa ? 'active' : ''
        }`}
        data-producto={producto.producto}
        onMouseEnter={() => setActiva(true)}
        onMouseLeave={() => setActiva(false)}
      >
        <div className="Circle absolute" style={{ backgroundColor: producto.colores[0] }} />
        <img src={producto.img} alt={producto.nombre} className="relative" />
        <div className="nameProduct relative">{producto.nombre}</div>

        <section className="absolute datos flex flex-column align-items-center justify-content-center">
          <div className="SubSecc SeccSizes flex align-items-center justify-content-center">
            <p className="seccTitle">SIZES:</p>
            {TALLAS.map((talla) => (
              <div key={talla} className="size">
                {talla}
              </div>
            ))}
          </div>
          <div className="SubSecc SeccColors flex align-items-center justify-content-center">
            <p className="seccTitle">COLORS:</p>
            {producto.colores.map((color) => (
              <div key={color} className="color" style={{ backgroundColor: color }} />
            ))}
          </div>
          <button type="button">Buy Now</button>
        </section>
      </div>
    </div>
  );
}
