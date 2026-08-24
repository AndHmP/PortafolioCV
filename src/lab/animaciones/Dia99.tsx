import { useState } from 'react';

import './estilos/Dia99.scss';

/* Día 99 — Circle-Square
   "Haz clic para un momento de alegría." */

export default function Dia99() {
  const [circulo, setCirculo] = useState(true);

  return (
    <div className="Dia99">
      <button
        type="button"
        className={`Dia99-figura ${circulo ? 'circulo' : 'cuadrado'}`}
        onClick={() => setCirculo((v) => !v)}
        aria-label="Cambiar figura"
      >
        <span className="Dia99-interior" />
      </button>

      <p className="Dia99-etiqueta">{circulo ? 'círculo' : 'cuadrado'}</p>
    </div>
  );
}
