/**
 * Genera `src/contenido/lab.tsx` a partir de los archivos del laboratorio.
 *
 * La etiqueta de técnica de cada pieza de animación no se escribe a mano: se
 * deduce leyendo qué propiedades usa realmente su hoja de estilo. Así la
 * descripción no puede desincronizarse del código.
 *
 *   node scripts/generar-registro-lab.mjs
 */
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR_ANIM = 'src/lab/animaciones';
const DIR_ESTILOS = join(DIR_ANIM, 'estilos');

/** Nombre oficial del reto de cada día en 100dayscss.com. */
const TITULOS = {
  27: ['Checklist', 'Checklist'],
  28: ['Ring Ring', 'Ring Ring'],
  29: ['Campo de búsqueda', 'Search Field'],
  30: ['Línea al azar', 'Random Line'],
  31: ['Onda de péndulos', 'Pendulum Wave'],
  32: ['Contador', 'Counter'],
  33: ['Día soleado', 'Sunny Day'],
  34: ['Hello', 'Hello'],
  35: ['Círculo de carga', 'Loading Circle'],
  36: ['Pestañas', 'Tabs'],
  37: ['Carrusel', 'Carousel'],
  38: ['Transición de logo', 'Logo Transition'],
  39: ['Menú hamburguesa', 'Menu Toggle'],
  40: ['Galería', 'Gallery'],
  41: ['Modal de error', 'Error Modal'],
  42: ['Estrellas', 'Stars'],
  43: ['Bombilla', 'Lightbulb'],
  44: ['Pirámide retorcida', 'Twisted Pyramid'],
  45: ['Botón', 'Button'],
  46: ['Círculos de iris', 'Iris Circles'],
  47: ['Pixel art', 'Pixel Art'],
  48: ['Cubo 3D', '3D Cube'],
  49: ['CSS Follow', 'CSS Follow'],
  50: ['Huevo de pascua', 'Easter Egg'],
  51: ['Contador CSS', 'CSS Counter'],
  52: ['Onda de puntos', 'Dot Wave'],
  53: ['Control deslizante', 'Range Slider'],
  54: ['Olas', 'Waves'],
  55: ['Termostato', 'Thermostat'],
  56: ['Flor', 'Flower'],
  57: ['Icosaedro', 'Icosahedron'],
  58: ['Esfera 3D', '3D Sphere'],
  59: ['Transición en tiras', 'Slice Transition'],
  60: ['Superficie desenfocada', 'Blurry Overlay'],
  61: ['Transición de degradado', 'Gradient Transition'],
  62: ['Tabla de precios', 'Price Table'],
  63: ['Anillo hipnótico', 'Hypnotic Ring'],
  64: ['Botón con efecto', 'Button'],
  65: ['Elipses', 'Ellipses Animation'],
  66: ['Casilla con destello', 'Sparkle Checkbox'],
  67: ['Sombrilla 3D', '3D Parasol'],
  68: ['Grabación', 'Recording'],
  69: ['Ojo', 'Eye'],
  70: ['Días del calendario', 'Calendar Days'],
  71: ['Teclado morse', 'Morse Code Keyboard'],
  72: ['Los anillos', 'The Rings'],
  73: ['Carrusel de palabras', 'Word Carousel'],
  74: ['Paginación', 'Pagination'],
  75: ['Discos giratorios', 'Spinning Discs'],
  76: ['Clave oculta', 'Reveal Key'],
  77: ['Desenfoque de movimiento', 'Motion Blur'],
  78: ['Sombra al pasar', 'Hover Shadow'],
  79: ['Líneas', 'Lines Animation'],
  80: ['Acordeón con Flexbox', 'Flexbox Accordeon'],
  81: ['Pelota que rebota', 'Jumping Ball'],
  82: ['Botón de acción', 'Action Button'],
  83: ['Velocidad de la luz', 'Warp Drive'],
  84: ['Portada de libro', 'Book Cover'],
  85: ['Algo', "It's something"],
  86: ['Péndulo de Newton', "Newton's Cradle"],
  87: ['Rubí', 'Ruby'],
  88: ['Vela', 'Candle'],
  89: ['Patrón animado', 'Animated Pattern'],
  90: ['Trampa para el cursor', 'Mouse Trap'],
  91: ['Cargador de cubos', 'Cube Loader'],
  92: ['Puntos danzantes', 'Dancing Points'],
  93: ['Candado', 'Padlock'],
  94: ['Árbol', 'Tree'],
  95: ['Cerdito', 'Pig'],
  96: ['Cuadrado saltarín', 'Jumping Square'],
  97: ['Marioneta', 'Puppet'],
  98: ['Plopp', 'Plopp'],
  99: ['Círculo-cuadrado', 'Circle-Square'],
  100: ['Luz de neón', 'Neon Light'],
};

/** Detectores ordenados por relevancia: se toman los tres primeros que casen. */
const DETECCIONES = [
  [/transform-style\s*:\s*preserve-3d|perspective\s*:/i, 'transformaciones 3D', '3D transforms'],
  [/@keyframes/i, 'animaciones por fotogramas', 'keyframe animations'],
  [/clip-path/i, 'recortes con clip-path', 'clip-path masking'],
  [/backdrop-filter/i, 'desenfoque de fondo', 'backdrop blur'],
  [/@for\s|@each\s/i, 'generación de reglas con Sass', 'rule generation with Sass'],
  [/mix-blend-mode/i, 'modos de fusión', 'blend modes'],
  [/stroke-dash(array|offset)/i, 'trazado de SVG animado', 'animated SVG stroke'],
  [/:focus-within/i, 'estados de foco sin JavaScript', 'focus states without JavaScript'],
  [/filter\s*:/i, 'filtros CSS', 'CSS filters'],
  [/(linear|radial|conic)-gradient/i, 'degradados', 'gradients'],
  [/box-shadow/i, 'sombras compuestas', 'layered shadows'],
  [/display\s*:\s*grid/i, 'CSS Grid', 'CSS Grid'],
  [/cubic-bezier/i, 'curvas de aceleración propias', 'custom easing curves'],
  [/:hover/i, 'estados de interacción', 'interaction states'],
  [/transition/i, 'transiciones', 'transitions'],
  [/position\s*:\s*absolute/i, 'posicionamiento absoluto', 'absolute positioning'],
  [/border-radius\s*:\s*50%/i, 'formas circulares', 'circular shapes'],
];

function tecnicaDe(css) {
  const es = [];
  const en = [];
  for (const [patron, etiquetaEs, etiquetaEn] of DETECCIONES) {
    if (patron.test(css)) {
      es.push(etiquetaEs);
      en.push(etiquetaEn);
    }
    if (es.length === 3) break;
  }
  if (es.length === 0) return ['Maquetación con CSS.', 'CSS layout.'];

  const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  return [`${capitalizar(es.join(', '))}.`, `${capitalizar(en.join(', '))}.`];
}

function leerEstilo(base) {
  for (const ext of ['.scss', '.css']) {
    const ruta = join(DIR_ESTILOS, base + ext);
    if (existsSync(ruta)) return readFileSync(ruta, 'utf8');
  }
  return '';
}

const dias = readdirSync(DIR_ANIM)
  .filter((f) => /^Dia\d{2,3}\.tsx$/.test(f))
  .map((f) => ({ base: f.replace('.tsx', ''), numero: Number(f.match(/\d+/)[0]) }))
  .sort((a, b) => a.numero - b.numero);

const INPUTS = [
  ['Campo con leyenda flotante', 'Field with floating legend', 'Fieldset con legend que cambia de color al enfocar.', 'Fieldset with a legend that recolours on focus.'],
  ['Campo con borde animado', 'Field with animated border', 'Transición del borde y la etiqueta según el estado de foco.', 'Border and label transition driven by focus state.'],
  ['Campo con etiqueta ascendente', 'Field with rising label', 'Etiqueta que sube al escribir, sin JavaScript de posicionamiento.', 'Label that rises while typing, with no positioning JavaScript.'],
  ['Campo con subrayado', 'Underlined field', 'Subrayado que crece desde el centro al enfocar.', 'Underline growing from the centre on focus.'],
  ['Campo con título', 'Field with title', 'Medidas propagadas como variables CSS para que dos instancias no se pisen.', 'Measurements passed as CSS variables so two instances do not clash.'],
  ['Campo con icono', 'Field with icon', 'Icono posicionado dentro del campo sin romper el área de clic.', 'Icon positioned inside the field without breaking the click area.'],
];

const BOTONES = [
  ['Botón de envío animado', 'Animated submit button', 'Transición de fondo y desplazamiento del contenido al pasar el cursor.', 'Background transition and content shift on hover.'],
  ['Botón con relleno progresivo', 'Progressive fill button', 'Relleno que avanza desde un borde usando pseudoelementos.', 'Fill advancing from one edge using pseudo-elements.'],
];

const lineas = [];
lineas.push("import type { PiezaLab } from '@/tipos';");
lineas.push('');
lineas.push("import '@/lab/estilos/utilidades-heredadas.css';");
lineas.push('');
lineas.push('/* Generado por scripts/generar-registro-lab.mjs — no editar a mano. */');
lineas.push('');
dias.forEach((d) => lineas.push(`import ${d.base} from '@/lab/animaciones/${d.base}';`));
lineas.push('');
for (let n = 1; n <= 6; n += 1) {
  lineas.push(`import InputType0${n} from '@/lab/inputs/InputType0${n}';`);
}
lineas.push('');
for (let n = 1; n <= 2; n += 1) {
  lineas.push(`import ButtonType0${n} from '@/lab/botones/ButtonType0${n}';`);
}
lineas.push("import LoginDemo from '@/lab/login/LoginDemo';");
lineas.push('');
lineas.push('export const piezasLab: PiezaLab[] = [');

dias.forEach((d) => {
  const [tecEs, tecEn] = tecnicaDe(leerEstilo(d.base));
  const nn = String(d.numero).padStart(2, '0');
  const nombre = TITULOS[d.numero];
  const tituloEs = nombre ? `Día ${nn} · ${nombre[0]}` : `Día ${nn}`;
  const tituloEn = nombre ? `Day ${nn} · ${nombre[1]}` : `Day ${nn}`;

  lineas.push('  {');
  lineas.push(`    slug: 'animacion-${nn}',`);
  lineas.push(`    titulo: { es: ${JSON.stringify(tituloEs)}, en: ${JSON.stringify(tituloEn)} },`);
  lineas.push("    categoria: 'animaciones',");
  lineas.push(`    tecnica: { es: ${JSON.stringify(tecEs)}, en: ${JSON.stringify(tecEn)} },`);
  lineas.push(`    componente: <${d.base} />,`);
  lineas.push("    fondoFijo: 'oscuro',");
  lineas.push('  },');
});

INPUTS.forEach(([te, ten, tece, tecen], i) => {
  const n = i + 1;
  lineas.push('  {');
  lineas.push(`    slug: 'campo-0${n}',`);
  lineas.push(`    titulo: { es: ${JSON.stringify(te)}, en: ${JSON.stringify(ten)} },`);
  lineas.push("    categoria: 'inputs',");
  lineas.push(`    tecnica: { es: ${JSON.stringify(tece)}, en: ${JSON.stringify(tecen)} },`);
  lineas.push(
    `    componente: <InputType0${n} placeholder="Correo electrónico"${n === 5 ? ' titulo="Nombre"' : ''} />,`,
  );
  lineas.push('    alto: 140,');
  lineas.push('  },');
});

BOTONES.forEach(([te, ten, tece, tecen], i) => {
  const n = i + 1;
  lineas.push('  {');
  lineas.push(`    slug: 'boton-0${n}',`);
  lineas.push(`    titulo: { es: ${JSON.stringify(te)}, en: ${JSON.stringify(ten)} },`);
  lineas.push("    categoria: 'botones',");
  lineas.push(`    tecnica: { es: ${JSON.stringify(tece)}, en: ${JSON.stringify(tecen)} },`);
  lineas.push(`    componente: <ButtonType0${n} />,`);
  lineas.push('    alto: 140,');
  lineas.push('  },');
});

lineas.push('  {');
lineas.push("    slug: 'formulario-autenticacion',");
lineas.push("    titulo: { es: 'Pantalla de autenticación', en: 'Authentication screen' },");
lineas.push("    categoria: 'formularios',");
lineas.push('    tecnica: {');
lineas.push(
  "      es: 'Panel deslizante entre inicio de sesión y registro, con validación en cliente mediante react-hook-form y zod.',",
);
lineas.push(
  "      en: 'Sliding panel between sign-in and sign-up, with client-side validation via react-hook-form and zod.',",
);
lineas.push('    },');
lineas.push('    componente: <LoginDemo />,');
lineas.push('    alto: 620,');
lineas.push('  },');
lineas.push('];');
lineas.push('');
lineas.push("/** Piezas de una categoría, o todas si no se indica ninguna. */");
lineas.push("export function piezasPorCategoria(categoria: PiezaLab['categoria'] | null): PiezaLab[] {");
lineas.push('  if (!categoria) return piezasLab;');
lineas.push('  return piezasLab.filter((pieza) => pieza.categoria === categoria);');
lineas.push('}');

writeFileSync('src/contenido/lab.tsx', `${lineas.join('\n')}\n`, 'utf8');
console.log(`lab.tsx generado: ${dias.length} animaciones + ${INPUTS.length + BOTONES.length + 1} piezas de UI`);
