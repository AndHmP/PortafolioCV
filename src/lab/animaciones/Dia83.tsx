import { useMemo } from 'react';
import type { CSSProperties } from 'react';

import './estilos/Dia83.scss';

/* Día 83 — Warp Drive
   "El salto al hiperespacio, con treinta anillos de rayas."

   Cada anillo lleva 24 rayas repartidas cada 15°, con su ángulo y su distancia
   al centro movidos un poco al azar para que no se vea la retícula. Todos
   hacen lo mismo —crecer de escala 0 a 4— y lo único que los separa es el
   retraso: 4 s de ciclo entre 30 anillos, uno cada 0,13 s.

   La curva `cubic-bezier(.98, .02, .97, .12)` es la que da la sensación de
   aceleración: casi todo el recorrido ocurre al final.

   Las posiciones exactas son ruido, no diseño: se generan con un LCG de semilla
   fija en vez de arrastrar 720 reglas de CSS. */

const ANILLOS = 30;
const RAYAS = 24;

function sembrar(semilla: number) {
  let s = semilla;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export default function Dia83() {
  const anillos = useMemo(() => {
    const azar = sembrar(83);
    return Array.from({ length: ANILLOS }, () =>
      Array.from({ length: RAYAS }, (_, k) => {
        const angulo = k * (360 / RAYAS) + azar() * 16 - 10;
        const distancia = 60 + azar() * 40;
        return { angulo, distancia };
      }),
    );
  }, []);

  return (
    <div className="Dia83">
      <div className="Dia83-warp">
        {anillos.map((rayas, i) => (
          <div
            key={i}
            className="Dia83-anillo"
            style={{ animationDelay: `${(-i * (4 / ANILLOS)).toFixed(4)}s` }}
          >
            {rayas.map((raya, k) => (
              <div
                key={k}
                className="Dia83-raya"
                style={
                  {
                    /* La raya se estira en proporción a lo lejos que está: las
                       de fuera son más largas, como en una perspectiva. */
                    transform: `rotate(${raya.angulo.toFixed(3)}deg) translate3d(0, ${(
                      raya.distancia * 0.675
                    ).toFixed(3)}px, 0) scaleY(${(raya.distancia / 100).toFixed(4)})`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

