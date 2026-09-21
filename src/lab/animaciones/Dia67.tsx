import './estilos/Dia67.scss';

/* Día 67 — 3D Parasol
   "Una sombrilla de playa, con su sombra, en CSS 3D."

   La tela son doce triángulos de borde repartidos cada 30° e inclinados 24°
   hacia abajo: ese pliegue es lo que da el cono. Los impares van en rojo, los
   pares en blanco.

   La sombra no es un filtro: es otra sombrilla idéntica en marrón, empujada
   150 px hacia atrás en Z, desplazada y encogida al 90 %. Gira sincronizada
   con la de arriba. El mástil también tiene su copia tumbada. */

const VARILLAS = Array.from({ length: 12 }, (_, i) => i + 1);

export default function Dia67() {
  return (
    <div className="Dia67">
      <div className="Dia67-sombrilla">
        <div className="Dia67-mastil-sombra" />
        <div className="Dia67-mastil" />

        <div className="Dia67-tela-sombra">
          {VARILLAS.map((n) => (
            <div key={n} className={`Dia67-triangulo t${n}`} />
          ))}
        </div>

        <div className="Dia67-tela">
          {VARILLAS.map((n) => (
            <div key={n} className={`Dia67-triangulo t${n}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

