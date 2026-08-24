import { useState } from 'react';

import './estilos/Dia40.scss';

/* Día 40 — Gallery
   "Mira más de cerca haciendo clic en las imágenes." */

const PIEZAS = [
  { nombre: 'Coral', color: 'linear-gradient(140deg, #ff9a8b, #ff6a88)' },
  { nombre: 'Menta', color: 'linear-gradient(140deg, #43e97b, #38f9d7)' },
  { nombre: 'Índigo', color: 'linear-gradient(140deg, #667eea, #764ba2)' },
  { nombre: 'Ámbar', color: 'linear-gradient(140deg, #f6d365, #fda085)' },
];

export default function Dia40() {
  const [abierta, setAbierta] = useState<number | null>(null);

  return (
    <div className="Dia40">
      <div className="Dia40-rejilla">
        {PIEZAS.map((p, i) => (
          <button
            key={p.nombre}
            type="button"
            className={`Dia40-celda ${abierta === i ? 'abierta' : ''} ${
              abierta !== null && abierta !== i ? 'oculta' : ''
            }`}
            style={{ background: p.color }}
            onClick={() => setAbierta(abierta === i ? null : i)}
          >
            <span>{p.nombre}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
