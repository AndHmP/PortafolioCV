import { useId, useState } from 'react';

import './estilos/Dia29.scss';

/* Día 29 — Search Field
   "No encontrarás nada si no empiezas a buscar. Escribe algo en el campo."

   El marcador de posición es el del reto, en inglés, porque forma parte del
   diseño. Las sugerencias son nombres de propiedades CSS: el original las
   saca de su propio JavaScript, que no es legible desde fuera. */

const VOCABULARIO = [
  'align-items',
  'animation',
  'backdrop-filter',
  'background',
  'border-radius',
  'box-shadow',
  'clip-path',
  'color',
  'cursor',
  'display',
  'filter',
  'flex-direction',
  'grid-template',
  'justify-content',
  'letter-spacing',
  'mix-blend-mode',
  'opacity',
  'overflow',
  'position',
  'transform',
  'transition',
  'z-index',
];

const MAXIMO = 4;

export default function Dia29() {
  const [texto, setTexto] = useState('');
  const id = useId();

  const consulta = texto.trim().toLowerCase();
  const sugerencias = consulta
    ? VOCABULARIO.filter((p) => p.includes(consulta)).slice(0, MAXIMO)
    : [];

  return (
    <div className="Dia29">
      <div className="Dia29-barra">
        <label className="Dia29-oculto" htmlFor={id}>
          Search
        </label>
        <input
          id={id}
          className="Dia29-campo"
          type="text"
          placeholder="Start typing ..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button className="Dia29-boton" type="button" aria-label="Search">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="7.5" />
            <path d="M16 16l5 5" />
          </svg>
        </button>

        <ul className={`Dia29-sugerencias${sugerencias.length ? ' activa' : ''}`}>
          {sugerencias.map((p) => {
            /* Resalta el trozo que coincide con lo tecleado. */
            const corte = p.indexOf(consulta);
            return (
              <li key={p}>
                {p.slice(0, corte)}
                <b>{p.slice(corte, corte + consulta.length)}</b>
                {p.slice(corte + consulta.length)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
