import './estilos/Dia50.scss';

/* Día 50 — Easter Egg
   "¿Conoces los 12 principios de la animación? Esto es squash and stretch." */

export default function Dia50() {
  return (
    <div className="Dia50">
      <div className="Dia50-pista">
        <span className="Dia50-huevo">
          <span className="Dia50-mancha m1" />
          <span className="Dia50-mancha m2" />
          <span className="Dia50-mancha m3" />
        </span>
        <span className="Dia50-sombra" />
      </div>
      <p className="Dia50-etiqueta">squash &amp; stretch</p>
    </div>
  );
}
