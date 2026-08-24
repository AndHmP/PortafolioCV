import './estilos/Dia48.scss';

/* Día 48 — 3D Cube
   "Con CSS se puede trabajar en tres dimensiones, no solo en dos." */

const CARAS = ['frente', 'atras', 'derecha', 'izquierda', 'arriba', 'abajo'] as const;

export default function Dia48() {
  return (
    <div className="Dia48">
      <div className="Dia48-escena">
        <div className="Dia48-cubo">
          {CARAS.map((cara) => (
            <span key={cara} className={`Dia48-cara ${cara}`} />
          ))}
        </div>
        <span className="Dia48-sombra" />
      </div>
    </div>
  );
}
