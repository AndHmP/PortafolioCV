import { useState } from 'react';

import './estilos/Dia32.scss';

/* Día 32 — Counter
   "Las transiciones son CSS puro; el conteo lo lleva algo de JS." */

export default function Dia32() {
  const [valor, setValor] = useState(0);
  const [sentido, setSentido] = useState<'sube' | 'baja'>('sube');

  const cambiar = (delta: number) => {
    setSentido(delta > 0 ? 'sube' : 'baja');
    setValor((n) => n + delta);
  };

  return (
    <div className="Dia32">
      <p className="Dia32-etiqueta">Contador</p>

      <div className="Dia32-marcador">
        {/* La `key` fuerza a React a montar un nodo nuevo en cada cambio,
            que es lo que dispara la animación de entrada. */}
        <span key={valor} className={`Dia32-numero ${sentido}`}>
          {valor}
        </span>
      </div>

      <div className="Dia32-controles">
        <button type="button" onClick={() => cambiar(-1)} aria-label="Restar uno">
          −
        </button>
        <button type="button" onClick={() => cambiar(1)} aria-label="Sumar uno">
          +
        </button>
      </div>
    </div>
  );
}
