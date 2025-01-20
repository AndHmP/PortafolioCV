import react, { useEffect, useState } from "react";
import '../../Style/Components/100DiasCss/Dia20.scss';


export default function Dia20() {

    const [activeAnimacion, setActiveAnimacion] = useState(false);
    const [TextButon, setTextButon] = useState('SEND MAIL');
    const [secondActive, setsecondActive]= useState(false);

    useEffect(() => {
        if (activeAnimacion) {
            setTimeout(() => {
                setTextButon('RESET');
                setsecondActive(true);
            }, 2500);
        }
        else{
            setTextButon('SEND MAIL')
            setsecondActive(false)
        }

    }, [activeAnimacion])

    return (
        <div className="Dia20 flex flex-column align-items-center justify-content-center relative">
            <div className={`Secc relative flex align-items-center justify-content-center ${activeAnimacion ? 'active' : ''}`}>

            </div>
            <svg className={`mail absolute ${activeAnimacion ? 'active' : ''}`}>
                <polyline points="84,1 84,54 1,54 1,1"></polyline>
                <polyline points="84,1 42,35 1,1 85,1"></polyline>
            </svg>

            <svg className={`plane absolute ${activeAnimacion ? 'active' : ''}`}>
                <polyline points="85,0  1,45  75,60 84,0"></polyline>
                <polyline points="85,0  26,50 28,72 45,54"></polyline>
            </svg>

            <button className={`flex align-items-center justify-content-center ${activeAnimacion ? 'active' : ''} ${secondActive ? 'active02' : ''}`}
                onClick={() => { setActiveAnimacion(activeAnimacion ? false : true) }}>
                {TextButon}
            </button>
        </div>
    )
}