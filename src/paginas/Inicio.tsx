import { Link } from 'react-router-dom';

import Icono from '@/componentes/iconos/Icono';
import TarjetaProyecto from '@/componentes/proyectos/TarjetaProyecto';
import Boton from '@/componentes/ui/Boton';
import Etiqueta from '@/componentes/ui/Etiqueta';
import Seccion from '@/componentes/ui/Seccion';
import { experiencias } from '@/contenido/experiencia';
import {
  calcularAniosExperiencia,
  contacto,
  especialidad,
  NOMBRE_COMPLETO,
  rol,
  RUTA_CV,
  titular,
  ubicacion,
} from '@/contenido/perfil';
import { proyectosDestacados, proyectosPublicados } from '@/contenido/proyectos';
import {
  etiquetasCategoria,
  nombreTecnologia,
  ordenCategorias,
  tecnologias,
} from '@/contenido/stack';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';
import fotoPerfil from '@/recursos/foto-perfil.jpg';
import type { ClaveIconoUI } from '@/componentes/iconos/Icono';

export default function Inicio() {
  const { t, tr } = useIdioma();

  useMeta({
    titulo: `${NOMBRE_COMPLETO} — ${tr(rol)}`,
    descripcion: tr(titular),
  });

  const anios = calcularAniosExperiencia();
  const metricas = [
    { valor: `${anios}+`, etiqueta: t.inicio.metricaExperiencia },
    { valor: `${proyectosPublicados.length}`, etiqueta: t.inicio.metricaProyectos },
    { valor: `${experiencias.length}`, etiqueta: t.inicio.metricaEmpresas },
    { valor: `${tecnologias.length}`, etiqueta: t.inicio.metricaTecnologias },
  ];

  const enlacesContacto = contacto.filter((c) => c.url);

  return (
    <>
      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                              */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-borde">
        <div className="contenedor grid items-center gap-12 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-borde bg-superficie px-3 py-1.5 text-xs font-medium text-texto-suave">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.inicio.disponible}
            </span>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              {NOMBRE_COMPLETO}
            </h1>

            <p className="mt-3 text-xl font-medium text-acento md:text-2xl">{tr(rol)}</p>
            <p className="mt-1 text-sm text-texto-suave md:text-base">{tr(especialidad)}</p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-texto-suave md:text-lg">
              {tr(titular)}
            </p>

            <p className="mt-4 flex items-center gap-2 text-sm text-texto-suave">
              <Icono nombre="ubicacion" tamano={16} />
              {tr(ubicacion)}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Boton como="ruta" a="/proyectos">
                {t.acciones.verProyectos}
                <Icono nombre="flecha-derecha" tamano={16} />
              </Boton>
              <Boton como="enlace" href={RUTA_CV} variante="secundario" externo={false} download>
                <Icono nombre="documento" tamano={16} />
                {t.acciones.descargarCV}
              </Boton>
            </div>

            <div className="mt-8 flex items-center gap-1">
              {enlacesContacto.map((enlace) => (
                <a
                  key={enlace.icono}
                  href={enlace.url}
                  target={enlace.icono === 'correo' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="rounded-lg p-2.5 text-texto-suave transition-colors hover:bg-superficie-alt hover:text-acento"
                  aria-label={tr(enlace.etiqueta)}
                >
                  <Icono nombre={enlace.icono as ClaveIconoUI} tamano={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-first mx-auto md:order-none">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-full bg-acento-suave blur-2xl"
                aria-hidden="true"
              />
              <img
                src={fotoPerfil}
                alt={`Retrato de ${NOMBRE_COMPLETO}`}
                width={280}
                height={280}
                className="relative aspect-square w-44 rounded-full border-4 border-superficie object-cover shadow-elevada sm:w-56 md:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Métricas                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-b border-borde bg-base-alt py-10">
        <div className="contenedor grid grid-cols-2 gap-6 md:grid-cols-4">
          {metricas.map((metrica) => (
            <div key={metrica.etiqueta} className="text-center">
              <p className="font-display text-3xl font-bold text-acento md:text-4xl">
                {metrica.valor}
              </p>
              <p className="mt-1 text-xs text-texto-suave md:text-sm">{metrica.etiqueta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Proyectos destacados                                              */}
      {/* ---------------------------------------------------------------- */}
      <Seccion
        titulo={t.inicio.tituloProyectos}
        subtitulo={t.inicio.subtituloProyectos}
        accion={
          <Boton como="ruta" a="/proyectos" variante="texto" tamano="pequeno">
            {t.acciones.verTodos}
            <Icono nombre="flecha-derecha" tamano={14} />
          </Boton>
        }
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proyectosDestacados.map((proyecto) => (
            <TarjetaProyecto key={proyecto.slug} proyecto={proyecto} />
          ))}
        </div>
      </Seccion>

      {/* ---------------------------------------------------------------- */}
      {/* Stack                                                             */}
      {/* ---------------------------------------------------------------- */}
      <Seccion titulo={t.inicio.tituloStack} subtitulo={t.inicio.subtituloStack} alterno>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ordenCategorias.map((categoria) => {
            const delGrupo = tecnologias.filter((tec) => tec.categoria === categoria);
            if (delGrupo.length === 0) return null;

            return (
              <div
                key={categoria}
                className="rounded-xl border border-borde bg-superficie p-5"
              >
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-texto-suave">
                  {tr(etiquetasCategoria[categoria])}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {delGrupo.map((tec) => (
                    <Etiqueta key={tec.clave} tono={tec.nivel === 'avanzado' ? 'acento' : 'neutro'}>
                      {tec.nombre}
                    </Etiqueta>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Seccion>

      {/* ---------------------------------------------------------------- */}
      {/* Experiencia                                                       */}
      {/* ---------------------------------------------------------------- */}
      <Seccion titulo={t.inicio.tituloExperiencia} subtitulo={t.inicio.subtituloExperiencia}>
        <ol className="relative space-y-8 border-l border-borde pl-6 md:pl-8">
          {experiencias.map((exp) => (
            <li key={exp.clave} className="relative">
              <span
                className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-base bg-acento md:-left-[2.4rem]"
                aria-hidden="true"
              />
              <p className="text-xs font-medium uppercase tracking-wide text-texto-suave">
                {tr(exp.periodo)}
              </p>
              <h3 className="mt-1 font-display text-lg font-bold">
                {tr(exp.puesto)}
                <span className="font-normal text-texto-suave"> · {exp.empresa}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-texto-suave">
                {tr(exp.descripcion)}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.stack.map((clave) => (
                  <Etiqueta key={clave} tono="contorno">
                    {nombreTecnologia(clave)}
                  </Etiqueta>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Seccion>

      {/* ---------------------------------------------------------------- */}
      {/* Laboratorio                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="border-y border-borde bg-base-alt py-16">
        <div className="contenedor flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            {t.inicio.tituloLaboratorio}
          </h2>
          <p className="max-w-xl text-texto-suave">{t.inicio.subtituloLaboratorio}</p>
          <Boton como="ruta" a="/laboratorio" variante="secundario">
            {t.inicio.explorarLaboratorio}
            <Icono nombre="flecha-derecha" tamano={16} />
          </Boton>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Contacto                                                          */}
      {/* ---------------------------------------------------------------- */}
      <Seccion id="contacto" titulo={t.inicio.tituloContacto} subtitulo={t.inicio.subtituloContacto}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacto.map((dato) => {
            const contenido = (
              <>
                <span className="rounded-lg bg-acento-suave p-2.5 text-acento">
                  <Icono nombre={dato.icono as ClaveIconoUI} tamano={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-texto-suave">{tr(dato.etiqueta)}</span>
                  <span className="block truncate text-sm font-medium">{dato.valor}</span>
                </span>
              </>
            );

            const clases =
              'flex items-center gap-3 rounded-xl border border-borde bg-superficie p-4 transition-colors';

            return dato.url ? (
              <a
                key={dato.icono}
                href={dato.url}
                target={dato.icono === 'correo' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`${clases} hover:border-acento`}
              >
                {contenido}
              </a>
            ) : (
              <div key={dato.icono} className={clases}>
                {contenido}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-texto-suave">
          <Link to="/perfil" className="font-medium text-acento hover:underline">
            {t.perfil.titulo}
          </Link>
        </p>
      </Seccion>
    </>
  );
}
