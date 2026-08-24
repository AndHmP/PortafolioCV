import './estilos/Dia43.scss';

/* Día 43 — Lightbulb
   "Luz encendida, luz apagada, luz encendida, luz apagada, luz encendida." */

export default function Dia43() {
  return (
    <div className="Dia43">
      <span className="Dia43-cable" />

      <div className="Dia43-bombilla">
        <span className="Dia43-vidrio">
          <span className="Dia43-filamento" />
        </span>
        <span className="Dia43-rosca" />
      </div>

      <span className="Dia43-halo" />
    </div>
  );
}
