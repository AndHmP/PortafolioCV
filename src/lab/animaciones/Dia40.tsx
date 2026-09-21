import { useState } from 'react';

import './estilos/Dia40.scss';

/* Día 40 — Gallery
   "Una galería de fotos siempre es un buen ejercicio de maquetación."

   Rejilla de 3×3. Al pulsar una foto crece a escala 3,0625 —justo lo que hace
   falta para que 128 px cubran los 392 de la rejilla— y las otras ocho se
   desvanecen. Cada celda tiene su propio `transform-origin` según el lugar que
   ocupa, así que todas se expanden hacia el mismo encuadre.

   Se vuelve atrás pulsando la foto ampliada. */

const FOTOS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Dia40() {
  const [activa, setActiva] = useState<number | null>(null);

  return (
    <div className="Dia40">
      <div className="Dia40-fotos">
        {FOTOS.map((n) => (
          <div
            key={n}
            className={`Dia40-foto f${n} ${activa === n ? 'activa' : ''} ${
              activa !== null && activa !== n ? 'lejos' : ''
            }`}
            role="button"
            tabIndex={0}
            aria-label={`Foto ${n}`}
            onClick={() => setActiva(activa === n ? null : n)}
            onKeyDown={(e) => e.key === 'Enter' && setActiva(activa === n ? null : n)}
          >
            <img src={`/lab/dia40/${n}.jpg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

