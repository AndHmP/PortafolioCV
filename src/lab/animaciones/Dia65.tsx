import './estilos/Dia65.scss';

/* Día 65 — Ellipses Animation
   "¿También dibujabas figuras geométricas en el colegio? Me recuerda a eso." */

const ELIPSES = 16;

export default function Dia65() {
  return (
    <div className="Dia65">
      <div className="Dia65-figura">
        {Array.from({ length: ELIPSES }, (_, i) => (
          <span key={i} className={`Dia65-elipse e${i}`} />
        ))}
      </div>
    </div>
  );
}
