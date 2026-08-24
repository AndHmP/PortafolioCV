import './estilos/Dia71.scss';

/* Día 71 — Morse Code Keyboard
   "¿Llevó tiempo? ¡Muchísimo! ¿Se puede solo con CSS? Sí." */

/* S O S en morse: punto punto punto / raya raya raya / punto punto punto. */
const SENAL = [
  '.',
  '.',
  '.',
  ' ',
  '-',
  '-',
  '-',
  ' ',
  '.',
  '.',
  '.',
] as const;

export default function Dia71() {
  return (
    <div className="Dia71">
      <p className="Dia71-titulo">S O S</p>

      <div className="Dia71-cinta">
        {SENAL.map((s, i) => (
          <span
            key={i}
            className={`Dia71-signo ${s === '.' ? 'punto' : s === '-' ? 'raya' : 'espacio'}`}
            style={{ animationDelay: `${i * 0.42}s` }}
          />
        ))}
      </div>

      <div className="Dia71-teclas">
        <span className="Dia71-tecla" />
        <span className="Dia71-tecla larga" />
      </div>
    </div>
  );
}
