import react, { useState } from "react";
import '../StylesComponents/DesplegableProfile.scss';

export default function DesplegableProfile({ Titulo, Contenido, Height }) {

    const [Open, setOpen] = useState(true)

    return (
        <div className="DesplegableProfile w-full relative flex align-items-end justify-content-end">
            <fieldset className={`ContenedorDesplegable flex align-items-center justify-content-center ${!Open ? 'active' : ''}`}>
                <legend className=" BtnActiveDesplegable relative flex align-items-center justify-content-center"
                    onClick={() => { setOpen(Open ? false : true) }}>
                    {Titulo}

                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" className="absolute">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </legend>

                <div className="Contenido" style={{ height: `${!Open ? '0px' : Height}` }}>
                    {Contenido}
                </div>
            </fieldset>
        </div>
    )
}