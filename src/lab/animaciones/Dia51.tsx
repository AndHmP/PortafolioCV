import { useState } from 'react';

import './estilos/Dia51.scss';

/* Día 51 — CSS Counter
   "Un contador de cuatro cifras sin una sola línea de JavaScript."

   No cuenta nada: cada columna es una tira con los diez dígitos apilados que
   sube de 40 en 40 px con `steps(1)`. Lo que hace de reloj son las duraciones,
   en potencias de diez: 10 s la de las unidades, 100 la de las decenas, 1000
   las centenas y 10000 los millares. Al cabo de ese rato la tira ha dado la
   vuelta entera y el conjunto lleva la cuenta solo.

   El botón de pausa no para el tiempo: congela las animaciones. */

const DIGITOS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const COLUMNAS = ['millares', 'centenas', 'decenas', 'unidades'] as const;

export default function Dia51() {
  const [pausado, setPausado] = useState(false);

  return (
    <div className={`Dia51 ${pausado ? 'pausado' : ''}`}>
      <div className="Dia51-contador">
        {COLUMNAS.map((columna) => (
          <div key={columna} className={`Dia51-columna ${columna}`}>
            {DIGITOS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        ))}
      </div>

      <div
        className="Dia51-icono"
        role="button"
        tabIndex={0}
        aria-pressed={pausado}
        aria-label={pausado ? 'Reanudar' : 'Pausar'}
        onClick={() => setPausado((v) => !v)}
        onKeyDown={(e) => e.key === 'Enter' && setPausado((v) => !v)}
      >
        <div className="Dia51-pausa" />
        <div className="Dia51-play" />
      </div>
    </div>
  );
}

