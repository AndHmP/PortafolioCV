import './estilos/Dia88.scss';

/* Día 88 — Candle
   "Gracias a la magia de border-radius, esta llama es solo CSS." */

export default function Dia88() {
  return (
    <div className="Dia88">
      <span className="Dia88-halo" />

      <div className="Dia88-conjunto">
        <span className="Dia88-llama">
          <span className="Dia88-nucleo" />
        </span>
        <span className="Dia88-mecha" />
        <div className="Dia88-vela">
          <span className="Dia88-cera" />
        </div>
      </div>
    </div>
  );
}
