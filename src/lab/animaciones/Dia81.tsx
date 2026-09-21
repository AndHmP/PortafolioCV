import './estilos/Dia81.scss';

/* Día 81 — Jumping Ball
   "Una pelota que cruza el lienzo dando botes cada vez más bajos."

   Cuatro animaciones anidadas, una por capa. La de fuera lleva la pelota de
   derecha a izquierda a velocidad constante. Las dos de dentro reparten el
   salto: la de subida usa una curva que frena al final y la de bajada una que
   acelera, que es como cae algo de verdad. La última aplasta la pelota en cada
   rebote.

   Separarlas así es lo que permite que la horizontal no se entere de los
   botes. */

export default function Dia81() {
  return (
    <div className="Dia81">
      <div className="Dia81-suelo" />
      <div className="Dia81-recorrido">
        <div className="Dia81-sube">
          <div className="Dia81-baja">
            <div className="Dia81-pelota" />
          </div>
        </div>
      </div>
    </div>
  );
}

