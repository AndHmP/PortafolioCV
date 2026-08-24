import './estilos/Dia79.scss';

/* Día 79 — Lines Animation
   "A veces la animación también puede ser ruidosa. ¿Qué harás con el cuadrado?" */

const LINEAS = 18;

export default function Dia79() {
  return (
    <div className="Dia79">
      <div className="Dia79-caja">
        {Array.from({ length: LINEAS }, (_, i) => (
          <span key={i} className={`Dia79-linea l${i}`} />
        ))}
      </div>
    </div>
  );
}
