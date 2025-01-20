import react, { useState } from "react";
import '../../Style/Components/Inputs/InputType04.css'


export default function InputType04({ placeholder }) {

    const [FocusInput, setFocusInput] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className="ContenedorInputType04 relative flex flex-column justify-content-start">
            <input type="text"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
                className='InputType04'
                onFocus={() => { setFocusInput(true) }}
                onBlur={() => { setFocusInput(false) }} />

            <div className={`Reaccion relative ${FocusInput ? 'Active' : ''}`}>
            </div>
            <div className="PlaceholderDespl04 absolute">
                {placeholder}
            </div>

            <style>
                {`
                    .ContenedorInputType04 .InputType04{
                        color: var(${FocusInput || value
                            ? '--var-color-01-nav-bar'
                            : '--var-color-02-nav-bar'});
                    }
                    .ContenedorInputType04 .Reaccion::before{
                        width: ${FocusInput || value ? '100%': '0%'}
                    }
                    .ContenedorInputType04 .PlaceholderDespl04{
                        width: ${FocusInput || value ?'100%':'0%'};
                        top: ${FocusInput || value ?'110%':'30%'};
                        font-size: ${FocusInput || value ? '12px': '14px'};
                        color: var(${FocusInput
                            ? '--var-color-01-nav-bar'
                            : '--var-color-02-nav-bar'});
                    }
                `}
            </style>

        </div>
    )
}