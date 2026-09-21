import './estilos/Dia69.scss';

/* Día 69 — Eye
   "Un ojo que mira a un lado y a otro, y parpadea."

   El contorno es un cuadrado con dos esquinas opuestas redondeadas al máximo y
   girado 45°: sale la forma de almendra sin una sola curva dibujada.

   Los párpados son el mismo SVG —un rectángulo con el borde inferior curvo, del
   color del fondo—, uno arriba y otro girado 180° abajo. Bajan y suben en un
   ciclo de 5 s con los parpadeos repartidos de forma irregular, que es lo que
   lo hace creíble. Pasando el ratón por el lienzo se cierran y se quedan
   cerrados. */

const PARPADO =
  "M239.461093,106 L240,106 L240,0 L0,0 L0,106 L0.538906982,106 C5.9904782,95.5378089 " +
  "52.3717687,81 120,81 C187.628231,81 234.009522,95.5378089 239.461093,106 Z";

export default function Dia69() {
  return (
    <div className="Dia69">
      <div className="Dia69-ojo">
        <div className="Dia69-globo">
          <div className="Dia69-iris" />
        </div>
      </div>

      <svg className="Dia69-parpado arriba" viewBox="0 0 240 106" aria-hidden="true">
        <path d={PARPADO} />
      </svg>

      <svg className="Dia69-parpado abajo" viewBox="0 0 240 106" aria-hidden="true">
        <path d={PARPADO} />
      </svg>
    </div>
  );
}

