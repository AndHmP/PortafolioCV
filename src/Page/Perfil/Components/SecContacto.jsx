import React, { useState, useRef, useEffect, useContext } from "react";
import ReactDOM from 'react-dom/client';
import '../StylesComponents/SecContacto.scss';
import CardContacto from "./CardContacto";
import { DataContext } from "../../../Data/DataContext";

export default function SecContacto() {

    const { InformacionGeneral } = useContext(DataContext);

    const [disabledBtn, setDisabledBtn] = useState(false);
    const [CantidadMostrar, setCantidadMostrar] = useState(3);
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
        }, 700);

        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "Secc close";
        if (UltimoElemento.getAttribute("index") < InformacionGeneral.Contacto.length - 1) {
            const ultimoIndex = parseInt(UltimoElemento.getAttribute("index"), 10);

            nuevoDiv.setAttribute("index", ultimoIndex + 1);

        } else {
            nuevoDiv.setAttribute("index", "0");
        }
        carrusel?.current.appendChild(nuevoDiv);

        const root = ReactDOM.createRoot(nuevoDiv);
        root.render(<CardContacto Object={InformacionGeneral.Contacto[nuevoDiv.getAttribute("index")]} />);

        setTimeout(() => {
            nuevoDiv.classList.remove('close');
        }, 0);
        setTimeout(() => {
            setDisabledBtn(false);
        }, 700);
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
        }, 700);


        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "Secc close";

        if (PrimerElemento.getAttribute("index") > '0') {
            const primerIndex = parseInt(PrimerElemento.getAttribute("index"), 10);

            nuevoDiv.setAttribute("index", primerIndex - 1);

        } else {
            nuevoDiv.setAttribute("index", InformacionGeneral.Contacto.length - 1);
        }
        carrusel?.current.insertBefore(nuevoDiv, carrusel?.current.firstChild);

        const root = ReactDOM.createRoot(nuevoDiv);
        root.render(<CardContacto Object={InformacionGeneral.Contacto[nuevoDiv.getAttribute("index")]} />);

        setTimeout(() => {
            nuevoDiv.classList.remove('close');
        }, 0);

        setTimeout(() => {
            setDisabledBtn(false);
        }, 700);
    }

    const verificarAncho = () => {
        let WidthContenedor = carrusel.current.offsetWidth;
        
        if (WidthContenedor <= 350) {
            setCantidadMostrar(1);
        } else if (WidthContenedor <= 480) {
            setCantidadMostrar(2);
        } else {
            setCantidadMostrar(3);
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
        <div className="SecContacto w-full h-full flex align-items-center justify-content-between">
            <button disabled={disabledBtn} onClick={() => { Eliminar() }}>
                <i class="fa-solid fa-angle-left"></i>
            </button>
            <div className="Contenedor flex relative align-items-center justify-content-center"
                ref={carrusel}
                key={CantidadMostrar}
            >
                <div className="Secc" index={InformacionGeneral.Contacto.length - 2}>
                    <CardContacto Object={InformacionGeneral.Contacto[InformacionGeneral.Contacto.length - 2]} />
                </div>
                <div className="Secc" index={InformacionGeneral.Contacto.length - 1}>
                    <CardContacto Object={InformacionGeneral.Contacto[InformacionGeneral.Contacto.length - 1]} />
                </div>
                {InformacionGeneral.Contacto.map((item, index) => {
                    if (index < CantidadMostrar) {
                        return (
                            <div className="Secc" index={index}>
                                <CardContacto Object={InformacionGeneral.Contacto[index]} />
                            </div>
                        )
                    }
                })}
                {InformacionGeneral.Contacto.length == 3 && (
                    <>
                        <div className="Secc" index={0}>
                            <CardContacto Object={InformacionGeneral.Contacto[0]} />
                        </div>
                        <div className="Secc" index={1}>
                            <CardContacto Object={InformacionGeneral.Contacto[1]} />
                        </div>
                    </>
                )}
            </div>


            <style>{`
                .SecContacto>.Contenedor>.Secc{
                    width: ${100 / CantidadMostrar}%;
                    min-width: ${100 / CantidadMostrar}%;
                    max-width: ${100 / CantidadMostrar}%;
                }
                .SecContacto>.Contenedor>.Secc.close{
                    width: 100% !important;
                    min-width: 0px !important;
                    max-width: 0px !important;
                }
                .SecContacto>.Contenedor>.Secc.Add{
                    animation: Agregar 0.2s linear forwards;
                }
            `}</style>

            <button disabled={disabledBtn} onClick={() => { Agregar(); }}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    )
}