import './estilos/Dia46.scss';

/* Día 46 — Iris Circles
   "¿Qué ves? ¿Obturador, tornado, flor o gente bailando desde arriba?" */

const HOJAS = 9;

export default function Dia46() {
  return (
    <div className="Dia46">
      <div className="Dia46-iris">
        {Array.from({ length: HOJAS }, (_, i) => (
          <span key={i} className={`Dia46-hoja h${i}`} />
        ))}
        <span className="Dia46-centro" />
      </div>
    </div>
  );
}
