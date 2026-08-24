import './estilos/Dia75.scss';

/* Día 75 — Spinning Discs
   "Una esfera real no es posible solo con CSS, pero la ilusión sí." */

const DISCOS = 20;

export default function Dia75() {
  return (
    <div className="Dia75">
      <div className="Dia75-escena">
        {Array.from({ length: DISCOS }, (_, i) => (
          <span key={i} className={`Dia75-disco d${i}`} />
        ))}
      </div>
    </div>
  );
}
