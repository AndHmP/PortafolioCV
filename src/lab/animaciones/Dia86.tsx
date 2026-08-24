import './estilos/Dia86.scss';

/* Día 86 — Newton's Cradle
   "¿Tienes uno de esos cacharros de clic-clac en el escritorio?" */

const BOLAS = 5;

export default function Dia86() {
  return (
    <div className="Dia86">
      <div className="Dia86-marco">
        <span className="Dia86-barra" />
        {Array.from({ length: BOLAS }, (_, i) => (
          <span key={i} className={`Dia86-brazo b${i}`}>
            <span className="Dia86-hilo" />
            <span className="Dia86-bola" />
          </span>
        ))}
      </div>
    </div>
  );
}
