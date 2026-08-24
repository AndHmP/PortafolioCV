import { useState } from 'react';

import './estilos/Dia68.scss';

/* Día 68 — Recording
   "Haz clic para ver una grabación de audio fingida." */

const BARRAS = 26;

export default function Dia68() {
  const [grabando, setGrabando] = useState(false);

  return (
    <div className={`Dia68 ${grabando ? 'grabando' : ''}`}>
      <div className="Dia68-onda">
        {Array.from({ length: BARRAS }, (_, i) => (
          <span
            key={i}
            className="Dia68-barra"
            /* Alturas y ritmos distintos por barra: sin eso la onda se ve
               como un patrón repetido y delata que no hay audio real. */
            style={{
              animationDelay: `${(i % 7) * 0.11}s`,
              animationDuration: `${0.6 + (i % 5) * 0.12}s`,
            }}
          />
        ))}
      </div>

      <button
        type="button"
        className="Dia68-boton"
        onClick={() => setGrabando((v) => !v)}
        aria-label={grabando ? 'Detener grabación' : 'Iniciar grabación'}
      >
        <span className="Dia68-icono" />
      </button>

      <p className="Dia68-estado">{grabando ? 'Grabando…' : 'Toca para grabar'}</p>
    </div>
  );
}
