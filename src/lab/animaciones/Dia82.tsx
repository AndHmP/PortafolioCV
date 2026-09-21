import { useState } from 'react';

import './estilos/Dia82.scss';

/* Día 82 — Action Button
   "Pulsa SEND y el botón se da la vuelta para decir DONE."

   Las dos caras comparten caja con `backface-visibility: hidden`, y la de atrás
   ya viene girada 180°: al voltear el botón entero, queda derecha. La sombra
   también cambia de lado —de 8 px por debajo a 8 por encima— para que parezca
   que el botón se ha levantado. */

export default function Dia82() {
  const [enviado, setEnviado] = useState(false);

  return (
    <div className="Dia82">
      <div
        className={`Dia82-boton ${enviado ? 'enviado' : ''}`}
        role="button"
        tabIndex={0}
        aria-pressed={enviado}
        onClick={() => setEnviado((v) => !v)}
        onKeyDown={(e) => e.key === 'Enter' && setEnviado((v) => !v)}
      >
        <span className="Dia82-cara">send</span>
        <span className="Dia82-reverso">done</span>
      </div>
    </div>
  );
}

