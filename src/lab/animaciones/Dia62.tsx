import './estilos/Dia62.scss';

/* Día 62 — Price Table
   "Tres planes y una comparativa que reacciona al que estés mirando."

   Las tres tarjetas y el panel de abajo son hermanos, así que el pen resuelve
   la comparativa solo con `:hover ~`: al pasar por un plan, las tres barras se
   llenan hasta lo que ese plan incluye. Aquí se mantiene igual —es CSS puro y
   se lee mejor que un estado de React.

   Ojo al detalle del original: el plan Pro no llena las tres barras por igual
   (30 %, 70 % y 50 %), que es lo que le da sentido a la tabla. */

const PLANES = [
  { clase: 'basic', nombre: 'Basic', precio: '$5' },
  { clase: 'pro', nombre: 'Pro', precio: '$10' },
  { clase: 'premium', nombre: 'Premium', precio: '$20' },
];

/* Anchos de los renglones grises, medidos sobre la referencia (de 110 px). */
const RENGLONES = [69, 59, 66, 46];

const DATOS = [
  { clase: 'usuarios', izquierda: '5 Users', derecha: '100 Users' },
  { clase: 'gb', izquierda: '20 GB', derecha: '200 GB' },
  { clase: 'proyectos', izquierda: '1 Project', derecha: '50 Projects' },
];

export default function Dia62() {
  return (
    <div className="Dia62">
      {PLANES.map((plan) => (
        <div key={plan.clase} className={`Dia62-plan ${plan.clase}`}>
          <div className="Dia62-titulo">{plan.nombre}</div>
          <div className="Dia62-precio">
            {plan.precio}
            <span>per month</span>
          </div>
          <div className="Dia62-renglones">
            {RENGLONES.map((ancho, i) => (
              <div key={i} className="Dia62-renglon" style={{ width: `${(ancho / 110) * 100}%` }} />
            ))}
          </div>
        </div>
      ))}

      <div className="Dia62-datos">
        {DATOS.map((dato) => (
          <div key={dato.clase} className={`Dia62-dato ${dato.clase}`}>
            <div className="Dia62-texto">
              <span className="izquierda">{dato.izquierda}</span>
              <span className="derecha">{dato.derecha}</span>
            </div>
            <div className="Dia62-barra">
              <div className="Dia62-relleno" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

