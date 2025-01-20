import react, { useContext } from "react";
import '../../Style/Pages/Inputs/PageInputsText.css'
import { DataContext } from '../../Data/DataContext.js'



// INPUTS
import InputType01 from "../../Components/Inputs/InputType01.jsx";
import InputType02 from "../../Components/Inputs/InputType02.jsx";
import InputType03 from "../../Components/Inputs/InputType03.jsx";
import InputType04 from "../../Components/Inputs/InputType04.jsx";
import InputType05 from "../../Components/Inputs/InputType05.jsx";
import InputType06 from "../../Components/Inputs/InputType06.jsx";

export default function PageInputsText() {

    const { AbrirNavb } = useContext(DataContext)

    return (
        <div className="PageInputsText flex flex-column" style={{ marginLeft: `${AbrirNavb ? '200' : '55'}px` }}>

            <div className="TituloInputs">

            </div>

            <div className="ContentInputs">
                <div className="SeccionInput flex align-items-center justify-content-center">
                    <InputType01
                        placeholder={'Ingrese su nombre:'}
                    />
                </div>
                <div className="SeccionInput flex align-items-center justify-content-center">
                    <InputType02
                        placeholder={'Ingrese su nombre:'}
                    />
                </div>
                <div className="SeccionInput flex align-items-center justify-content-center">
                    <InputType03
                        placeholder={'Ingrese su nombre:'}
                    />
                </div>
                <div className="SeccionInput flex align-items-center justify-content-center">
                    <InputType04
                        placeholder={'Ingrese su nombre:'}
                    />
                </div>
                <div className="SeccionInput flex align-items-center justify-content-center">
                    <InputType05
                        placeholder={'Ingrese su nombre:'}
                        titulo={'nombre'}
                    />
                </div>
                <div className="SeccionInput flex align-items-center justify-content-center">
                    <InputType06
                        placeholder={'Ingrese su nombre:'}
                        titulo={'nombre'}
                    />
                </div>
            </div>

        </div>
    )
}