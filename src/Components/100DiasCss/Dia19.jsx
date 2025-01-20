import react, { useState } from "react";
import '../../Style/Components/100DiasCss/Dia19.scss';

export default function Dia19() {

    const [numPage, setNumPage] = useState(1);

    return (
        <div className="Dia19 flex align-items-center justify-content-center relative">

            <div className={`contenedorPage absolute flex align-items-center justify-content-center active01 active0${numPage}`}>
                <div className="pageSec w-full h-full"></div>
                <div className="pageSec w-full h-full"></div>
                <div className="pageSec w-full h-full"></div>
            </div>

            <div className={`botones absolute flex align-items-center justify-content-center numPage0${numPage}`}>
                <button onClick={()=>{setNumPage(1)}}></button>
                <button onClick={()=>{setNumPage(2)}}></button>
                <button onClick={()=>{setNumPage(3)}}></button>
            </div>
        </div>
    )
}