import { useState } from "react";
import './estilos/InputType03.css'


export default function InputType03({ placeholder }: { placeholder: string }) {

    const [FocusInput, setFocusInput] = useState(false)

    return (
        <div className="ContenedorInputType03">
            <input type="text" placeholder={placeholder}
                className={`InputType03 ${FocusInput ? 'Active' : ''}`}
                onFocus={() => { setFocusInput(true) }}
                onBlur={() => { setFocusInput(false) }} />

            <div className={`Reaccion relative w-full ${FocusInput ? 'Active' : ''}`}>
            </div>
        </div>
    )
}