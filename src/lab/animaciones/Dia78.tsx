import './estilos/Dia78.scss';

/* Día 78 — Hover Shadow
   "Tres botones idénticos que se levantan a distinta altura."

   Todo el efecto está en la sombra: el primero crece un 3 % y proyecta a 8 px,
   el segundo un 4 % y a 16, el tercero un 5 % y a 24. Nada más cambia, y basta
   para que parezcan estar a tres distancias del papel. */

const BOTONES = [1, 2, 3];

export default function Dia78() {
  return (
    <div className="Dia78">
      {BOTONES.map((n) => (
        <div key={n} className={`Dia78-boton b${n}`}>
          Hover me
        </div>
      ))}
    </div>
  );
}

