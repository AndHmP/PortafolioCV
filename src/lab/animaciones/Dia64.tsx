import './estilos/Dia64.scss';

/* Día 64 — Button
   "Dos rectángulos y un desplazamiento: un botón con truco."

   El botón no tiene fondo propio: son sus dos pseudoelementos. El `::before`
   es la cara blanca y el `::after` la sombra morada, desplazada 13 y 12 px.

   Al pasar el ratón, el botón entero se mueve a donde estaba la sombra y los
   colores se intercambian; la sombra, además, salta al otro lado. Parece que
   la pieza se ha dado la vuelta sin que nada haya rotado. */

export default function Dia64() {
  return (
    <div className="Dia64">
      <div className="Dia64-boton">Hover me</div>
    </div>
  );
}

