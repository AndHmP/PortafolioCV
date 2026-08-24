import './estilos/Dia62.scss';

/* Día 62 — Price Table
   "100 Days CSS es gratis. Para todo lo demás, estas tablas de precios." */

const PLANES = [
  { nombre: 'Básico', precio: 9, rasgos: ['1 proyecto', 'Soporte por correo'] },
  { nombre: 'Pro', precio: 29, rasgos: ['10 proyectos', 'Soporte prioritario'], destacado: true },
  { nombre: 'Equipo', precio: 79, rasgos: ['Ilimitados', 'Gestor dedicado'] },
];

export default function Dia62() {
  return (
    <div className="Dia62">
      {PLANES.map((plan) => (
        <article key={plan.nombre} className={`Dia62-plan ${plan.destacado ? 'destacado' : ''}`}>
          {plan.destacado && <span className="Dia62-cinta">Popular</span>}
          <h4>{plan.nombre}</h4>
          <p className="Dia62-precio">
            <span>S/</span>
            {plan.precio}
          </p>
          <ul>
            {plan.rasgos.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <button type="button">Elegir</button>
        </article>
      ))}
    </div>
  );
}
