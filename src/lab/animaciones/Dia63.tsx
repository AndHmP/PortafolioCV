import './estilos/Dia63.scss';

/* Día 63 — Hypnotic Ring
   "Cincuenta círculos punteados cayendo hacia el mismo sitio."

   Todos son el mismo círculo de 200 px con borde de puntos. La animación dura
   10 s y cada uno va 0,2 s por delante del anterior —con retraso negativo, así
   que al cargar el túnel ya está formado— creciendo de escala 0 a 3,5 mientras
   se desplaza desde arriba a la izquierda hasta el centro.

   Los puntos del borde se separan al crecer el círculo: eso es lo que hace el
   moaré. */

const CIRCULOS = Array.from({ length: 50 }, (_, i) => i + 1);

export default function Dia63() {
  return (
    <div className="Dia63">
      {CIRCULOS.map((n) => (
        <div key={n} className={`Dia63-circulo c${n}`} />
      ))}
    </div>
  );
}

