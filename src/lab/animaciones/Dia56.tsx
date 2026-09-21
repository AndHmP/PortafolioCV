import './estilos/Dia56.scss';

/* Día 56 — Flower
   "Una margarita que se abre pétalo a pétalo."

   Los dieciséis pétalos son el mismo cuadrado de 50 px con dos esquinas
   redondeadas, cada uno girado 22,5° más que el anterior. En reposo están
   apilados en el centro; al abrirse se apartan en diagonal y doblan de tamaño,
   uno detrás de otro, y la flor entera da una vuelta completa en los 7 s del
   ciclo.

   El desfase entre pétalos es 45/16 % del ciclo: así los dieciséis terminan de
   salir justo antes de que el corazón amarillo acabe de crecer. */

const PETALOS = Array.from({ length: 16 }, (_, i) => i);

export default function Dia56() {
  return (
    <div className="Dia56">
      <div className="Dia56-flor">
        {PETALOS.map((i) => (
          <div key={i} className={`Dia56-petalo p${i}`} />
        ))}
        <div className="Dia56-corazon" />
      </div>
    </div>
  );
}

