import React from "react";
import '../StylesComponents/CardValores.scss';

export default function CardValores({Object}) {

    return (
        <div className="CardValores w-full h-full flex flex-column align-items-center justify-content-center">
            <div className="titulo">{Object.titulo}</div>
            <div className="contenido">
                {Object.contenido}
            </div>
        </div>
    )
}