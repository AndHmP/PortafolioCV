import './estilos/Dia59.scss';

/* Día 59 — Slice Transition
   "No es la transición de cada día entre dos imágenes." */

const TIRAS = 9;

export default function Dia59() {
  return (
    <div className="Dia59">
      <div className="Dia59-marco">
        {Array.from({ length: TIRAS }, (_, i) => (
          <span
            key={i}
            className="Dia59-tira"
            style={{
              /* Cada tira muestra su porción de la imagen: el fondo se
                 desplaza para que las nueve compongan una sola escena. */
              backgroundPosition: `${(i / (TIRAS - 1)) * 100}% center`,
              animationDelay: `${i * 0.09}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
