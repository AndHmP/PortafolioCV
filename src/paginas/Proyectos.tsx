import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import FiltrosProyectos from '@/componentes/proyectos/FiltrosProyectos';
import TarjetaProyecto from '@/componentes/proyectos/TarjetaProyecto';
import {
  proyectosPublicados,
  tecnologiasEnCatalogo,
  tiposEnCatalogo,
} from '@/contenido/proyectos';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';
import type { TipoProyecto } from '@/tipos';
import { filtrarProyectos, type FiltrosProyecto } from '@/utilidades/filtros';

export default function Proyectos() {
  const { t, idioma } = useIdioma();
  const [parametros, fijarParametros] = useSearchParams();

  useMeta({
    titulo: `${t.proyectos.titulo} — Anderson Huamancaja`,
    descripcion: t.proyectos.subtitulo,
    ruta: '/proyectos',
  });

  // Los filtros viven en la URL, así un enlace filtrado se puede compartir
  // y el botón "atrás" del navegador funciona como se espera.
  const tecnologiaActiva = parametros.get('tec');
  const tipoActivo = (parametros.get('tipo') as TipoProyecto | null) ?? null;

  const filtros: FiltrosProyecto = useMemo(
    () => ({ tecnologia: tecnologiaActiva, tipo: tipoActivo }),
    [tecnologiaActiva, tipoActivo],
  );

  const alCambiar = (siguiente: FiltrosProyecto) => {
    const nuevos = new URLSearchParams();
    if (siguiente.tecnologia) nuevos.set('tec', siguiente.tecnologia);
    if (siguiente.tipo) nuevos.set('tipo', siguiente.tipo);
    fijarParametros(nuevos, { replace: true });
  };

  const tecnologias = useMemo(() => tecnologiasEnCatalogo(), []);
  const tipos = useMemo(() => tiposEnCatalogo(), []);
  const resultados = useMemo(() => filtrarProyectos(proyectosPublicados, filtros), [filtros]);

  const contador = resultados.length === 1 ? t.proyectos.contadorUno : t.proyectos.contadorVarios;

  return (
    <div className="contenedor py-12 md:py-16">
      <header className="mb-8 max-w-2xl">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
          {t.proyectos.titulo}
        </h1>
        <p className="mt-3 text-texto-suave">{t.proyectos.subtitulo}</p>
      </header>

      {proyectosPublicados.length === 0 ? (
        <p className="rounded-xl border border-borde bg-superficie p-8 text-center text-texto-suave">
          {t.proyectos.catalogoVacio}
        </p>
      ) : (
        <>
          <FiltrosProyectos
            filtros={filtros}
            alCambiar={alCambiar}
            tecnologias={tecnologias}
            tipos={tipos}
          />

          <p className="mb-6 text-sm text-texto-suave" aria-live="polite">
            {resultados.length} {contador}
          </p>

          {resultados.length === 0 ? (
            <p className="rounded-xl border border-borde bg-superficie p-8 text-center text-texto-suave">
              {t.proyectos.sinResultados}
            </p>
          ) : (
            <div key={idioma} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resultados.map((proyecto) => (
                <TarjetaProyecto key={proyecto.slug} proyecto={proyecto} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
