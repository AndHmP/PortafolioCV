import './estilos/Dia33.scss';

/* Día 33 — Sunny Day
   "¿Qué más podría verse en este día soleado? ¿Pájaros, aviones, superman?" */

export default function Dia33() {
  return (
    <div className="Dia33">
      <span className="Dia33-sol">
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className={`Dia33-rayo r${i}`} />
        ))}
      </span>

      <span className="Dia33-nube n1" />
      <span className="Dia33-nube n2" />
      <span className="Dia33-nube n3" />

      <span className="Dia33-pajaro p1" />
      <span className="Dia33-pajaro p2" />

      <span className="Dia33-colina" />
    </div>
  );
}
