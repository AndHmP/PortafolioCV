import './estilos/Dia28.scss';

/* Día 28 — Ring Ring
   "Por suerte omití el sonido. El color de señal y el movimiento
   deberían bastar."

   La silueta va en SVG porque el faldón acampanado y el badajo no salen
   limpios encadenando border-radius. Los viewBox son las medidas reales del
   pen de referencia: la campana 48,5 × 53 y cada arco 14 × 60. */

/* Tres por lado, escalonados: el original suelta uno cada quinto del ciclo. */
const ARCOS = [0, 1, 2];

function Onda({ lado }: { lado: 'izq' | 'der' }) {
  return (
    <>
      {ARCOS.map((n) => (
        <span key={n} className={`Dia28-onda ${lado}${n ? ` tarda-${n}` : ''}`}>
          <svg viewBox="0 0 14 60" aria-hidden="true">
            <path d="M1.6 1.6Q12.4 30 1.6 58.4" />
          </svg>
        </span>
      ))}
    </>
  );
}

export default function Dia28() {
  return (
    <div className="Dia28">
      <Onda lado="izq" />
      <Onda lado="der" />

      <div className="Dia28-campana">
        <svg viewBox="0 0 48.5 53" aria-hidden="true">
          {/* Pomo superior */}
          <circle cx="24.25" cy="4.6" r="4.1" />
          {/* Cuerpo y faldón */}
          <path
            d="M24.25 7C14.6 7 10.4 15.6 10.4 28.5c0 8-4.8 11.2-8.9 13.8
               -2.3 1.5-1.4 4.5 1.4 4.5h43.7c2.8 0 3.7-3 1.4-4.5
               -4.1-2.6-8.9-5.8-8.9-13.8C38.1 15.6 33.9 7 24.25 7Z"
          />
          {/* Badajo */}
          <path d="M17.9 46.8c0 8.4 12.7 8.4 12.7 0Z" />
        </svg>
      </div>
    </div>
  );
}
