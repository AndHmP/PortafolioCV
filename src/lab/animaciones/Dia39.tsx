import { useState } from 'react';

import './estilos/Dia39.scss';

/* Día 39 — Menu Toggle
   "Lo que parece otro icono de menú resulta ser una navegación completa." */

const SECCIONES = ['Inicio', 'Proyectos', 'Perfil', 'Contacto'];

export default function Dia39() {
  const [abierto, setAbierto] = useState(false);

  return (
    <div className={`Dia39 ${abierto ? 'abierto' : ''}`}>
      <button
        type="button"
        className="Dia39-boton"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
      >
        {/* Las tres barras se convierten en aspa: la del medio se desvanece
            y las otras dos rotan hasta cruzarse. */}
        <span className="Dia39-barra" />
        <span className="Dia39-barra" />
        <span className="Dia39-barra" />
      </button>

      <nav className="Dia39-nav">
        <ul>
          {SECCIONES.map((s, i) => (
            <li key={s} style={{ transitionDelay: `${abierto ? 120 + i * 60 : 0}ms` }}>
              {s}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
