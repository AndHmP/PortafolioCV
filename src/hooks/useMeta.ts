import { useEffect } from 'react';

import { SITIO_URL } from '@/contenido/perfil';

interface OpcionesMeta {
  titulo: string;
  descripcion: string;
  /** Ruta relativa, ej. `/proyectos/mi-proyecto`. */
  ruta?: string;
  imagen?: string;
}

function fijarMeta(selector: string, atributo: string, valor: string) {
  let etiqueta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!etiqueta) {
    etiqueta = document.createElement('meta');
    const [, nombre] = selector.match(/\[(?:name|property)="(.+)"\]/) ?? [];
    if (!nombre) return;
    etiqueta.setAttribute(selector.includes('property=') ? 'property' : 'name', nombre);
    document.head.appendChild(etiqueta);
  }
  etiqueta.setAttribute(atributo, valor);
}

/**
 * Actualiza título, descripción, Open Graph y canonical por ruta.
 *
 * Se resolvió a mano en vez de con react-helmet porque el sitio es una SPA
 * pequeña: son cuatro etiquetas y evita arrastrar una dependencia que además
 * aún arrastra fricción con React 19.
 */
export function useMeta({ titulo, descripcion, ruta = '', imagen = '/og-portada.png' }: OpcionesMeta) {
  useEffect(() => {
    const urlCompleta = `${SITIO_URL}${ruta}`;

    document.title = titulo;
    fijarMeta('meta[name="description"]', 'content', descripcion);
    fijarMeta('meta[property="og:title"]', 'content', titulo);
    fijarMeta('meta[property="og:description"]', 'content', descripcion);
    fijarMeta('meta[property="og:url"]', 'content', urlCompleta);
    fijarMeta('meta[property="og:image"]', 'content', `${SITIO_URL}${imagen}`);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = urlCompleta;
  }, [titulo, descripcion, ruta, imagen]);
}
