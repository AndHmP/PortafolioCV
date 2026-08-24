import { useState } from 'react';

import './estilos/Dia47.scss';

/* Día 47 — Pixel Art
   "¿No te gusta Space Invaders? Haz clic en los píxeles y crea tu propia obra." */

const LADO = 11;
const TOTAL = LADO * LADO;

/* Marciano clásico de 11×11 como punto de partida. */
const INVASOR = `
00100000100
00010001000
00111111100
01101110110
11111111111
10111111101
10100000101
00011011000
`
  .replace(/\s/g, '')
  .split('')
  .map((c, i) => (c === '1' ? i + 22 : -1))
  .filter((n) => n >= 0);

export default function Dia47() {
  const [pintados, setPintados] = useState<Set<number>>(new Set(INVASOR));

  const alternar = (i: number) =>
    setPintados((actual) => {
      const siguiente = new Set(actual);
      if (siguiente.has(i)) siguiente.delete(i);
      else siguiente.add(i);
      return siguiente;
    });

  return (
    <div className="Dia47">
      <div className="Dia47-lienzo">
        {Array.from({ length: TOTAL }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`Dia47-pixel ${pintados.has(i) ? 'activo' : ''}`}
            onClick={() => alternar(i)}
            aria-label={`Píxel ${i + 1}`}
          />
        ))}
      </div>
      <p className="Dia47-pista">haz clic para pintar</p>
    </div>
  );
}
