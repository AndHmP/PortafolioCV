import './estilos/Dia63.scss';

/* Día 63 — Hypnotic Ring
   "Unos puntos animados en círculos y te encuentras en el túnel más largo." */

const AROS = 14;
const PUNTOS = 16;

export default function Dia63() {
  return (
    <div className="Dia63">
      <div className="Dia63-tunel">
        {Array.from({ length: AROS }, (_, a) => (
          <span key={a} className={`Dia63-aro a${a}`}>
            {Array.from({ length: PUNTOS }, (_, p) => (
              <span key={p} className={`Dia63-punto p${p}`} />
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
