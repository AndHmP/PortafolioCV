import './estilos/Dia49.scss';

/* Día 49 — CSS Follow
   "Con JS no sería un gran reto; con CSS hay que buscarse una buena solución." */

const SEGUIDORES = 7;

export default function Dia49() {
  return (
    <div className="Dia49">
      <span className="Dia49-guia" />
      {Array.from({ length: SEGUIDORES }, (_, i) => (
        <span key={i} className={`Dia49-seguidor s${i}`} />
      ))}
      <p className="Dia49-pista">el retardo es la única diferencia</p>
    </div>
  );
}
