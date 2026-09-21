import type { Destino } from './datos';

import './estilos/CardTipo07.scss';

/** Card de destino: el panel inferior sube y revela el texto al pasar el cursor. */
export default function CardTipo07({ destino }: { destino: Destino }) {
  return (
    <div className="ContenedorCardTipo07">
      <div
        className="CardTipo07 relative flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${destino.img})` }}
      >
        <div className="Datos absolute w-full flex flex-column align-items-start justify-content-center">
          <p className="titulo">{destino.lugar}</p>
          <p className="contenido">{destino.descripcion}</p>
          <button type="button">Read more</button>
        </div>
      </div>
    </div>
  );
}
