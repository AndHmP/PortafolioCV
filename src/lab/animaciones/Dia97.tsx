import './estilos/Dia97.scss';

/* Día 97 — Waving Puppet
   "Un monigote que saluda."

   Brazos y piernas son dos cápsulas encajadas, la de abajo colgando de la de
   arriba con el origen de giro en el codo o la rodilla. Toda la pose está en
   los ángulos: el brazo izquierdo cae con un 10° y un −5°, el derecho sube a
   −75° y ahí se queda saludando.

   El saludo son dos animaciones `alternate` de 1 s: el hombro va de −75° a
   −85° y el antebrazo de −75° a −105°. */

export default function Dia97() {
  return (
    <div className="Dia97">
      <div className="Dia97-monigote">
        <div className="Dia97-cabeza" />
        <div className="Dia97-cuerpo">
          <div className="Dia97-brazo izquierdo">
            <div className="Dia97-superior">
              <div className="Dia97-inferior" />
            </div>
          </div>
          <div className="Dia97-brazo derecho">
            <div className="Dia97-superior">
              <div className="Dia97-inferior" />
            </div>
          </div>
          <div className="Dia97-pierna izquierda">
            <div className="Dia97-superior">
              <div className="Dia97-inferior" />
            </div>
          </div>
          <div className="Dia97-pierna derecha">
            <div className="Dia97-superior">
              <div className="Dia97-inferior" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

