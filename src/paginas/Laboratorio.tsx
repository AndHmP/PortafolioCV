import { Link } from 'react-router-dom';

import Icono from '@/componentes/iconos/Icono';
import { conteoPorSeccion, piezasLab, piezasPorSeccion } from '@/contenido/lab';
import { seccionesLab } from '@/contenido/secciones-lab';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';
import type { ClaveIconoUI } from '@/componentes/iconos/Icono';
import type { SeccionLab } from '@/tipos';

const ALTO_MINIATURA = 96;

/**
 * Hasta tres piezas de la sección, en miniatura, como portada de la tarjeta.
 *
 * Cada pieza se renderiza en un escenario de su tamaño real y luego se escala:
 * si se escalara a ojo, las piezas anchas (la pantalla de autenticación mide
 * 1000 px) quedarían recortadas.
 */
function Vistazo({ seccion }: { seccion: SeccionLab }) {
  const muestra = piezasPorSeccion(seccion.slug).slice(0, 3);
  if (muestra.length === 0) return null;

  /* Ancho aproximado de cada celda: la tarjeta mide ~320 px por dentro y las
     miniaturas se reparten ese espacio. Sirve como referencia para escalar. */
  const anchoCelda = 320 / muestra.length;

  return (
    <div
      className="grid gap-2"
      style={{ gridTemplateColumns: `repeat(${muestra.length}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {muestra.map((pieza) => {
        const altoEscenario = pieza.alto ?? 300;
        /* Las piezas cortas (campos, botones) son anchas; la pantalla de
           autenticación lo es aún más. El escenario se ajusta a cada forma. */
        const anchoEscenario = altoEscenario > 400 ? 1040 : altoEscenario < 200 ? 460 : 300;

        /* Se escala por el lado más restrictivo, no solo por el alto: de lo
           contrario las piezas anchas se salen de la miniatura. */
        const escala = Math.min(ALTO_MINIATURA / altoEscenario, anchoCelda / anchoEscenario);

        return (
          <div
            key={pieza.slug}
            className="lab-heredado flex items-center justify-center overflow-hidden rounded-lg"
            style={{
              height: ALTO_MINIATURA,
              backgroundColor:
                pieza.fondoFijo === 'oscuro' ? '#1b1b24' : 'var(--color-superficie-alt)',
            }}
          >
            <div
              className="pointer-events-none flex shrink-0 items-center justify-center"
              style={{
                width: anchoEscenario,
                height: altoEscenario,
                transform: `scale(${escala})`,
              }}
            >
              {pieza.componente}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Laboratorio() {
  const { t, tr } = useIdioma();

  useMeta({
    titulo: `${t.laboratorio.titulo} — Anderson Huamancaja`,
    descripcion: t.laboratorio.subtitulo,
    ruta: '/laboratorio',
  });

  const conteo = conteoPorSeccion();

  return (
    <div className="contenedor py-12 md:py-16">
      <header className="mb-10 max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.laboratorio.titulo}
        </h1>
        <p className="mt-3 text-texto-suave">{t.laboratorio.subtitulo}</p>
        <p className="mt-2 text-sm text-texto-suave">
          {piezasLab.length} {t.laboratorio.contadorVarios}
        </p>
      </header>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {seccionesLab.map((seccion) => (
          <li key={seccion.slug}>
            <Link
              to={`/laboratorio/${seccion.slug}`}
              className="group flex h-full flex-col gap-4 rounded-xl border border-borde bg-superficie p-5 transition-all duration-200 hover:-translate-y-1 hover:border-acento hover:shadow-elevada"
            >
              <Vistazo seccion={seccion} />

              <div className="flex flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-acento-suave p-2 text-acento">
                    <Icono nombre={seccion.icono as ClaveIconoUI} tamano={18} />
                  </span>
                  <h2 className="font-display text-lg font-bold transition-colors group-hover:text-acento">
                    {tr(seccion.titulo)}
                  </h2>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-texto-suave">
                  {tr(seccion.descripcion)}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wide text-texto-suave">
                    {conteo[seccion.slug] ?? 0}{' '}
                    {(conteo[seccion.slug] ?? 0) === 1
                      ? t.laboratorio.contadorUno
                      : t.laboratorio.contadorVarios}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-acento">
                    {t.laboratorio.explorarSeccion}
                    <Icono
                      nombre="flecha-derecha"
                      tamano={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
