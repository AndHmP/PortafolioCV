import './estilos/Dia31.scss';

/* Día 31 — Pendulum Wave
   "Si aún no te fascinaban las matemáticas, ahora deberían."

   No hay péndulos dibujados: solo una columna de 20 puntos que van y vienen en
   horizontal. Cada uno completa una oscilación más por minuto que el anterior
   (40 el último, 59 el primero), y esa diferencia es la que teje la onda. */

const PUNTOS = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Dia31() {
  return (
    <div className="Dia31">
      <div className="Dia31-puntos">
        {PUNTOS.map((i) => (
          <span key={i} className={`Dia31-punto p${i}`} />
        ))}
      </div>
    </div>
  );
}
