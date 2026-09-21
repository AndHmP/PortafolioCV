import { useMemo } from 'react';

import './estilos/Dia42.scss';

/* Día 42 — Stars
   "Un cielo estrellado dentro de un círculo: 300 puntos y nada más."

   El pen reparte 300 estrellas al azar sobre un disco de 280 px y les da a cada
   una un periodo de 2 a 4 s con un desfase negativo, para que al cargar ya
   estén todas a mitad de parpadeo. Las coordenadas concretas no son diseño,
   son ruido: aquí se generan con un LCG de semilla fija, así que salen siempre
   las mismas sin tener que arrastrar 300 líneas de CSS.

   Encima cruzan seis estrellas fugaces. Cada una tarda solo un 10 % de su ciclo
   en atravesar el disco y se queda aparcada fuera el resto; con ciclos de 21 a
   25 s y desfases distintos, nunca coinciden dos. Esos números sí son del pen:
   se notan. */

const TOTAL = 300;
const LADO = 280;

/* Alto de salida y ciclo de cada fugaz, tal cual el pen. */
const FUGACES = [
  { top: 46, duracion: 21, retraso: 17.5 },
  { top: 31, duracion: 23, retraso: 0.3 },
  { top: -28, duracion: 21, retraso: 23 },
  { top: 13, duracion: 23, retraso: 16.7 },
  { top: 13, duracion: 22, retraso: 10 },
  { top: 67, duracion: 25, retraso: 13.3 },
];

function sembrar(semilla: number) {
  let s = semilla;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export default function Dia42() {
  const estrellas = useMemo(() => {
    const azar = sembrar(42);
    return Array.from({ length: TOTAL }, () => ({
      top: azar() * LADO,
      left: azar() * LADO,
      duracion: 2 + azar() * 2,
      retraso: -azar() * 2,
    }));
  }, []);

  return (
    <div className="Dia42">
      <div className="Dia42-disco">
        {estrellas.map((e, i) => (
          <span
            key={i}
            className="Dia42-estrella"
            style={{
              top: `${(e.top / LADO) * 100}%`,
              left: `${(e.left / LADO) * 100}%`,
              animationDuration: `${e.duracion.toFixed(2)}s`,
              animationDelay: `${e.retraso.toFixed(2)}s`,
            }}
          />
        ))}

        {FUGACES.map((f, i) => (
          <span
            key={`fugaz-${i}`}
            className="Dia42-fugaz"
            style={{
              top: `${(f.top / LADO) * 100}%`,
              animationDuration: `${f.duracion}s`,
              animationDelay: `${f.retraso}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}


