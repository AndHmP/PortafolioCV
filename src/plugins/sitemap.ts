import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import type { Plugin } from 'vite';

import { SITIO_URL } from '../contenido/perfil';
import { proyectosPublicados } from '../contenido/proyectos';

const RUTAS_FIJAS = [
  { ruta: '/', prioridad: '1.0' },
  { ruta: '/proyectos', prioridad: '0.9' },
  { ruta: '/perfil', prioridad: '0.8' },
  { ruta: '/credenciales', prioridad: '0.7' },
  { ruta: '/laboratorio', prioridad: '0.7' },
];

/**
 * Genera sitemap.xml y robots.txt a partir del catálogo real.
 *
 * Se hace en tiempo de build y no a mano para que publicar un proyecto nuevo
 * lo incluya automáticamente: cambiar `estado` a 'publicado' basta.
 */
export function sitemap(): Plugin {
  return {
    name: 'portafolio-sitemap',
    apply: 'build',
    closeBundle() {
      const hoy = new Date().toISOString().split('T')[0];

      const entradas = [
        ...RUTAS_FIJAS,
        ...proyectosPublicados.map((p) => ({
          ruta: `/proyectos/${p.slug}`,
          prioridad: '0.8',
        })),
      ];

      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...entradas.map(
          ({ ruta, prioridad }) =>
            `  <url>\n    <loc>${SITIO_URL}${ruta}</loc>\n    <lastmod>${hoy}</lastmod>\n    <priority>${prioridad}</priority>\n  </url>`,
        ),
        '</urlset>',
        '',
      ].join('\n');

      const robots = ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITIO_URL}/sitemap.xml`, ''].join(
        '\n',
      );

      writeFileSync(join('dist', 'sitemap.xml'), xml, 'utf8');
      writeFileSync(join('dist', 'robots.txt'), robots, 'utf8');

      this.info(`sitemap.xml generado con ${entradas.length} rutas`);
    },
  };
}
