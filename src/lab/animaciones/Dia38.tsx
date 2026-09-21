import { useState } from 'react';

import './estilos/Dia38.scss';

/* Día 38 — Logo Transition
   "Un logo no tiene por qué ser estático: como transición o recurso de estilo
   también puede animarse."

   Dos copias del mismo hexágono, una blanca y otra morada, superpuestas en el
   centro. Al pulsar, la blanca crece hasta escala 10 —tanto que el lienzo
   entero se vuelve blanco— y la morada, que estaba en escala 0, entra encima
   con 0,3 s de retraso. El resultado es el logo en negativo; otro clic
   deshace el cambio.

   No hay un solo fotograma de animación: son dos transiciones de escala
   cronometradas para relevarse. */

const HEXAGONO =
  "M-4.67739102e-15,21.1739614 L-5.32907052e-15,20 L34.6410162,0 L69.2820323,20 " +
  "L69.2820323,21.1739614 C65.1281093,26.3215737 62.6410162,32.870341 62.6410162,40 " +
  "C62.6410162,47.129659 65.1281093,53.6784263 69.2820323,58.8260386 L69.2820323,60 " +
  "L34.6410162,80 L1.687539e-14,60 L1.62237105e-14,58.8260386 C4.15392303,53.6784263 " +
  "6.64101615,47.129659 6.64101615,40 C6.64101615,32.870341 4.15392303,26.3215737 " +
  "2.88213897e-13,21.1739614 Z";


export default function Dia38() {
  const [negativo, setNegativo] = useState(false);

  return (
    <div
      className="Dia38"
      role="button"
      tabIndex={0}
      aria-pressed={negativo}
      aria-label="Invertir el logo"
      onClick={() => setNegativo((v) => !v)}
      onKeyDown={(e) => e.key === 'Enter' && setNegativo((v) => !v)}
    >
      <div className={`Dia38-logo blanco ${negativo ? 'grande' : 'normal'}`}>
        <svg viewBox="0 0 70 80" aria-hidden="true">
          <path d={HEXAGONO} />
        </svg>
      </div>

      <div className={`Dia38-logo morado ${negativo ? 'normal' : 'pequeno'}`}>
        <svg viewBox="0 0 70 80" aria-hidden="true">
          <path d={HEXAGONO} />
        </svg>
      </div>
    </div>
  );
}

