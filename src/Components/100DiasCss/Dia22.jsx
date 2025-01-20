import react from "react";
import '../../Style/Components/100DiasCss/Dia22.scss';

export default function Dia22() {

    return (
        <div className="Dia22 flex align-items-center justify-content-center">
            <div className="ContenedorData">
                <div className="titulo">your daily <strong>progress</strong></div>
                <div className="grafico01 relative flex align-items-center justify-content-center">
                    <svg width="120" height="90">
                        <circle r="38" cx="60" cy="45" />
                    </svg>
                    <div className="dataCircle01 absolute flex flex-column align-items-center justify-content-center">
                        <strong> 2758 </strong>kcal
                    </div>
                </div>

                <div className="grafico02 relative flex align-items-center justify-content-center">
                    <svg width='60px' height='60px'>
                        <circle r='25' cy='30' cx='30' />
                    </svg>
                    <div className="dataCircle02 absolute flex flex-column align-items-center justify-content-center">
                        <strong> 8563 </strong>steps
                    </div>
                </div>
                <div className="grafico03 relative flex align-items-center justify-content-center">
                    <svg width='60px' height='60px'>
                        <circle r='25' cy='30' cx='30' />
                    </svg>
                    <div className="dataCircle02 absolute flex flex-column align-items-center justify-content-center">
                        <strong> 6,2 </strong>km
                    </div>
                </div>
            </div>
        </div>
    )
}