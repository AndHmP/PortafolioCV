import './estilos/Dia30.scss';

/* Día 30 — Random Line
   "Es una línea. Una línea que se mueve y rodea algo. Qué sea, lo decides tú."

   El camino es el del reto: una curva que se enrosca sobre sí misma justo en
   el centro, donde late el aro. */

const CAMINO =
  'M0,4.68 C0,4.68 42.5,21.06 95.09,21.06 C147.67,21.06 149.9,2 196.01,2 ' +
  'C242.13,2 242.39,58.32 200,58.32 C157.61,58.32 163.18,13.51 212.76,13.51 ' +
  'C262.33,13.51 284.16,38.92 335.14,38.92 C386.12,38.92 400,30.16 400,30.16';

export default function Dia30() {
  return (
    <div className="Dia30">
      <span className="Dia30-aro" />
      <svg className="Dia30-camino" viewBox="0 0 400 65" aria-hidden="true">
        <path d={CAMINO} />
      </svg>
    </div>
  );
}
