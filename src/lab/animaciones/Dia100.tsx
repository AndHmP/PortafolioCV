import './estilos/Dia100.scss';

/* Día 100 — The End
   "Cien días. Se apaga el cartel."

   Un rótulo de neón: cada trazo es un `div` apagado —del color del fondo, con
   un halo tenue— que en algún momento del ciclo de 6 s se enciende en blanco.
   Los retrasos de cada trazo son números sueltos, sin relación entre sí, así
   que el cartel titila de forma desordenada, como los de verdad.

   La panza de la D es un aro de 120 px con solo dos bordes pintados y girado
   45°, recortado por una caja de 70: queda medio anillo. Los dos tapones son
   otras dos cajas recortadas con su propio trazo dentro. */

export default function Dia100() {
  return (
    <div className="Dia100">
      <div className="Dia100-palabra">
        <div className="Dia100-e">
          <div className="Dia100-trazo izquierda" />
          <div className="Dia100-trazo arriba" />
          <div className="Dia100-trazo medio" />
          <div className="Dia100-trazo abajo" />
        </div>

        <div className="Dia100-n">
          <div className="Dia100-trazo izquierda" />
          <div className="Dia100-trazo diagonal" />
          <div className="Dia100-trazo derecha" />
        </div>

        <div className="Dia100-d">
          <div className="Dia100-trazo izquierda" />
          <div className="Dia100-panza">
            <div className="Dia100-caja-aro">
              <div className="Dia100-aro" />
            </div>
            <div className="Dia100-caja-punto arriba">
              <div className="Dia100-trazo punto" />
            </div>
            <div className="Dia100-caja-punto abajo">
              <div className="Dia100-trazo punto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

