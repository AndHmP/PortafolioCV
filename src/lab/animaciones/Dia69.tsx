import './estilos/Dia69.scss';

/* Día 69 — Eye
   "¿Te sientes observado? ¿Por qué no darle unas pestañas elegantes?" */

const PESTANAS = 9;

export default function Dia69() {
  return (
    <div className="Dia69">
      <div className="Dia69-ojo">
        {Array.from({ length: PESTANAS }, (_, i) => (
          <span key={i} className={`Dia69-pestana p${i}`} />
        ))}

        <span className="Dia69-globo">
          <span className="Dia69-iris">
            <span className="Dia69-pupila" />
            <span className="Dia69-brillo" />
          </span>
        </span>

        <span className="Dia69-parpado" />
      </div>
    </div>
  );
}
