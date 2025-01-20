import React, { createContext, useState, useEffect } from "react";
import ReactIcono from '../Icons/ReactIcono.jsx';
import JavaScriptIcono from "../Icons/JavaScriptIcono.jsx";
import CssIcono from "../Icons/CssIcono.jsx";
import HtmlIcono from "../Icons/HtmlIcono.jsx";
import IllustratorIcono from "../Icons/IllustratorIcono.jsx";
import WordIcono from "../Icons/WordIcono.jsx";
import PowerPointIcono from "../Icons/PowerPointIcono.jsx";


import InicialIcono from "../Icons/Formacion/InicialIcono.jsx";
import PrimariaIcono from "../Icons/Formacion/PrimariaIcono.jsx";
import SecundariaIcono from "../Icons/Formacion/SecundariaIcono.jsx";
import SenatiIcono from "../Icons/Formacion/SenatiIcono.jsx";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [AbrirNavb, setAbrirNavb] = useState(true);

    const [TokenLocal, setTokenLocal] = useState(null);
    useEffect(() => {
        setTokenLocal(localStorage.getItem('authToken'));
    }, [])




    // FUNCIONES APIS
    async function GetProfile() {
        try {
            const token = localStorage.getItem('authToken')

            let response = await fetch('http://127.0.0.1:8000/api/auth/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            let data = await response.json();

            if (response.ok) {
                setUser(data);
            } else {
                console.error('Error al obtener perfil:', data);
            }
        } catch (error) {
            console.error('Hubo un error al llamar a la API:', error);
        }
    }
    async function LogOut() {
        try {
            const token = localStorage.getItem('authToken')

            if (!token) {
                console.error('No hay token para cerrar sesión.');
                return;
            }

            let response = await fetch('http://127.0.0.1:8000/api/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            let data = await response.json();

            if (response.ok) {
                localStorage.removeItem('authToken');
                window.location.reload();
            } else {
                console.error('Error al cerrar sesión:', data);
            }
        } catch (error) {
            console.error('Hubo un error al llamar a la API:', error);
        }
    }


    // useEffect(() => {
    //         GetProfile();
    // }, [])


    const InformacionGeneral =
    {
        DatosGenerales: [
            {
                icon: 'fa-solid fa-user',
                info: 'Anderson Huamancaja Porras'
            },
            {
                icon: 'fa-solid fa-cake-candles',
                info: '06-08-2005 (19 años)'
            },
            {
                icon: 'fa-solid fa-address-card',
                info: '77189938'
            },
            {
                icon: 'fa-solid fa-mars',
                info: 'Masculino'
            },
            {
                icon: 'fa-solid fa-location-dot',
                info: 'Juan Ruiz #178 Año Nuevo, Comas'
            }
        ],
        SobreMi: 'Ingeniero de software egresado de SENATI, especializado en desarrollo frontend con React. Experiencia en creación de interfaces modernas y funcionales, trabajando en proyectos para empresas como GETBYTE. Busco aportar en equipos de desarrollo enfocados en soluciones tecnológicas innovadoras.',
        Contacto: [
            {
                icon: 'fa-solid fa-envelope',
                name: 'Correo',
                text: 'Anderson@gmailcom',
                url: '',
            },
            {
                icon: 'fa-solid fa-phone-volume',
                name: 'Telefono',
                text: '839801298',
                url: '',
            },
            {
                icon: 'fa-brands fa-whatsapp',
                name: 'whasapp',
                text: '839801298',
                url: '',
            },
            {
                icon: 'fa-brands fa-linkedin',
                name: 'Linkedin',
                text: 'Anderson Huamancaja',
                url: '',
            }
        ],
        Conocimientos: [
            {
                svg: (<ReactIcono />),
                name: 'react',
                info: 'Librería de JavaScript para construir interfaces de usuario basadas en componentes.',
                exp: '1-2 años'
            },
            {
                svg: (<JavaScriptIcono />),
                name: 'Javascript',
                info: ' Lenguaje de programación que permite crear funcionalidades dinámicas en sitios web.',
                exp: '2 años'
            },
            {
                svg: (<HtmlIcono />),
                name: 'Html',
                info: 'Lenguaje de marcado utilizado para estructurar contenido en la web.',
                exp: '2 años'
            },
            {
                svg: (<CssIcono />),
                name: 'Css',
                info: 'Lenguaje de estilos que define la apariencia y diseño de las páginas web.',
                exp: '2 años'
            },
            {
                svg: (<IllustratorIcono />),
                name: 'Illustrator',
                info: 'Software para crear y editar gráficos vectoriales como logotipos e ilustraciones.',
                exp: '3-4 años'
            },
            {
                svg: (<WordIcono />),
                name: 'Word',
                info: 'Procesador de texto usado para crear, editar y dar formato a documentos escritos.',
                exp: '4-5 años'
            },
            {
                svg: (<PowerPointIcono />),
                name: 'Power Point',
                info: 'Herramienta para diseñar presentaciones con diapositivas visuales y animadas.',
                exp: '4-5 años'
            }
        ],
        FormacionAcademica: [
            {
                tem: 'Inicial',
                range: ['3', '5'],
                info: 'Educación inicial cursada en el colegio Luis Enrique, donde desarrollé habilidades básicas y sociales durante los años de infancia (3 a 5 años).',
                icon: (<InicialIcono />)
            },
            {
                tem: 'Primaria',
                range: ['6', '10'],
                info: 'Educación primaria completada en la institución educativa 2059 Suecia, ubicada en Comas, Año Nuevo. Durante esta etapa, fui reconocido en concursos de dibujo en el primer y último año escolar.',
                icon: (<PrimariaIcono />)
            },
            {
                tem: 'Secundaria',
                range: ['11', '16'],
                info: 'Educación secundaria culminada en la institución educativa emblemática Carlos Wiesse. Mantenerme consistentemente entre los tres mejores estudiantes durante toda mi trayectoria académica destacó mi compromiso y excelencia.',
                icon: (<SecundariaIcono />)
            },
            {
                tem: 'Senati',
                range: ['17', '19'],
                info: 'Formación técnica completada en el instituto SENATI, obteniendo el título en Ingeniería de Software con mención en Inteligencia Artificial. Este período fue clave para mi desarrollo profesional y técnico.',
                icon: (<SenatiIcono />)
            }

        ],
        ExperienciaLaboral: [
            {
                empresa: 'GetByte',
                tiempo: '1-2 años',
                info: 'Desempeñé el rol de desarrollador frontend utilizando React y PrimeReact para crear interfaces modernas, optimizadas y funcionales, contribuyendo al éxito de proyectos web orientados al cliente.'
            },
            {
                empresa: 'Inversiones y Distribución L&H',
                tiempo: '6 meses',
                info: 'Desarrollé el sitio web oficial de la empresa, diseñando y programando una plataforma para presentar su información corporativa y su portafolio de servicios.'
            },
            {
                empresa: 'Condo Cleaner',
                tiempo: '6 meses',
                info: 'Implementé dos sistemas clave: uno para la gestión eficiente de bases de datos y otro para visualizar y presentar la información almacenada, optimizando procesos internos.'
            },
            {
                empresa: 'KyB Imports',
                tiempo: '6 meses',
                info: 'Creé dos soluciones tecnológicas: un sistema para la administración de bases de datos y una plataforma web para la visualización de datos, mejorando la organización y presentación de la información empresarial.'
            }

        ],
        Valores: [
            {
                titulo: 'Creatividad',
                contenido: 'Capacidad para generar ideas innovadoras y soluciones originales en los proyectos, permitiendo destacar en desafíos complejos.'
            },
            {
                titulo: 'Responsabilidad',
                contenido: 'Compromiso con cumplir objetivos y entregas en tiempo y forma, asegurando siempre la calidad en los resultados.'
            },
            {
                titulo: 'Respeto',
                contenido: 'Valor fundamental para colaborar en equipo, promoviendo un ambiente de trabajo inclusivo y armonioso.'
            },
            {
                titulo: 'Organización',
                contenido: 'Habilidad para planificar tareas y administrar el tiempo de manera efectiva, logrando maximizar la productividad.'
            },
            {
                titulo: 'Autodidacta',
                contenido: 'Capacidad para aprender de forma independiente y constante, adaptándome a nuevas tecnologías y conocimientos con rapidez.'
            },
            {
                titulo: 'Independencia',
                contenido: 'Confianza para trabajar de manera autónoma, resolviendo problemas y tomando decisiones informadas sin necesidad de supervisión constante.'
            },
            {
                titulo: 'Solidaridad',
                contenido: 'Disposición para colaborar y brindar apoyo a los demás, fomentando un entorno de trabajo en equipo y empatía.'
            }
            
        ]
    }

    return (
        <DataContext.Provider
            value={{

                AbrirNavb, setAbrirNavb,
                // TOKEN
                TokenLocal, setTokenLocal,

                GetProfile, LogOut,

                user, setUser,

                InformacionGeneral
            }}
        >
            {children}
        </DataContext.Provider>
    )
}