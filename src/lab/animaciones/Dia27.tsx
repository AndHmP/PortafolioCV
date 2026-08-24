import { useState } from 'react';

import './estilos/Dia27.scss';

/* Día 27 — Checklist
   "The relieving feeling when you can check off the tasks." */

const TAREAS = ['Diseñar la interfaz', 'Escribir las pruebas', 'Revisar el PR', 'Desplegar'];

export default function Dia27() {
  const [hechas, setHechas] = useState<number[]>([0]);

  const alternar = (i: number) =>
    setHechas((actual) =>
      actual.includes(i) ? actual.filter((n) => n !== i) : [...actual, i],
    );

  return (
    <div className="Dia27">
      <p className="Dia27-titulo">
        Tareas <span>{hechas.length}/{TAREAS.length}</span>
      </p>

      <ul className="Dia27-lista">
        {TAREAS.map((tarea, i) => (
          <li key={tarea}>
            <button
              type="button"
              className={`Dia27-fila ${hechas.includes(i) ? 'hecha' : ''}`}
              onClick={() => alternar(i)}
            >
              <span className="Dia27-caja">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 12.5 9.5 18 20 6.5" />
                </svg>
              </span>
              <span className="Dia27-texto">{tarea}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
