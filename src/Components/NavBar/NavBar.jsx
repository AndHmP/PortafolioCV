import React, { useContext, useEffect, useState } from "react";
import '../../Style/Components/NavBar/NavBar.css'
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../../Data/DataContext";

export default function NavBar() {
    const { user, LogOut ,AbrirNavb, setAbrirNavb } = useContext(DataContext)

    const navigate = useNavigate();



    const Elementos = {
        logo: {
            icon: "fa-solid fa-fire-flame-curved",
            name: "Empresa 01"
        },


        sec: [
            {
                icon: "fa-regular fa-home",
                name: "Home",
                subSecc: [],
                ruta: "/home"
            },
            {
                icon: "fa-regular fa-home",
                name: "Inputs",
                subSecc: [
                    {
                        name: "Text",
                        ruta: "/inputs/text"
                    }
                ],
                ruta: ""
            },
            {
                icon: "fa-regular fa-home",
                name: "Button",
                subSecc: [
                    {
                        name: "Envio",
                        ruta: "/button/envio"
                    },
                    {
                        name: "Eliminar",
                        ruta: "/button/eliminar"
                    }
                ],
                ruta: ""
            },
            {
                icon: "fa-regular fa-home",
                name: "100 Dias Css",
                subSecc: [],
                ruta: "/100-dias-css"
            },
        ]
    }



    const AplicarClase = (ClassU, NewClass) => {
        const Elemento = document.querySelectorAll(`.${ClassU}`);

        Elemento.forEach((elem) => {
            if (elem.classList.contains(NewClass)) {
                elem.classList.remove(NewClass);
            } else {
                elem.classList.add(NewClass);
            }
        });
    };

    const EnviarRuta = (ruta) => {
        console.log(`Enviando ${ruta}`);
        navigate(`${ruta}`);
    }

    const CerrarAllActive = () => {
        const Elemento = document.querySelectorAll(`.ContenidoNavbar .Active`);
        Elemento.forEach((elem) => {
            elem.classList.remove('Active');

        });
    }

    return (
        <header className={`NavBar-S ${AbrirNavb ? 'Active' : ''} fixed h-screen`}>
            <button className="BtnActiveNav absolute flex align-items-center justify-content-center" onClick={() => { AbrirNavb ? setAbrirNavb(false) : setAbrirNavb(true); CerrarAllActive() }}>
                <i class={`fa-solid fa-chevron-right ${AbrirNavb ? 'Active' : ''}`}></i>
            </button>

            <div className="ContenidoNavbar relative flex flex-column align-items-center justify-content-start">

                {Elementos && (
                    <div className="Sec01Log flex w-full align-items-center justify-content-start">
                        <i className={`${Elementos?.logo?.icon}`}></i>
                        <h5>{Elementos?.logo?.name}</h5>
                    </div>
                )}

                <div className={`InputSearch ${AbrirNavb ? 'Active' : ''} relative flex align-items-center justify-content-center w-full`}>
                    <i class="fa-solid fa-magnifying-glass absolute" onClick={() => {
                        !AbrirNavb ? setAbrirNavb(true) : console.log('as');
                    }}></i>
                    <input type="text" placeholder="Search" className="w-full absolute" />
                </div>

                <div className="w-full flex flex-column">
                    {Elementos?.sec && Elementos?.sec.map((item, index) => {
                        return (
                            <>
                                <div className="SecionEnvioRuta w-full flex align-items-center"
                                    onClick={() => { item?.subSecc?.length != 0 ? AplicarClase(`VarSubSeccionNav${index}`, 'Active') : EnviarRuta(item.ruta); setAbrirNavb(true) }}>
                                    <i className={`${item?.icon}`}></i>
                                    <p className="flex flex-1">{item?.name}</p>
                                    {item?.subSecc?.length != 0 && (
                                        <i class={`fa-solid fa-chevron-down VarSubSeccionNav${index}`}></i>)
                                    }
                                </div >
                                {item?.subSecc?.length != 0 && (
                                    <div className={`SubSecionContenedor VarSubSeccionNav${index} w-full flex flex-column justify-content-end`}>
                                        {item?.subSecc && item?.subSecc?.map((item) => {
                                            return (
                                                <div className="flex align-items-center">
                                                    <div className="relative flex align-items-center justify-content-center"></div>
                                                    <div className="flex align-items-center flex-1 h-full relative"
                                                        onClick={() => { EnviarRuta(item.ruta) }}>
                                                        {item?.name}
                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <style>
                                            {`
                                            .NavBar-S .ContenidoNavbar .VarSubSeccionNav${index}.Active{
                                            min-height: ${item?.subSecc?.length * 30}px;
                                            max-height: ${item?.subSecc?.length * 30}px;

                                        }
                                        `}
                                        </style>
                                    </div>
                                )
                                }

                            </>

                        )
                    })}
                </div>

                <div className="w-full flex flex-column">
                    <div className="Alterb w-full flex align-items-center">
                        <i class="fa-regular fa-bell"></i>
                        <p className="flex flex-1">Notificaciones</p>
                    </div>
                    <div className="Alterb w-full flex align-items-center">
                        <i class="fa-regular fa-gear"></i>
                        <p className="flex flex-1">Configuración</p>
                    </div>
                    <div className="ProfileSecNav w-full flex align-items-center">

                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW3xQmAkBVONEwGC3ADp_laM-b59JGrC9UJA&s"
                                        alt="" onClick={() => { EnviarRuta('/profile') }}
                                        srcset="" />
                                </div>
                                <div className="w-full flex flex-column align-items-start justify-content-center" onClick={() => { EnviarRuta('/profile') }}>
                                    <p>Anderson Huamancaja Porras</p>
                                    <p>Ingeniero de Software</p>
                                </div>
                                <i class="fa-solid fa-right-from-bracket"
                                    onClick={() => { LogOut() }}></i>

                    </div>

                </div>
            </div>

        </header >
    )
}