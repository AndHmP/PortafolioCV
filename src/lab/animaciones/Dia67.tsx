import './estilos/Dia67.scss';

/* Día 67 — 3D Parasol
   "¿Se pueden mostrar cuerpos que no sean básicos en 3D con CSS? Al parecer sí." */

const GAJOS = 12;

export default function Dia67() {
  return (
    <div className="Dia67">
      <div className="Dia67-escena">
        <div className="Dia67-sombrilla">
          {Array.from({ length: GAJOS }, (_, i) => (
            <span key={i} className={`Dia67-gajo g${i}`} />
          ))}
        </div>
        <span className="Dia67-mastil" />
        <span className="Dia67-base" />
      </div>
    </div>
  );
}
