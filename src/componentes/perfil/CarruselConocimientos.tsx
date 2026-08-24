import { useCallback, useEffect, useState } from 'react';

import Icono from '@/componentes/iconos/Icono';
import { obtenerIconoIlustrado } from '@/componentes/iconos';
import { tecnologias } from '@/contenido/stack';
import { useIdioma } from '@/hooks/useIdioma';
import type { NivelTecnologia, Tecnologia } from '@/tipos';

/**
 * Carrusel de tecnologías.
 *
 * La versión anterior creaba nodos con `document.createElement`, les montaba
 * una raíz nueva con `ReactDOM.createRoot()` en cada clic y nunca las
 * desmontaba: una fuga de memoria que además dejaba a React fuera de la
 * reconciliación de esos nodos. Aquí todo es estado; el desplazamiento es un
 * `translateX` sobre una pista, y funciona con teclado.
 */

function cuantasCaben(ancho: number): number {
  if (ancho < 480) return 1;
  if (ancho < 768) return 2;
  if (ancho < 1100) return 3;
  return 4;
}

function TarjetaConocimiento({ tecnologia }: { tecnologia: Tecnologia }) {
  const { t, tr } = useIdioma();
  const ilustracion = obtenerIconoIlustrado(tecnologia.clave);

  const etiquetaNivel: Record<NivelTecnologia, string> = {
    avanzado: t.perfil.nivelAvanzado,
    intermedio: t.perfil.nivelIntermedio,
    basico: t.perfil.nivelBasico,
  };

  return (
    <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-borde bg-base p-5 text-center">
      <div className="flex h-14 w-14 items-center justify-center text-acento [&>svg]:h-full [&>svg]:w-full">
        {ilustracion ?? (
          <span className="font-display text-2xl font-bold">
            {tecnologia.nombre.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <p className="font-display font-semibold">{tecnologia.nombre}</p>

      <p className="flex-1 text-xs leading-relaxed text-texto-suave">{tr(tecnologia.descripcion)}</p>

      <p className="text-xs font-medium text-acento">
        {etiquetaNivel[tecnologia.nivel]}
        {tecnologia.anios ? ` · ${tecnologia.anios} ${t.perfil.aniosDeUso}` : ''}
      </p>
    </div>
  );
}

export default function CarruselConocimientos() {
  const { t } = useIdioma();
  const [visibles, setVisibles] = useState(() =>
    typeof window === 'undefined' ? 4 : cuantasCaben(window.innerWidth),
  );
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const alRedimensionar = () => setVisibles(cuantasCaben(window.innerWidth));
    window.addEventListener('resize', alRedimensionar);
    return () => window.removeEventListener('resize', alRedimensionar);
  }, []);

  const maximo = Math.max(0, tecnologias.length - visibles);

  // Al angostar la ventana el índice puede quedar fuera de rango y dejar el
  // carrusel en blanco; aquí se vuelve a acotar.
  useEffect(() => {
    setIndice((actual) => Math.min(actual, maximo));
  }, [maximo]);

  const anterior = useCallback(() => setIndice((i) => Math.max(0, i - 1)), []);
  const siguiente = useCallback(() => setIndice((i) => Math.min(maximo, i + 1)), [maximo]);

  return (
    <div className="flex items-stretch gap-2">
      <button
        type="button"
        onClick={anterior}
        disabled={indice === 0}
        aria-label={t.acciones.anterior}
        className="shrink-0 rounded-lg px-2 text-texto-suave transition-colors hover:bg-superficie-alt hover:text-acento disabled:pointer-events-none disabled:opacity-30"
      >
        <Icono nombre="chevron-izquierda" tamano={20} />
      </button>

      <div className="flex-1 overflow-hidden">
        <ul
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${indice * (100 / visibles)}%)` }}
        >
          {tecnologias.map((tecnologia) => (
            <li
              key={tecnologia.clave}
              className="shrink-0 px-1.5"
              style={{ width: `${100 / visibles}%` }}
            >
              <TarjetaConocimiento tecnologia={tecnologia} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={siguiente}
        disabled={indice >= maximo}
        aria-label={t.acciones.siguiente}
        className="shrink-0 rounded-lg px-2 text-texto-suave transition-colors hover:bg-superficie-alt hover:text-acento disabled:pointer-events-none disabled:opacity-30"
      >
        <Icono nombre="chevron-derecha" tamano={20} />
      </button>
    </div>
  );
}
