import type { CSSProperties } from 'react';

import './estilos/Dia52.scss';

/* Día 52 — Dot Wave
   "Diez anillos de puntos que laten hacia fuera como una onda."

   Ningún anillo se mueve: lo único que se anima es el tamaño de los puntos, de
   cero a su medida. Cada anillo arranca un tercio de segundo después que el de
   dentro, y esa cascada de retrasos sobre una animación de ida y vuelta es toda
   la onda.

   El anillo n lleva 12+6n puntos repartidos a partes iguales, a un radio de
   29+11n: al crecer el aro cabe más gente y la densidad se mantiene. */

const ANILLOS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Dia52() {
  return (
    <div className="Dia52">
      {ANILLOS.map((n) => {
        const puntos = 12 + 6 * n;
        const radio = 29 + 11 * n;
        return (
          <div
            key={n}
            className="Dia52-anillo"
            /* El retraso viaja como variable porque quien se anima es el punto. */
            style={{ '--Dia52-retraso': `${(n / 3).toFixed(4)}s` } as CSSProperties}
          >
            {Array.from({ length: puntos }, (_, k) => (
              <div
                key={k}
                className="Dia52-punto"
                style={{
                  transform: `translate3d(0, ${-radio * 0.675}px, 0) rotate(${(k * 360) / puntos}deg)`,
                  transformOrigin: `0 ${radio * 0.675}px`,
                }}
              >
                <div className="Dia52-relleno" />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

