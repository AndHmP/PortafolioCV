import { useState } from 'react';

import './estilos/Dia76.scss';

/* Día 76 — Reveal Key
   "¿Puedes resolver el acertijo y descubrir el secreto? Sigue la instrucción." */

const CLAVE = ['C', 'S', 'S', '4', 'E', 'V', 'E', 'R'];

export default function Dia76() {
  const [descubiertas, setDescubiertas] = useState<number[]>([]);

  const listo = descubiertas.length === CLAVE.length;

  return (
    <div className={`Dia76 ${listo ? 'resuelto' : ''}`}>
      <p className="Dia76-instruccion">
        {listo ? 'clave descubierta' : 'descubre las 8 casillas'}
      </p>

      <div className="Dia76-tablero">
        {CLAVE.map((letra, i) => (
          <button
            key={i}
            type="button"
            className={`Dia76-ficha ${descubiertas.includes(i) ? 'girada' : ''}`}
            onClick={() =>
              setDescubiertas((a) => (a.includes(i) ? a : [...a, i]))
            }
            aria-label={`Casilla ${i + 1}`}
          >
            {/* Dos caras sobre el mismo eje: la trasera está pregirada 180°,
                así al voltear la ficha una sustituye a la otra. */}
            <span className="Dia76-cara frente">?</span>
            <span className="Dia76-cara dorso">{letra}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="Dia76-reiniciar"
        onClick={() => setDescubiertas([])}
      >
        Reiniciar
      </button>
    </div>
  );
}
