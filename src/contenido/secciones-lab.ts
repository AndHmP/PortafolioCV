import type { ClaveSeccionLab, SeccionLab } from '@/tipos';

/**
 * Secciones del Laboratorio.
 *
 * Cada una es una ruta propia. El orden de este arreglo es el orden en que
 * aparecen en el índice de `/laboratorio`.
 */
export const seccionesLab: SeccionLab[] = [
  {
    slug: '100-dias-css',
    titulo: { es: '100 días de CSS', en: '100 Days of CSS' },
    descripcion: {
      es: 'El reto completo: una pieza por día durante cien días, resolviendo la consigna oficial de cada jornada solo con CSS.',
      en: 'The full challenge: one piece a day for a hundred days, solving each day’s official brief with CSS alone.',
    },
    icono: 'estrella',
    /* Cien animaciones simultáneas son inmanejables: se paginan de 12 en 12,
       que llena cuatro filas de tres en escritorio. */
    porPagina: 12,
  },
  {
    slug: 'componentes',
    titulo: { es: 'Librería de componentes', en: 'Component library' },
    descripcion: {
      es: 'Campos de formulario y botones reutilizables, con sus estados de foco, error e interacción resueltos.',
      en: 'Reusable form fields and buttons, with their focus, error and interaction states resolved.',
    },
    icono: 'codigo',
    filtros: ['inputs', 'botones'],
  },
  {
    slug: 'pantallas',
    titulo: { es: 'Pantallas completas', en: 'Full screens' },
    descripcion: {
      es: 'Interfaces de tamaño real, con validación y estado, listas para reutilizarse en un proyecto.',
      en: 'Full-size interfaces, with validation and state, ready to reuse in a project.',
    },
    icono: 'laboratorio',
    filtros: ['formularios'],
  },
];

export const seccionesPorSlug: Record<ClaveSeccionLab, SeccionLab> = Object.fromEntries(
  seccionesLab.map((s) => [s.slug, s]),
) as Record<ClaveSeccionLab, SeccionLab>;

export function buscarSeccion(slug: string | undefined): SeccionLab | undefined {
  return seccionesLab.find((s) => s.slug === slug);
}
