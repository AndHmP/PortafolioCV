import './estilos/Dia95.scss';

/* Día 95 — Pig
   "Un cerdo, y ni una imagen: todo son círculos y bordes."

   Las orejas son cuadrados con una esquina redondeada, girados y sesgados con
   skewY: de ahí el triángulo con la punta roma. El hocico es un óvalo con dos
   radios distintos, 100 de ancho contra 80 de alto.

   Los ojos parpadean aplastándose a scaleY(0), y la pupila hace lo contrario
   —se estira al doble— para que el parpadeo no la haga desaparecer. */

export default function Dia95() {
  return (
    <div className="Dia95">
      <div className="Dia95-cerdo">
        <div className="Dia95-cabeza">
          <div className="Dia95-oreja izquierda" />
          <div className="Dia95-oreja derecha" />
          <div className="Dia95-ojo izquierdo" />
          <div className="Dia95-ojo derecho" />
          <div className="Dia95-hocico">
            <div className="Dia95-fosa izquierda" />
            <div className="Dia95-fosa derecha" />
          </div>
        </div>
      </div>
    </div>
  );
}

