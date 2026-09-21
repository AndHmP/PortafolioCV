import './estilos/Dia54.scss';

/* Día 54 — Waves
   "Tres olas superpuestas, cada una con su vaivén."

   La ondulación no está dibujada: cada ola es una franja de color con diez
   círculos del mismo color flotando sobre su borde superior, y los pares van
   pintados del color de la ola de detrás. Alternando lleno y hueco sale el
   festón, y como los impares se sitúan 2 px más abajo, el borde no queda
   simétrico y parece agua.

   Las tres se mecen a la vez pero con distinta amplitud —20, 10 y 50 px— y la
   del medio en sentido contrario, que es lo que las despega unas de otras. */

const CIRCULOS = Array.from({ length: 10 }, (_, i) => i);
const OLAS = ['fondo', 'medio', 'frente'] as const;

export default function Dia54() {
  return (
    <div className="Dia54">
      {OLAS.map((ola) => (
        <div key={ola} className={`Dia54-ola ${ola}`}>
          {CIRCULOS.map((i) => (
            <div key={i} className="Dia54-circulo" />
          ))}
        </div>
      ))}
    </div>
  );
}

