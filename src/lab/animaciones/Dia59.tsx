import './estilos/Dia59.scss';

/* Día 59 — Slice Transition
   "Una foto se convierte en otra en ocho tiras verticales."

   El fondo del contenedor es la primera foto. Encima hay ocho tiras de 50 px,
   todas con la segunda foto de fondo pero recortada en el punto que les toca,
   así que al juntarse recomponen la imagen entera. Las impares bajan y las
   pares suben, y ese peinado es lo que da la transición.

   Los dos rótulos se separan al mismo tiempo, uno hacia cada lado. */

const TIRAS = Array.from({ length: 8 }, (_, i) => i);

export default function Dia59() {
  return (
    <div className="Dia59">
      <div className="Dia59-tiras">
        {TIRAS.map((i) => (
          <div key={i} className={`Dia59-tira t${i}`} />
        ))}

        <div className="Dia59-texto">
          <div className="Dia59-titulo">Slice</div>
          <div className="Dia59-subtitulo">transition</div>
        </div>
      </div>
    </div>
  );
}


