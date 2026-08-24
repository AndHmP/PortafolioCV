import { useState } from 'react';

import './estilos/Dia93.scss';

/* Día 93 — Padlock
   "¿Sabías que puedes combinar varias box-shadow? Te servirá aquí." */

export default function Dia93() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className={`Dia93 ${abierto ? 'abierto' : ''}`}>
      <button
        type="button"
        className="Dia93-candado"
        onClick={() => setAbierto((v) => !v)}
        aria-pressed={abierto}
        aria-label={abierto ? 'Cerrar candado' : 'Abrir candado'}
      >
        <span className="Dia93-arco" />
        <span className="Dia93-cuerpo">
          <span className="Dia93-ojo" />
        </span>
      </button>

      <p className="Dia93-estado">{abierto ? 'Desbloqueado' : 'Bloqueado'}</p>
    </div>
  );
}
