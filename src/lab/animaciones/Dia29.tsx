import './estilos/Dia29.scss';

/* Día 29 — Search Field
   "No encontrarás nada si no empiezas a buscar." */

export default function Dia29() {
  return (
    <div className="Dia29">
      {/* :focus-within hace todo el trabajo: no hace falta estado en React. */}
      <label className="Dia29-campo">
        <span className="Dia29-lupa">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m15.5 15.5 4.5 4.5" />
          </svg>
        </span>
        <input type="search" placeholder="Buscar…" aria-label="Buscar" />
        <span className="Dia29-linea" />
      </label>
    </div>
  );
}
