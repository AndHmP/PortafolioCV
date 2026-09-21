import './estilos/Dia72.scss';

/* Día 72 — The Rings
   "Diez aros que arrancan juntos y se abren en una esfera."

   Los diez son el mismo círculo de 200 px. Todos terminan en el mismo sitio
   —360° en X y −360° en Y— pero cada uno se queda quieto un 4 % más de ciclo
   que el anterior antes de empezar. Esa salida escalonada es lo que los separa
   en el espacio y dibuja la esfera. */

const AROS = Array.from({ length: 10 }, (_, i) => i + 1);

export default function Dia72() {
  return (
    <div className="Dia72">
      <div className="Dia72-centro">
        {AROS.map((n) => (
          <div key={n} className={`Dia72-aro a${n}`} />
        ))}
      </div>
    </div>
  );
}

