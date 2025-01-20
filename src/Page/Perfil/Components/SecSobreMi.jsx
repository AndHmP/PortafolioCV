import react, { useContext } from "react";
import '../StylesComponents/SecSobreMi.scss';
import { DataContext } from "../../../Data/DataContext";


export default function SecSobreMi (){
    const { InformacionGeneral } = useContext(DataContext);

    return(
        <div className="SecSobreMi w-full h-full">
            {InformacionGeneral.SobreMi}
        </div>
    )
}