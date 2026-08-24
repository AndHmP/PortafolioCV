import './estilos/Dia56.scss';

/* Día 56 — Flower
   "¿Cuándo fue la última vez que arrancaste una margarita?" */

const PETALOS = 12;

export default function Dia56() {
  return (
    <div className="Dia56">
      <span className="Dia56-tallo" />
      <span className="Dia56-hoja" />

      <div className="Dia56-flor">
        {Array.from({ length: PETALOS }, (_, i) => (
          <span key={i} className={`Dia56-petalo p${i}`} />
        ))}
        <span className="Dia56-corazon" />
      </div>
    </div>
  );
}
