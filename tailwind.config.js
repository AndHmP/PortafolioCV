/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['selector', '[data-tema="oscuro"]'],
  theme: {
    extend: {
      colors: {
        // Mapea las variables CSS de estilos/temas.css para que Tailwind y el
        // SCSS heredado compartan exactamente la misma paleta.
        base: 'var(--color-fondo)',
        'base-alt': 'var(--color-fondo-alt)',
        superficie: 'var(--color-superficie)',
        'superficie-alt': 'var(--color-superficie-alt)',
        borde: 'var(--color-borde)',
        texto: 'var(--color-texto)',
        'texto-suave': 'var(--color-texto-suave)',
        acento: 'var(--color-acento)',
        'acento-hover': 'var(--color-acento-hover)',
        'acento-contraste': 'var(--color-acento-contraste)',
        'acento-suave': 'var(--color-acento-suave)',
      },
      boxShadow: {
        sutil: 'var(--sombra-sutil)',
        elevada: 'var(--sombra-elevada)',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        display: ['"Kulim Park"', '"Open Sans"', 'sans-serif'],
      },
      maxWidth: {
        contenido: '1200px',
      },
    },
  },
  plugins: [],
};
