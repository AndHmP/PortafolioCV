import { Link } from 'react-router-dom';

import Icono from '@/componentes/iconos/Icono';
import Etiqueta from '@/componentes/ui/Etiqueta';
import { nombreTecnologia } from '@/contenido/stack';
import { useIdioma } from '@/hooks/useIdioma';
import type { Proyecto } from '@/tipos';

const MAX_ETIQUETAS = 4;

export default function TarjetaProyecto({ proyecto }: { proyecto: Proyecto }) {
  const { t, tr } = useIdioma();

  const portada = proyecto.imagenes?.find((i) => i.portada) ?? proyecto.imagenes?.[0];
  const restantes = proyecto.stack.length - MAX_ETIQUETAS;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-borde bg-superficie transition-all duration-200 hover:-translate-y-1 hover:border-acento hover:shadow-elevada">
      <Link to={`/proyectos/${proyecto.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-superficie-alt">
          {portada ? (
            <img
              src={portada.src}
              alt={tr(portada.alt)}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            // Sin captura todavía: se muestra la inicial en vez de un hueco roto.
            <div className="flex h-full items-center justify-center">
              <span className="font-display text-5xl font-bold text-borde">
                {tr(proyecto.titulo).charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute left-3 top-3">
            <Etiqueta tono="acento">{t.tipos[proyecto.tipo]}</Etiqueta>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          {proyecto.contexto && (
            <p className="mb-1.5 text-xs font-medium uppercase tracking-wide text-texto-suave">
              {tr(proyecto.contexto)}
            </p>
          )}

          <h3 className="font-display text-lg font-bold leading-snug transition-colors group-hover:text-acento">
            {tr(proyecto.titulo)}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-texto-suave">
            {tr(proyecto.resumen)}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {proyecto.stack.slice(0, MAX_ETIQUETAS).map((clave) => (
              <Etiqueta key={clave}>{nombreTecnologia(clave)}</Etiqueta>
            ))}
            {restantes > 0 && <Etiqueta tono="contorno">+{restantes}</Etiqueta>}
          </div>

          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-acento">
            {t.acciones.verProyecto}
            <Icono
              nombre="flecha-derecha"
              tamano={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}
