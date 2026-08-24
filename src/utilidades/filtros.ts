import type { Proyecto, TipoProyecto } from '@/tipos';

export interface FiltrosProyecto {
  /** Clave de tecnología, o null para no filtrar por tecnología. */
  tecnologia: string | null;
  /** Tipo de proyecto, o null para no filtrar por tipo. */
  tipo: TipoProyecto | null;
}

export const SIN_FILTROS: FiltrosProyecto = { tecnologia: null, tipo: null };

/**
 * Filtra el catálogo. Es una función pura y sin dependencias de React a
 * propósito: así se puede probar sin montar componentes.
 */
export function filtrarProyectos(proyectos: Proyecto[], filtros: FiltrosProyecto): Proyecto[] {
  return proyectos.filter((proyecto) => {
    if (filtros.tipo && proyecto.tipo !== filtros.tipo) return false;
    if (filtros.tecnologia && !proyecto.stack.includes(filtros.tecnologia)) return false;
    return true;
  });
}

export function hayFiltrosActivos(filtros: FiltrosProyecto): boolean {
  return filtros.tecnologia !== null || filtros.tipo !== null;
}
