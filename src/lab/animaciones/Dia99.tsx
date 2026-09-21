import { useState } from 'react';

import './estilos/Dia99.scss';

/* Día 99 — Ripple
   "Pulsa y el color inunda el lienzo."

   El fondo verde es un círculo de 600 px —más grande que el lienzo— que estaba
   en escala 0 en el centro. Al pulsar crece a 1 y lo cubre todo: eso es toda la
   onda.

   A la vez, el aro y las dieciocho rayas del reposo se expanden y se
   desvanecen, y el punto blanco del medio deja de ser redondo, gira 180° y
   crece: pasa de ser el origen de la onda a ser el cuadrado del final. */

const RAYAS = Array.from({ length: 18 }, (_, i) => i + 1);

export default function Dia99() {
  const [activo, setActivo] = useState(false);

  return (
    <div
      className={`Dia99 ${activo ? 'activo' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={activo}
      aria-label="Lanzar la onda"
      onClick={() => setActivo((v) => !v)}
      onKeyDown={(e) => e.key === 'Enter' && setActivo((v) => !v)}
    >
      <div className="Dia99-fondo" />
      <div className="Dia99-aro" />
      <div className="Dia99-rayas">
        {RAYAS.map((n) => (
          <div
            key={n}
            className="Dia99-raya"
            style={{ transform: `rotate(${n * 20}deg) translateY(-81px)` }}
          />
        ))}
      </div>
      <div className="Dia99-punto" />
    </div>
  );
}

