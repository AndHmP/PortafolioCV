import { useState } from 'react';

import './estilos/Dia39.scss';

/* Día 39 — Menu Toggle
   "Lo que parece otro icono de menú resulta ser una navegación completa."

   Solo hay dos barras, no tres. Al pulsar, cada una amaga en sentido contrario,
   sale disparada arriba y abajo adelgazando a la mitad y, ya en el borde, se
   estira seis veces su ancho hasta convertirse en las reglas que enmarcan la
   navegación. El menú aparece medio segundo después, cuando las barras ya han
   dejado el centro libre.

   El tercer estado, `quieto`, es del original: evita que la animación de cierre
   se dispare sola en el primer render. */

const SECCIONES = ['Home', 'Work', 'Life', 'Spirit'];

export default function Dia39() {
  const [estado, setEstado] = useState<'quieto' | 'abierto' | 'cerrado'>('quieto');
  const abierto = estado === 'abierto';

  return (
    <div className="Dia39">
      <div
        className={`Dia39-icono ${estado === 'quieto' ? 'quieto' : ''} ${abierto ? 'activo' : ''}`}
        role="button"
        tabIndex={abierto ? -1 : 0}
        aria-expanded={abierto}
        aria-label="Abrir menú"
        onClick={() => setEstado('abierto')}
        onKeyDown={(e) => e.key === 'Enter' && setEstado('abierto')}
      >
        <div className="Dia39-linea-arriba" />
        <div className="Dia39-linea-abajo" />
      </div>

      <nav className={`Dia39-menu ${abierto ? 'activo' : ''}`}>
        <ul>
          {SECCIONES.map((s) => (
            <li key={s}>
              <span onClick={() => setEstado('cerrado')}>{s}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

