import './estilos/Dia79.scss';

/* Día 79 — Lines Animation
   "Diez cuadrados que se estiran, giran y se convierten en otra cosa."

   Las diez piezas hacen exactamente la misma coreografía de veinte fotogramas:
   estirarse, aplanarse, redondearse, volver. Lo único que las distingue es que
   a partir del 15 % del ciclo cada una se gira 36° más que la anterior, así que
   la figura se abre en rueda.

   Arrancan todas juntas en el centro y terminan saliendo del lienzo hacia
   arriba, que es donde el ciclo empalma. */

const LINEAS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Dia79() {
  return (
    <div className="Dia79">
      <div className="Dia79-centro">
        {LINEAS.map((n) => (
          <div key={n} className={`Dia79-linea l${n}`} />
        ))}
      </div>
    </div>
  );
}

