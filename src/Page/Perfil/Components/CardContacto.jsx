import React from "react";
import '../StylesComponents/CardContacto.scss';

export default function CardContacto({ Object }) {

    return (
        <div className="CardContacto relative flex align-items-center justify-content-center">
            <i className={`${Object.icon} absolute IconoCard`}></i>

            <div className="Data absolute flex align-items-center justify-content-end">
                {Object.text}
            </div>
        </div>
    )
}