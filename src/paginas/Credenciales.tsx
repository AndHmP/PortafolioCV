import { obtenerIconoIlustrado } from '@/componentes/iconos';
import Icono from '@/componentes/iconos/Icono';
import Etiqueta from '@/componentes/ui/Etiqueta';
import { credencialesPorTipo } from '@/contenido/credenciales';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';
import type { Credencial } from '@/tipos';

/** Formatea la fecha de expedición en el idioma activo. */
function formatearFecha(iso: string, idioma: string) {
  if (!iso) return '';
  return new Date(`${iso}T00:00:00`).toLocaleDateString(idioma === 'en' ? 'en-GB' : 'es-PE', {
    year: 'numeric',
    month: 'long',
  });
}

function Ficha({ credencial }: { credencial: Credencial }) {
  const { t, idioma, tr } = useIdioma();
  const ilustracion = credencial.icono ? obtenerIconoIlustrado(credencial.icono) : null;

  return (
    <div className="flex gap-4 rounded-xl border border-borde bg-superficie p-5">
      {ilustracion && (
        <div className="hidden h-12 w-12 shrink-0 items-center justify-center text-acento sm:flex [&>svg]:h-full [&>svg]:w-full">
          {ilustracion}
        </div>
      )}

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-texto-suave">
          {t.credenciales.expedido} · {formatearFecha(credencial.expedido, idioma)}
        </p>

        <div className="mt-0.5 flex flex-wrap items-center gap-2">
          <h3 className="font-display font-semibold">{tr(credencial.titulo)}</h3>
          {credencial.tipo === 'titulo' && (
            <Etiqueta tono="acento">
              <Icono nombre="verificado" tamano={12} />
              {t.perfil.estadoTitulado}
            </Etiqueta>
          )}
        </div>

        <p className="text-sm text-acento">{credencial.emisor}</p>

        {credencial.descripcion && (
          <p className="mt-2 text-sm leading-relaxed text-texto-suave">
            {tr(credencial.descripcion)}
          </p>
        )}

        {credencial.codigo && (
          <p className="mt-2 text-xs text-texto-suave">
            <span className="font-semibold uppercase tracking-wide">{t.credenciales.codigo}:</span>{' '}
            <span className="font-mono">{tr(credencial.codigo)}</span>
          </p>
        )}

        {/* La verificación va primero: es la prueba, el documento solo la ilustra. */}
        {(credencial.verificacion || credencial.documento) && (
          <div className="mt-3 flex flex-wrap gap-3">
            {credencial.verificacion && (
              <a
                href={credencial.verificacion}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-acento hover:underline"
              >
                <Icono nombre="enlace-externo" tamano={14} />
                {t.credenciales.verificar}
                <span className="sr-only"> ({t.credenciales.abreEnPestana})</span>
              </a>
            )}

            {credencial.documento && (
              <a
                href={credencial.documento}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-texto-suave hover:text-acento hover:underline"
              >
                <Icono nombre="documento" tamano={14} />
                {t.credenciales.verDocumento}
                <span className="sr-only"> ({t.credenciales.abreEnPestana})</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Ficha y documento, uno al lado del otro en pantalla ancha y apilados en
 * móvil. Si la credencial no trae imagen, la ficha ocupa todo el ancho.
 */
function Tarjeta({ credencial }: { credencial: Credencial }) {
  const { t, tr } = useIdioma();

  if (!credencial.vistaPrevia) {
    return (
      <li>
        <Ficha credencial={credencial} />
      </li>
    );
  }

  return (
    <li className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
      <Ficha credencial={credencial} />

      {/* Enlaza al documento completo: la imagen es la vista previa, no el
          archivo que se descarga. */}
      <a
        href={credencial.documento ?? credencial.vistaPrevia}
        target="_blank"
        rel="noreferrer noopener"
        className="group block overflow-hidden rounded-xl border border-borde bg-superficie-alt transition-shadow hover:shadow-lg focus-visible:shadow-lg"
      >
        <img
          src={credencial.vistaPrevia}
          alt={`${t.credenciales.documentoDe} ${tr(credencial.titulo)}`}
          loading="lazy"
          width={1390}
          height={985}
          className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </a>
    </li>
  );
}

export default function Credenciales() {
  const { t } = useIdioma();

  useMeta({
    titulo: `${t.credenciales.titulo} — Anderson Huamancaja`,
    descripcion: t.credenciales.subtitulo,
    ruta: '/credenciales',
  });

  const titulos = credencialesPorTipo('titulo');
  /* Pendiente: los certificados aún no han llegado. Descomentar esta línea y
     la sección del final cuando se publiquen. */
  // const certificados = credencialesPorTipo('certificado');

  return (
    <div className="contenedor py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.credenciales.titulo}
        </h1>
        <p className="mt-3 text-texto-suave">{t.credenciales.subtitulo}</p>
      </header>

      {/* Separados y no mezclados: un título y un curso no pesan lo mismo. */}
      <section className="mb-12">
        <h2 className="mb-4 font-display text-xl font-semibold">{t.credenciales.titulos}</h2>
        <ul className="grid gap-8">
          {titulos.map((credencial) => (
            <Tarjeta key={credencial.clave} credencial={credencial} />
          ))}
        </ul>
      </section>

      {/*
        Sección de certificados: oculta hasta que lleguen. Anunciar un apartado
        vacío resta más de lo que suma, así que no se enseña el hueco.
        Para reactivarla: descomentar este bloque y la línea `certificados` de
        arriba; el contenido se añade en `src/contenido/credenciales.ts`.

      <section>
        <h2 className="mb-4 font-display text-xl font-semibold">{t.credenciales.certificados}</h2>
        {certificados.length === 0 ? (
          <p className="rounded-xl border border-borde bg-superficie p-8 text-center text-texto-suave">
            {t.credenciales.sinCertificados}
          </p>
        ) : (
          <ul className="grid gap-4 lg:grid-cols-2">
            {certificados.map((credencial) => (
              <Tarjeta key={credencial.clave} credencial={credencial} />
            ))}
          </ul>
        )}
      </section>
      */}
    </div>
  );
}
