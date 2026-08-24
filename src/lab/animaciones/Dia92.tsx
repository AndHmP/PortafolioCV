import './estilos/Dia92.scss';

/* Día 92 — Dancing Points
   "¿Reconoces el patrón que controla cada punto?" */

const PUNTOS = 30;

export default function Dia92() {
  return (
    <div className="Dia92">
      <div className="Dia92-pista">
        {Array.from({ length: PUNTOS }, (_, i) => (
          <span
            key={i}
            className="Dia92-punto"
            style={{
              left: `${(i / (PUNTOS - 1)) * 100}%`,
              /* El patrón es una onda: el desfase crece de forma lineal con
                 la posición, así que los puntos trazan una sinusoide. */
              animationDelay: `${(i / PUNTOS) * -2.4}s`,
              background: `hsl(${190 + i * 5} 88% 64%)`,
            }}
          />
        ))}
      </div>
      <p className="Dia92-clave">desfase lineal → onda sinusoidal</p>
    </div>
  );
}
