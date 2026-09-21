import { useState } from 'react';

import './estilos/Dia90.scss';

/* Día 90 — Mouse Trap
   "Una telaraña de líneas que se abre por donde pasa el ratón."

   En reposo no se ve nada: las diecinueve líneas están partidas en dos mitades
   con `scaleX(0)`. Al pasar el ratón solo se dibujan **cinco**: la de la fila
   señalada y las dos de arriba y las dos de abajo. Más allá de esa distancia el
   pen no define ninguna regla, así que siguen invisibles.

   Cada mitad crece desde su borde exterior y deja un hueco en medio, centrado
   en la columna del cursor: la izquierda llega a −0,2 + 0,1·(columna−1) y la
   derecha a 1,7 − 0,1·(columna−1), y las dos suman 0,1 por cada fila de
   distancia, así que el hueco se va cerrando al alejarse.

   El pen lo resuelve con 380 celdas invisibles y más de mil reglas; aquí se lee
   la posición del ratón y sale la misma cuenta. */

const COLUMNAS = 20;
const LINEAS = 19;
/* Más allá de dos filas el pen no dibuja nada. */
const ALCANCE = 2;

export default function Dia90() {
  const [celda, setCelda] = useState<{ columna: number; fila: number } | null>(null);

  const escala = (lado: 'izquierda' | 'derecha', linea: number) => {
    if (!celda) return 0;
    const distancia = Math.abs(linea - celda.fila);
    if (distancia > ALCANCE) return 0;
    const base =
      lado === 'izquierda'
        ? -0.2 + (celda.columna - 1) * 0.1
        : 1.7 - (celda.columna - 1) * 0.1;
    return base + distancia * 0.1;
  };

  return (
    <div
      className="Dia90"
      onMouseMove={(e) => {
        const caja = e.currentTarget.getBoundingClientRect();
        setCelda({
          columna: Math.min(
            COLUMNAS,
            Math.max(1, Math.ceil(((e.clientX - caja.left) / caja.width) * COLUMNAS)),
          ),
          fila: Math.min(
            LINEAS,
            Math.max(1, Math.ceil(((e.clientY - caja.top) / caja.height) * LINEAS)),
          ),
        });
      }}
      onMouseLeave={() => setCelda(null)}
    >
      {Array.from({ length: LINEAS }, (_, i) => i + 1).map((n) => (
        <div
          key={n}
          className="Dia90-linea"
          /* Las líneas del pen caen en 19 px y luego cada 20. */
          style={{ top: `${(19 + (n - 1) * 20) * 0.675}px` }}
        >
          <div
            className="Dia90-mitad izquierda"
            style={{ transform: `scaleX(${escala('izquierda', n)})` }}
          />
          <div
            className="Dia90-mitad derecha"
            style={{ transform: `scaleX(${escala('derecha', n)})` }}
          />
        </div>
      ))}
    </div>
  );
}

