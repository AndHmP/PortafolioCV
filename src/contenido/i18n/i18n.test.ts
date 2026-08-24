import { describe, expect, it } from 'vitest';

import { en } from './en';
import { es } from './es';

/**
 * TypeScript ya garantiza que `en` tenga las mismas claves que `es`, porque se
 * declara como `Diccionario`. Estas pruebas cubren lo que el tipo no puede
 * ver: que ninguna traducción quedó vacía o copiada tal cual del español.
 */

function aplanar(objeto: Record<string, unknown>, prefijo = ''): [string, string][] {
  return Object.entries(objeto).flatMap(([clave, valor]) => {
    const ruta = prefijo ? `${prefijo}.${clave}` : clave;
    if (typeof valor === 'string') return [[ruta, valor] as [string, string]];
    return aplanar(valor as Record<string, unknown>, ruta);
  });
}

const CLAVES_ES = aplanar(es);
const CLAVES_EN = aplanar(en);

describe('diccionarios de idioma', () => {
  it('tienen exactamente las mismas claves', () => {
    expect(CLAVES_EN.map(([k]) => k).sort()).toEqual(CLAVES_ES.map(([k]) => k).sort());
  });

  it('no tienen textos vacíos', () => {
    [...CLAVES_ES, ...CLAVES_EN].forEach(([clave, texto]) => {
      expect(texto.trim(), `"${clave}" está vacío`).not.toBe('');
    });
  });

  it('no arrastran acentos del español en las traducciones al inglés', () => {
    // Nombres propios y términos que sí llevan tilde en ambos idiomas.
    const EXCEPCIONES = new Set(['idioma.otro', 'comun.cargando', 'comun.error']);

    CLAVES_EN.filter(([clave]) => !EXCEPCIONES.has(clave)).forEach(([clave, texto]) => {
      expect(texto, `"${clave}" parece sin traducir: ${texto}`).not.toMatch(/[áéíóúñ¿¡]/i);
    });
  });
});
