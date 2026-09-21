import { useState } from 'react';

import './estilos/Dia53.scss';

/* Día 53 — Range Slider
   "Un control deslizante decente cuesta más de lo que parece."

   El `input[type=range]` del navegador con `appearance: none` y los dos
   pseudoelementos de WebKit repintados: la barra y el tirador. Lo demás es la
   tarjeta blanca que lo enmarca.

   El agarre del tirador —tres barritas grises— es un SVG en línea; en el pen
   es un PNG de 20×16. */

const AGARRE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 16'%3E" +
  "%3Cg fill='%23dcdcdc'%3E%3Crect x='0' y='2' width='4' height='12'/%3E" +
  "%3Crect x='8' y='2' width='4' height='12'/%3E" +
  "%3Crect x='16' y='2' width='4' height='12'/%3E%3C/g%3E%3C/svg%3E";

export default function Dia53() {
  const [valor, setValor] = useState(50);

  return (
    <div className="Dia53" style={{ ['--Dia53-agarre' as string]: `url("${AGARRE}")` }}>
      <div className="Dia53-centro">
        <input
          type="range"
          min={0}
          max={100}
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
          aria-label="Valor"
        />
      </div>
    </div>
  );
}

