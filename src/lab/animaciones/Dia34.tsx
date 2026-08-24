import './estilos/Dia34.scss';

/* Día 34 — Hello
   "Otra animación de texto, pero esta vez sobre SVG." */

export default function Dia34() {
  return (
    <div className="Dia34">
      <svg viewBox="0 0 300 120" className="Dia34-svg" role="img" aria-label="Hello">
        <text x="150" y="78" textAnchor="middle" className="Dia34-trazo">
          Hello
        </text>
        <text x="150" y="78" textAnchor="middle" className="Dia34-relleno">
          Hello
        </text>
      </svg>
      <span className="Dia34-subrayado" />
    </div>
  );
}
