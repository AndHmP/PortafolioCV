import { useState } from 'react';

import './estilos/Dia80.scss';

/* Día 80 — Flexbox Accordeon
   "Lo hice con Flexbox, pero seguro se te ocurren muchas variantes." */

const PANELES = [
  { nombre: 'Frontend', color: 'linear-gradient(180deg, #ff9a8b, #ff6a88)' },
  { nombre: 'Backend', color: 'linear-gradient(180deg, #43cea2, #185a9d)' },
  { nombre: 'Móvil', color: 'linear-gradient(180deg, #f6d365, #fda085)' },
  { nombre: 'DevOps', color: 'linear-gradient(180deg, #667eea, #764ba2)' },
];

export default function Dia80() {
  const [abierto, setAbierto] = useState(1);

  return (
    <div className="Dia80">
      {/* Todo el acordeón es `flex-grow`: el panel activo pide más espacio y
          los demás ceden. No hay anchos calculados en ningún sitio. */}
      {PANELES.map((p, i) => (
        <button
          key={p.nombre}
          type="button"
          className={`Dia80-panel ${abierto === i ? 'abierto' : ''}`}
          style={{ backgroundImage: p.color }}
          onClick={() => setAbierto(i)}
          aria-expanded={abierto === i}
        >
          <span className="Dia80-titulo">{p.nombre}</span>
        </button>
      ))}
    </div>
  );
}
