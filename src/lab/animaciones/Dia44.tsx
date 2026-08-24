import './estilos/Dia44.scss';

/* Día 44 — Twisted Pyramid
   "Impresionante lo rápido que unos cuadrados se vuelven una espiral." */

const CAPAS = 22;

export default function Dia44() {
  return (
    <div className="Dia44">
      <div className="Dia44-torre">
        {Array.from({ length: CAPAS }, (_, i) => (
          <span key={i} className={`Dia44-capa c${i}`} />
        ))}
      </div>
    </div>
  );
}
