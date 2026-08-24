import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Icono from '@/componentes/iconos/Icono';
import Boton from '@/componentes/ui/Boton';
import Etiqueta from '@/componentes/ui/Etiqueta';
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

  const seccion = buscarSeccion(slug);
  const [categoria, setCategoria] = useState<CategoriaLab | null>(null);
  const [tramo, setTramo] = useState(0);

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

  /* Los 100 días se recorren por tramos de 25 para no montar cien
     animaciones a la vez. El resto de secciones se muestran completas. */
  const porTramo = seccion?.tramos ?? 0;
  const totalTramos = porTramo ? Math.ceil(filtradas.length / porTramo) : 0;
  const visibles = porTramo
    ? filtradas.slice(tramo * porTramo, (tramo + 1) * porTramo)
    : filtradas;

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
    visibles.length === 1 ? t.laboratorio.contadorUno : t.laboratorio.contadorVarios;

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
            onClick={() => setCategoria(null)}
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
                onClick={() => setCategoria(cat)}
                className={claseChip(categoria === cat)}
                aria-pressed={categoria === cat}
              >
                {t.laboratorio[cat]} ({cantidad})
              </button>
            );
          })}
        </div>
      )}

      {/* Tramos: 1-25, 26-50, … */}
      {totalTramos > 1 && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-medium uppercase tracking-wide text-texto-suave">
            {t.laboratorio.tramo}
          </span>
          {Array.from({ length: totalTramos }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setTramo(i)}
              className={claseChip(tramo === i)}
              aria-pressed={tramo === i}
            >
              {i * porTramo + 1}–{Math.min((i + 1) * porTramo, filtradas.length)}
            </button>
          ))}
        </div>
      )}

      <p className="mb-6 text-sm text-texto-suave" aria-live="polite">
        {visibles.length} {contador}
        {totalTramos > 1 ? ` · ${filtradas.length} en total` : ''}
      </p>

      {visibles.length === 0 ? (
        <p className="rounded-xl border border-borde bg-superficie p-8 text-center text-texto-suave">
          {t.laboratorio.sinResultados}
        </p>
      ) : (
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
      )}
    </div>
  );
}
