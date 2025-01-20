import React,{useContext} from "react";
import '../../Style/Pages/Home/PageHome.css'
import NavBar from "../../Components/NavBar/NavBar";
import { DataContext } from "../../Data/DataContext";

export default function PageHome() {

    const { user, LogOut } = useContext(DataContext)
    const Limpiar = () => {
        localStorage.removeItem('authToken');
        LogOut();

    }


    return (
        <div className="PageHome w-full h-full relative">
            {user?.data?.name}
            <button onClick={() => { Limpiar();
            ; }}>Log out</button>
        </div>
    )
}