import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

import Icono from '@/componentes/iconos/Icono';
import Boton from '@/componentes/ui/Boton';
import Etiqueta from '@/componentes/ui/Etiqueta';
import Paginacion from '@/componentes/ui/Paginacion';
import { piezasPorSeccion } from '@/contenido/lab';
import { buscarSeccion } from '@/contenido/secciones-lab';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';
import type { CategoriaLab } from '@/tipos';

/** Alto por defecto del lienzo, heredado del grid original de "100 días CSS". */
const ALTO_POR_DEFECTO = 300;

function claseChip(activo: boolean) {
  return `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
    activo
      ? 'border-acento bg-acento text-acento-contraste'
      : 'border-borde text-texto-suave hover:border-acento hover:text-acento'
  }`;
}

export default function LaboratorioSeccion() {
  const { seccion: slug } = useParams<{ seccion: string }>();
  const { t, tr } = useIdioma();
  const [parametros, fijarParametros] = useSearchParams();
  const inicioRejilla = useRef<HTMLDivElement>(null);

  const seccion = buscarSeccion(slug);
  const [categoria, setCategoria] = useState<CategoriaLab | null>(null);

  useMeta({
    titulo: seccion
      ? `${tr(seccion.titulo)} — ${t.laboratorio.titulo}`
      : `${t.laboratorio.seccionNoEncontrada} — Anderson Huamancaja`,
    descripcion: seccion ? tr(seccion.descripcion) : t.laboratorio.seccionNoEncontradaDetalle,
    ruta: `/laboratorio/${slug ?? ''}`,
  });

  const todas = useMemo(() => (seccion ? piezasPorSeccion(seccion.slug) : []), [seccion]);

  const filtradas = useMemo(
    () => (categoria ? todas.filter((p) => p.categoria === categoria) : todas),
    [todas, categoria],
  );

  const porPagina = seccion?.porPagina ?? 0;
  const totalPaginas = porPagina ? Math.max(1, Math.ceil(filtradas.length / porPagina)) : 1;

  /* La página vive en la URL: el enlace se puede compartir y el botón
     «atrás» del navegador recorre las páginas como se espera. */
  const solicitada = Number(parametros.get('pagina') ?? 1);
  const pagina = Number.isFinite(solicitada)
    ? Math.min(Math.max(1, Math.trunc(solicitada)), totalPaginas)
    : 1;

  const visibles = porPagina
    ? filtradas.slice((pagina - 1) * porPagina, pagina * porPagina)
    : filtradas;

  const irAPagina = (siguiente: number) => {
    const nuevos = new URLSearchParams(parametros);
    if (siguiente <= 1) nuevos.delete('pagina');
    else nuevos.set('pagina', String(siguiente));
    fijarParametros(nuevos);
  };

  /* Al cambiar de página el navegador conserva el scroll, que deja al
     visitante a mitad de la rejilla nueva. Se sube al inicio de la lista,
     no al de la página, para no perder de vista los controles. */
  useEffect(() => {
    if (pagina > 1) {
      inicioRejilla.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [pagina]);

  /* Cambiar de categoría reordena la lista: la página anterior deja de
     tener sentido. */
  const cambiarCategoria = (siguiente: CategoriaLab | null) => {
    setCategoria(siguiente);
    irAPagina(1);
  };

  if (!seccion) {
    return (
      <div className="contenedor flex min-h-[50vh] flex-col items-center justify-center gap-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">{t.laboratorio.seccionNoEncontrada}</h1>
        <p className="max-w-md text-texto-suave">{t.laboratorio.seccionNoEncontradaDetalle}</p>
        <Boton como="ruta" a="/laboratorio" variante="secundario">
          <Icono nombre="chevron-izquierda" tamano={16} />
          {t.laboratorio.volverLaboratorio}
        </Boton>
      </div>
    );
  }

  const contador =
    filtradas.length === 1 ? t.laboratorio.contadorUno : t.laboratorio.contadorVarios;

  const textoPagina = t.laboratorio.paginaDe
    .replace('{actual}', String(pagina))
    .replace('{total}', String(totalPaginas));

  return (
    <div className="contenedor py-12 md:py-16">
      <header className="mb-8 max-w-2xl">
        <Link
          to="/laboratorio"
          className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-texto-suave transition-colors hover:text-acento"
        >
          <Icono nombre="chevron-izquierda" tamano={16} />
          {t.laboratorio.volverLaboratorio}
        </Link>

        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {tr(seccion.titulo)}
        </h1>
        <p className="mt-3 text-texto-suave">{tr(seccion.descripcion)}</p>
      </header>

      {/* Filtro por categoría: solo donde la sección mezcla varias. */}
      {seccion.filtros && seccion.filtros.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => cambiarCategoria(null)}
            className={claseChip(categoria === null)}
            aria-pressed={categoria === null}
          >
            {t.laboratorio.todas} ({todas.length})
          </button>
          {seccion.filtros.map((cat) => {
            const cantidad = todas.filter((p) => p.categoria === cat).length;
            if (cantidad === 0) return null;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => cambiarCategoria(cat)}
                className={claseChip(categoria === cat)}
                aria-pressed={categoria === cat}
              >
                {t.laboratorio[cat]} ({cantidad})
              </button>
            );
          })}
        </div>
      )}

      <div ref={inicioRejilla} className="mb-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <p className="text-sm text-texto-suave" aria-live="polite">
          {filtradas.length} {contador}
        </p>
        {totalPaginas > 1 && (
          <p className="text-sm text-texto-suave">· {textoPagina}</p>
        )}
      </div>

      {visibles.length === 0 ? (
        <p className="rounded-xl border border-borde bg-superficie p-8 text-center text-texto-suave">
          {t.laboratorio.sinResultados}
        </p>
      ) : (
        <>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibles.map((pieza) => (
              <li
                key={pieza.slug}
                className={`overflow-hidden rounded-xl border border-borde bg-superficie ${
                  pieza.categoria === 'formularios' ? 'sm:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Lienzo: aísla la pieza para que sus estilos no afecten a la página */}
                <div
                  className="lab-heredado flex items-center justify-center overflow-hidden border-b border-borde"
                  style={{
                    height: pieza.alto ?? ALTO_POR_DEFECTO,
                    backgroundColor:
                      pieza.fondoFijo === 'oscuro' ? '#1b1b24' : 'var(--color-superficie-alt)',
                    /* El navegador se salta el pintado de las piezas fuera de
                       pantalla, que con animaciones continuas ahorra bastante. */
                    contentVisibility: 'auto',
                    containIntrinsicSize: `${pieza.alto ?? ALTO_POR_DEFECTO}px`,
                  }}
                >
                  {pieza.componente}
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-display font-semibold">{tr(pieza.titulo)}</h2>
                    <Etiqueta tono="contorno">{t.laboratorio[pieza.categoria]}</Etiqueta>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-texto-suave">
                    <span className="font-semibold uppercase tracking-wide">
                      {t.laboratorio.tecnica}:
                    </span>{' '}
                    {tr(pieza.tecnica)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {totalPaginas > 1 && (
            <div className="mt-10">
              <Paginacion
                pagina={pagina}
                totalPaginas={totalPaginas}
                alCambiar={irAPagina}
                etiqueta={t.laboratorio.paginacion}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
