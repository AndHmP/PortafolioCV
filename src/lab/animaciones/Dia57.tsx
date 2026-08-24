import './estilos/Dia57.scss';

/* Día 57 — Icosahedron
   "Un cuerpo básico algo más complicado. ¿Adivinas cómo se hacen los triángulos?" */

/* Dos coronas de 10 triángulos: la de arriba apuntando al polo norte y la de
   abajo al sur. Es la simplificación habitual del icosaedro. */
const CARAS = Array.from({ length: 10 }, (_, i) => i);

export default function Dia57() {
  return (
    <div className="Dia57">
      <div className="Dia57-escena">
        <div className="Dia57-cuerpo">
          {CARAS.map((i) => (
            <span key={`n${i}`} className={`Dia57-cara norte c${i}`} />
          ))}
          {CARAS.map((i) => (
            <span key={`s${i}`} className={`Dia57-cara sur c${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
