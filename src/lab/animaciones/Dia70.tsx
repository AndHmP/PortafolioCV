import { useState } from 'react';

import './estilos/Dia70.scss';

/* Día 70 — Calendar Days
   "Una prueba de profundidad en las acciones del usuario." */

const DIAS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const NUMEROS = Array.from({ length: 28 }, (_, i) => i + 1);

export default function Dia70() {
  const [elegido, setElegido] = useState(11);

  return (
    <div className="Dia70">
      <p className="Dia70-mes">Septiembre</p>

      <div className="Dia70-cabecera">
        {DIAS.map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
      </div>

      <div className="Dia70-rejilla">
        {NUMEROS.map((n) => (
          <button
            key={n}
            type="button"
            className={`Dia70-dia ${elegido === n ? 'elegido' : ''}`}
            onClick={() => setElegido(n)}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
