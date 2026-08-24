import './estilos/Dia73.scss';

/* Día 73 — Word Carousel
   "El carrusel de palabras también sirve para lucir tus habilidades." */

const PALABRAS = ['interfaces', 'componentes', 'animaciones', 'sistemas', 'productos'];

export default function Dia73() {
  return (
    <div className="Dia73">
      <p className="Dia73-frase">
        <span className="Dia73-fijo">Construyo</span>

        <span className="Dia73-ventana">
          <span className="Dia73-cinta">
            {PALABRAS.map((p) => (
              <span key={p}>{p}</span>
            ))}
            {/* Repite la primera para que el salto al reiniciar sea invisible. */}
            <span aria-hidden="true">{PALABRAS[0]}</span>
          </span>
        </span>
      </p>
    </div>
  );
}
