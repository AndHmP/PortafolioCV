import react from "react";
import '../../Style/Components/100DiasCss/Dia05.css';


export default function Dia05() {

    return (
        <div className="Dia05 flex align-items-center justify-content-center">
            <div className="ContenedorGraf05">
                <div className="SeccionTitulo">
                    <span>Weekly report</span>
                    <span>Revenue</span>
                    <span> 01. Feb - 07. Feb</span>
                    <span>$ 3621.79</span>
                </div>

                <div className="SeccionGrafico flex flex-column aling-items-center justify-content-center">
                    <div className="leyendaGraf w-full flex align-items-center justify-content-end">
                        <span >Views</span>
                        <span>Purchases</span>
                    </div>
                    <div className="grafico w-full flex flex-column relative">
                        <svg className="w-full">
                            <polyline points="4,34 36,9 69,16 102,10 135,30 168,36 201,14"></polyline>
                        </svg>
                        <div className="red w-full h-full absolute">
                            <div className="absolute point"
                                style={{ left: 'calc(4px - 2px)', top: 'calc(34px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='458'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(36px - 2px)', top: 'calc(9px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='812'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(69px - 2px)', top: 'calc(16px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='746'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(102px - 2px)', top: 'calc(10px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='877'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(135px - 2px)', top: 'calc(30px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='517'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(168px - 2px)', top: 'calc(36px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='434'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(201px - 2px)', top: 'calc(14px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='458'>
                                </div>
                            </div>
                        </div>

                        <svg className="w-full">
                            <polyline points="4,48 36,38 69,50 102,40 135,45 168,56 201,50"></polyline>
                        </svg>

                        <div className="blue w-full h-full absolute">
                            <div className="absolute point"
                                style={{ left: 'calc(4px - 2px)', top: 'calc(49px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='26'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(36px - 2px)', top: 'calc(38px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='41'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(69px - 2px)', top: 'calc(50px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='22'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(102px - 2px)', top: 'calc(40px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='36'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(135px - 2px)', top: 'calc(45px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='25'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(168px - 2px)', top: 'calc(56px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='13'>
                                </div>
                            </div>
                            <div className="absolute point"
                                style={{ left: 'calc(201px - 2px)', top: 'calc(50px - 2px)' }}>
                                <div className="absolute hoverPoint" valueHover='20'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="graficoBase w-full flex align-items-center justify-content-between">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>
            </div>
        </div>
    )
}