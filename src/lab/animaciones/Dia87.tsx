import './estilos/Dia87.scss';

/* Día 87 — Ruby
   "Un rubí tallado, con ocho caras y un destello."

   Cada faceta es un triángulo de borde CSS o un rectángulo, y el volumen sale
   solo del color: ocho tonos de rojo, del `#890505` de la cara en sombra al
   `#f58181` de la que recibe la luz. No hay degradados ni sombras.

   El destello es una barra clara girada 44° que cruza la faceta más clara y se
   queda fuera el resto del ciclo; la faceta la recorta con `overflow`. */

const FACETAS = [
  'abajo-izquierda',
  'abajo-derecha',
  'abajo-centro',
  'arriba-izquierda-izquierda',
  'arriba-izquierda',
  'arriba-centro',
  'arriba-derecha-derecha',
];

export default function Dia87() {
  return (
    <div className="Dia87">
      <div className="Dia87-rubi">
        {FACETAS.map((f) => (
          <div key={f} className={`Dia87-faceta ${f}`} />
        ))}
        <div className="Dia87-faceta arriba-derecha">
          <div className="Dia87-destello" />
        </div>
      </div>
    </div>
  );
}

