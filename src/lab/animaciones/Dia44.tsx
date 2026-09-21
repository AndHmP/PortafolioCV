import './estilos/Dia44.scss';

/* Día 44 — Twisted Pyramid
   "Veinte cuadrados concéntricos girando con un desfase mínimo."

   No hay ninguna deformación: son veinte marcos de línea fina, cada uno 10 px
   menor que el anterior, todos dando una vuelta completa en 2 s. El desfase
   entre vecinos es de 1/30 s, y eso solo basta para que el conjunto parezca un
   volumen retorcido. Cada marco es también un poco más claro que el de fuera.

   Pasando el ratón por el lienzo la animación se congela. */

const MARCOS = Array.from({ length: 20 }, (_, i) => i + 1);

export default function Dia44() {
  return (
    <div className="Dia44">
      {MARCOS.map((n) => (
        <div key={n} className={`Dia44-marco m${n}`} />
      ))}
    </div>
  );
}

