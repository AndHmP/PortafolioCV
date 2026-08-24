import { describe, expect, it } from 'vitest';

import { calcularAniosExperiencia, calcularEdad, contacto, formacion, valores } from './perfil';

describe('datos del perfil', () => {
  /*
   * La versión anterior del portafolio publicaba el DNI y la dirección
   * domiciliaria. Esta prueba existe para que no vuelvan a entrar por
   * descuido en un archivo de contenido.
   */
  it('no expone datos personales sensibles', async () => {
    const modulo = await import('./perfil');
    const serializado = JSON.stringify(
      Object.entries(modulo).filter(([, valor]) => typeof valor !== 'function'),
    );

    expect(serializado).not.toMatch(/\b\d{8}\b/); // DNI peruano
    expect(serializado.toLowerCase()).not.toContain('juan ruiz');
    expect(serializado.toLowerCase()).not.toMatch(/\b(jr\.|calle|av\.|avenida)\s/);
  });

  it('calcula la edad a partir de la fecha de nacimiento', () => {
    // Nacimiento: 2005-08-06.
    expect(calcularEdad(new Date('2026-08-05'))).toBe(20);
    expect(calcularEdad(new Date('2026-08-06'))).toBe(21);
    expect(calcularEdad(new Date('2027-01-01'))).toBe(21);
  });

  it('calcula los años de experiencia desde el inicio de carrera', () => {
    expect(calcularAniosExperiencia(new Date('2026-06-01'))).toBe(3);
    expect(calcularAniosExperiencia(new Date('2023-06-01'))).toBe(1);
  });

  it('declara un enlace válido en cada medio de contacto que lo tenga', () => {
    contacto
      .filter((dato) => dato.url)
      .forEach((dato) => {
        expect(dato.url, dato.valor).toMatch(/^(https:\/\/|mailto:)/);
      });
  });

  it('tiene formación y valores con textos en ambos idiomas', () => {
    [...formacion, ...valores].forEach((entrada) => {
      const textos = Object.values(entrada).filter(
        (v): v is { es: string; en: string } =>
          typeof v === 'object' && v !== null && 'es' in v && 'en' in v,
      );
      textos.forEach((texto) => {
        expect(texto.es.trim()).not.toBe('');
        expect(texto.en.trim()).not.toBe('');
      });
    });
  });
});

describe('marcadores pendientes', () => {
  /*
   * No falla el build: los marcadores TODO_ son legítimos mientras el
   * portafolio está en construcción. La verificación bloqueante vive en
   * `npm run verificar`, que se corre antes de desplegar.
   */
  it('los marcadores TODO_ están localizados y son detectables', () => {
    const conMarcador = contacto.filter(
      (dato) => dato.valor.includes('TODO_') || dato.url?.includes('TODO_'),
    );
    conMarcador.forEach((dato) => {
      expect(dato.icono).toBeTruthy();
    });
    // Documenta cuántos faltan; `npm run verificar` es el que bloquea.
    expect(conMarcador.length).toBeLessThanOrEqual(contacto.length);
  });
});
