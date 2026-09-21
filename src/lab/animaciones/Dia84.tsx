import './estilos/Dia84.scss';

/* Día 84 — Book Cover
   "Juzga este libro por su portada."

   Pieza estática, sin animación: todo el trabajo está en fingir el volumen.
   El lomo es un pseudoelemento con un degradado que pasa de claro a oscuro
   para simular el pliegue de la tapa, y el canto de las páginas es otro
   degradado con ocho paradas alternas —claro, oscuro, claro— que imita las
   hojas apretadas. */

export default function Dia84() {
  return (
    <div className="Dia84">
      <div className="Dia84-libro">
        <div className="Dia84-titulo">
          <div className="grande">
            Judge
            <br />
            this
            <br />
            book
          </div>
          <div className="pequeno">by its cover</div>
        </div>
      </div>
    </div>
  );
}

