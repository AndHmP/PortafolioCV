import './estilos/Dia73.scss';

/* Día 73 — Word Carousel
   "Una frase en la que solo cambia la última palabra."

   La columna de palabras sube de 45 en 45 px —el alto de una línea— dentro de
   una caja recortada. Se queda quieta un 20 % del ciclo en cada una y tarda un
   5 % en pasar a la siguiente.

   La primera palabra está repetida al final: así el salto del último fotograma
   al primero cae sobre la misma palabra y no se nota. */

const PALABRAS = ['Panther', 'Leopard', 'Tiger', 'Jaguar', 'Panther'];

export default function Dia73() {
  return (
    <div className="Dia73">
      <div className="Dia73-centro">
        <div className="Dia73-carrusel">
          <div className="Dia73-previo">I&apos;m a</div>
          <div className="Dia73-ventana">
            <div className="Dia73-columna">
              {PALABRAS.map((palabra, i) => (
                <span key={i} className="Dia73-palabra">
                  {palabra}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

