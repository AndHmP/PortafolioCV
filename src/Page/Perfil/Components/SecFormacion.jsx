import React, { useContext, useState } from "react";
import '../StylesComponents/SecFormacion.scss';
import { DataContext } from "../../../Data/DataContext";


export default function SecFormacion() {
    const AñosActuales = 20;

    const { InformacionGeneral } = useContext(DataContext);

    const [InfoSelect, setInfoSelect] = useState(0);


    const CalcularMedia = (Object) => {
        let Total = 0;
        Object.map((item) => {
            Total = Total + parseInt(item);
        });
        let promedio = (Total / Object.length).toFixed(1);
        console.log('promedio', promedio)
        return promedio;
    };


    return (
        <div className="SecFormacion w-full h-full flex flex-column align-items-center justify-content-start">
            <div className="LineaHistorial relative flex align-items-center justify-content-center">
                <div className="Linea absolute"></div>
                {InformacionGeneral.FormacionAcademica &&
                    InformacionGeneral.FormacionAcademica.map((item, index) => {
                        return (
                            <div className={`Punto absolute flex align-items-center justify-content-center 
                                ${index == InfoSelect ?'Select':''}`}
                                style={{ left: `${(CalcularMedia(item.range) * 100) / AñosActuales}%` }}
                                onClick={() => { setInfoSelect(index) }}
                            >
                                <div className="Icon">
                                    {item.icon}
                                    {/* <i className={`${item.icon}`}></i> */}
                                </div>
                            </div>
                        )
                    })}
            </div>
            <div className="Informacion flex flex-column">
                <div className="Titulo">
                    {InformacionGeneral.FormacionAcademica[InfoSelect].tem}{' ('}
                    {InformacionGeneral.FormacionAcademica[InfoSelect].range[0]}-{InformacionGeneral.FormacionAcademica[InfoSelect].range[1]} años{')'}
                </div>
                <div className="Contenido">
                    {InformacionGeneral.FormacionAcademica[InfoSelect].info}
                </div>

            </div>

            <style>
                {`
                    .SecFormacion>.LineaHistorial>.Linea{
                        clip-path: polygon(100% 100%, 100% -100%, 0% -100%, 0% 100%,
                            ${InformacionGeneral.FormacionAcademica.map((item) => {
                    return (
                        `calc(${((CalcularMedia(item.range) * 100) / AñosActuales).toFixed(1)}% - 2px) 100%,
                                        calc(${((CalcularMedia(item.range) * 100) / AñosActuales).toFixed(1)}% - 2px) -50%,
                                        calc(${((CalcularMedia(item.range) * 100) / AñosActuales).toFixed(1)}% + 12px) -50%,
                                        calc(${((CalcularMedia(item.range) * 100) / AñosActuales).toFixed(1)}% + 12px) 100%`
                    )
                })
                    }
                            )
                    }
                `}
            </style>


        </div>
    )
}