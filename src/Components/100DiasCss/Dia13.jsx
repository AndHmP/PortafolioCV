import react, { useState } from "react";
import '../../Style/Components/100DiasCss/Dia13.scss';

export default function Dia13() {

    const [ImgSelect, setImgSelect] = useState(null);

    const [ActivarSelec, setActivarSelec] = useState(false);

    const Imagenes = [
        "https://100dayscss.com/codepen/13-1.jpg",
        "https://100dayscss.com/codepen/13-2.jpg",
        "https://100dayscss.com/codepen/13-3.jpg",
        "https://100dayscss.com/codepen/13-4.jpg"
    ]

    return (
        <div className="Dia13 relative">
            <div className={`SeccTop absolute w-full flex flex-column align-items-center justify-content-start ${ActivarSelec ? 'active' : ''}`}>
                <img className="w-full fondo" src="https://100dayscss.com/codepen/13-1-header.jpg" alt="" />

                <button className="BtnClose absolute"
                    onClick={() => { setActivarSelec(false) }}>
                    +
                </button>

                <div className="profile absolute">
                    <img src={ImgSelect} alt="" className="" />
                </div>
            </div>

            {Imagenes.map((img) =>
            (
                <div className="flex align-items-center justify-content-center"
                    onClick={() => {
                        setImgSelect(img);
                        setActivarSelec(true)
                    }}>
                    <img src={`${img}`} alt="" />
                </div>
            )
            )}

            <div className={`SeccBottom absolute w-full h-full flex flex-column align-items-center justify-content-end ${ActivarSelec ? 'active' : ''}`}>

                <div className="w-full flex flex-column align-items-center justify-content-center">

                    <span>Julia Toth</span>
                    <div className="flex align-items-center justify-content-center">
                        <button>
                            <i className="fa fa-phone"></i>
                        </button>
                        <button>
                            <i className="fa fa-comment"></i>
                        </button>
                        <button>
                            <i className="fa fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}