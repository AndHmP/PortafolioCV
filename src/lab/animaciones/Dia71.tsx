import { useState } from 'react';

import './estilos/Dia71.scss';

/* Día 71 — Morse Code Keyboard
   "El alfabeto entero, tecla a tecla, en código morse."

   Al pulsar una tecla, la luz de arriba emite su código: cada símbolo ocupa un
   segundo, y lo único que cambia entre el punto y la raya es cuánto se queda
   encendida —del 41 al 59 % del segundo el punto, del 16 al 84 % la raya.

   El pen escribe una animación por símbolo y letra: 36 reglas y más de cien
   `@keyframes`. Aquí son dos keyframes y la cadena se arma al vuelo. */

const MORSE: Record<string, string> = {
  a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.',
  h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.',
  o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-',
  v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
  '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
};

/* Escrito a mano y no con `Object.keys`: JavaScript coloca las claves que
   parecen enteros delante de todo, y las cifras se subían a la primera fila. */
const TECLAS = [
  ...'abcdefghijklmnopqrstuvwxyz'.split(''),
  ...'0123456789'.split(''),
];

export default function Dia71() {
  const [letra, setLetra] = useState<string | null>(null);
  const [pulsacion, setPulsacion] = useState(0);

  const emitir = (t: string) => {
    setLetra(t);
    setPulsacion((n) => n + 1);
  };

  /* Un segundo por símbolo, encadenados con retrasos de 1 s. */
  const animacion = letra
    ? MORSE[letra]
        .split('')
        .map((s, i) => `${s === '.' ? 'Dia71Punto' : 'Dia71Raya'} 1s ease ${i}s 1`)
        .join(', ')
    : 'none';

  return (
    <div className="Dia71">
      <div className="Dia71-teclado">
        {TECLAS.map((t) => (
          <span
            key={t}
            className={`Dia71-tecla ${t === '0' ? 'primera-cifra' : ''}`}
            role="button"
            tabIndex={0}
            aria-label={`Emitir ${t.toUpperCase()}`}
            onClick={() => emitir(t)}
            onKeyDown={(e) => e.key === 'Enter' && emitir(t)}
          >
            {t}
          </span>
        ))}

        {/* La `key` remonta el nodo para que la animación vuelva a arrancar
            aunque se pulse dos veces la misma tecla. */}
        <span key={pulsacion} className="Dia71-luz" style={{ animation: animacion }} />
      </div>
    </div>
  );
}


