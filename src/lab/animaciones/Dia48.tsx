import './estilos/Dia48.scss';

/* Día 48 — 3D Cube
   "Seis caras, una perspectiva y una transición: el cubo de manual."

   Cada cara es un cuadrado de 200 px girado a su sitio y empujado 100 px hacia
   fuera —la mitad del lado—, que es lo que las junta en un cubo. Los grises van
   de 255 a 204 para fingir la luz, porque en CSS no hay sombreado.

   Al pasar el ratón el cubo da media vuelta larga: 190° en X y 180° en Z. */

const CARAS = ['frente', 'atras', 'derecha', 'izquierda', 'arriba', 'abajo'];

export default function Dia48() {
  return (
    <div className="Dia48">
      <div className="Dia48-centro">
        <div className="Dia48-cubo">
          {CARAS.map((cara) => (
            <div key={cara} className={`Dia48-cara ${cara}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

