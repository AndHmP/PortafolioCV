import react, { useEffect, useState } from "react";
import '../../Style/Components/100DiasCss/Dia26.scss';
import { info } from "sass";

export default function Dia26() {
    const [index, setIndex] = useState(1);
    const [active, setActive] = useState(false);

    const ArrayInfo = [
        {
            titulo: 'The couch',
            contenido: 'If you want to grow, get outside your comfort zone.'
        },
        {
            titulo: 'Failing is learning',
            contenido: 'Pick yourself up, dust yourself off, and start again.'
        },
        {
            titulo: 'Flowers and rainbows',
            contenido: 'Always be yourself, unless you can be a unicorn.'
        }
    ]
    const [InfoSelect, setInfoSelect] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setInfoSelect(index)
        }, 600);
    }, [index])

    return (
        <div className="Dia26 flex align-items-center justify-content-center relative">

            <div className={`Contenedor relative flex flex-column ${active ? 'active' : ''} Nivel0${index} align-items-center justify-content-center`}>
                <div className="Info w-full flex flex-column align-items-center justify-content-center">
                    <div className="titulo">{ArrayInfo[InfoSelect - 1].titulo}</div>
                    <div className="contenido">{ArrayInfo[InfoSelect - 1].contenido}</div>
                </div>
                <div className="index absolute">{InfoSelect}</div>
                <button className="w-full" onClick={() => { setIndex(index == 3 ? 1 : index + 1); setActive(true) }}>Ok</button>
            </div>
        </div>
    )
}