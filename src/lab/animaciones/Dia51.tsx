import { useState } from 'react';

import './estilos/Dia51.scss';

/* Día 51 — CSS Counter
   "¿Creías que con CSS no se puede contar hasta mil y además pausarlo?" */

export default function Dia51() {
  const [enPausa, setEnPausa] = useState(false);

  return (
    <div className={`Dia51 ${enPausa ? 'pausado' : ''}`}>
      {/* Cada rueda avanza a un décimo de la velocidad de la anterior:
          centenas, decenas y unidades, como un cuentakilómetros. */}
      <div className="Dia51-marcador">
        <span className="Dia51-rueda centenas">
          <span className="Dia51-cinta">0123456789</span>
        </span>
        <span className="Dia51-rueda decenas">
          <span className="Dia51-cinta">0123456789</span>
        </span>
        <span className="Dia51-rueda unidades">
          <span className="Dia51-cinta">0123456789</span>
        </span>
      </div>

      <button type="button" onClick={() => setEnPausa((v) => !v)}>
        {enPausa ? 'Continuar' : 'Pausar'}
      </button>
    </div>
  );
}
