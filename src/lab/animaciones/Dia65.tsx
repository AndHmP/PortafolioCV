import './estilos/Dia65.scss';

/* Día 65 — Ellipses Animation
   "Dieciocho elipses girando y aplanándose a la vez."

   Todas son la misma elipse estrecha y alta, cada una girada 10° más que la
   anterior. A mitad del ciclo se estiran 3,33 veces a lo ancho y pierden el
   radio: dejan de ser elipses y forman un cuadrado. Después terminan la vuelta
   en sentido contrario al que empezaron, y por eso el conjunto parece plegarse
   sobre sí mismo. */

const ELIPSES = Array.from({ length: 18 }, (_, i) => i + 1);

export default function Dia65() {
  return (
    <div className="Dia65">
      <div className="Dia65-forma">
        {ELIPSES.map((n) => (
          <div key={n} className={`Dia65-elipse e${n}`} />
        ))}
      </div>
    </div>
  );
}

