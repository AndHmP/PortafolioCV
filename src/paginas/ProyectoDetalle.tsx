import { Link, useParams } from 'react-router-dom';

import Icono from '@/componentes/iconos/Icono';
import Boton from '@/componentes/ui/Boton';
import Etiqueta from '@/componentes/ui/Etiqueta';
import TextoRico from '@/componentes/ui/TextoRico';
import { buscarProyecto } from '@/contenido/proyectos';
import { nombreTecnologia } from '@/contenido/stack';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';

function Bloque({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 font-display text-xl font-bold md:text-2xl">{titulo}</h2>
      {children}
    </section>
  );
}

export default function ProyectoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const { t, tr, trs } = useIdioma();
  const proyecto = slug ? buscarProyecto(slug) : undefined;

  useMeta({
    titulo: proyecto
      ? `${tr(proyecto.titulo)} — Anderson Huamancaja`
      : `${t.detalle.noEncontrado} — Anderson Huamancaja`,
    descripcion: proyecto ? tr(proyecto.resumen) : t.detalle.noEncontradoDetalle,
    ruta: `/proyectos/${slug ?? ''}`,
    imagen: proyecto?.imagenes?.find((i) => i.portada)?.src ?? proyecto?.imagenes?.[0]?.src,
  });

  if (!proyecto) {
    return (
      <div className="contenedor flex min-h-[50vh] flex-col items-center justify-center gap-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">{t.detalle.noEncontrado}</h1>
        <p className="max-w-md text-texto-suave">{t.detalle.noEncontradoDetalle}</p>
        <Boton como="ruta" a="/proyectos" variante="secundario">
          <Icono nombre="chevron-izquierda" tamano={16} />
          {t.acciones.volverProyectos}
        </Boton>
      </div>
    );
  }

  const portada = proyecto.imagenes?.find((i) => i.portada) ?? proyecto.imagenes?.[0];
  const galeria = proyecto.imagenes?.filter((i) => i !== portada) ?? [];

  return (
    <article className="pb-16">
      {/* Encabezado */}
      <header className="border-b border-borde bg-base-alt py-10 md:py-14">
        <div className="contenedor max-w-3xl">
          <Link
            to="/proyectos"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-texto-suave transition-colors hover:text-acento"
          >
            <Icono nombre="chevron-izquierda" tamano={16} />
            {t.acciones.volverProyectos}
          </Link>

          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Etiqueta tono="acento">{t.tipos[proyecto.tipo]}</Etiqueta>
            {proyecto.contexto && <Etiqueta tono="contorno">{tr(proyecto.contexto)}</Etiqueta>}
          </div>

          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {tr(proyecto.titulo)}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-texto-suave">{tr(proyecto.resumen)}</p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {proyecto.stack.map((clave) => (
              <Etiqueta key={clave}>{nombreTecnologia(clave)}</Etiqueta>
            ))}
          </div>

          {proyecto.codigoPrivado && (
            /* Sin esta nota, la ausencia de repositorio se lee como falta de
               respaldo. Decir por qué no lo hay es más creíble que callar. */
            <p className="mt-7 flex items-start gap-2.5 rounded-lg border border-borde bg-superficie p-3.5 text-sm text-texto-suave">
              <Icono nombre="candado" tamano={16} className="mt-0.5 shrink-0 text-acento" />
              <span>
                <strong className="font-semibold text-texto">{t.detalle.codigoPrivado}.</strong>{' '}
                {t.detalle.codigoPrivadoDetalle}
              </span>
            </p>
          )}

          {proyecto.enlaces && (
            <div className="mt-7 flex flex-wrap gap-3">
              {proyecto.enlaces.demo &&
                // Una demo puede ser una ruta interna (el Laboratorio) o una URL externa.
                (proyecto.enlaces.demo.startsWith('/') ? (
                  <Boton como="ruta" a={proyecto.enlaces.demo} tamano="pequeno">
                    <Icono nombre="flecha-derecha" tamano={14} />
                    {t.acciones.verDemo}
                  </Boton>
                ) : (
                  <Boton como="enlace" href={proyecto.enlaces.demo} tamano="pequeno">
                    <Icono nombre="enlace-externo" tamano={14} />
                    {t.acciones.verDemo}
                  </Boton>
                ))}
              {proyecto.enlaces.repo && (
                <Boton
                  como="enlace"
                  href={proyecto.enlaces.repo}
                  variante="secundario"
                  tamano="pequeno"
                >
                  <Icono nombre="github" tamano={14} />
                  {t.acciones.verRepo}
                </Boton>
              )}
              {proyecto.enlaces.video && (
                <Boton
                  como="enlace"
                  href={proyecto.enlaces.video}
                  variante="secundario"
                  tamano="pequeno"
                >
                  <Icono nombre="enlace-externo" tamano={14} />
                  {t.acciones.verVideo}
                </Boton>
              )}
            </div>
          )}
        </div>
      </header>

      {portada && (
        <div className="contenedor max-w-4xl py-10">
          <img
            src={portada.src}
            alt={tr(portada.alt)}
            className="w-full rounded-xl border border-borde shadow-sutil"
          />
        </div>
      )}

      {/* Cuerpo del caso de estudio */}
      <div className="contenedor max-w-3xl pt-10">
        <Bloque titulo={t.detalle.problema}>
          <p className="leading-relaxed text-texto-suave">
            <TextoRico>{tr(proyecto.problema)}</TextoRico>
          </p>
        </Bloque>

        <Bloque titulo={t.detalle.solucion}>
          <p className="leading-relaxed text-texto-suave">
            <TextoRico>{tr(proyecto.solucion)}</TextoRico>
          </p>
        </Bloque>

        {proyecto.arquitectura && (
          <Bloque titulo={t.detalle.arquitectura}>
            <pre className="overflow-x-auto rounded-xl border border-borde bg-superficie-alt p-4 text-xs leading-relaxed">
              <code>{proyecto.arquitectura}</code>
            </pre>
          </Bloque>
        )}

        {proyecto.decisionesTecnicas && proyecto.decisionesTecnicas.length > 0 && (
          <Bloque titulo={t.detalle.decisiones}>
            <div className="space-y-4">
              {proyecto.decisionesTecnicas.map((decision) => (
                <div
                  key={tr(decision.titulo)}
                  className="rounded-xl border border-borde bg-superficie p-5"
                >
                  <h3 className="mb-2 font-semibold">{tr(decision.titulo)}</h3>
                  <p className="text-sm leading-relaxed text-texto-suave">
                    <TextoRico>{tr(decision.detalle)}</TextoRico>
                  </p>
                </div>
              ))}
            </div>
          </Bloque>
        )}

        {proyecto.retos && (
          <Bloque titulo={t.detalle.retos}>
            <p className="leading-relaxed text-texto-suave">
              <TextoRico>{tr(proyecto.retos)}</TextoRico>
            </p>
          </Bloque>
        )}

        {proyecto.resultados && (
          <Bloque titulo={t.detalle.resultados}>
            <ul className="space-y-2">
              {trs(proyecto.resultados).map((resultado) => (
                <li key={resultado} className="flex gap-3 text-texto-suave">
                  <Icono nombre="chevron-derecha" tamano={18} className="mt-0.5 shrink-0 text-acento" />
                  <span className="leading-relaxed">
                    <TextoRico>{resultado}</TextoRico>
                  </span>
                </li>
              ))}
            </ul>
          </Bloque>
        )}

        {galeria.length > 0 && (
          <Bloque titulo={t.detalle.capturas}>
            <div className="grid gap-4 sm:grid-cols-2">
              {galeria.map((imagen) => (
                <img
                  key={imagen.src}
                  src={imagen.src}
                  alt={tr(imagen.alt)}
                  loading="lazy"
                  className="w-full rounded-xl border border-borde"
                />
              ))}
            </div>
          </Bloque>
        )}
      </div>
    </article>
  );
}
