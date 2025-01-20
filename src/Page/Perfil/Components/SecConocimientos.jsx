import React, { useState, useRef, useEffect, useContext } from "react";
import ReactDOM from 'react-dom/client';
import '../StylesComponents/SecConocimientos.scss';
import CardConocimiento from "./CardConocimiento";
import { DataContext } from "../../../Data/DataContext";

export default function SecConocimientos() {

    const { InformacionGeneral } = useContext(DataContext);

    const [disabledBtn, setDisabledBtn] = useState(false);
    const [CantidadMostrar, setCantidadMostrar] = useState(5);
    const carrusel = useRef();



    const Agregar = () => {
        setDisabledBtn(true);
        const Elementos = carrusel?.current.querySelectorAll(".Secc");


        const PrimerElemento = Elementos[0];
        const UltimoElemento = Elementos[Elementos.length - 1];
        PrimerElemento.classList.add('close');

        setTimeout(() => {
            if (carrusel?.current && carrusel.current.contains(PrimerElemento)) {
                carrusel.current.removeChild(PrimerElemento);
            }
        }, 500);

        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "Secc Add";
        if (UltimoElemento.getAttribute("index") < InformacionGeneral.Conocimientos.length - 1) {
            const ultimoIndex = parseInt(UltimoElemento.getAttribute("index"), 10);

            nuevoDiv.setAttribute("index", ultimoIndex + 1);

        } else {
            nuevoDiv.setAttribute("index", "0");
        }
        carrusel?.current.appendChild(nuevoDiv);

        const root = ReactDOM.createRoot(nuevoDiv);
        root.render(<CardConocimiento Object={InformacionGeneral.Conocimientos[nuevoDiv.getAttribute("index")]} />);

        setTimeout(() => {
            nuevoDiv.classList.remove('Add');
        }, 500);
        setTimeout(() => {
            setDisabledBtn(false);
        }, 500);
    }
    const Eliminar = () => {
        setDisabledBtn(true);
        const Elementos = carrusel?.current.querySelectorAll(".Secc");

        Elementos.forEach(elem => {
            elem.classList.remove('Add')
        });

        const PrimerElemento = Elementos[0];
        const UltimoElemento = Elementos[Elementos.length - 1];
        UltimoElemento.classList.add('close');

        setTimeout(() => {
            if (carrusel?.current && carrusel.current.contains(UltimoElemento)) {
                carrusel.current.removeChild(UltimoElemento);
            }
        }, 500);


        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "Secc Add";

        if (PrimerElemento.getAttribute("index") > '0') {
            const primerIndex = parseInt(PrimerElemento.getAttribute("index"), 10);

            nuevoDiv.setAttribute("index", primerIndex - 1);

        } else {
            nuevoDiv.setAttribute("index", InformacionGeneral.Conocimientos.length - 1);
        }
        carrusel?.current.insertBefore(nuevoDiv, carrusel?.current.firstChild);

        const root = ReactDOM.createRoot(nuevoDiv);
        root.render(<CardConocimiento Object={InformacionGeneral.Conocimientos[nuevoDiv.getAttribute("index")]} />);

        setTimeout(() => {
            nuevoDiv.classList.remove('Add');
        }, 500);

        setTimeout(() => {
            setDisabledBtn(false);
        }, 500);
    }

    const verificarAncho = () => {
        let WidthContenedor = carrusel.current.offsetWidth;


         if (WidthContenedor <= 300) {
            setCantidadMostrar(1);
        } else if (WidthContenedor <= 430) {
            setCantidadMostrar(2);
        } else if (WidthContenedor <= 450) {
            setCantidadMostrar(3);
        } else {
            setCantidadMostrar(4);
        }
    };

    useEffect(() => {

        verificarAncho();

        window.addEventListener("resize", verificarAncho);

        return () => {
            window.removeEventListener("resize", verificarAncho);
        };
    }, []);


    return (
        <div className="SecConocimientos w-full h-full flex align-items-center justify-content-between">
            <button disabled={disabledBtn} onClick={() => { Eliminar() }}>
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <div className="Contenedor flex relative align-items-center justify-content-center"
                ref={carrusel}
                key={CantidadMostrar}
            >
                <div className="Secc" index={InformacionGeneral.Conocimientos.length - 2}>
                    <CardConocimiento Object={InformacionGeneral.Conocimientos[InformacionGeneral.Conocimientos.length - 2]} />
                </div>
                <div className="Secc" index={InformacionGeneral.Conocimientos.length - 1}>
                    <CardConocimiento Object={InformacionGeneral.Conocimientos[InformacionGeneral.Conocimientos.length - 1]} />
                </div>
                {InformacionGeneral.Conocimientos.map((item, index) => {
                    if (index < CantidadMostrar) {
                        return (
                            <div className="Secc" index={index}>
                                <CardConocimiento Object={InformacionGeneral.Conocimientos[index]} />
                            </div>
                        )
                    }
                })}
                {InformacionGeneral.Conocimientos.length == 3 && (
                    <>
                        <div className="Secc" index={0}>
                            <CardConocimiento Object={InformacionGeneral.Conocimientos[0]} />
                        </div>
                        <div className="Secc" index={1}>
                            <CardConocimiento Object={InformacionGeneral.Conocimientos[1]} />
                        </div>
                    </>
                )}
            </div>


            <style>{`
                .SecConocimientos>.Contenedor>.Secc{
                    width: ${100 / CantidadMostrar}%;
                    min-width: ${100 / CantidadMostrar}%;
                    max-width: ${100 / CantidadMostrar}%;
                }
                .SecConocimientos>.Contenedor>.Secc.close{
                    width: 0px;
                    min-width: 0px !important;
                    max-width: 0px !important;
                }
                .SecConocimientos>.Contenedor>.Secc.Add{
                    animation: Agregar 0.5s linear forwards;
                }

                @keyframes Agregar {
                    0%{
                        width: 0px;
                        min-width: 0px;
                        max-width: 0px;
                    }
                    100%{
                        width: ${100 / CantidadMostrar}%;
                        min-width: ${100 / CantidadMostrar}%;
                        max-width: ${100 / CantidadMostrar}%;
                    }
                }
            `}</style>

            <button disabled={disabledBtn} onClick={() => { Agregar(); }}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    )
}