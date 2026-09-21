import { useState } from 'react';

import './estilos/Dia74.scss';

/* Día 74 — Pagination
   "Cuatro botones redondos y el que está activo se invierte."

   El relleno blanco del botón activo no es su fondo: es un pseudoelemento
   detrás que pasa de escala 0 a 1. Así el círculo crece desde el centro en vez
   de aparecer de golpe, y el número solo tiene que cambiar de color. */

const PAGINAS = [1, 2, 3, 4];

export default function Dia74() {
  const [activa, setActiva] = useState(1);

  return (
    <div className="Dia74">
      <div className="Dia74-centro">
        {PAGINAS.map((n) => (
          <span
            key={n}
            className={`Dia74-boton ${activa === n ? 'activo' : ''}`}
            role="button"
            tabIndex={0}
            aria-current={activa === n}
            onClick={() => setActiva(n)}
            onKeyDown={(e) => e.key === 'Enter' && setActiva(n)}
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

