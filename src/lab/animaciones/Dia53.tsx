import { useState } from 'react';

import './estilos/Dia53.scss';

/* Día 53 — Range Slider
   "Los inputs HTML son aburridos, pero se animan fácil con algo de CSS." */

export default function Dia53() {
  const [valor, setValor] = useState(62);

  return (
    <div className="Dia53">
      <p className="Dia53-valor">
        {valor}
        <span>%</span>
      </p>

      <label className="Dia53-control">
        <span className="Dia53-pista">
          <span className="Dia53-relleno" style={{ width: `${valor}%` }} />
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          aria-label="Nivel"
        />
      </label>

      <div className="Dia53-marcas">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
}
