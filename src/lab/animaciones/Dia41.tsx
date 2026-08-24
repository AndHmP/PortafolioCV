import './estilos/Dia41.scss';

/* Día 41 — Error Modal
   "Tranquilo, no es un error real: es parte del reto." */

export default function Dia41() {
  return (
    <div className="Dia41">
      <div className="Dia41-modal">
        <span className="Dia41-icono">
          <svg viewBox="0 0 52 52" aria-hidden="true">
            <circle cx="26" cy="26" r="24" className="Dia41-aro" />
            <path d="M17 17 35 35" className="Dia41-aspa" />
            <path d="M35 17 17 35" className="Dia41-aspa dos" />
          </svg>
        </span>

        <h3>Algo salió mal</h3>
        <p>No se pudo guardar el cambio. Revisa tu conexión e inténtalo otra vez.</p>

        <div className="Dia41-acciones">
          <button type="button" className="secundario">
            Cancelar
          </button>
          <button type="button">Reintentar</button>
        </div>
      </div>
    </div>
  );
}
