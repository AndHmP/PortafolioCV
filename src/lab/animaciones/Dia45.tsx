import './estilos/Dia45.scss';

/* Día 45 — Button
   "Un botón con un recorrido de luz por el borde."

   El marco son dos polilíneas superpuestas sobre el mismo trazado de 180×60.
   La de abajo es el borde permanente; la de arriba es un segmento de 40
   unidades dentro de un patrón de 480 —el perímetro completo—, así que solo se
   ve un trocito. Al pasar el ratón, el desfase salta de 40 a −480 y ese trocito
   recorre el borde entero de una vez. */

const TRAZADO = '179,1 179,59 1,59 1,1 179,1';

export default function Dia45() {
  return (
    <div className="Dia45">
      <div className="Dia45-centro">
        <div className="Dia45-boton">
          <span>Hover me</span>
          <svg className="Dia45-borde" viewBox="0 0 180 60" aria-hidden="true">
            <polyline className="fondo" points={TRAZADO} />
            <polyline className="luz" points={TRAZADO} />
          </svg>
        </div>
      </div>
    </div>
  );
}

