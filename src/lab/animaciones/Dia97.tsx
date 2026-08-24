import './estilos/Dia97.scss';

/* Día 97 — Puppet
   "Hola, ¿tienes un minuto para hablar de HTML y CSS?" */

export default function Dia97() {
  return (
    <div className="Dia97">
      <span className="Dia97-hilo h1" />
      <span className="Dia97-hilo h2" />

      <div className="Dia97-marioneta">
        <div className="Dia97-cabeza">
          <span className="Dia97-ojo izq" />
          <span className="Dia97-ojo der" />
          <span className="Dia97-boca" />
        </div>

        <div className="Dia97-cuerpo">
          <span className="Dia97-brazo izq" />
          <span className="Dia97-brazo der" />
        </div>

        <div className="Dia97-piernas">
          <span className="Dia97-pierna izq" />
          <span className="Dia97-pierna der" />
        </div>
      </div>
    </div>
  );
}
