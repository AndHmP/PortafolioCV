import { useState } from 'react';
import type { CSSProperties } from 'react';

import type { Promocion } from './datos';

import './estilos/CardTipo08.scss';

/**
 * Card promocional: el óvalo sube al pasar el cursor y, al apuntar al enlace,
 * aparece la franja del descuento.
 *
 * El original guardaba JSX dentro de los datos para resaltar parte del texto,
 * y pintaba ese realce con una etiqueta `<style>` inyectada. Aquí el texto
 * llega en tres tramos y el color va en una variable CSS.
 */
export default function CardTipo08({ promocion }: { promocion: Promocion }) {
  const [descuentoVisible, setDescuentoVisible] = useState(false);

  const [tituloInicio, tituloResalte, tituloFin] = promocion.titulo;
  const [descuentoInicio, descuentoResalte, descuentoFin] = promocion.descuento;

  return (
    <div
      className="ContenedorCardTipo08"
      style={{ '--color-promo': promocion.color } as CSSProperties}
    >
      <div
        className="CardTipo08 relative flex flex-column align-items-center justify-content-center"
        style={{ backgroundImage: `url(${promocion.img})` }}
      >
        <div
          className="circle absolute flex flex-column align-items-center justify-content-start"
          style={{ backgroundColor: promocion.color }}
        >
          <p className="Title">
            {tituloInicio}
            <span>{tituloResalte}</span>
            {tituloFin}
          </p>
          <p className="Content">{promocion.contenido}</p>
          <span className="enlace" style={{ color: promocion.color }}>
            <span
              className="text flex align-items-center justify-content-center"
              onMouseEnter={() => setDescuentoVisible(true)}
              onMouseLeave={() => setDescuentoVisible(false)}
            >
              Learn How
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="flecha">
                <path
                  d="M4 12h16m-7-7 7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </span>
        </div>

        <div
          className={`descuento absolute flex align-items-center justify-content-center ${
            descuentoVisible ? 'active' : ''
          }`}
          style={{ backgroundColor: promocion.color }}
        >
          <div className="text">
            {descuentoInicio}
            <span>{descuentoResalte}</span>
            {descuentoFin}
          </div>
        </div>
      </div>
    </div>
  );
}
