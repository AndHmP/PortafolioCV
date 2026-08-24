import './estilos/Dia85.scss';

/* Día 85 — It's something
   "No sé muy bien qué debería ser. ¿Gira, o solo sube y baja?" */

const BARRAS = 24;

export default function Dia85() {
  return (
    <div className="Dia85">
      <div className="Dia85-figura">
        {Array.from({ length: BARRAS }, (_, i) => (
          <span key={i} className={`Dia85-barra b${i}`} />
        ))}
      </div>
      <p className="Dia85-pregunta">¿gira o sube y baja?</p>
    </div>
  );
}
