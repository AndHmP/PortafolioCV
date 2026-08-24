import './estilos/Dia87.scss';

/* Día 87 — Ruby
   "Brilla como un diamante… digo, un rubí. Mira bien y no olvides el pulido." */

const FACETAS = 6;

export default function Dia87() {
  return (
    <div className="Dia87">
      <div className="Dia87-gema">
        <span className="Dia87-corona" />
        {Array.from({ length: FACETAS }, (_, i) => (
          <span key={i} className={`Dia87-faceta f${i}`} />
        ))}
        <span className="Dia87-pulido" />
      </div>
      <span className="Dia87-resplandor" />
    </div>
  );
}
