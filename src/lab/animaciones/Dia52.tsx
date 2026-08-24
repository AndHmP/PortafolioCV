import './estilos/Dia52.scss';

/* Día 52 — Dot Wave
   "Siento que entro en hipnosis si lo miro demasiado tiempo." */

const COLUMNAS = 13;
const FILAS = 13;

export default function Dia52() {
  return (
    <div className="Dia52">
      <div className="Dia52-malla">
        {Array.from({ length: FILAS }, (_, f) =>
          Array.from({ length: COLUMNAS }, (_, c) => (
            <span
              key={`${f}-${c}`}
              className="Dia52-punto"
              /* El retardo depende de la distancia al centro: eso convierte
                 una animación idéntica en una onda concéntrica. */
              style={{
                animationDelay: `${Math.hypot(f - (FILAS - 1) / 2, c - (COLUMNAS - 1) / 2) * 0.12}s`,
              }}
            />
          )),
        )}
      </div>
    </div>
  );
}
