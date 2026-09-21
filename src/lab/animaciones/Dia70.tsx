import './estilos/Dia70.scss';

/* Día 70 — Calendar Days
   "Cuatro días grandes, sin calendario alrededor."

   Cuatro cuadrados de 200 px que llenan el lienzo. Al pasar el ratón la tarjeta
   se encoge al 95 % y recibe una sombra interior: parece que se hunde. */

const DIAS = [
  { nombre: 'Friday', numero: 15 },
  { nombre: 'Saturday', numero: 16 },
  { nombre: 'Sunday', numero: 17 },
  { nombre: 'Monday', numero: 18 },
];

export default function Dia70() {
  return (
    <div className="Dia70">
      {DIAS.map((dia) => (
        <div key={dia.nombre} className="Dia70-tarjeta">
          <span className="Dia70-texto">{dia.nombre}</span>
          <span className="Dia70-numero">{dia.numero}</span>
        </div>
      ))}
    </div>
  );
}

