import { useState } from "react";

import Icono from "@/componentes/iconos/Icono";
import './estilos/Dia07.css';

export default function Dia07() {

    const [activarSearch, setactivarSearch] = useState(false);
    const [activarMenu, setactivarMenu] = useState(false);

    return (
        <div className="Dia07 flex align-items-center justify-content-center relative">

            <div className={`ContenedorBack absolute flex flex-column align-items-center justify-content-center ${activarMenu ? 'active' : ''}`}>
                <div className="oneSeccion w-full flex align-items-center">
                    <Icono nombre="medidor" tamano={18} />
                    <div className="name">Dashboard</div>
                </div>
                <div className="oneSeccion w-full flex align-items-center">
                    <Icono nombre="usuario" tamano={18} />
                    <div className="name">Profile</div>
                </div>
                <div className="oneSeccion w-full flex align-items-center">
                    <Icono nombre="campana" tamano={18} />
                    <div className="name">Notifications</div>
                </div>
                <div className="oneSeccion w-full flex align-items-center">
                    <Icono nombre="comentario" tamano={18} />                    <div className="name">Messages</div>
                </div>
                <div className="oneSeccion w-full flex align-items-center">
                    <Icono nombre="engranaje" tamano={18} />
                    <div className="name">Settings</div>
                </div>
            </div>


            <div className={`ContenedorPrinDia07 flex flex-column align-items-center justify-content-start ${activarMenu ? 'active' : ''}`}>
                <div className="navbar w-full flex align-items-center justify-content-between">
                    <div className="iconNavbar flex align-items-center justify-content-center"
                        onClick={() => {
                            setactivarMenu(!activarMenu);
                        }}
                    >
                        <div className="iconC"></div>
                    </div>
                    <div className="tituloNavbar">Notifications</div>
                    <div
                        className={`secSearch ${activarSearch ? 'active' : ''}`}>
                        <input type="text"
                            disabled={!activarSearch} placeholder="Search ..."
                            className={`${activarSearch ? 'active' : ''}`} />

                        <div className="iconS"
                            onClick={() => {
                                setactivarSearch(!activarSearch);
                            }}
                        ></div>
                    </div>
                </div>

                <div className="contenedorNotify flex flex-column align-items-start justify-content-evenly relative w-full h-full">
                    <div className="notifyOne flex flex-column">
                        <span className="fecha">9:24 AM</span>
                        <span className="contenido">
                            <strong>John Walker</strong> posted a photo on your wall.
                        </span>
                    </div>
                    <div className="notifyOne flex flex-column">
                        <span className="fecha">8:19 AM</span>
                        <span className="contenido">
                            <strong>Alice Parker</strong> commented your last post.
                        </span>
                    </div>
                    <div className="notifyOne flex flex-column">
                        <span className="fecha">Yesterday</span>
                        <span className="contenido">
                            <strong>Luke Wayne</strong> added you as friend.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}