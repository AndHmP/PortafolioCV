import './estilos/Dia98.scss';

/* Día 98 — Plopp
   "Un cuadrado azul que estalla en confeti."

   Las cuatro caras del rombo son triángulos de borde que salen disparados cada
   uno hacia su lado; por debajo aparecen dieciséis piezas —ocho cuadrados y
   ocho círculos, en tres tamaños y tres colores— que vuelan a posiciones fijas
   mientras crecen de escala 0 a 1.

   Todo va en `alternate`, así que lo que se ve la mitad del tiempo es el
   confeti volviendo al centro y el rombo recomponiéndose. Los destinos son los
   del pen: elegidos a mano, no calculados. */

const CUADRADOS: Array<[number, number, number, string, string]> = [
  [66, 78, 110, 'pequeno', 'c1'],
  [46, -141, 163, 'grande', 'c2'],
  [131, -117, 126, '', 'c1'],
  [91, -94, 122, 'pequeno', 'c3'],
  [131, -10, 111, '', 'c1'],
  [-94, -66, 125, 'grande', 'c1'],
  [-102, 50, 139, '', 'c3'],
  [-62, 20, 118, 'pequeno', 'c3'],
];

const CIRCULOS: Array<[number, number, string, string]> = [
  [13, -113, 'pequeno', 'c1'],
  [29, -71, '', 'c2'],
  [1, -72, 'pequeno', 'c3'],
  [-62, 132, 'grande', 'c1'],
  [18, 86, '', 'c3'],
  [62, 15, 'pequeno', 'c2'],
  [74, -25, '', 'c1'],
  [95, -45, 'pequeno', 'c3'],
];

const ESCALA = 0.675;
const destino = (x: number, y: number, giro?: number) =>
  ({
    '--Dia98-x': `${(x * ESCALA).toFixed(2)}px`,
    '--Dia98-y': `${(y * ESCALA).toFixed(2)}px`,
    ...(giro === undefined ? {} : { '--Dia98-giro': `${giro}deg` }),
  }) as React.CSSProperties;

export default function Dia98() {
  return (
    <div className="Dia98">
      <div className="Dia98-caras">
        {['arriba', 'izquierda', 'derecha', 'abajo'].map((c) => (
          <div key={c} className={`Dia98-cara ${c}`} />
        ))}
      </div>

      <div className="Dia98-piezas">
        {CUADRADOS.map(([x, y, giro, tamano, color], i) => (
          <div
            key={`c${i}`}
            className={`Dia98-cuadrado ${tamano} ${color}`}
            style={destino(x, y, giro)}
          />
        ))}
        {CIRCULOS.map(([x, y, tamano, color], i) => (
          <div
            key={`o${i}`}
            className={`Dia98-circulo ${tamano} ${color}`}
            style={destino(x, y)}
          />
        ))}
      </div>
    </div>
  );
}

