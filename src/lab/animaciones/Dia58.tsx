import './estilos/Dia58.scss';

/* Día 58 — 3D Sphere
   "Una esfera hecha de rodajas, como una tomografía."

   Diecinueve aros tumbados —`rotateX(90deg)`— que salen todos del centro y se
   reparten en altura hasta formar la esfera. Los tamaños y las alturas van en
   progresión: la rodaja k mide 200−2k² de ancho y se para a 14,5k − k(k−1)/2
   px del ecuador, arriba y abajo.

   Cada una llega rebotando: se pasa 4k px, vuelve 2k, se pasa k, vuelve k/2 y
   se asienta. Luego todas regresan al centro y la esfera se deshace. */

const RODAJAS = Array.from({ length: 9 }, (_, i) => i + 1);

export default function Dia58() {
  return (
    <div className="Dia58">
      <div className="Dia58-centro">
        <div className="Dia58-forma">
          <div className="Dia58-rodaja ecuador" />
          {RODAJAS.map((k) => (
            <div key={`arriba-${k}`} className={`Dia58-rodaja r${k}`} />
          ))}
          {RODAJAS.map((k) => (
            <div key={`abajo-${k}`} className={`Dia58-rodaja r${k + 9}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

