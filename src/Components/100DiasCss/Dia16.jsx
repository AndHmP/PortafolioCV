import react from "react";
import '../../Style/Components/100DiasCss/Dia16.scss';

export default function Dia16() {

    return (
        <div className="Dia16 flex align-items-center justify-content-center relative">
            <div className="figura absolute"></div>

            <div className="linesOcta absolute">
                <div className="line-0"></div>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-4"></div>
                <div className="line-5"></div>
                <div className="line-6"></div>
                <div className="line-7"></div>
            </div>

            <div className="linesTrian absolute">
                <div className="line-0"></div>
                <div className="line-1"></div>
                <div className="line-2"></div>
            </div>

            <div className="lineCirle absolute"></div>
        </div>
    )
}