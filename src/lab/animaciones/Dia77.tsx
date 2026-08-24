import './estilos/Dia77.scss';

/* Día 77 — Motion Blur
   "Puede que algún día haya soporte nativo; hasta entonces, trucos." */

const ESTELA = 8;

export default function Dia77() {
  return (
    <div className="Dia77">
      <div className="Dia77-pista">
        {Array.from({ length: ESTELA }, (_, i) => (
          <span key={i} className={`Dia77-copia c${i}`} />
        ))}
        <span className="Dia77-cuerpo" />
      </div>
      <p className="Dia77-nota">estela = copias desfasadas + blur</p>
    </div>
  );
}
