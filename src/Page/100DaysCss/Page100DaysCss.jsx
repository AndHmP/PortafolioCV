import react, { useContext } from "react";
import '../../Style/Pages/100DaysCss/Page100DaysCss.css';
import { DataContext } from '../../Data/DataContext.js'


import Dia01 from "../../Components/100DiasCss/Dia01.jsx";
import Dia02 from "../../Components/100DiasCss/Dia02.jsx";
import Dia03 from "../../Components/100DiasCss/Dia03.jsx";
import Dia04 from "../../Components/100DiasCss/Dia04.jsx";
import Dia05 from "../../Components/100DiasCss/Dia05.jsx";
import Dia06 from "../../Components/100DiasCss/Dia06.jsx";
import Dia07 from "../../Components/100DiasCss/Dia07.jsx";
import Dia08 from "../../Components/100DiasCss/Dia08.jsx";
import Dia09 from "../../Components/100DiasCss/Dia09.jsx";
import Dia10 from "../../Components/100DiasCss/Dia10.jsx";
import Dia11 from "../../Components/100DiasCss/Dia11.jsx";
import Dia12 from "../../Components/100DiasCss/Dia12.jsx";
import Dia13 from "../../Components/100DiasCss/Dia13.jsx";
import Dia14 from "../../Components/100DiasCss/Dia14.jsx";
import Dia15 from "../../Components/100DiasCss/Dia15.jsx";
import Dia16 from "../../Components/100DiasCss/Dia16.jsx";
import Dia17 from "../../Components/100DiasCss/Dia17.jsx";
import Dia18 from "../../Components/100DiasCss/Dia18.jsx";
import Dia19 from "../../Components/100DiasCss/Dia19.jsx";
import Dia20 from "../../Components/100DiasCss/Dia20.jsx";
import Dia21 from "../../Components/100DiasCss/Dia21.jsx";
import Dia22 from "../../Components/100DiasCss/Dia22.jsx";
import Dia23 from "../../Components/100DiasCss/Dia23.jsx";
import Dia24 from "../../Components/100DiasCss/Dia24.jsx";
import Dia25 from "../../Components/100DiasCss/Dia25.jsx";
import Dia26 from "../../Components/100DiasCss/Dia26.jsx";

export default function Page100DaysCss() {
    const { AbrirNavb } = useContext(DataContext)

    return (
        <div className="Page100DaysCss flex flex-column" style={{ marginLeft: `${AbrirNavb ? '200' : '55'}px` }}>
            <div className="TituloPage100Dias">

            </div>
            <div className="ContentPage100Dias">
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia01 />
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia02 />
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia03 />
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia04 />
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia05 />
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia06 />
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia07/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia08/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia09/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia10/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia11/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia12/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia13/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia14/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia15/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia16/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia17/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia18/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia19/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia20/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia21/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia22/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia23/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia24/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia25/>
                </div>
                <div className="Seccion100Dias flex align-items-center justify-content-center">
                    <Dia26/>
                </div>
            </div>

        </div>
    )
}