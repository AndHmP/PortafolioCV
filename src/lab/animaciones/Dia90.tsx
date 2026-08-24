import './estilos/Dia90.scss';

/* Día 90 — Mouse Trap
   "No es una trampa para ratones: tu cursor quedará atrapado al pasar." */

export default function Dia90() {
  return (
    <div className="Dia90">
      <div className="Dia90-zona">
        <span className="Dia90-queso" />
        <p className="Dia90-aviso">pasa el cursor por aquí</p>

        {/* Las paredes solo capturan el puntero cuando la zona está activa:
            el cursor entra pero no puede salir por los lados. */}
        <span className="Dia90-pared arriba" />
        <span className="Dia90-pared derecha" />
        <span className="Dia90-pared abajo" />
        <span className="Dia90-pared izquierda" />
      </div>
    </div>
  );
}
