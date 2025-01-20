import React from "react";
import '../StylesComponents/CardConocimiento.scss';

export default function CardConocimiento({ Object }) {

    return (
        <div className="CardConocimiento relative flex align-items-center justify-content-center">
            <div className="Face01 absolute flex flex-column align-items-center justify-content-center">
                {Object.svg}
                <div className="Name">{Object.name}</div>
            </div>
            <div className="Face02 absolute">
                <div className="Fondo relative h-full w-full flex flex-column align-items-center justify-content-between">
                    {Object.svg}
                    <div className="Contenido">
                        {Object.info}
                    </div>
                    <div className="Experiencia flex align-items-center justify-content-center relative">
                        {Object.exp}
                    </div>
                </div>
            </div>
        </div>
    )
}