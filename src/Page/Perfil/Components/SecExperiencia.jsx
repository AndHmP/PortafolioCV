import React, { useContext } from "react";
import '../StylesComponents/SecExperiencia.scss';
import { DataContext } from "../../../Data/DataContext";

export default function SecExperiencia() {

    const { InformacionGeneral } = useContext(DataContext);

    return (
        <div className="SecExperiencia w-full h-full flex align-items-center justify-content-center">
            <div className="Linea h-full relative flex align-items-center justify-content-center">
                <div className="LineaBa h-full">
                </div>

                {InformacionGeneral.ExperienciaLaboral &&
                    InformacionGeneral.ExperienciaLaboral.map((exp, index) => {
                        return (
                            <div className="PuntoB absolute" 
                            style={{top:`${((92 / InformacionGeneral.ExperienciaLaboral.length) * index)+3}%`}}
                            ></div>
                        )
                    })}
            </div>
            <div className="Contenido h-full w-full flex flex-column">
                {InformacionGeneral.ExperienciaLaboral &&
                    InformacionGeneral.ExperienciaLaboral.map((exp) => {
                        return (
                            <div className="SeccOneExp flex flex-column">
                                <div className="titulo">{exp.empresa}{' ('+exp.tiempo+')'}</div>
                                <div className="contenido">{exp.info}</div>
                            </div>
                        )
                    })}
            </div>

            <style>{`
                .SecExperiencia>.Linea>.LineaBa{
                    clip-path: polygon(0% 100%, 200% 100%, 200% 0%, 0% 0%,
                        ${InformacionGeneral.ExperienciaLaboral.map((item, index)=>{
                            let Porcentaje = 92/(InformacionGeneral.ExperienciaLaboral.length);
                            return(
                                `0% calc(${(Porcentaje * index)+6}% - 13px), 200% calc(${(Porcentaje * index)+6}% - 13px),
                                200% calc(${(Porcentaje * index)+6}% + 1px), 0% calc(${(Porcentaje * index)+6}% + 1px)`
                            )
                        })}
                    );
                }
                .SecExperiencia>.Contenido>.SeccOneExp{
                    height: ${100 / InformacionGeneral.ExperienciaLaboral.length}%;
                }
            `}</style>
        </div>
    )
}