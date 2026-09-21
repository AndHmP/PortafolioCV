import { useRef, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';

import type { Zapatilla } from './datos';

import './estilos/CardTipo01.scss';

/**
 * Card de producto que se inclina siguiendo al cursor, con un brillo que se
 * mueve con él.
 *
 * El original inyectaba una etiqueta `<style>` con reglas globales y un
 * identificador aleatorio en cada render para pintar el giro y el brillo.
 * Aquí ambos viajan como variables CSS en el propio elemento: no hay CSS
 * duplicado y dos cards pueden convivir sin pisarse.
 */
export default function CardTipo01({ elemento }: { elemento: Zapatilla }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [luz, setLuz] = useState({ x: 50, y: 50 });
  const [dentro, setDentro] = useState(false);

  const alMover = (evento: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top } = card.getBoundingClientRect();
    setLuz({
      x: ((evento.clientX - left) * 100) / card.offsetWidth,
      y: ((evento.clientY - top) * 100) / card.offsetHeight,
    });
  };

  const estilo = {
    backgroundColor: elemento.colores[0],
    '--luz-x': `${luz.x}%`,
    '--luz-y': `${luz.y}%`,
    '--giro-y': `${(luz.x * 20) / 100 - 10}deg`,
    '--giro-x': `${(luz.y * 40) / 100 - 20}deg`,
    /* Entra rápido y sale más despacio, como el diseño original. */
    transition: dentro ? 'transform .2s ease' : 'transform .4s ease',
  } as CSSProperties;

  return (
    <div className="ContenedorCardTipo01 flex align-items-center justify-content-center">
      <div
        ref={cardRef}
        className="CardTipo01 flex align-items-center justify-content-center relative"
        style={estilo}
        onMouseMove={alMover}
        onMouseEnter={() => setDentro(true)}
        onMouseLeave={() => setDentro(false)}
      >
        <div
          className="contentText relative flex flex-column align-items-center justify-content-center"
          style={{ transform: dentro ? 'translateZ(10px)' : 'translateZ(0px)' }}
        >
          <div className="numberId absolute">{elemento.id}</div>
          <div className="nameProduct absolute">{elemento.producto}</div>
          <div className="priceProduct absolute">${elemento.precio}</div>
          <div className="marcaProduct absolute">{elemento.nombre}</div>
          <img src={elemento.img} alt={elemento.nombre} className="absolute" />
        </div>

        <div className="foot absolute w-full" />
      </div>
    </div>
  );
}
