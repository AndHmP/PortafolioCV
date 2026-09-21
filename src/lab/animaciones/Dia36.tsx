import { useId, useState } from 'react';

import Icono from '@/componentes/iconos/Icono';
import './estilos/Dia36.scss';

/* Día 36 — Tabs
   "La solución para diseños con poco espacio o muchos niveles de navegación."

   Una ventana blanca sobre pizarra, con cuatro iconos a la izquierda de la
   barra y la lupa suelta a la derecha. Los cuatro paneles están siempre
   montados, uno encima de otro: solo cambian de opacidad y suben 3 px.

   El original usa radios ocultos y `:checked ~`; aquí los radios son de verdad
   pero controlados por React, que es lo que ya hace el resto del laboratorio.

   Los anchos de los renglones grises son los del pen, en porcentaje del ancho
   útil del panel. */

const PANELES = [
  { titulo: 'Dashboard', icono: 'ojo' as const },
  { titulo: 'Comments', icono: 'comentario' as const },
  { titulo: 'Notifications', icono: 'campana' as const },
  { titulo: 'Settings', icono: 'engranaje' as const },
];

const RENGLONES = [
  [93, 100, 87, 97, 20],
  [97, 87, 91, 97, 54],
];

export default function Dia36() {
  const [activa, setActiva] = useState(0);
  const grupo = useId();

  return (
    <div className="Dia36">
      <div className="Dia36-ventana">
        <div className="Dia36-top" />

        {PANELES.map((panel, i) => (
          <label
            key={panel.titulo}
            className={`Dia36-tab ${activa === i ? 'activa' : ''}`}
          >
            <input
              type="radio"
              name={grupo}
              checked={activa === i}
              onChange={() => setActiva(i)}
            />
            <Icono nombre={panel.icono} tamano={14} titulo={panel.titulo} />
          </label>
        ))}

        <span className="Dia36-tab Dia36-tab-buscar">
          <Icono nombre="buscar" tamano={14} />
        </span>

        <div className="Dia36-contenido">
          {PANELES.map((panel, i) => (
            <div
              key={panel.titulo}
              className={`Dia36-caja ${activa === i ? 'visible' : ''}`}
            >
              <div className="Dia36-titulo">{panel.titulo}</div>
              {RENGLONES.map((parrafo, j) => (
                <p key={j}>
                  {parrafo.map((ancho, k) => (
                    <span key={k} style={{ width: `${ancho}%` }} />
                  ))}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


