import { Children, useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import Icono from '@/componentes/iconos/Icono';

import './estilos/Carrusel.css';

/** Espacio que se reserva a cada lado para los botones de giro. */
const MARGEN_CONTROLES = 40;

/**
 * Carrusel circular para enseñar varias instancias de una misma card.
 *
 * La versión original movía nodos del DOM con `appendChild` e inyectaba una
 * etiqueta `<style>` con diez reglas `nth-child` y un identificador aleatorio
 * en cada render. Eso reordenaba los elementos por debajo de React —que se
 * quedaba con un árbol distinto al del navegador— y ensuciaba el documento con
 * CSS global duplicado por instancia.
 *
 * Aquí la lista no se toca: se desplaza una pista con `transform`. Para que el
 * giro sea infinito la pista lleva la lista dos veces; al llegar al clon se
 * vuelve al principio con la transición apagada, así el salto no se ve.
 */
export default function Carrusel({ children }: { children: ReactNode }) {
  const elementos = Children.toArray(children);
  const total = elementos.length;

  const contenedorRef = useRef<HTMLDivElement>(null);
  const pistaRef = useRef<HTMLDivElement>(null);

  const [indice, setIndice] = useState(0);
  const [conTransicion, setConTransicion] = useState(true);
  const [paso, setPaso] = useState(0);
  const [visibles, setVisibles] = useState(1);

  /* El paso es el ancho real de una card, que depende de sus propios estilos;
     se mide del DOM en vez de fijarlo a mano. Cuántas caben se recalcula con
     el contenedor, para que la misma pieza sirva en móvil y en escritorio. */
  const medir = useCallback(() => {
    const primera = pistaRef.current?.firstElementChild as HTMLElement | null;
    const anchoCard = primera?.offsetWidth ?? 0;
    const disponible = (contenedorRef.current?.clientWidth ?? 0) - MARGEN_CONTROLES * 2;

    setPaso(anchoCard);
    setVisibles(anchoCard > 0 ? Math.max(1, Math.floor(disponible / anchoCard)) : 1);
  }, []);

  useEffect(() => {
    medir();
    const contenedor = contenedorRef.current;
    const primera = pistaRef.current?.firstElementChild;
    if (!contenedor || typeof ResizeObserver === 'undefined') return;

    const observador = new ResizeObserver(medir);
    observador.observe(contenedor);
    /* La galería pinta cada pieza con `content-visibility: auto`, así que una
       card fuera de pantalla mide cero. Observando también la primera card,
       la medida se corrige sola en cuanto el navegador la dibuja. */
    if (primera) observador.observe(primera);
    return () => observador.disconnect();
  }, [medir]);

  if (total === 0) return null;

  const avanzar = () => {
    medir();
    setConTransicion(true);
    setIndice((actual) => actual + 1);
  };

  const retroceder = () => {
    medir();
    if (indice > 0) {
      setConTransicion(true);
      setIndice((actual) => actual - 1);
      return;
    }
    /* Desde la primera card se salta al clon del final sin animar y, ya en el
       fotograma siguiente, se anima hacia atrás: se ve un giro continuo. */
    setConTransicion(false);
    setIndice(total);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setConTransicion(true);
        setIndice(total - 1);
      });
    });
  };

  /* Al terminar el desplazamiento sobre el clon, se vuelve al original. */
  const alTerminarTransicion = () => {
    if (indice >= total) {
      setConTransicion(false);
      setIndice(0);
    }
  };

  return (
    <div
      ref={contenedorRef}
      className="CarruselCards relative flex align-items-center justify-content-center"
    >
      <button
        type="button"
        className="CarruselCards__control absolute"
        onClick={retroceder}
        aria-label="Anterior"
      >
        <Icono nombre="chevron-izquierda" tamano={18} />
      </button>

      <div
        className="CarruselCards__ventana"
        style={paso ? { width: paso * Math.min(visibles, total) } : undefined}
      >
        <div
          ref={pistaRef}
          className="CarruselCards__pista flex align-items-center"
          style={{
            transform: `translate3d(-${indice * paso}px, 0, 0)`,
            transition: conTransicion ? 'transform .5s ease' : 'none',
          }}
          onTransitionEnd={alTerminarTransicion}
        >
          {/* La lista va dos veces: la segunda es el clon que permite el giro. */}
          {[...elementos, ...elementos].map((elemento, i) => (
            <div
              key={i}
              className="CarruselCards__hueco"
              aria-hidden={i >= total ? true : undefined}
            >
              {elemento}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="CarruselCards__control absolute"
        onClick={avanzar}
        aria-label="Siguiente"
      >
        <Icono nombre="chevron-derecha" tamano={18} />
      </button>
    </div>
  );
}
