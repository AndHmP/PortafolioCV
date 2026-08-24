import './estilos/Dia31.scss';

/* Día 31 — Pendulum Wave
   "Si aún no te fascinaban las matemáticas, ahora deberían." */

const PENDULOS = Array.from({ length: 12 }, (_, i) => i);

export default function Dia31() {
  return (
    <div className="Dia31">
      <span className="Dia31-barra" />
      {PENDULOS.map((i) => (
        <span key={i} className={`Dia31-pendulo p${i}`}>
          <span className="Dia31-hilo" />
          <span className="Dia31-bola" />
        </span>
      ))}
    </div>
  );
}
