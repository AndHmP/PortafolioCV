import React, { useContext, useEffect, useState } from "react";
import '../../Style/Pages/Perfil/PagePerfil.css'
import { DataContext } from "../../Data/DataContext";
import DesplegableProfile from "./Components/DesplegableProfile";
import SecDatosPersonales from "./Components/SecDatosPersonales";
import SecSobreMi from "./Components/SecSobreMi";
import SecContacto from "./Components/SecContacto";
import SecConocimientos from "./Components/SecConocimientos";
import SecFormacion from "./Components/SecFormacion";
import SecExperiencia from "./Components/SecExperiencia";
import SecValores from "./Components/SecValores";
import FotoSelf from '../../Img/FotoSelf.jpg';

export default function PagePerfil() {
    const { user, AbrirNavb } = useContext(DataContext);


    return (
        <div className="PagePerfil flex flex-column align-items-center justify-content-start relative" style={{ marginLeft: `${AbrirNavb ? 200 : 55}px` }}>

            <div className="ContenedorP flex flex-column align-items-center justify-content-start">

                <div className="Seccion01 relative flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 1109.91 177.07"><defs>
                    </defs><title>Sin título-1</title>
                        <path class="cls-1" d="M503.55,81.23c-6.62,2.22-13.24,4.74-19.85,7.62a235.68,235.68,0,0,1-32.36,11.29c-38.74,10.52-123,11.17-155-36,0,0,28,84.09,112.81,92.81,25.62,2.63,58.2-4.44,81.26-15.89,12-6,13.35-5.93,19.85-9.7a74.87,74.87,0,0,1-6.68-50.15Z" transform="translate(-171.63 0.14)" />
                        <path class="cls-1" d="M651.38,102.87c38.48,3.6,82.15,15.54,130.62,40-26.65-22.79-75-52-133.14-66A75,75,0,0,1,651.63,97C651.63,99,651.53,100.93,651.38,102.87Z" transform="translate(-171.63 0.14)" /><path class="cls-1" d="M1266,0h15.55C1276.24-.19,1271.06-.18,1266,0Z" transform="translate(-171.63 0.14)" /><path class="cls-1" d="M1266,0H171.63c76.58,0,106.71,30.15,115.94,42.71,1.11,1.85,2.25,3.65,3.41,5.38h0c57.94,86.42,186,32.11,186,32.11,8.69-3,18.61-6.54,29.76-9.83a74.88,74.88,0,0,1,138.66-3.22C685.63,77.38,731.73,98.41,784,137c87.71,64.76,189.34,36.92,247.9,12.53A140.5,140.5,0,0,0,1065.11,130a226.62,226.62,0,0,0,32.74-31.78h0v0a204,204,0,0,0,16.52-22.66C1138.16,47.4,1187.93,2.73,1266,0Z" transform="translate(-171.63 0.14)" />
                    </svg>

                    <div className="FotoProfile absolute flex align-items-center justify-content-center">
                        <img src={FotoSelf} alt="" />
                    </div>
                    <div className="NombreProfile absolute">
                        Anderson Huamancaja Porras
                    </div>
                </div>


                <div className="Seccion02 relative">
                    <div className="CuadStyle01">
                        <DesplegableProfile
                            Titulo={'Datos Personales'}
                            Height={'115px'}
                            Contenido={<SecDatosPersonales />} />
                    </div>
                    <div className="CuadStyle02">
                        <DesplegableProfile
                            Titulo={'Contacto'}
                            Height={'115px'}
                            Contenido={<SecContacto />} />
                    </div>
                    <div className="CuadStyle01">
                        <DesplegableProfile
                            Titulo={'Sobre mi'}
                            Height={'155px'}
                            Contenido={<SecSobreMi />} />
                    </div>
                    <div className="CuadStyle02">
                        <DesplegableProfile
                            Titulo={'Conocimientos'}
                            Height={'155px'}
                            Contenido={<SecConocimientos />} />
                    </div>
                    <div className="CuadStyle02">
                        <DesplegableProfile
                            Titulo={'Formacion Academica'}
                            Height={'150px'}
                            Contenido={<SecFormacion />} />
                    </div>
                    <div className="CuadStyle03">
                        <DesplegableProfile
                            Titulo={'Experiencia Laboral'}
                            Height={'380px'}
                            Contenido={<SecExperiencia />} />
                    </div>
                    <div className="CuadStyle02">
                        <DesplegableProfile
                            Titulo={'Valores'}
                            Height={'170px'}
                            Contenido={<SecValores />} />
                    </div>
                </div>
            </div>
        </div>
    )
}