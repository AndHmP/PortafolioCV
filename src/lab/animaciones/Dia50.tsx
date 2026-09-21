import './estilos/Dia50.scss';

/* Día 50 — Easter Egg
   "Mitad del reto: un huevo de Pascua para celebrarlo."

   Un solo elemento. El huevo cae desde 350 px por encima, aplasta al aterrizar,
   rebota dos veces cada vez más flojo, se contonea 5° a cada lado y vuelve a
   caer por abajo. Todo el gesto son trece fotogramas de un ciclo de 3 s.

   La forma sale de un `border-radius` con dos radios distintos: 50 px de ancho
   contra 80 arriba y 50 abajo, que es lo que le da la punta. */

export default function Dia50() {
  return (
    <div className="Dia50">
      <div className="Dia50-huevo" />
    </div>
  );
}


