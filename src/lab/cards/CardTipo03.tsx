import type { PerfilRed } from './datos';
import { IconoCheck, IconoHuella, IconoMensaje } from './iconos';

import './estilos/CardTipo03.scss';

/** Tarjeta de perfil sobre una imagen de fondo, con acciones al pie. */
export default function CardTipo03({ perfil }: { perfil: PerfilRed }) {
  return (
    <div className="ContenedorCard03 flex align-items-center justify-content-center">
      <div
        className="CardTipo03 flex flex-column align-items-center justify-content-center"
        style={{ backgroundImage: `url(${perfil.fondo})` }}
      >
        <div className="NameUser w-full flex align-items-center justify-content-center">
          <p>{perfil.nombre}</p>
          <IconoCheck />
        </div>
        <div className="State w-full flex align-items-center justify-content-center">Online</div>
        <div className="ImgProfile w-full h-full flex flex-column align-items-center justify-content-center">
          <img src={perfil.img} alt="" />
          <p>Role: {perfil.rol}</p>
        </div>
        <div className="FotterButtons w-full flex align-items-center justify-content-around">
          <button type="button">
            <IconoMensaje />
            <p>Chat</p>
          </button>
          <button type="button">
            <IconoHuella />
            <p>Profile</p>
          </button>
        </div>
      </div>
    </div>
  );
}
