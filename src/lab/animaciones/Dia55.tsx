import { useState } from 'react';

import './estilos/Dia55.scss';

/* Día 55 — Thermostat
   "¡Aquí hace calor! La respuesta visual inmediata ayuda a entender la acción." */

const MIN = 15;
const MAX = 30;

export default function Dia55() {
  const [grados, setGrados] = useState(22);

  /* 0 = frío, 1 = calor. Alimenta el color y el arco del marcador. */
  const intensidad = (grados - MIN) / (MAX - MIN);

  return (
    <div
      className="Dia55"
      style={
        {
          '--calor': intensidad,
          '--tono': `${210 - intensidad * 200}`,
        } as React.CSSProperties
      }
    >
      <div className="Dia55-dial">
        <span className="Dia55-arco" />
        <p className="Dia55-lectura">
          {grados}
          <span>°C</span>
        </p>
      </div>

      <div className="Dia55-controles">
        <button type="button" onClick={() => setGrados((g) => Math.max(MIN, g - 1))}>
          −
        </button>
        <button type="button" onClick={() => setGrados((g) => Math.min(MAX, g + 1))}>
          +
        </button>
      </div>
    </div>
  );
}
