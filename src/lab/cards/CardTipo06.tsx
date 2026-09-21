import type { Coleccionable } from './datos';

import './estilos/CardTipo06.scss';

/**
 * Lámina de coleccionable: al pasar el cursor el fondo se tumba en 3D y la
 * figura sale del marco.
 *
 * El original arrastraba el código comentado de una llamada a la API de
 * Marvel, con sus claves pública y privada escritas en el archivo. Se ha
 * eliminado: no aportaba nada a la pieza y publicaba credenciales.
 */
export default function CardTipo06({ pieza }: { pieza: Coleccionable }) {
  return (
    <div className="ContenedorCardTipo06">
      <div className="CardTipo06 relative flex align-items-center justify-content-center">
        <div
          className="CardBack relative flex align-items-center justify-content-center"
          style={{ backgroundImage: `url(${pieza.imgFondo})` }}
        />
        <img className="absolute Personaje" src={pieza.imgFigura} alt="" />
        <img className="absolute Titulo" src={pieza.imgTitulo} alt="" />
      </div>
    </div>
  );
}
