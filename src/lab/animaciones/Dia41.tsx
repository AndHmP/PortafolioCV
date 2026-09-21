import { useState } from 'react';

import './estilos/Dia41.scss';

/* Día 41 — Error Modal
   "Un aviso de error que, con suerte, el usuario no verá muchas veces."

   La ventana entra con un rebote —0 → 1,1 → 0,95 → 1— y al descartarla hace lo
   contrario: coge impulso hasta 1,1 y se encoge a cero. Pulsando el fondo
   vuelve a aparecer.

   El triángulo de aviso es un SVG propio: en el pen es un PNG de 44×38. Las
   medidas están tomadas de esa imagen —triángulo de esquinas redondeadas entre
   (3, 2) y (41, 35,5), barra de 2,5×8 y punto de radio 1,25— para que el
   dibujo sea el mismo sin arrastrar un archivo más. */

export default function Dia41() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="Dia41" onClick={() => setVisible(true)}>
      <div
        className={`Dia41-modal ${visible ? '' : 'oculto'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="Dia41-aviso" viewBox="0 0 44 38" aria-hidden="true">
          {/* El trazo con `linejoin` redondo es lo que redondea las esquinas:
              engorda el polígono 2 unidades por lado y le mata las puntas. */}
          <polygon
            points="22,4 39,33.5 5,33.5"
            fill="#f65656"
            stroke="#f65656"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect x="20.75" y="16" width="2.5" height="8" rx="1.25" fill="#fff" />
          <circle cx="22" cy="27.5" r="1.25" fill="#fff" />
        </svg>

        <span className="Dia41-titulo">Oh snap!</span>
        <p>An error has occured while creating an error report.</p>

        <div className="Dia41-boton" role="button" tabIndex={0} onClick={() => setVisible(false)}>
          Dismiss
        </div>
      </div>
    </div>
  );
}


