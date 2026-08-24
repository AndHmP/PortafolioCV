import { describe, expect, it } from 'vitest';

import { proyectos, proyectosPublicados, tecnologiasEnCatalogo } from './proyectos';
import { tecnologiasPorClave } from './stack';

/**
 * Prueba de integridad del catálogo.
 *
 * Es la red de seguridad del punto de extensión: agregar un proyecto es
 * escribir un objeto a mano, y estas comprobaciones evitan que un slug
 * duplicado, una clave de stack inexistente o un texto sin traducir lleguen
 * al sitio publicado.
 */
describe('catálogo de proyectos', () => {
  it('no tiene slugs duplicados', () => {
    const slugs = proyectos.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('usa slugs válidos para URL', () => {
    proyectos.forEach((proyecto) => {
      expect(proyecto.slug, `slug inválido: ${proyecto.slug}`).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    });
  });

  it('tiene los textos obligatorios en ambos idiomas', () => {
    proyectos.forEach((proyecto) => {
      (['titulo', 'resumen', 'problema', 'solucion'] as const).forEach((campo) => {
        expect(proyecto[campo].es.trim(), `${proyecto.slug}.${campo}.es`).not.toBe('');
        expect(proyecto[campo].en.trim(), `${proyecto.slug}.${campo}.en`).not.toBe('');
      });
    });
  });

  it('solo referencia tecnologías registradas en stack.ts', () => {
    proyectos.forEach((proyecto) => {
      proyecto.stack.forEach((clave) => {
        expect(tecnologiasPorClave[clave], `${proyecto.slug} usa "${clave}", que no existe`).toBeDefined();
      });
    });
  });

  it('usa el formato YYYY-MM en el periodo', () => {
    proyectos.forEach((proyecto) => {
      expect(proyecto.periodo, proyecto.slug).toMatch(/^\d{4}-(0[1-9]|1[0-2])$/);
    });
  });

  it('declara URLs absolutas en los enlaces externos', () => {
    proyectos.forEach((proyecto) => {
      Object.entries(proyecto.enlaces ?? {}).forEach(([tipo, url]) => {
        // Una demo puede apuntar a una ruta interna del propio portafolio.
        if (url.startsWith('/')) return;
        expect(url, `${proyecto.slug}.${tipo}`).toMatch(/^https:\/\//);
      });
    });
  });

  it('excluye del sitio público los proyectos en desarrollo', () => {
    expect(proyectosPublicados.every((p) => p.estado === 'publicado')).toBe(true);
    expect(proyectosPublicados.length).toBeLessThan(proyectos.length);
  });

  it('ordena los publicados del más reciente al más antiguo', () => {
    const periodos = proyectosPublicados.map((p) => p.periodo);
    expect(periodos).toEqual([...periodos].sort().reverse());
  });

  it('deriva los filtros solo de proyectos publicados', () => {
    const clavesPublicadas = new Set(proyectosPublicados.flatMap((p) => p.stack));
    tecnologiasEnCatalogo().forEach((clave) => {
      expect(clavesPublicadas.has(clave)).toBe(true);
    });
  });

  it('marca al menos un proyecto como destacado para la portada', () => {
    expect(proyectosPublicados.some((p) => p.destacado)).toBe(true);
  });
});
