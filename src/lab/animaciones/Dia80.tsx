import './estilos/Dia80.scss';

/* Día 80 — Flexbox Accordeon
   "Cuatro franjas y `flex`: la que señalas se come el resto."

   No hay cálculo de anchos: cada franja es `flex: 1 1 auto` con `width: 20%`,
   y al pasar el ratón esa width salta al 100 %. Flexbox reparte lo que queda
   entre las otras tres, y la transición hace el resto.

   El rótulo entra a la vez: pasa de transparente y medio tamaño a blanco y
   tamaño completo. */

const FRANJAS = [
  { tono: 'oscura', texto: 'First' },
  { tono: 'naranja', texto: 'Second' },
  { tono: 'oscura', texto: 'Third' },
  { tono: 'naranja', texto: 'Fourth' },
];

export default function Dia80() {
  return (
    <div className="Dia80">
      {FRANJAS.map((franja) => (
        <div key={franja.texto} className={`Dia80-franja ${franja.tono}`}>
          <span className="Dia80-texto">{franja.texto}</span>
        </div>
      ))}
    </div>
  );
}

