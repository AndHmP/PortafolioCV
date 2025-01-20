import React, { useRef, useEffect, useState } from "react";
import "../../Style/Components/Inputs/InputType05.css";

export default function InputType05({placeholder, titulo}) {
    const inputRef = useRef(null);
    const inputNotifRef = useRef(null);

    const [Focus, setFocus] = useState(false);
    const [value, setValue] = useState('')

    return (
        <div
            className="ContenedorInputType05 relative"
            ref={inputRef}
        >
            <input type="text" className='InputType05'
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }} 
                placeholder={placeholder}
                />

            <div className={`SeccName absolute flex align-items-center justify-content-center 
                ${Focus ? 'Active' : ''}`} ref={inputNotifRef}>{titulo}</div>

            <style>
                {`
                    .ContenedorInputType05 .SeccName{
                        height: ${inputRef.current ?
                        inputRef.current.offsetHeight - 3 + 'px'
                        : '92%'};
                        bottom: ${inputRef.current ? '1.5px' : '4%'};
                        left: ${inputRef.current ? '1.5px' : '2px'};
                    }
                    .ContenedorInputType05 .InputType05{
                        padding: 10px 6px 10px ${Focus?
                            '10px':inputNotifRef.current?
                            inputNotifRef.current.offsetWidth+8+'px'
                            :'60px'};
                        color: var(${Focus?'--var-color-01-nav-bar':
                            '--var-color-02-nav-bar'
                        });
                        opacity: ${value || Focus ? '1':'0'}
                    }
                `}
            </style>
        </div>
    );
}
