import react, { useState } from "react";
import '../../Style/Components/Inputs/InputType02.css'


export default function InputType02({ placeholder }) {

    const [Focus, setFocus] = useState(false);
    const [value, setValue] = useState('');

    return (
        <fieldset className="ContenedorInputType02 flex align-items-center justify-content-start"
        >
            <legend>{Focus ? placeholder : ' h'}</legend>
            <input type="text"
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
                className="InputType02"
            />

            <div className={`PlaceholdeVar02 absolute`}>
                {placeholder}
            </div>

            <style>
                {`
                    .ContenedorInputType02 {
                        border: 1.5px solid var(${Focus ? '--var-color-01-nav-bar' : '--var-color-02-nav-bar'});
                    }
                    .ContenedorInputType02 .InputType02{
                        color: var(${Focus ? '--var-color-01-nav-bar' : '--var-color-02-nav-bar'});
                    }
                    .ContenedorInputType02 legend{
                        width: ${Focus || value ? placeholder?.length * 6 + 'px' : '0px'};
                    }
                    .ContenedorInputType02 .PlaceholdeVar02{
                        font-size: ${Focus || value ? '12px' : '14px'};
                        color: var(${Focus ? '--var-color-01-nav-bar' : '--var-color-02-nav-bar'});
                        left: ${Focus || value ? '20px' : '18px'};
                        top: ${Focus || value ? '-15px' : '5px'};
                    }
                `}
            </style>
        </fieldset>
    )
}