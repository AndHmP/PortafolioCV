import './estilos/Dia83.scss';

/* Día 83 — Warp Drive
   "¿Se ve así viajar casi a la velocidad de la luz? Los físicos dirían que no." */

const ESTELAS = 60;

export default function Dia83() {
  return (
    <div className="Dia83">
      <div className="Dia83-tunel">
        {Array.from({ length: ESTELAS }, (_, i) => (
          <span key={i} className={`Dia83-estela e${i}`} />
        ))}
      </div>
      <span className="Dia83-nucleo" />
    </div>
  );
}
