
import './estilos/Dia21.scss';

export default function Dia21() {

    return (
        <div className="Dia21 relative flex align-items-center justify-content-center">

            <div className="pacMan flex align-items-start justify-content-end">
                <div className="ojo"></div>
            </div>
            <svg className="dots absolute">
                <polyline points="0,7 240,7" />
            </svg>
        </div>
    )
}