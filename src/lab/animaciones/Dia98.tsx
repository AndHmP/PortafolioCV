import { useState } from 'react';

import './estilos/Dia98.scss';

/* Día 98 — Plopp
   "¿Con qué quieres llenar tu caja?" */

const COLORES = ['#ff6b6b', '#ffd166', '#6ee7c8', '#5f6bff', '#a06bff', '#f48fb1'];

interface Bola {
  id: number;
  color: string;
  x: number;
}

export default function Dia98() {
  const [bolas, setBolas] = useState<Bola[]>([]);
  const [siguiente, setSiguiente] = useState(0);

  const soltar = () => {
    setBolas((actual) => [
      /* Se limita a 14 para que la caja no se desborde con el uso. */
      ...actual.slice(-13),
      {
        id: siguiente,
        color: COLORES[siguiente % COLORES.length],
        x: 12 + ((siguiente * 37) % 70),
      },
    ]);
    setSiguiente((n) => n + 1);
  };

  return (
    <div className="Dia98">
      <div className="Dia98-caja">
        {bolas.map((b) => (
          <span
            key={b.id}
            className="Dia98-bola"
            style={{ background: b.color, left: `${b.x}%` }}
          />
        ))}
      </div>

      <div className="Dia98-acciones">
        <button type="button" onClick={soltar}>
          Soltar
        </button>
        <button type="button" className="vaciar" onClick={() => setBolas([])}>
          Vaciar
        </button>
      </div>
    </div>
  );
}
