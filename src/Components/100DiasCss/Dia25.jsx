import react, { use, useState } from "react";
import '../../Style/Components/100DiasCss/Dia25.scss';

export default function Dia25() {

    const [VistaFace02, setVistaFace02] = useState(false)
    return (

        <div className="Dia25 relative flex align-items-center justify-content-center">
            <svg className="absolute" width={270} height={270}>
                <path d="M0,270  L100,270 
                C110,260 140,250 130,220  
                C125,190 200,140 185,190  
                C180,230 275,180 250,140 
                C240,120 255,110 270,100
                L270,40 C250,25 220,25 200,50
                C186,70 165,68 160,60
                C148,45 140,40 130,70
                C125,100 85,100 90,75
                C95,60 55,75 60,85
                C 85,120 80,140  0,170
                L0,270"></path>
            </svg>

            <div className={`Card relative flex align-items-center justify-content-center ${VistaFace02 ? 'active' : ''}`}>

                <div className="Face-01 absolute flex align-items-center justify-content-center">
                    <svg width={39} height={55} onClick={() => { setVistaFace02(VistaFace02 ? false : true) }}>
                        <path d="M20,55 
                    L5,32 
                    C0,25 0,15 5,9 
                    C12,0 28,0 35,9 
                    C40,15 40,25 35,32
                    L20,55 
                    L20,28 
                    A7.5,7.5 0 1,1 20,13 
                    A7.5,7.5 0 1,1 20,28
                    L20,55" fill-rule="evenodd">
                        </path>
                    </svg>
                </div>


                <div className="Face-02 absolute flex flex-column align-items-center justify-content-between" onClick={() => { setVistaFace02(VistaFace02 ? false : true) }}>
                    <img src="https://100dayscss.com/codepen/surfshop.jpg" alt="" />
                    <div className="info flex flex-column align-items-center justify-content-center">
                        <div className="titulo">Phil's Surfshop</div>
                        <div className="contenido">High Street 19 8579 Arkney</div>
                    </div>
                    <div className="buttons flex align-items-center justify-content-between w-full">
                        <button onClick={() => { setVistaFace02(VistaFace02 ? false : true) }}>Save</button>
                        <div className="divisoria"></div>
                        <button onClick={() => { setVistaFace02(VistaFace02 ? false : true) }}>Route</button>
                    </div>
                </div>
            </div>
        </div>
    )
}