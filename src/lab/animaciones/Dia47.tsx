import { useState } from 'react';

import './estilos/Dia47.scss';

/* Día 47 — Pixel Art
   "Una cuadrícula de 20×20 donde cada celda se enciende al pulsarla."

   Las 400 celdas son casillas de verificación disfrazadas. El pen esconde el
   cuadro y pinta su `<label>`; aquí se pinta la casilla misma con
   `appearance: none`, que da el mismo cuadrado y deja un control con nombre
   accesible en vez de una etiqueta vacía.

   Al cargar vienen encendidas las del marciano del reto; a partir de ahí se
   puede dibujar lo que sea.

   El patrón está leído de la referencia, fila a fila. */

const MARCIANO = [
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '.........##.........',
  '........####........',
  '.......######.......',
  '......##.##.##......',
  '......########......',
  '........#..#........',
  '.......#.##.#.......',
  '......#.#..#.#......',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
  '....................',
];

const INICIAL = MARCIANO.flatMap((fila) => [...fila].map((c) => c === '#'));

export default function Dia47() {
  const [celdas, setCeldas] = useState(INICIAL);

  const alternar = (i: number) =>
    setCeldas((actuales) => actuales.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="Dia47">
      {celdas.map((encendida, i) => (
        <input
          key={i}
          type="checkbox"
          className="Dia47-celda"
          checked={encendida}
          onChange={() => alternar(i)}
          aria-label={`Celda ${i + 1}`}
        />
      ))}
    </div>
  );
}


