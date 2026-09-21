import { describe, expect, it } from 'vitest';

import { tieneIconoIlustrado } from './index';
import { tecnologias } from '@/contenido/stack';

/**
 * El carrusel de conocimientos cae a la inicial del nombre cuando una
 * tecnología no tiene icono. Funciona, pero se ve a medio hacer; esta prueba
 * obliga a registrar el icono al mismo tiempo que se agrega la tecnología.
 */
describe('registro de iconos ilustrados', () => {
  it('cubre todas las tecnologías del stack', () => {
    const sinIcono = tecnologias.filter((t) => !tieneIconoIlustrado(t.clave)).map((t) => t.clave);
    expect(sinIcono, `tecnologías sin icono: ${sinIcono.join(', ')}`).toEqual([]);
  });
});
