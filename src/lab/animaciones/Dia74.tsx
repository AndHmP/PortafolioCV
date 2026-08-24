import { useState } from 'react';

import './estilos/Dia74.scss';

/* Día 74 — Pagination
   "¿Alguien usa aún paginación o todo lleva scroll infinito?" */

const TOTAL = 6;

export default function Dia74() {
  const [pagina, setPagina] = useState(1);

  return (
    <div className="Dia74">
      <nav className="Dia74-barra" aria-label="Paginación">
        <button
          type="button"
          className="Dia74-flecha"
          disabled={pagina === 1}
          onClick={() => setPagina((p) => Math.max(1, p - 1))}
          aria-label="Página anterior"
        >
          ‹
        </button>

        <div className="Dia74-numeros">
          {/* El resaltado es un único bloque que se desliza al número activo,
              en vez de una clase por botón. */}
          <span
            className="Dia74-resaltado"
            style={{ transform: `translateX(${(pagina - 1) * 100}%)` }}
          />
          {Array.from({ length: TOTAL }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              className={pagina === n ? 'activo' : ''}
              onClick={() => setPagina(n)}
              aria-current={pagina === n ? 'page' : undefined}
            >
              {n}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="Dia74-flecha"
          disabled={pagina === TOTAL}
          onClick={() => setPagina((p) => Math.min(TOTAL, p + 1))}
          aria-label="Página siguiente"
        >
          ›
        </button>
      </nav>

      <p className="Dia74-estado">
        Página {pagina} de {TOTAL}
      </p>
    </div>
  );
}
