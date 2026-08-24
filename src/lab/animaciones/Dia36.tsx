import { useState } from 'react';

import './estilos/Dia36.scss';

/* Día 36 — Tabs
   "La solución para diseños con poco espacio o muchos niveles de navegación." */

const PESTANAS = [
  { nombre: 'Resumen', texto: 'Tres pestañas comparten el mismo espacio sin apilar contenido.' },
  { nombre: 'Detalle', texto: 'El indicador se desplaza con una transición, no salta de golpe.' },
  { nombre: 'Ajustes', texto: 'El contenido entra desde abajo cada vez que cambia la pestaña.' },
];

export default function Dia36() {
  const [activa, setActiva] = useState(0);

  return (
    <div className="Dia36">
      <div className="Dia36-barra" role="tablist">
        {PESTANAS.map((p, i) => (
          <button
            key={p.nombre}
            type="button"
            role="tab"
            aria-selected={activa === i}
            className={activa === i ? 'activa' : ''}
            onClick={() => setActiva(i)}
          >
            {p.nombre}
          </button>
        ))}

        {/* Un solo indicador que se traslada, en vez de un borde por pestaña. */}
        <span
          className="Dia36-indicador"
          style={{ transform: `translateX(${activa * 100}%)` }}
        />
      </div>

      <div className="Dia36-panel" role="tabpanel">
        <p key={activa}>{PESTANAS[activa].texto}</p>
      </div>
    </div>
  );
}
