import './estilos/Dia28.scss';

/* Día 28 — Ring Ring
   "Por suerte omití el sonido. El color de señal y el movimiento
   deberían bastar." */

export default function Dia28() {
  return (
    <div className="Dia28">
      <div className="Dia28-reloj">
        <span className="Dia28-campana izq" />
        <span className="Dia28-campana der" />
        <span className="Dia28-martillo" />

        <div className="Dia28-cuerpo">
          <span className="Dia28-esfera">
            <span className="Dia28-aguja hora" />
            <span className="Dia28-aguja minuto" />
            <span className="Dia28-centro" />
          </span>
        </div>

        <span className="Dia28-pata izq" />
        <span className="Dia28-pata der" />
      </div>
    </div>
  );
}
