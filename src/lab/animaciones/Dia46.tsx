import './estilos/Dia46.scss';

/* Día 46 — Iris Circles
   "Seis anillos de doce puntos que se abren y se cierran como un diafragma."

   Los seis anillos son idénticos: doce puntos repartidos cada 30°. Lo que los
   distingue es la animación —cada uno arranca de una escala menor y termina en
   otra, con 5° más de giro que el anterior—, así que en el recorrido se
   adelantan y se retrasan entre ellos y el conjunto dibuja las aspas.

   Las escalas son las del pen: de (8−n)/7 a (23−n)/22. */

const ANILLOS = [1, 2, 3, 4, 5, 6];
const PUNTOS = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Dia46() {
  return (
    <div className="Dia46">
      {ANILLOS.map((a) => (
        <div key={a} className={`Dia46-anillo a${a}`}>
          {PUNTOS.map((p) => (
            <div key={p} className={`Dia46-punto p${p}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

