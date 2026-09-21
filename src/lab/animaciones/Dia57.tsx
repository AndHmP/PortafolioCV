import './estilos/Dia57.scss';

/* Día 57 — Icosahedron
   "Veinte triángulos y ninguna librería 3D."

   Cada cara es un `div` de tamaño cero con un borde grueso: el truco clásico
   para dibujar un triángulo en CSS. Las veinte se colocan en el espacio con
   `translateZ` y dos o tres rotaciones cada una, y el conjunto vive dentro de
   un contenedor con `preserve-3d`.

   Los ángulos son los del sólido: 159,095° entre caras contiguas, 20,905° de
   inclinación y 35,264° —el ángulo de la diagonal del cubo— en las ocho caras
   invertidas. Al pasar el ratón da una vuelta de 360° en cada eje. */

const CARAS = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Dia57() {
  return (
    <div className="Dia57">
      <div className="Dia57-centro">
        <div className="Dia57-solido">
          {CARAS.map((n) => (
            <div key={n} className={`Dia57-cara c${n}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

