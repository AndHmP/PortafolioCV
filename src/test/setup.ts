import '@testing-library/jest-dom/vitest';

// jsdom no implementa matchMedia y los contextos de tema lo consultan.
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

/*
 * jsdom informa `navigator.language` como "en-US" y el IdiomaProvider lo
 * respeta, así que sin esto las pruebas arrancarían en inglés según el
 * entorno. Fijarlo en español las hace deterministas; el cambio de idioma se
 * prueba de forma explícita en contextos.test.tsx.
 */
Object.defineProperty(navigator, 'language', {
  configurable: true,
  get: () => 'es-PE',
});

// jsdom no implementa scrollTo; DesplazarAlInicio lo llama en cada navegación.
window.scrollTo = () => {};
