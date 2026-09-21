import { useState } from 'react';

import './estilos/Dia76.scss';

/* Día 76 — Reveal Key
   "Escribe la contraseña y el campo se da la vuelta."

   El campo y su reverso comparten caja con `backface-visibility: hidden`: al
   girar 180° en X, el que estaba de frente desaparece y asoma el otro. Debajo
   queda la clave, que hasta entonces estaba tapada por el propio campo.

   La contraseña es literalmente «password», como en el reto. El pen la valida
   con un `pattern` en el input y dispara el giro con `:valid`; aquí se compara
   en el componente, que es lo mismo y no obliga a envolverlo en un `<form>`. */

const CLAVE = 'password';

export default function Dia76() {
  const [texto, setTexto] = useState('');
  const abierto = texto.toLowerCase() === CLAVE;

  return (
    <div className="Dia76">
      <div className="Dia76-centro">
        <div className="Dia76-caja">
          <div className={`Dia76-giro ${abierto ? 'abierto' : ''}`}>
            <input
              className="Dia76-campo"
              type="text"
              placeholder={'Enter "password"'}
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              aria-label="Contraseña"
            />
            <div className="Dia76-reverso">Secret Key</div>
          </div>

          <div className="Dia76-clave">MD5-SU3-CX8</div>
        </div>
      </div>
    </div>
  );
}

