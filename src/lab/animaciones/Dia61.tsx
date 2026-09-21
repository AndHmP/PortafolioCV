import './estilos/Dia61.scss';

/* Día 61 — CSS Gradient Transition
   "Los degradados no se pueden animar, pero la opacidad sí."

   Ese es todo el truco: dos degradados del mismo tamaño, uno encima del otro,
   y lo que va y viene es la opacidad del de arriba. Interpolar un
   `linear-gradient` no está en el estándar; cruzar dos capas sí. */

export default function Dia61() {
  return (
    <div className="Dia61">
      <div className="Dia61-degradado uno" />
      <div className="Dia61-degradado dos" />
    </div>
  );
}

