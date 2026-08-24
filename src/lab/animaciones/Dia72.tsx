import './estilos/Dia72.scss';

/* Día 72 — The Rings
   "Una animación simple y meditativa hecha de círculos." */

const ANILLOS = 9;

export default function Dia72() {
  return (
    <div className="Dia72">
      <div className="Dia72-conjunto">
        {Array.from({ length: ANILLOS }, (_, i) => (
          <span key={i} className={`Dia72-anillo a${i}`} />
        ))}
      </div>
    </div>
  );
}
