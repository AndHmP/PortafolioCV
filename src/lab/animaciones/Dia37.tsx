import './estilos/Dia37.scss';

/* Día 37 — Carousel
   "Imágenes, citas, precios o logos: un carrusel sirve para muchas cosas."

   Tres tarjetas idénticas ocupando el mismo hueco. Las tres corren la misma
   coreografía de 5 s desfasada un tercio: la del frente va a la derecha, la de
   la derecha pasa a la izquierda y la de la izquierda toma el frente.

   La profundidad no la da ninguna escala: el contenedor lleva
   `perspective(40px)`, y las tarjetas que se van al fondo se alejan en Z. La
   sombra encoge con ellas para rematar el efecto. */

const ANCHOS = [85, 78, 86, 80, 66];

export default function Dia37() {
  return (
    <div className="Dia37">
      <div className="Dia37-centro">
        {[1, 2, 3].map((n) => (
          <div key={n} className={`Dia37-tarjeta t${n}`}>
            <div className="Dia37-top" />
            <div className="Dia37-contenido">
              {ANCHOS.map((ancho, i) => (
                <div key={i} className="Dia37-linea" style={{ width: `${ancho}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

