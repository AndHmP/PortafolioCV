import type { SVGProps } from 'react';

export type ClaveIconoUI =
  | 'inicio'
  | 'proyectos'
  | 'perfil'
  | 'laboratorio'
  | 'menu'
  | 'cerrar'
  | 'chevron-abajo'
  | 'chevron-izquierda'
  | 'chevron-derecha'
  | 'flecha-derecha'
  | 'enlace-externo'
  | 'codigo'
  | 'github'
  | 'linkedin'
  | 'correo'
  | 'telefono'
  | 'whatsapp'
  | 'ubicacion'
  | 'calendario'
  | 'usuario'
  | 'documento'
  | 'luna'
  | 'sol'
  | 'idioma'
  | 'filtro'
  | 'estrella'
  | 'corazon'
  | 'comentario'
  | 'volumen'
  | 'medidor'
  | 'campana'
  | 'engranaje'
  | 'google'
  | 'facebook';

/**
 * Trazados de cada icono. Todos comparten viewBox 0 0 24 24 y se dibujan con
 * `stroke="currentColor"`, salvo los de marca que necesitan relleno.
 */
const TRAZOS: Record<ClaveIconoUI, { d: string[]; relleno?: boolean }> = {
  inicio: { d: ['M3 10.5 12 3l9 7.5', 'M5.25 9.75V20a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1V9.75'] },
  proyectos: { d: ['M3 7.5A1.5 1.5 0 0 1 4.5 6h4l2 2.5h7A1.5 1.5 0 0 1 19 10v7.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 3 17.5Z'] },
  perfil: { d: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4.5 20.5a7.5 7.5 0 0 1 15 0'] },
  laboratorio: { d: ['M9.5 3v6.2L4.6 17.4A2 2 0 0 0 6.3 20.5h11.4a2 2 0 0 0 1.7-3.1L14.5 9.2V3', 'M8 3h8', 'M7.2 14.5h9.6'] },
  menu: { d: ['M4 7h16', 'M4 12h16', 'M4 17h16'] },
  cerrar: { d: ['M6 6l12 12', 'M18 6 6 18'] },
  'chevron-abajo': { d: ['m6 9 6 6 6-6'] },
  'chevron-izquierda': { d: ['m15 6-6 6 6 6'] },
  'chevron-derecha': { d: ['m9 6 6 6-6 6'] },
  'flecha-derecha': { d: ['M4 12h16', 'm13 5 7 7-7 7'] },
  'enlace-externo': { d: ['M14 4h6v6', 'M20 4 11 13', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'] },
  codigo: { d: ['m8.5 8-4.5 4 4.5 4', 'm15.5 8 4.5 4-4.5 4', 'm13.5 5-3 14'] },
  github: {
    relleno: true,
    d: ['M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.480-.01 2.81 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z'],
  },
  linkedin: {
    relleno: true,
    d: ['M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11ZM9.5 9.5h3.83v1.5h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v5.69h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.31-2.02 2.66v5.14h-4v-11Z'],
  },
  correo: { d: ['M3.5 6.5h17v11h-17z', 'm3.5 7 8.5 6 8.5-6'] },
  telefono: { d: ['M7.5 3.5H4.8A1.8 1.8 0 0 0 3 5.4C3 13.9 10.1 21 18.6 21a1.8 1.8 0 0 0 1.9-1.8v-2.7l-4.3-1.5-2 2a13.4 13.4 0 0 1-5.2-5.2l2-2Z'] },
  whatsapp: {
    relleno: true,
    d: ['M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.19-1.36a9.93 9.93 0 0 0 4.85 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.17 8.17 0 1 1 6.96 3.85Zm4.5-6.13c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.63.79-.78.96-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.33.08-.16.04-.3-.02-.42-.06-.13-.56-1.34-.76-1.83-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.59 4.11 3.63 1.53.66 2.13.72 2.9.6.46-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.11-.22-.17-.47-.3Z'],
  },
  ubicacion: { d: ['M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z', 'M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'] },
  calendario: { d: ['M4.5 5.5h15v15h-15z', 'M4.5 10h15', 'M8.5 3v4', 'M15.5 3v4'] },
  usuario: { d: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4.5 20.5a7.5 7.5 0 0 1 15 0'] },
  documento: { d: ['M6 3h7l5 5v13H6z', 'M13 3v5h5', 'M9 13h6', 'M9 17h6'] },
  luna: { d: ['M20 14.3A8.5 8.5 0 0 1 9.7 4 8.5 8.5 0 1 0 20 14.3Z'] },
  sol: {
    d: ['M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z', 'M12 2v2.5', 'M12 19.5V22', 'M2 12h2.5', 'M19.5 12H22', 'M4.9 4.9l1.8 1.8', 'M17.3 17.3l1.8 1.8', 'M19.1 4.9l-1.8 1.8', 'M6.7 17.3l-1.8 1.8'],
  },
  idioma: { d: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M3.5 9h17', 'M3.5 15h17', 'M12 3a14 14 0 0 1 0 18', 'M12 3a14 14 0 0 0 0 18'] },
  filtro: { d: ['M3.5 5.5h17l-6.5 7.5v5.5l-4 2v-7.5Z'] },
  estrella: { d: ['m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9Z'] },
  corazon: { d: ['M12 20.3 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 1 1 19.4 13Z'] },
  comentario: { d: ['M20.5 5.5h-17v11h4v4l4.5-4h8.5z'] },
  volumen: { d: ['M4 9.5h3.5L12 5.5v13L7.5 14.5H4z', 'M16 9a4 4 0 0 1 0 6', 'M18.5 6.5a7.5 7.5 0 0 1 0 11'] },
  medidor: { d: ['M4 18a8 8 0 1 1 16 0', 'm12 18 4.5-6'] },
  campana: { d: ['M18 8.5a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16s-2-1.5-2-6.5Z', 'M13.7 19a2 2 0 0 1-3.4 0'] },
  engranaje: {
    d: [
      'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
      'M19.4 14.5a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5v.2a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z',
    ],
  },
  google: {
    relleno: true,
    d: ['M21.8 12.23c0-.7-.06-1.37-.18-2.02H12v3.82h5.5a4.7 4.7 0 0 1-2.04 3.09v2.57h3.3c1.93-1.78 3.04-4.4 3.04-7.46Z', 'M12 22c2.76 0 5.07-.92 6.76-2.48l-3.3-2.57c-.92.62-2.1.98-3.46.98-2.66 0-4.91-1.8-5.72-4.21H2.87v2.65A10 10 0 0 0 12 22Z', 'M6.28 13.72a5.99 5.99 0 0 1 0-3.83V7.24H2.87a10 10 0 0 0 0 9.13l3.41-2.65Z', 'M12 5.98c1.5 0 2.85.52 3.91 1.53l2.93-2.93C17.06 2.95 14.75 2 12 2A10 10 0 0 0 2.87 7.24l3.41 2.65C7.09 7.78 9.34 5.98 12 5.98Z'],
  },
  facebook: {
    relleno: true,
    d: ['M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22A10 10 0 0 0 22 12.06Z'],
  },
};

interface PropsIcono extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  nombre: ClaveIconoUI;
  tamano?: number;
  /** Texto para lectores de pantalla. Sin él, el icono se marca decorativo. */
  titulo?: string;
}

export default function Icono({ nombre, tamano = 20, titulo, ...props }: PropsIcono) {
  const icono = TRAZOS[nombre];
  if (!icono) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill={icono.relleno ? 'currentColor' : 'none'}
      stroke={icono.relleno ? 'none' : 'currentColor'}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={titulo ? 'img' : undefined}
      aria-hidden={titulo ? undefined : true}
      aria-label={titulo}
      focusable="false"
      {...props}
    >
      {titulo ? <title>{titulo}</title> : null}
      {icono.d.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
