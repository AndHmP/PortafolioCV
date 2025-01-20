import React, { useContext, useEffect, useState } from "react";
import '../Style/LoginInterfaz.css'
import { useNavigate } from 'react-router-dom';
import { DataContext } from "../Data/DataContext";

export default function LoginInterfaz() {
    const { setTokenLocal, GetProfile } = useContext(DataContext)
    const [FuncionActive, setFuncionActive] = useState(false);
    const navigate = useNavigate();



    // LOGIN
    const [LogCorreo, setLogCorreo] = useState('');
    const [LogContrase, setLogContrase] = useState('');

    async function Logear() {
        navigate('/home');

        // try {
        //     let payload = {
        //         email: LogCorreo,
        //         password: LogContrase
        //     };

        //     let response = await fetch('http://127.0.0.1:8000/api/auth/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Authorization': ''
        //         },
        //         body: JSON.stringify(payload)
        //     });

        //     let data = await response.json();

        //     if (response.ok) {
        //         console.log('Inicio de sesión exitoso:', data);

        //         localStorage.setItem('authToken', data?.data?.access_token);
        //         setTokenLocal(data?.data?.access_token)
        //         navigate('/home');
        //         GetProfile();

        //     } else {
        //         console.error('Error al iniciar sesión:', data);
        //     }

        // } catch (error) {
        //     console.error('Hubo un error al llamar a la API:', error);
        // }
    }




    // REGISTRAR
    const [RegNombre, setRegNombre] = useState('');
    const [RegCorreo, setRegCorreo] = useState('')
    const [RegContra, setRegContra] = useState('')
    const [RegContra2, setRegContra2] = useState('')

    async function Register() {
        try {
            let payload = {
                name: RegNombre,
                email: RegCorreo,
                password: RegContra,
                c_password: RegContra2
            };

            let response = await fetch('http://127.0.0.1:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer <tu_token_aqui>'
                },
                body: JSON.stringify(payload)
            });

            let data = await response.json();

            if (response.ok) {
                console.log('Registro exitoso:', data);
            } else {
                console.error('Error al registrar:', data);
            }

        } catch (error) {
            console.error('Hubo un error al llamar a la API:', error);
        }
    }

    const LimpiarInputs = () => {
        setLogCorreo('');
        setLogContrase('');
        setRegNombre('');
        setRegCorreo('');
        setRegContra('');
        setRegContra2('');
    }

    useEffect(() => {
        LimpiarInputs();
    }, [FuncionActive])

    return (
        <div className="LoginInterfaz flex align-items-center justify-content-around relative">

            <div className="ContenedorForms flex flex-column align-items-center justify-content-center">
                <h1>Iniciar Sesión</h1>
                <div
                    className="form w-full flex flex-column align-items-center justify-content-center">

                    <input
                        placeholder="Ingrese su correo"
                        value={LogCorreo}
                        onChange={(e) => { setLogCorreo(e.target.value) }}
                        type="text" />

                    <input
                        placeholder="Ingrese su contraseña"
                        value={LogContrase}
                        onChange={(e) => { setLogContrase(e.target.value) }}
                        type="text" />

                    <section className="flex align-items-center justify-content-between">
                        <div className="flex align-items-center justify-content-center">
                            <input type="checkbox" name="recordar" id="CheckboxRecordar" />
                            <label for="CheckboxRecordar">Recuérdamelo</label>
                        </div>
                        <a href="">Olvidaste tu contraseña</a>
                    </section>

                    <button className="submitEnv" onClick={() => { Logear() }} >Iniciar sesión</button>
                </div>


                <section className="flex flex-column align-items-center justify-content-center">
                    <div>Iniciar sesión por otras plataformas</div>
                    <div className="w-full flex align-items-center justify-content-center">
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </section>

            </div>


            <div className="ContenedorForms flex flex-column align-items-center justify-content-center">
                <h1>Registrarse</h1>
                <div className="form w-full flex flex-column align-items-center justify-content-center">
                    <input
                        placeholder="Nombre de usuario"
                        value={RegNombre}
                        onChange={(e) => { setRegNombre(e.target.value) }}
                        type="text" />
                    <input
                        placeholder="Correo electronico"
                        value={RegCorreo}
                        onChange={(e) => { setRegCorreo(e.target.value) }}
                        type="text" />
                    <input
                        placeholder="Contraseña"
                        value={RegContra}
                        onChange={(e) => { setRegContra(e.target.value) }}
                        type="text" />
                    <input
                        placeholder="Verificar contraseña"
                        value={RegContra2}
                        onChange={(e) => { setRegContra2(e.target.value) }}
                        type="text" />
                    <button className="submitEnv" onClick={() => { Register() }}>Registrar</button>
                </div>
                <section className="flex flex-column align-items-center justify-content-center">
                    <div>Iniciar sesión por otras plataformas</div>
                    <div className="w-full flex align-items-center justify-content-center">
                        <i class="fa-brands fa-google"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </section>
            </div>

            <div className={`absolute overflow-hidden h-full w-full flex align-items-center justify-content-center ${FuncionActive ? 'Login' : 'Register'}`}>
                <div className="absolute w-full h-full"></div>
                <div className="LoginContenedor absolute flex flex-column align-items-center justify-content-center">
                    <h1>Iniciar Sesión</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa quod unde laboriosam, illum veniam fugiat minima suscipit atque cupiditate</p>
                    <button className="flex align-items-center justify-content-center" onClick={() => { setFuncionActive(false) }}>
                        Iniciar Sesión
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>

                </div>
                <div className="RegisterContenedor absolute flex flex-column align-items-center justify-content-center">
                    <h1>Registrar</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ipsa quod unde laboriosam, illum veniam fugiat minima suscipit atque cupiditate</p>
                    <button className="flex align-items-center justify-content-center" onClick={() => { setFuncionActive(true) }}>
                        <i class="fa-solid fa-chevron-left"></i>
                        Registrate
                    </button>
                </div>
            </div>


        </div>
    )
}