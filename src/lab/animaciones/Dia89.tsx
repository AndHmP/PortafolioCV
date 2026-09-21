import './estilos/Dia89.scss';

/* Día 89 — Animated Pattern
   "Un patrón denso de flores, hecho con doscientas rayas."

   Hay dos rejillas superpuestas de cien piezas: una de rayas tumbadas y otra de
   rayas de pie. Cada una gira 90° en cuatro tiempos, estirándose y
   desplazándose por el camino, y al cruzarse las dos series aparece la flor.

   Las flores no están dibujadas en ningún sitio: son el hueco que dejan las
   rayas al girar. */

const RAYAS = Array.from({ length: 100 }, (_, i) => i);

export default function Dia89() {
  return (
    <div className="Dia89">
      <div className="Dia89-horizontales">
        {RAYAS.map((i) => (
          <div key={i} className="Dia89-raya" />
        ))}
      </div>
      <div className="Dia89-verticales">
        {RAYAS.map((i) => (
          <div key={i} className="Dia89-raya" />
        ))}
      </div>
    </div>
  );
}

