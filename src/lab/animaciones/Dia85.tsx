import './estilos/Dia85.scss';

/* Día 85 — It's something
   "Doscientos puntos que, moviéndose en vertical, dibujan una curva."

   Cada punto sube y baja lo mismo durante todo el ciclo; lo único que cambia
   entre uno y otro es cuánto. La amplitud crece con el cuadrado de la distancia
   al borde —n²/70— y es simétrica respecto del centro, así que los de las
   puntas casi no se mueven y el del medio recorre 143 px.

   De esa parábola sale la curva, sin que ningún punto sepa nada de sus
   vecinos. */

const PUNTOS = 200;

export default function Dia85() {
  return (
    <div className="Dia85">
      <div className="Dia85-onda">
        {Array.from({ length: PUNTOS }, (_, i) => {
          const n = i + 1;
          const amplitud = (Math.min(n, PUNTOS - n) ** 2 / 70) * 0.675;
          return (
            <div
              key={n}
              className="Dia85-punto"
              style={{ '--Dia85-alto': `${amplitud.toFixed(4)}px` } as React.CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
}

