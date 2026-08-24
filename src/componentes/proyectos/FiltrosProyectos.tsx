import Icono from '@/componentes/iconos/Icono';
import { nombreTecnologia } from '@/contenido/stack';
import { useIdioma } from '@/hooks/useIdioma';
import type { TipoProyecto } from '@/tipos';
import { hayFiltrosActivos, type FiltrosProyecto } from '@/utilidades/filtros';

interface Props {
  filtros: FiltrosProyecto;
  alCambiar: (filtros: FiltrosProyecto) => void;
  tecnologias: string[];
  tipos: TipoProyecto[];
}

function claseChip(activo: boolean) {
  return `rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
    activo
      ? 'border-acento bg-acento text-acento-contraste'
      : 'border-borde text-texto-suave hover:border-acento hover:text-acento'
  }`;
}

export default function FiltrosProyectos({ filtros, alCambiar, tecnologias, tipos }: Props) {
  const { t } = useIdioma();

  return (
    <div className="mb-8 space-y-4 rounded-xl border border-borde bg-superficie p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold">
          <Icono nombre="filtro" tamano={16} />
          {t.proyectos.filtros}
        </h2>
        {hayFiltrosActivos(filtros) && (
          <button
            type="button"
            onClick={() => alCambiar({ tecnologia: null, tipo: null })}
            className="text-xs font-medium text-acento hover:underline"
          >
            {t.proyectos.limpiar}
          </button>
        )}
      </div>

      <fieldset>
        <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-texto-suave">
          {t.proyectos.filtrarTipo}
        </legend>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => alCambiar({ ...filtros, tipo: null })}
            className={claseChip(filtros.tipo === null)}
            aria-pressed={filtros.tipo === null}
          >
            {t.proyectos.todos}
          </button>
          {tipos.map((tipo) => (
            <button
              key={tipo}
              type="button"
              onClick={() => alCambiar({ ...filtros, tipo: filtros.tipo === tipo ? null : tipo })}
              className={claseChip(filtros.tipo === tipo)}
              aria-pressed={filtros.tipo === tipo}
            >
              {t.tipos[tipo]}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-xs font-medium uppercase tracking-wide text-texto-suave">
          {t.proyectos.filtrarTecnologia}
        </legend>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => alCambiar({ ...filtros, tecnologia: null })}
            className={claseChip(filtros.tecnologia === null)}
            aria-pressed={filtros.tecnologia === null}
          >
            {t.proyectos.todos}
          </button>
          {tecnologias.map((clave) => (
            <button
              key={clave}
              type="button"
              onClick={() =>
                alCambiar({ ...filtros, tecnologia: filtros.tecnologia === clave ? null : clave })
              }
              className={claseChip(filtros.tecnologia === clave)}
              aria-pressed={filtros.tecnologia === clave}
            >
              {nombreTecnologia(clave)}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
