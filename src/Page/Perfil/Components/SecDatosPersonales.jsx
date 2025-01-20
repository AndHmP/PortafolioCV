import react, { useContext } from "react";
import '../StylesComponents/SecDatosPersonales.scss';
import { DataContext } from "../../../Data/DataContext";

export default function SecDatosPersonales() {

    const { InformacionGeneral } = useContext(DataContext);
    return (
        <div className="SecDatosPersonales flex flex-column w-full h-full">
            {InformacionGeneral.DatosGenerales.map((item) => {
                return (
                    <div className="SecOne flex w-full">
                        <i className={`${item.icon}`}></i>
                        {item.info}
                    </div>
                )
            })}
        </div>
    )
}