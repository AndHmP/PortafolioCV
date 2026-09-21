import './estilos/Dia86.scss';

/* Día 86 — Newton's Cradle
   "La cuna de Newton: cinco bolas, y solo se mueven las de los extremos."

   Las tres del medio están quietas todo el tiempo; el movimiento se resuelve
   con dos animaciones, una por extremo, desfasadas justo el tiempo de una
   oscilación. Como cada una se queda en reposo la mitad de su ciclo, parece
   que la energía viaja por la fila.

   El hilo es un pseudoelemento de la propia bola, y el punto de giro está
   100 px por encima: ahí está la barra. */

const BOLAS = [1, 2, 3, 4, 5];

export default function Dia86() {
  return (
    <div className="Dia86">
      <div className="Dia86-cuna">
        {BOLAS.map((n) => (
          <div key={n} className={`Dia86-bola b${n}`} />
        ))}
      </div>
    </div>
  );
}

