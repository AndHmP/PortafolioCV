import React, { useContext, useState } from "react";
import '../../Style/Components/Temas/Temas.css';
import { DataContext } from "../../Data/DataContext";


export default function Temas() {

    const [ActivarChange, setActivarChange] = useState(false);

    return (
        <div className={`Temas ${ActivarChange ? 'Active' : ''} fixed`}
            onClick={() => { ActivarChange ? setActivarChange(false) : setActivarChange(true) }}>
            <div className="relative flex flex-column">
                <i class="fa-solid fa-moon relative"></i>
                <i class="fa-solid fa-sun-bright relative"></i>

                {ActivarChange && (
                    <style>
                        {`
                            :root {
                                --var-color-01: #fff;
                                --var-color-02: #000;
                                --var-color-03: #dfdfdf;
                                --var-color-04: #4d4d4d;
                                --var-color-05: #e1e1e1;


                                --var-back-ground-nav-bar: #13131A;
                                --var-color-01-nav-bar: #fff;
                                --var-color-02-nav-bar: #91929E;
                                --var-color-03-nav-bar: #37394A;


                                --var-color-01-inputs-back :#2f2f36;
                                --var-color-02-inputs-back : #24242d;

                                  
                                --var-color-01-perfil: #fff;
                                --var-color-02-perfil: #4d4d4d;
                                --var-color-03-perfil: #13131A;
                                --var-color-03-perfil-hover: #1d1d24;
                                --var-color-04-perfil: #91929E;
                                --var-color-04-perfil-hover: #b9bac6;
                                --var-color-05-perfil: #000;
                            }
                        `}
                    </style>
                )}
            </div>
        </div>
    )
}