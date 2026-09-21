import { useState } from 'react';

import './estilos/Dia32.scss';

/* Día 32 — Counter
   "Las transiciones son CSS puro; el conteo lo lleva algo de JS."

   Una píldora blanca con − y + a los lados. Al pulsar, el número que se va y el
   que llega se cruzan con un zoom: al sumar el viejo crece y se desvanece
   mientras el nuevo entra desde pequeño; al restar, el mismo par al revés.

   El sentido decide qué par de clases se reparte; el `paso` sirve de `key` para
   que React monte nodos nuevos y la animación vuelva a arrancar. */

export default function Dia32() {
  const [valor, setValor] = useState(0);
  const [previo, setPrevio] = useState<number | null>(null);
  const [sentido, setSentido] = useState<'Up' | 'Down'>('Up');
  const [paso, setPaso] = useState(0);

  const cambiar = (delta: number) => {
    setSentido(delta > 0 ? 'Up' : 'Down');
    setPrevio(valor);
    setValor(valor + delta);
    setPaso((n) => n + 1);
  };

  return (
    <div className="Dia32">
      <div className="Dia32-contador">
        <div
          className="Dia32-menos"
          role="button"
          tabIndex={0}
          aria-label="Restar uno"
          onClick={() => cambiar(-1)}
          onKeyDown={(e) => e.key === 'Enter' && cambiar(-1)}
        >
          <div className="Dia32-linea" />
        </div>

        <div className="Dia32-numero">
          {previo !== null && (
            <span key={`sale-${paso}`} className={`fadeOut${sentido}`}>
              {previo}
            </span>
          )}
          <span key={`entra-${paso}`} className={`fadeIn${sentido}`}>
            {valor}
          </span>
        </div>

        <div
          className="Dia32-mas"
          role="button"
          tabIndex={0}
          aria-label="Sumar uno"
          onClick={() => cambiar(1)}
          onKeyDown={(e) => e.key === 'Enter' && cambiar(1)}
        >
          <div className="Dia32-linea-h" />
          <div className="Dia32-linea-v" />
        </div>
      </div>
    </div>
  );
}

