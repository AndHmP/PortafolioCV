import './estilos/Dia34.scss';

/* Día 34 — Hello
   Las letras ya están rellenas de blanco; lo que se anima son tres trazos del
   color del fondo que las tapan y se van retirando, cada uno más grueso y más
   lento que el anterior. Las dos reglas horizontales se abren desde el centro.

   El contorno es el del reto, sobre un viewBox de 224×53. */

const HELLO =
  'M43.44,51.48 L29.68,51.48 L29.68,30.82 L13.76,30.82 L13.76,51.48 L0,51.48 L0,0.8 L13.76,0.8 ' +
  'L13.76,19.59 L29.68,19.59 L29.68,0.8 L43.44,0.8 L43.44,51.48 Z M84.49,51.48 L54.39,51.48 ' +
  'L54.39,0.8 L84.49,0.8 L84.49,11.79 L68.09,11.79 L68.09,19.76 L83.27,19.76 L83.27,30.75 ' +
  'L68.09,30.75 L68.09,40.32 L84.49,40.32 L84.49,51.48 Z M93.36,51.48 L93.36,0.8 L107.05,0.8 ' +
  'L107.05,40.42 L126.57,40.42 L126.57,51.48 L93.36,51.48 Z M134.69,51.48 L134.69,0.8 ' +
  'L148.38,0.8 L148.38,40.42 L167.9,40.42 L167.9,51.48 L134.69,51.48 Z M223.44,26.07 ' +
  'C223.44,34.6 221.34,41.08 217.16,45.52 C212.98,49.96 206.85,52.18 198.79,52.18 C190.84,52.18 ' +
  '184.74,49.95 180.5,45.48 C176.26,41.02 174.14,34.53 174.14,26 C174.14,17.57 176.25,11.12 ' +
  '180.46,6.67 C184.68,2.22 190.81,0 198.86,0 C206.92,0 213.03,2.21 217.19,6.62 C221.36,11.04 ' +
  '223.44,17.52 223.44,26.07 L223.44,26.07 Z M188.56,26.07 C188.56,35.87 191.97,40.77 ' +
  '198.79,40.77 C202.25,40.77 204.82,39.58 206.5,37.2 C208.18,34.82 209.01,31.11 209.01,26.07 ' +
  'C209.01,21.01 208.16,17.27 206.47,14.86 C204.77,12.44 202.23,11.23 198.86,11.23 ' +
  'C191.99,11.23 188.56,16.18 188.56,26.07 L188.56,26.07 Z ';

export default function Dia34() {
  return (
    <div className="Dia34">
      <div className="Dia34-centro">
        <span className="Dia34-regla" />
        <svg className="Dia34-texto" viewBox="0 0 224 53" aria-hidden="true">
          <path className="a1" d={HELLO} />
          <path className="a2" d={HELLO} />
          <path className="a3" d={HELLO} />
        </svg>
        <span className="Dia34-regla" />
      </div>
    </div>
  );
}
