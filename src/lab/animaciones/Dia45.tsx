import './estilos/Dia45.scss';

/* Día 45 — Button
   "Si los efectos hover normales ya no te bastan, prueba esto." */

export default function Dia45() {
  return (
    <div className="Dia45">
      <button type="button" className="Dia45-boton">
        <span className="Dia45-fondo" />
        <span className="Dia45-texto">Enviar</span>
        <span className="Dia45-flecha">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12h15m-6-7 7 7-7 7" />
          </svg>
        </span>
      </button>

      <p className="Dia45-pista">pasa el cursor</p>
    </div>
  );
}
