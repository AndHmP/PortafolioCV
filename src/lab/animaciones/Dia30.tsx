import './estilos/Dia30.scss';

/* Día 30 — Random Line
   "Es una línea. Una línea que se mueve y rodea algo. Qué sea, lo decides tú."
   Aquí la línea es una órbita, y lo que rodea es un astro. */

const ORBITAS = [
  { id: 'Dia30-orbita-a', rx: 96, ry: 34, giro: -18, dur: '7s', color: '#4ecdc4' },
  { id: 'Dia30-orbita-b', rx: 78, ry: 28, giro: 46, dur: '5s', color: '#ff6b6b' },
  { id: 'Dia30-orbita-c', rx: 108, ry: 22, giro: 100, dur: '9s', color: '#a06bff' },
];

/** Elipse expresada como path para que `animateMotion` pueda seguirla. */
function trazoElipse(rx: number, ry: number) {
  return `M 120,120 m -${rx},0 a ${rx},${ry} 0 1,0 ${rx * 2},0 a ${rx},${ry} 0 1,0 -${rx * 2},0`;
}

export default function Dia30() {
  return (
    <div className="Dia30">
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <defs>
          <radialGradient id="Dia30-astro" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="55%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#f0932b" />
          </radialGradient>
        </defs>

        {ORBITAS.map((o) => (
          <g
            key={o.id}
            className="Dia30-grupo"
            style={{ transform: `rotate(${o.giro}deg)` }}
          >
            <path id={o.id} d={trazoElipse(o.rx, o.ry)} className="Dia30-linea" stroke={o.color} />

            {/* El punto recorre exactamente el mismo trazo que se dibuja. */}
            <circle r="4.5" fill={o.color} className="Dia30-punto">
              <animateMotion dur={o.dur} repeatCount="indefinite" rotate="auto">
                <mpath href={`#${o.id}`} />
              </animateMotion>
            </circle>
          </g>
        ))}

        <circle cx="120" cy="120" r="24" fill="url(#Dia30-astro)" className="Dia30-astro" />
      </svg>
    </div>
  );
}
