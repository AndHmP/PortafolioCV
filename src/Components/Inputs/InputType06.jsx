import React, { useRef, useState } from "react";
import "../../Style/Components/Inputs/InputType06.css";

export default function InputType06({ placeholder }) {
    const inputRef = useRef(null);
    const [Focus, setFocus] = useState(false); 
    const [value, setValue] = useState(""); 

    return (
        <div className="ContenedorInputType06 relative">
            <input
                type="text"
                className="InputType06"
                value={value}
                ref={inputRef}
                onChange={(e) => setValue(e.target.value)} 
                onFocus={() => setFocus(true)} 
                onBlur={() => setFocus(false)} 
                placeholder={placeholder}
            />
            <div className={`BorderDinamico absolute ${Focus || value ? "Active" : "DesActive"}`}></div>
        </div>
    );
}
