import react from "react";
import '../../Style/Components/100DiasCss/Dia10.scss'

export default function Dia10() {

    return (
        <div className="Dia10 flex align-items-center justify-content-center">
            <div className="Temporizador flex align-items-center justify-content-center">
                <svg className="flex align-items-center justify-content-center">
                    <circle cx="90" cy="90" r="81"></circle>

                </svg>

                {[...Array(12)].map((_, index) => (
                    <div className={`secondBorder-${index} absolute`}></div>
                ))}


                <div className="datosTemporizador">
                    <div className="date">
                        Mon 15 Jan 2015
                    </div>
                    <div className="time">
                        11:42
                    </div>
                    <div className="ritmo">
                        <span class="fa fa-heart"></span>
                        81
                    </div>
                    <div className="peso">
                        1248 kcal
                    </div>
                </div>
            </div>
        </div>
    )
}