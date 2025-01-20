import react, { useEffect, useState } from "react";
import '../../Style/Components/100DiasCss/Dia15.scss'

export default function Dia15() {


    const [active, setActive] = useState(false);

    const [disabled, setDisabled] = useState(false)

    // useEffect(() => {
    //     setDisabled(true)
    //     setTimeout(() => {
    //         setDisabled(false)
    //     }, 4000);
    // }, [active])


    const [file, setFile] = useState(null);

    const [activeAnimacion, setActiveAnimacion] = useState(false);

    const [textButton, setTextButton] = useState('Upload file')
    const Activar = () => {
        setActiveAnimacion(true);
        setTextButton('Uploading...')
        setTimeout(() => {
            setTextButton('Done')
        }, 5000);
    }



    return (
        <div className="Dia15 flex align-items-center justify-content-center">
            <div className="ContenedorInput flex flex-column align-items-center justify-content-between">
                <div className="titulo">Drop file to upload</div>
                <div className="input relative flex align-items-center justify-content-center">
                    <input type="file" name="" id=""
                        onChange={(e) => {
                            setFile(e.target.files[0]); console.log(e.target.files[0]);
                        }}
                    />
                    <div className={`border absolute flex align-items-center justify-content-center ${activeAnimacion ? 'active' : ''}`} style={{ transition: `${!file ? '5s' : '0s'}` }}>
                        {file ? file?.name : ''}
                    </div>

                    {!file && (
                        <img
                            src="https://100dayscss.com/codepen/upload.svg"
                            alt="" className={`absolute img01 ${activeAnimacion ? 'active' : ''}`}
                        />
                    )}
                    <div className={`img02 absolute flex align-items-center justify-content-center ${activeAnimacion ? 'active' : ''}`}>
                        <img
                            src="https://100dayscss.com/codepen/syncing.svg"
                            alt="" className={`absolute`}
                        />
                    </div>

                    <div className={`img03 absolute flex align-items-center justify-content-center ${activeAnimacion ? 'active' : ''}`}>
                        <img
                            src="https://100dayscss.com/codepen/checkmark.svg"
                            alt="" className={`absolute`}
                        />
                    </div>

                    <div className={`load absolute ${activeAnimacion ? 'active' : ''}`}></div>
                </div>
                <div className="btnEnvio">
                    <button
                        disabled={activeAnimacion}
                        onClick={() => { if (file) { Activar() } }}
                    >{textButton}
                    </button>
                </div>

            </div>
        </div>
    )
}