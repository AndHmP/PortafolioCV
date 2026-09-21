import { useState } from 'react';

import './estilos/Dia49.scss';

/* Día 49 — CSS Follow
   "Un punto que sigue al ratón sin una línea de JavaScript."

   El truco del pen: el lienzo está cubierto por una rejilla de 20×20 celdas
   invisibles, y cada una tiene una regla `:hover ~` que lleva el punto a su
   centro. Con 400 reglas la resolución es suficiente para que parezca que
   sigue al cursor de verdad.

   Aquí la rejilla es la misma; lo que cambia es que la celda apuntada se
   guarda en estado en vez de escribir 400 selectores. La transición de 0,3 s
   es la que suaviza el salto entre celdas. */

const LADO = 20;
const CELDAS = Array.from({ length: LADO * LADO }, (_, i) => i);

export default function Dia49() {
  const [celda, setCelda] = useState(LADO * (LADO / 2) + LADO / 2);
  const fila = Math.floor(celda / LADO);
  const columna = celda % LADO;

  return (
    <div className="Dia49">
      <div className="Dia49-rejilla">
        {CELDAS.map((i) => (
          <span
            key={i}
            className="Dia49-celda"
            onMouseEnter={() => setCelda(i)}
          />
        ))}
      </div>

      <div
        className="Dia49-punto"
        style={{ transform: `translate3d(${columna * 100 + 50}%, ${fila * 100 + 50}%, 0)` }}
      />
    </div>
  );
}


