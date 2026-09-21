import { useId, useState } from 'react';

import './estilos/Dia27.scss';

/* Día 27 — Checklist
   "Lo bueno de ir tachando la lista de tareas: esa sensación de alivio."

   Los rótulos y las tareas son los del reto, en inglés, porque forman parte
   del diseño que hay que reproducir. */

const TAREAS = ['Create a list', 'Complete first task', 'Write some CSS code', 'Amaze the world'];

export default function Dia27() {
  const [hechas, setHechas] = useState<number[]>([]);
  /* La pieza puede aparecer más de una vez en la página: los identificadores
     que enlazan casilla y etiquetas tienen que ser únicos por instancia. */
  const base = useId();

  const alternar = (i: number) =>
    setHechas((actual) => (actual.includes(i) ? actual.filter((n) => n !== i) : [...actual, i]));

  return (
    <div className="Dia27">
      <div className="Dia27-lista">
        <div className="Dia27-cabecera">
          <div className="Dia27-dia">Friday</div>
          <div className="Dia27-fecha">March 4, 2016</div>
        </div>

        <ul>
          {TAREAS.map((tarea, i) => {
            const id = `${base}-${i}`;
            return (
              <li key={tarea} className={hechas.includes(i) ? 'hecha' : undefined}>
                <input
                  id={id}
                  type="checkbox"
                  checked={hechas.includes(i)}
                  onChange={() => alternar(i)}
                />
                {/* Tanto el texto como el círculo marcan la tarea. */}
                <label className="Dia27-texto" htmlFor={id}>
                  {tarea}
                </label>
                <label className="Dia27-circulo" htmlFor={id}>
                  <span className="Dia27-oculto">{tarea}</span>
                </label>
                <svg className="Dia27-tic" viewBox="0 0 15 10" aria-hidden="true">
                  <polyline points="1,5 6,9 14,1" />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
