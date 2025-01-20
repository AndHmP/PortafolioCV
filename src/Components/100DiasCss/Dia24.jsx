import react, { useState } from "react";
import '../../Style/Components/100DiasCss/Dia24.scss';

export default function Dia24() {


    const [activeAnimacion, setactiveAnimacion] = useState(false);


    return (
        <div className="Dia24 flex align-items-center justify-content-center relative">
            <button className={`absolute ${activeAnimacion ? 'active' : ''}`} onClick={() => { setactiveAnimacion(activeAnimacion ? false : true) }}>
                Finish
            </button>
            <div className={`iconUp absolute flex align-items-center justify-content-center ${activeAnimacion ? 'active' : ''}`}>
                <svg className="flex align-items-center justify-content-center" width={42} height={42}>
                    <circle r={19.5} cy={21} cx={21}></circle>
                </svg>
            </div>
            <img className={`absolute ${activeAnimacion ? 'active' : ''}`} src="https://100dayscss.com/codepen/checkmark-green.svg"/>

        </div>
    )
}