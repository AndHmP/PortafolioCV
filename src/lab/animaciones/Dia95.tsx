import './estilos/Dia95.scss';

/* Día 95 — Pig
   "Inocente, tierno y hecho enteramente de formas básicas." */

export default function Dia95() {
  return (
    <div className="Dia95">
      <div className="Dia95-cerdo">
        <span className="Dia95-oreja izq" />
        <span className="Dia95-oreja der" />

        <div className="Dia95-cara">
          <span className="Dia95-ojo izq" />
          <span className="Dia95-ojo der" />
          <span className="Dia95-mejilla izq" />
          <span className="Dia95-mejilla der" />

          <span className="Dia95-hocico">
            <span className="Dia95-fosa izq" />
            <span className="Dia95-fosa der" />
          </span>
        </div>

        <span className="Dia95-rabo" />
      </div>
    </div>
  );
}
