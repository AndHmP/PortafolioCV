import './estilos/Dia60.scss';

/* Día 60 — Blurry Overlay
   "El desenfoque de fondo está de moda, pero no es fácil sin trucos." */

export default function Dia60() {
  return (
    <div className="Dia60">
      <span className="Dia60-mancha m1" />
      <span className="Dia60-mancha m2" />
      <span className="Dia60-mancha m3" />

      <div className="Dia60-tarjeta">
        <span className="Dia60-avatar" />
        <p className="Dia60-nombre">Vidrio esmerilado</p>
        <p className="Dia60-detalle">backdrop-filter sobre un fondo en movimiento</p>
      </div>
    </div>
  );
}
