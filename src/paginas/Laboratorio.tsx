import { useState } from 'react';

import Etiqueta from '@/componentes/ui/Etiqueta';
import { piezasLab, piezasPorCategoria } from '@/contenido/lab';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';
import type { CategoriaLab } from '@/tipos';

const CATEGORIAS: CategoriaLab[] = ['animaciones', 'inputs', 'botones', 'formularios'];

/** Alto por defecto del lienzo, heredado del grid original de "100 días CSS". */
const ALTO_POR_DEFECTO = 300;

export default function Laboratorio() {
  const { t, tr } = useIdioma();
  const [categoria, setCategoria] = useState<CategoriaLab | null>(null);

  useMeta({
    titulo: `${t.laboratorio.titulo} — Anderson Huamancaja`,
    descripcion: t.laboratorio.subtitulo,
    ruta: '/laboratorio',
  });

  const piezas = piezasPorCategoria(categoria);
  const contador =
    piezas.length === 1 ? t.laboratorio.contadorUno : t.laboratorio.contadorVarios;

  const claseChip = (activo: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      activo
        ? 'border-acento bg-acento text-acento-contraste'
        : 'border-borde text-texto-suave hover:border-acento hover:text-acento'
    }`;

  return (
    <div className="contenedor py-12 md:py-16">
      <header className="mb-8 max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.laboratorio.titulo}
        </h1>
        <p className="mt-3 text-texto-suave">{t.laboratorio.subtitulo}</p>
      </header>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategoria(null)}
          className={claseChip(categoria === null)}
          aria-pressed={categoria === null}
        >
          {t.laboratorio.todas} ({piezasLab.length})
        </button>
        {CATEGORIAS.map((cat) => {
          const cantidad = piezasLab.filter((p) => p.categoria === cat).length;
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

      <p className="mb-6 text-sm text-texto-suave" aria-live="polite">
        {piezas.length} {contador}
      </p>

      {piezas.length === 0 ? (
        <p className="rounded-xl border border-borde bg-superficie p-8 text-center text-texto-suave">
          {t.laboratorio.sinResultados}
        </p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {piezas.map((pieza) => (
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
                    pieza.fondoFijo === 'oscuro'
                      ? '#1b1b24'
                      : 'var(--color-superficie-alt)',
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
