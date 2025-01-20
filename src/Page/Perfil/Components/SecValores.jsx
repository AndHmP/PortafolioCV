import React, { useContext, useEffect, useRef, useState } from "react";
import '../StylesComponents/SecValores.scss';
import CardValores from "./CardValores";
import { DataContext } from "../../../Data/DataContext";

export default function SecValores() {

    const { InformacionGeneral } = useContext(DataContext);

    const Carrusel = useRef(null)


    const [Cantidad, setCantidad] = useState();

    const Right = () => {
        const Elementos = Carrusel.current.querySelectorAll('.One');
        if (Elementos.length > 0) {
            Carrusel.current.appendChild(Elementos[0]);
        }
    };

    const Left = () => {
        const Elementos = Carrusel.current.querySelectorAll('.One');
        if (Elementos.length > 0) {
            Carrusel.current.insertBefore(Elementos[Elementos.length - 1], Elementos[0]);
        }
    };

    const CalcularCantidad = (Array) => {
        const veces = Math.ceil(7 / Array.length);
        setCantidad(veces);
    };

    useEffect(() => {
        CalcularCantidad(InformacionGeneral.Valores);
    }, [])

    return (
        <div className="SecValores w-full h-full flex align-items-center justify-content-center">
            <button className="relative" onClick={() => { Left() }}>
                <i class="fa-solid fa-angle-left"></i>
            </button>

            <div className="SliderN relative w-full h-full" ref={Carrusel}>
                {
                    [...new Array(Cantidad)].map((_, index) => {
                        return InformacionGeneral.Valores.map((item) => (
                            <div className="One flex align-items-center justify-content-center">
                                <CardValores Object={item} />
                            </div>
                        ));
                    })
                }

            </div>
            <button className="relative" onClick={() => { Right() }}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    )
}