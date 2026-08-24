import './estilos/Dia89.scss';

/* Día 89 — Animated Pattern
   "Si miras de cerca te marearás, pero hay que hacerlo para entender el movimiento." */

const LADO = 8;

export default function Dia89() {
  return (
    <div className="Dia89">
      <div className="Dia89-malla">
        {Array.from({ length: LADO * LADO }, (_, i) => (
          <span
            key={i}
            className="Dia89-celda"
            style={{
              /* El retardo depende de fila + columna: la diagonal es lo que
                 convierte 64 giros idénticos en una ola. */
              animationDelay: `${(Math.floor(i / LADO) + (i % LADO)) * 0.09}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
