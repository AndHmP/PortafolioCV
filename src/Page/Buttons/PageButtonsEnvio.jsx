import React, { useContext } from "react";
import '../../Style/Pages/Buttons/PageButtonsEnvio.css'
import { DataContext } from '../../Data/DataContext.js'



import ButtonType01 from "../../Components/Button/ButtonType01.jsx";
import ButtonType02 from "../../Components/Button/ButtonType02.jsx";

export default function PageButtonsEnvio() {
    const { AbrirNavb } = useContext(DataContext);

    return (
        <div className="PageButtonsEnvio flex flex-column" style={{ marginLeft: `${AbrirNavb ? '200' : '55'}px` }}>

            <div className="TituloButtonsEnvio">

            </div>

            <div className="ContentButtonsEnvio">
                <div className="SeccionButtonEnvio flex align-items-center justify-content-center">
                    <ButtonType01 />
                </div>
                <div className="SeccionButtonEnvio flex align-items-center justify-content-center">
                    <ButtonType02 />
                </div>
                <div className="SeccionButtonEnvio flex align-items-center justify-content-center"></div>
                <div className="SeccionButtonEnvio flex align-items-center justify-content-center"></div>
                <div className="SeccionButtonEnvio flex align-items-center justify-content-center"></div>
                <div className="SeccionButtonEnvio flex align-items-center justify-content-center"></div>
                <div className="SeccionButtonEnvio flex align-items-center justify-content-center"></div>

            </div>

        </div>
    )
}