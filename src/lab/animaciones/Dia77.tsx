import './estilos/Dia77.scss';

/* Día 77 — Motion Blur
   "Una bola que se desenfoca al coger velocidad, sin usar `filter`."

   La estela son seis copias translúcidas de la bola, cada vez más tenues. Van
   con la misma animación de vaivén que la bola, pero desplazadas hacia atrás:
   la primera 7 px, la segunda 14, y así hasta 42.

   Como el desfase es máximo en el cuarto y en el tres cuartos del ciclo —donde
   la bola va más rápida— y cero en los extremos, el rastro aparece y
   desaparece solo. */

const CAPAS = Array.from({ length: 6 }, (_, i) => i + 1);

export default function Dia77() {
  return (
    <div className="Dia77">
      <div className="Dia77-bola">
        {CAPAS.map((n) => (
          <div key={n} className={`Dia77-estela e${n}`} />
        ))}
      </div>
    </div>
  );
}

