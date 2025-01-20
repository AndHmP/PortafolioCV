import react from "react";
import '../../Style/Components/100DiasCss/Dia09.scss'


export default function Dia09() {

    return (

        <div className="Dia09 flex flex-column align-items-center justify-content-start">
            <div className="IlustracionD09 w-full relative">
                {[...Array(10)].map((_, index) => (
                    <div key={index} className={`gota01-${index + 1} absolute`}></div>
                ))}

                {[...Array(10)].map((_, index) => (
                    <div key={index} className={`gota02-${index + 1} absolute`}></div>
                ))}

                {[...Array(10)].map((_, index) => (
                    <div key={index} className={`gota03-${index + 1} absolute`}></div>
                ))}


                <div className="montana01 absolute ver01"></div>
                <div className="montana01 absolute ver02"></div>
                <div className="montana01 absolute ver03"></div>


                <div className="montana02 absolute ver01"></div>
                <div className="montana02 absolute ver02"></div>

                <div className="luna absolute"></div>
            </div>

            <div className="DatosInfoD09 w-full flex align-items-center justify-content-center">
                <span>12°</span>
                <div className="flex flex-wrap align-items-center justify-content-between">
                    <div>Wind: E 7 km/h</div>
                    <div>Tue 
                        <div> 21° / 9°</div>
                    </div>
                    <div>Humidity: 87%</div>
                    <div>Wed 
                        <div> 23° / 10°</div>
                    </div>
                </div>
            </div>
        </div>
    )
}