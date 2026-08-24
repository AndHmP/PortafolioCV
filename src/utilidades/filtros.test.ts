import { describe, expect, it } from 'vitest';

import type { Proyecto } from '@/tipos';

import { filtrarProyectos, hayFiltrosActivos, SIN_FILTROS } from './filtros';

function proyecto(parcial: Partial<Proyecto> & Pick<Proyecto, 'slug'>): Proyecto {
  const texto = { es: 'texto', en: 'text' };
  return {
    estado: 'publicado',
    tipo: 'web',
    periodo: '2026-01',
    titulo: texto,
    resumen: texto,
    problema: texto,
    solucion: texto,
    stack: [],
    ...parcial,
  };
}

const CATALOGO: Proyecto[] = [
  proyecto({ slug: 'uno', tipo: 'fullstack', stack: ['react', 'fastapi'] }),
  proyecto({ slug: 'dos', tipo: 'web', stack: ['react', 'tailwind'] }),
  proyecto({ slug: 'tres', tipo: 'movil', stack: ['android', 'java'] }),
];

describe('filtrarProyectos', () => {
  it('devuelve el catálogo completo sin filtros', () => {
    expect(filtrarProyectos(CATALOGO, SIN_FILTROS)).toHaveLength(3);
  });

  it('filtra por tecnología', () => {
    const resultado = filtrarProyectos(CATALOGO, { tecnologia: 'react', tipo: null });
    expect(resultado.map((p) => p.slug)).toEqual(['uno', 'dos']);
  });

  it('filtra por tipo', () => {
    const resultado = filtrarProyectos(CATALOGO, { tecnologia: null, tipo: 'movil' });
    expect(resultado.map((p) => p.slug)).toEqual(['tres']);
  });

  it('combina ambos filtros', () => {
    const resultado = filtrarProyectos(CATALOGO, { tecnologia: 'react', tipo: 'web' });
    expect(resultado.map((p) => p.slug)).toEqual(['dos']);
  });

  it('devuelve vacío cuando la combinación no existe', () => {
    expect(filtrarProyectos(CATALOGO, { tecnologia: 'android', tipo: 'web' })).toEqual([]);
  });

  it('no muta el arreglo original', () => {
    const copia = [...CATALOGO];
    filtrarProyectos(CATALOGO, { tecnologia: 'react', tipo: null });
    expect(CATALOGO).toEqual(copia);
  });
});

describe('hayFiltrosActivos', () => {
  it('es falso sin filtros', () => {
    expect(hayFiltrosActivos(SIN_FILTROS)).toBe(false);
  });

  it('es verdadero con cualquiera de los dos', () => {
    expect(hayFiltrosActivos({ tecnologia: 'react', tipo: null })).toBe(true);
    expect(hayFiltrosActivos({ tecnologia: null, tipo: 'web' })).toBe(true);
  });
});
