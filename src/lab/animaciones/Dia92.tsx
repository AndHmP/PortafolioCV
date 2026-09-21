import './estilos/Dia92.scss';

/* Día 92 — Random Balls
   "Dieciséis bolas rebotando entre las esquinas del lienzo."

   Ninguna calcula rebotes: cada una va y vuelve entre dos puntos del borde en
   línea recta, con `alternate` implícito en los fotogramas. Las ocho primeras
   tardan 6 s y las ocho siguientes 3,5, así que los cruces nunca se repiten
   igual y parece que hay física detrás.

   Las parejas de puntos son las del pen: esquina a lado, lado a esquina, lado
   a lado. */

/* [inicio, medio] en píxeles del lienzo original de 400. */
const RECORRIDOS: Array<[number, number, number, number, number]> = [
  [-195, -195, 0, 195, 6],
  [195, -195, 0, 195, 6],
  [195, 195, 0, -195, 6],
  [-195, 195, 0, -195, 6],
  [-195, -195, 195, 0, 6],
  [195, -195, -195, 0, 6],
  [195, 195, -195, 0, 6],
  [-195, 195, 195, 0, 6],
  [0, -195, 195, 0, 3.5],
  [0, 195, 195, 0, 3.5],
  [0, -195, -195, 0, 3.5],
  [0, 195, -195, 0, 3.5],
  [195, 0, 0, 195, 3.5],
  [-195, 0, 0, 195, 3.5],
  [195, 0, 0, -195, 3.5],
  [-195, 0, 0, -195, 3.5],
];

const ESCALA = 0.675;

export default function Dia92() {
  return (
    <div className="Dia92">
      {RECORRIDOS.map(([x0, y0, x1, y1, duracion], i) => (
        <div
          key={i}
          className="Dia92-bola"
          style={{
            animationName: 'Dia92Bola',
            animationDuration: `${duracion}s`,
            /* Los dos extremos viajan como variables: el keyframe es uno solo. */
            '--Dia92-x0': `${x0 * ESCALA}px`,
            '--Dia92-y0': `${y0 * ESCALA}px`,
            '--Dia92-x1': `${x1 * ESCALA}px`,
            '--Dia92-y1': `${y1 * ESCALA}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

