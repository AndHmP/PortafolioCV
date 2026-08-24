import './estilos/Dia94.scss';

/* Día 94 — Tree
   "¿Nunca quisiste ser jardinero? Progrémate un árbol." */

const HOJAS = 26;

export default function Dia94() {
  return (
    <div className="Dia94">
      <div className="Dia94-arbol">
        <span className="Dia94-copa c1" />
        <span className="Dia94-copa c2" />
        <span className="Dia94-copa c3" />

        {Array.from({ length: HOJAS }, (_, i) => (
          <span key={i} className={`Dia94-hoja h${i}`} />
        ))}

        <span className="Dia94-tronco" />
      </div>
      <span className="Dia94-suelo" />
    </div>
  );
}
