import { useState } from 'react';

import './estilos/Dia66.scss';

/* Día 66 — Sparkle Checkbox
   "Una casilla que celebra que la marques."

   La casilla es un aro, no un cuadro: al marcarla el borde pasa de 2 a 14 px
   —la mitad del radio— y el hueco se cierra hasta quedar un disco verde.

   Las doce chispas son barritas repartidas cada 30°. En reposo están pegadas al
   centro y con `scaleY(0)`, y sin transición: por eso vuelven de golpe. Al
   marcar salen disparadas a 50 px y se desvanecen ya con transición de 0,5 s,
   que es lo que hace que el gesto solo se vea de ida. */

const CHISPAS = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Dia66() {
  const [marcado, setMarcado] = useState(false);

  return (
    <div className="Dia66">
      <div className={`Dia66-casilla ${marcado ? 'marcada' : ''}`}>
        <input
          type="checkbox"
          checked={marcado}
          onChange={() => setMarcado((v) => !v)}
          aria-label="Marcar"
        />
        <div className="Dia66-aro" onClick={() => setMarcado((v) => !v)} />
        <div className="Dia66-chispas">
          {CHISPAS.map((n) => (
            <div key={n} className={`Dia66-chispa ch${n}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

