import './estilos/Dia55.scss';

/* Día 55 — Thermostat
   "El termostato de moda, en dos círculos y un degradado."

   El aro de color es un disco con un degradado de morado a rojo; lo que lo
   convierte en arco es un cuadrado del color del fondo, rotado 45° y con una
   esquina redondeada, que le tapa la parte de abajo.

   Al pasar el ratón sube un grado: la aguja gira de −50° a −20° y los dos
   números se cruzan deslizándose, el que sale encogiendo y el que entra desde
   la derecha. */

export default function Dia55() {
  return (
    <div className="Dia55">
      <div className="Dia55-termostato">
        <div className="Dia55-aro">
          <div className="Dia55-tapa" />
        </div>

        <div className="Dia55-control">
          <div className="Dia55-aguja" />
          <div className="Dia55-fuera">23°</div>
          <div className="Dia55-dentro">
            19<span>°</span>
          </div>
          <div className="Dia55-dentro dos">
            20<span>°</span>
          </div>
          <div className="Dia55-sala">Bedroom</div>
        </div>
      </div>
    </div>
  );
}

