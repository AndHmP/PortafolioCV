import './estilos/Dia91.scss';

/* Día 91 — Loading Cube
   "Un cubo que se llena como un vaso."

   Seis caras montadas con `translateZ`, y el relleno verde es un
   pseudoelemento de cada cara lateral que crece de `scaleY(0)` a 1 con el
   origen abajo. La tapa es un plano aparte que sube desde el fondo del cubo
   hasta rozar el borde superior: por eso el nivel se ve también desde arriba.

   Al pasar el ratón el cubo se levanta 15 px y su sombra se agranda. */

const CARAS = ['fondo', 'izquierda', 'derecha', 'atras', 'frente', 'tapa'];

export default function Dia91() {
  return (
    <div className="Dia91">
      <div className="Dia91-centro">
        <div className="Dia91-cubo">
          {CARAS.map((cara) => (
            <div key={cara} className={`Dia91-cara ${cara}`} />
          ))}
          <div className="Dia91-cara nivel" />
        </div>
      </div>
    </div>
  );
}

