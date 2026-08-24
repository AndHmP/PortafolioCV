import { useState } from 'react';

import './estilos/Dia66.scss';

/* Día 66 — Sparkle Checkbox
   "Parece corriente, pero haz clic para llevarte una sorpresa." */

const CHISPAS = 12;

export default function Dia66() {
  const [marcado, setMarcado] = useState(false);

  return (
    <div className="Dia66">
      <button
        type="button"
        role="checkbox"
        aria-checked={marcado}
        className={`Dia66-caja ${marcado ? 'marcado' : ''}`}
        onClick={() => setMarcado((v) => !v)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12.5 9.5 18 20 6.5" />
        </svg>

        {/* Las chispas solo existen mientras está marcado: al desmarcar se
            desmontan y la animación queda lista para volver a dispararse. */}
        {marcado &&
          Array.from({ length: CHISPAS }, (_, i) => (
            <span key={i} className={`Dia66-chispa c${i}`} />
          ))}
      </button>

      <p className="Dia66-texto">{marcado ? '¡Listo!' : 'Marcar tarea'}</p>
    </div>
  );
}
