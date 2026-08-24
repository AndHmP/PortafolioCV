import './estilos/Dia84.scss';

/* Día 84 — Book Cover
   "Ni imagen ni SVG: solo reglas de estilo para crear la ilusión de un libro." */

export default function Dia84() {
  return (
    <div className="Dia84">
      <div className="Dia84-libro">
        <span className="Dia84-paginas" />
        <div className="Dia84-portada">
          <span className="Dia84-lomo" />
          <p className="Dia84-titulo">CSS</p>
          <p className="Dia84-subtitulo">cien días</p>
          <span className="Dia84-adorno" />
          <p className="Dia84-autor">A. Huamancaja</p>
        </div>
      </div>
    </div>
  );
}
