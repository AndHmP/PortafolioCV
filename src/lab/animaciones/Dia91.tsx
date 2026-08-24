import './estilos/Dia91.scss';

/* Día 91 — Cube Loader
   "Esto es lo que sale si dedicas demasiado tiempo a una animación de carga." */

const CUBOS = 9;

export default function Dia91() {
  return (
    <div className="Dia91">
      <div className="Dia91-escena">
        {Array.from({ length: CUBOS }, (_, i) => (
          <span key={i} className={`Dia91-cubo c${i}`} />
        ))}
      </div>
    </div>
  );
}
