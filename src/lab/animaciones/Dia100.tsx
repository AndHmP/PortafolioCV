import './estilos/Dia100.scss';

/* Día 100 — Neon Light
   "Este es el final del reto, o el día antes de volver a empezar por el uno." */

const LETRAS = [...'100 DÍAS'];

export default function Dia100() {
  return (
    <div className="Dia100">
      <p className="Dia100-rotulo">
        {LETRAS.map((letra, i) => (
          <span
            key={i}
            className={letra === ' ' ? 'espacio' : ''}
            /* Los parpadeos irregulares son lo que hace creíble un neón:
               si todas las letras titilan igual, parece un LED. */
            style={{ animationDelay: `${(i % 4) * 1.3 + i * 0.17}s` }}
          >
            {letra}
          </span>
        ))}
      </p>

      <p className="Dia100-pie">css challenge · completo</p>
      <span className="Dia100-reflejo" />
    </div>
  );
}
