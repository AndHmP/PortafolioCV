import { useState } from 'react';

import './estilos/Dia60.scss';

/* Día 60 — Blurry Overlay
   "La palabra cambia de nitidez según por dónde la cortes."

   Hay dos veces la misma palabra, una encima de otra: la de detrás es blanca y
   sólida; la de delante es transparente y solo deja su halo. Entre las dos, un
   panel naranja cuya altura sigue al ratón. Donde el panel tapa se ve el halo
   borroso; donde no llega, la palabra nítida.

   El pen lo resuelve con 201 tiras invisibles y otras tantas reglas `:hover ~`.
   Aquí basta con leer la posición del ratón, que es lo mismo con dos órdenes. */

export default function Dia60() {
  const [alto, setAlto] = useState(50);
  const [siguiendo, setSiguiendo] = useState(false);

  return (
    <div
      /* Mientras sigue al ratón el corte va sin transición, para que no se
         quede atrás; al soltar, vuelve al centro en 0,4 s. Igual que el pen,
         que pone `transition: initial` en las reglas de hover. */
      className={`Dia60 ${siguiendo ? 'siguiendo' : ''}`}
      onMouseMove={(e) => {
        const caja = e.currentTarget.getBoundingClientRect();
        setSiguiendo(true);
        setAlto(((e.clientY - caja.top) / caja.height) * 100);
      }}
      onMouseLeave={() => {
        setSiguiendo(false);
        setAlto(50);
      }}
    >
      <div className="Dia60-panel" style={{ height: `${alto}%` }} />
      <div className="Dia60-texto detras">Hover</div>
      <div className="Dia60-texto delante">Hover</div>
    </div>
  );
}

