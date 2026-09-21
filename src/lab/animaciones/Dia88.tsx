import './estilos/Dia88.scss';

/* Día 88 — Candle
   "Una vela encendida, con la llama al viento."

   La llama es un solo `div` con `border-radius` de dos radios, y lleva tres
   animaciones a la vez con periodos distintos —15 s, 20 s y 5 s— que cambian
   su forma, su tamaño y su resplandor. Como los tres ciclos no coinciden, el
   parpadeo nunca se repite igual.

   Ese es el truco: superponer periodos primos entre sí en vez de escribir una
   animación larga. */

export default function Dia88() {
  return (
    <div className="Dia88">
      <div className="Dia88-vela">
        <div className="Dia88-sombra" />
        <div className="Dia88-mecha" />
        <div className="Dia88-llama" />
      </div>
    </div>
  );
}

