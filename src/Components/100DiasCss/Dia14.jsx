import react from "react";
import '../../Style/Components/100DiasCss/Dia14.scss';

export default function Dia14() {

    return (
        <div className="Dia14 flex align-items-center justify-content-center relative">
            <div className="card relative">

                <div className="face-1 w-full h-full flex flex-column align-items-center justify-content-center absolute">

                    <img src="https://100dayscss.com/codepen/bycicle.svg" />


                    <div className="piso flex ">
                        <div className="sub-1"></div>
                        <div className="sub-2"></div>
                        <div className="sub-3"></div>
                        <div className="sub-4"></div>
                        <div className="sub-5"></div>
                        <div className="sub-6"></div>
                        <div className="sub-7"></div>
                        <div className="sub-8"></div>
                    </div>

                </div>
                <div className="face-2 w-full h-full flex align-items-center justify-content-center absolute">
                    <div className="sky flex">
                        <div className="sub-1"></div>
                        <div className="sub-2"></div>
                        <div className="sub-3"></div>
                        <div className="sub-4"></div>
                        <div className="sub-5"></div>
                        <div className="sub-6"></div>
                        <div className="sub-7"></div>
                        <div className="sub-8"></div>
                    </div>

                    <img className="absolute" src="https://100dayscss.com/codepen/helicopter.svg" />
                </div>

            </div>
        </div>
    )
}