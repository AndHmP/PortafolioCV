import './estilos/Dia35.scss';

/* Día 35 — Loading Circle
   Un aro de fondo y otro encima cuyo guion se estira y encoge mientras gira. */

export default function Dia35() {
  return (
    <div className="Dia35">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className="Dia35-fondo" cx="50" cy="50" r="46" />
        <circle className="Dia35-trazo" cx="50" cy="50" r="46" />
      </svg>
    </div>
  );
}
