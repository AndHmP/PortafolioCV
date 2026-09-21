import { useState } from 'react';

import './estilos/Dia68.scss';

/* Día 68 — Recording
   "Pulsa y el micrófono se pone a grabar."

   En reposo, solo el micrófono dentro de un aro. Al pulsar pasan tres cosas a
   la vez: el aro se parte en dos arcos que giran —un `stroke-dasharray` de 296
   sobre un perímetro de 296, con el desfase corriendo hasta −592—, el
   micrófono se infla un poco y desaparece, y en su sitio entran tres puntos
   que rebotan desfasados 0,2 s.

   296 es el perímetro del círculo de radio 47: 2πr redondeado. */

const PUNTOS = [1, 2, 3];

export default function Dia68() {
  const [grabando, setGrabando] = useState(false);

  return (
    <div
      className={`Dia68 ${grabando ? 'grabando' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={grabando}
      aria-label="Grabar"
      onClick={() => setGrabando((v) => !v)}
      onKeyDown={(e) => e.key === 'Enter' && setGrabando((v) => !v)}
    >
      <div className="Dia68-microfono">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle className="Dia68-aro" cx="50" cy="50" r="47" />
        </svg>

        <div className="Dia68-icono">
          <div className="Dia68-cuerpo">
            <div className="Dia68-hueco" />
          </div>
          <div className="Dia68-pie-v" />
          <div className="Dia68-pie-h" />
        </div>

        <div className="Dia68-puntos">
          {PUNTOS.map((n) => (
            <div key={n} className={`Dia68-punto p${n}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

