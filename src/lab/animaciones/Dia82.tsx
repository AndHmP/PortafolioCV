import { useState } from 'react';

import './estilos/Dia82.scss';

/* Día 82 — Action Button
   "Una buena interfaz informa del resultado y del estado de una acción." */

type Estado = 'listo' | 'cargando' | 'hecho';

export default function Dia82() {
  const [estado, setEstado] = useState<Estado>('listo');

  const ejecutar = () => {
    if (estado !== 'listo') {
      setEstado('listo');
      return;
    }
    setEstado('cargando');
    window.setTimeout(() => setEstado('hecho'), 1600);
  };

  const etiqueta = { listo: 'Guardar', cargando: 'Guardando', hecho: 'Guardado' }[estado];

  return (
    <div className="Dia82">
      <button type="button" className={`Dia82-boton ${estado}`} onClick={ejecutar}>
        <span className="Dia82-texto">{etiqueta}</span>
        <span className="Dia82-aro" />
        <span className="Dia82-check">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12.5 9.5 18 20 6.5" />
          </svg>
        </span>
      </button>

      <p className="Dia82-pista">
        {estado === 'hecho' ? 'toca para reiniciar' : 'toca el botón'}
      </p>
    </div>
  );
}
