import './estilos/Dia58.scss';

/* Día 58 — 3D Sphere
   "Con algo de creatividad puedes crear estos cuerpos 3D con CSS." */

const ANILLOS = 18;

export default function Dia58() {
  return (
    <div className="Dia58">
      <div className="Dia58-esfera">
        {Array.from({ length: ANILLOS }, (_, i) => (
          <span key={i} className={`Dia58-anillo a${i}`} />
        ))}
      </div>
    </div>
  );
}
