import Icono from '@/componentes/iconos/Icono';
import { obtenerIconoIlustrado } from '@/componentes/iconos';
import CarruselConocimientos from '@/componentes/perfil/CarruselConocimientos';
import Desplegable from '@/componentes/perfil/Desplegable';
import OlaPerfil from '@/componentes/perfil/OlaPerfil';
import Etiqueta from '@/componentes/ui/Etiqueta';
import { experiencias } from '@/contenido/experiencia';
import {
  calcularEdad,
  contacto,
  formacion,
  NOMBRE_COMPLETO,
  rol,
  sobreMi,
  ubicacion,
  valores,
} from '@/contenido/perfil';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';
import fotoPerfil from '@/recursos/foto-perfil.jpg';
import type { ClaveIconoUI } from '@/componentes/iconos/Icono';

export default function Perfil() {
  const { t, tr, trs } = useIdioma();

  useMeta({
    titulo: `${t.perfil.titulo} — ${NOMBRE_COMPLETO}`,
    descripcion: tr(sobreMi).slice(0, 155),
    ruta: '/perfil',
  });

  const datosPersonales = [
    { icono: 'usuario' as ClaveIconoUI, valor: NOMBRE_COMPLETO },
    { icono: 'calendario' as ClaveIconoUI, valor: `${calcularEdad()} ${t.perfil.edad}` },
    { icono: 'ubicacion' as ClaveIconoUI, valor: tr(ubicacion) },
    { icono: 'codigo' as ClaveIconoUI, valor: tr(rol) },
  ];

  return (
    <div className="pb-16">
      {/*
        Encabezado: banda sólida con la ola heredada como borde inferior.
        El contenido va sobre la banda, nunca sobre la ola, para que el
        contraste del texto no dependa de la silueta.
      */}
      <header className="relative overflow-hidden pb-10 md:pb-14">
        <div
          className="absolute inset-x-0 top-0 bottom-10 bg-[var(--color-texto)] md:bottom-14"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-10 md:h-14" aria-hidden="true">
          <OlaPerfil />
        </div>

        <div className="contenedor relative flex flex-col items-center gap-4 py-10 text-center text-[var(--color-fondo)] sm:flex-row sm:justify-center sm:gap-8 sm:text-left md:py-14">
          <img
            src={fotoPerfil}
            alt={`Retrato de ${NOMBRE_COMPLETO}`}
            width={160}
            height={160}
            className="aspect-square w-28 shrink-0 rounded-full border-4 border-[var(--color-fondo)] object-cover sm:w-36 md:w-40"
          />
          <div>
            <h1 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide sm:text-3xl md:text-4xl">
              {NOMBRE_COMPLETO}
            </h1>
            <p className="mt-1 text-sm opacity-80 sm:text-base">{tr(rol)}</p>
          </div>
        </div>
      </header>

      <div className="contenedor mt-10 max-w-4xl">
        <p className="mb-8 text-texto-suave">{t.perfil.subtitulo}</p>

        <div className="space-y-4">
          {/* Datos personales */}
          <Desplegable titulo={t.perfil.datosPersonales}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {datosPersonales.map((dato) => (
                <li key={dato.valor} className="flex items-center gap-3 text-sm">
                  <span className="rounded-lg bg-acento-suave p-2 text-acento">
                    <Icono nombre={dato.icono} tamano={16} />
                  </span>
                  {dato.valor}
                </li>
              ))}
            </ul>
          </Desplegable>

          {/* Sobre mí */}
          <Desplegable titulo={t.perfil.sobreMi}>
            <p className="leading-relaxed text-texto-suave">{tr(sobreMi)}</p>
          </Desplegable>

          {/* Contacto */}
          <Desplegable titulo={t.perfil.contacto}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {contacto.map((dato) => {
                const interior = (
                  <>
                    <span className="rounded-lg bg-acento-suave p-2 text-acento">
                      <Icono nombre={dato.icono as ClaveIconoUI} tamano={16} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-texto-suave">{tr(dato.etiqueta)}</span>
                      <span className="block truncate text-sm">{dato.valor}</span>
                    </span>
                  </>
                );

                return (
                  <li key={dato.icono}>
                    {dato.url ? (
                      <a
                        href={dato.url}
                        target={dato.icono === 'correo' ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-lg p-1 transition-colors hover:text-acento"
                      >
                        {interior}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 p-1">{interior}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Desplegable>

          {/* Conocimientos */}
          <Desplegable titulo={t.perfil.conocimientos}>
            <CarruselConocimientos />
          </Desplegable>

          {/* Formación académica */}
          <Desplegable titulo={t.perfil.formacion} inicialAbierto={false}>
            <ol className="space-y-5">
              {formacion.map((etapa) => {
                const ilustracion = obtenerIconoIlustrado(etapa.icono);
                return (
                  <li key={etapa.clave} className="flex gap-4">
                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center text-acento sm:flex [&>svg]:h-full [&>svg]:w-full">
                      {ilustracion}
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-texto-suave">
                        {tr(etapa.periodo)}
                      </p>
                      <h4 className="mt-0.5 font-display font-semibold">{tr(etapa.titulo)}</h4>
                      <p className="text-sm text-acento">{etapa.institucion}</p>
                      <p className="mt-2 text-sm leading-relaxed text-texto-suave">
                        {tr(etapa.descripcion)}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Desplegable>

          {/* Experiencia laboral */}
          <Desplegable titulo={t.perfil.experiencia} inicialAbierto={false}>
            <ol className="space-y-6">
              {experiencias.map((exp) => (
                <li key={exp.clave} className="border-l-2 border-borde pl-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-texto-suave">
                    {tr(exp.periodo)}
                  </p>
                  <h4 className="mt-0.5 font-display font-semibold">{tr(exp.puesto)}</h4>
                  <p className="text-sm text-acento">{exp.empresa}</p>
                  <p className="mt-2 text-sm leading-relaxed text-texto-suave">
                    {tr(exp.descripcion)}
                  </p>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-texto-suave">
                    {t.perfil.logros}
                  </p>
                  <ul className="mt-1.5 space-y-1.5">
                    {trs(exp.logros).map((logro) => (
                      <li key={logro} className="flex gap-2 text-sm text-texto-suave">
                        <Icono
                          nombre="chevron-derecha"
                          tamano={15}
                          className="mt-1 shrink-0 text-acento"
                        />
                        <span className="leading-relaxed">{logro}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {exp.stack.map((clave) => (
                      <Etiqueta key={clave} tono="contorno">
                        {clave}
                      </Etiqueta>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </Desplegable>

          {/* Valores */}
          <Desplegable titulo={t.perfil.valores} inicialAbierto={false}>
            <div className="grid gap-4 sm:grid-cols-2">
              {valores.map((valor) => (
                <div key={valor.clave} className="rounded-lg bg-base-alt p-4">
                  <h4 className="font-display font-semibold text-acento">{tr(valor.titulo)}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-texto-suave">
                    {tr(valor.contenido)}
                  </p>
                </div>
              ))}
            </div>
          </Desplegable>
        </div>
      </div>
    </div>
  );
}
