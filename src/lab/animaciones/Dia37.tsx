import './estilos/Dia37.scss';

/* Día 37 — Carousel
   "Imágenes, citas, precios o logos: un carrusel sirve para muchas cosas." */

const CITAS = [
  { texto: 'El código se lee muchas más veces de las que se escribe.', autor: 'Guido van Rossum' },
  { texto: 'Que funcione primero, que sea correcto después, que sea rápido al final.', autor: 'Kent Beck' },
  { texto: 'La simplicidad es un prerrequisito de la fiabilidad.', autor: 'Edsger Dijkstra' },
];

export default function Dia37() {
  return (
    <div className="Dia37">
      {/* El carrusel avanza solo con animación: sin estado ni temporizadores. */}
      <div className="Dia37-pista">
        {CITAS.map((cita) => (
          <figure key={cita.autor} className="Dia37-cita">
            <blockquote>{cita.texto}</blockquote>
            <figcaption>{cita.autor}</figcaption>
          </figure>
        ))}
      </div>

      <div className="Dia37-puntos">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
