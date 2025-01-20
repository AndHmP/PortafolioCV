import react, { useState } from "react";
import '../../Style/Components/Inputs/InputType01.css'


export default function InputType01({ placeholder }) {

    const [Focus, setFocus] = useState(false);

    return (
        <fieldset className="ContenedorInputType01 flex align-items-center justify-content-start">
            <legend>{placeholder}</legend>
            <input type="text"
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
                className="InputType01"
            />

            <style>
                {`
                    .ContenedorInputType01{
                        border: 1.5px solid var(${Focus ? '--var-color-01-nav-bar' : '--var-color-02-nav-bar'});
                    }
                    .ContenedorInputType01 legend{
                        color: var(${Focus ? '--var-color-01-nav-bar' : '--var-color-02-nav-bar'});
                    }
                    .ContenedorInputType01 .InputType01{
                        color: var(${Focus ? '--var-color-01-nav-bar' : '--var-color-02-nav-bar'});
                    }
                `}
            </style>
        </fieldset>
    )
}