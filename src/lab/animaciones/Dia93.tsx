import './estilos/Dia93.scss';

/* Día 93 — Combination Lock
   "El candado de taquilla, con su rueda de cuarenta marcas."

   El relieve no lleva ni un degradado: son sombras interiores cruzadas, una
   blanca arriba a la izquierda y otra negra abajo a la derecha, que es como se
   finge el metal en CSS.

   La rueda tiene 40 marcas cada 9°; una de cada cinco es más larga y lleva su
   número. Al pasar el ratón por el candado, el dial da una vuelta completa en
   1,5 s. */

const MARCAS = Array.from({ length: 40 }, (_, i) => i);
const NUMEROS = [0, 5, 10, 15, 20, 25, 30, 35];

export default function Dia93() {
  return (
    <div className="Dia93">
      <div className="Dia93-candado">
        <div className="Dia93-arco">
          <div className="Dia93-hueco" />
        </div>

        <div className="Dia93-base">
          <div className="Dia93-rueda">
            {MARCAS.map((i) => (
              <div
                key={i}
                className={`Dia93-marca ${i % 5 === 0 ? 'larga' : ''}`}
                style={{ transform: `rotate(${i * 9}deg) translateY(${i % 5 === 0 ? -61 : -65}px)` }}
              />
            ))}

            {NUMEROS.map((n, i) => (
              <div
                key={n}
                className="Dia93-numero"
                style={{ transform: `rotate(${i * 45}deg) translateY(-40px)` }}
              >
                {n}
              </div>
            ))}
          </div>

          <div className="Dia93-tirador" />
        </div>
      </div>
    </div>
  );
}

