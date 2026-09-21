import './estilos/Dia94.scss';

/* Día 94 — Tree
   "Un árbol que se planta solo: primero el tronco, luego la copa."

   Tres animaciones de una sola pasada, encadenadas por sus retrasos: el tronco
   crece desde el suelo, la sombra se abre a la vez, y la copa entra 0,7 s
   después, cuando el tronco ya está. Las tres se pasan de largo hasta 1,1 y
   corrigen, que es lo que les da el rebote.

   La copa es un triángulo de borde partido en dos mitades: la izquierda lleva
   un negro al 20 % encima para fingir el lado en sombra. */

const RAMAS = [1, 2, 3, 4, 5];

export default function Dia94() {
  return (
    <div className="Dia94">
      <div className="Dia94-arbol">
        <div className="Dia94-copa" />
        <div className="Dia94-tronco">
          {RAMAS.map((n) => (
            <div key={n} className={`Dia94-rama r${n}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

