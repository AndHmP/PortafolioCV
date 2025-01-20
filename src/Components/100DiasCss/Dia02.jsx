import react, { useState } from "react";
import '../../Style/Components/100DiasCss/Dia02.css'

export default function Dia02() {

    const [active, setActive] = useState(false);

    return (
        <div className="Dia02 flex align-items-center justify-content-center">
            <div className="menu relative flex flex-column align-items-center justify-content-center"
                onClick={() => { setActive(active ? false : true) }}>
                <div className={`secc absolute ${active ? 'active' : 'desactive'}`}></div>
                <div className={`secc absolute ${active ? 'active' : ''}`}></div>
                <div className={`secc absolute ${active ? 'active' : ''}`}></div>
            </div>
        </div>
    )
}