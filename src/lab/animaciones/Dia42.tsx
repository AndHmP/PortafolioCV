import './estilos/Dia42.scss';

/* Día 42 — Stars
   "Si miras con atención verás las estrellas titilar. Y con algo de suerte,
   una fugaz. ¡Pide un deseo!" */

const ESTRELLAS = 46;

export default function Dia42() {
  return (
    <div className="Dia42">
      {Array.from({ length: ESTRELLAS }, (_, i) => (
        <span key={i} className={`Dia42-estrella e${i}`} />
      ))}

      <span className="Dia42-fugaz" />
      <span className="Dia42-horizonte" />
    </div>
  );
}
