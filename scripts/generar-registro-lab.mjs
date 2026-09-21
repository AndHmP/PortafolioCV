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
  1: ['100 Days CSS', '100 Days CSS'],
  2: ['Icono de menú', 'Menu Icon'],
  // El reto escribe "Pyramide"; se respeta tal cual en la columna en inglés.
  3: ['La pirámide', 'The Pyramide'],
  4: ['Cargando', 'Loading'],
  5: ['Estadística', 'Statistic'],
  6: ['Perfil', 'Profile'],
  7: ['Notificaciones, búsqueda y menú', 'Notifications, Search and Menu'],
  8: ['Metaballs', 'Metaballs'],
  9: ['Noche lluviosa', 'Rainy Night'],
  10: ['Reloj', 'Watch'],
  11: ['Botas de senderismo', 'Walking Boots'],
  12: ['Tooltip', 'Tooltip'],
  13: ['Galería de usuarios', 'User Gallery'],
  14: ['Byciclopter', 'Byciclopter'],
  15: ['Subir archivo', 'Upload'],
  16: ['Blobby', 'Blobby'],
  17: ['Triángulo de Penrose', 'Penrose Triangle'],
  18: ['Elástico', 'Elastic'],
  19: ['Carrusel con botones de radio', 'Slider with Radio Buttons'],
  20: ['Enviar correo', 'Send Mail'],
  21: ['Pac-Man', 'Pac-Man'],
  22: ['Pulsera de actividad', 'Fitness Tracker'],
  23: ['Tipografía animada', 'Animated Typography'],
  24: ['Botón', 'Button'],
  25: ['Marcador de mapa', 'Map Marker'],
  26: ['Modal motivacional', 'Motivational Modal'],
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
  61: ['Transición de degradado CSS', 'CSS Gradient Transition'],
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

/**
 * Galería de cards: cada pieza es un tipo de card dentro de un carrusel con
 * varios ejemplos. Aquí la técnica se escribe a mano y no se deduce del CSS:
 * a diferencia de las animaciones, lo que distingue a cada card no es una
 * propiedad suelta sino cómo reparte el trabajo entre CSS y estado de React.
 */
const CARDS = [
  {
    slug: 'card-01',
    titulo: ['Producto con inclinación 3D', 'Product card with 3D tilt'],
    tecnica: [
      'Transformaciones 3D según la posición del cursor y brillo radial pasado como variable CSS.',
      '3D transforms driven by cursor position, with a radial highlight passed as a CSS variable.',
    ],
    coleccion: 'zapatillas',
    componente: 'CardTipo01',
    prop: 'elemento',
    clave: 'id',
  },
  {
    slug: 'card-02',
    titulo: ['Ficha de persona con secciones', 'Profile card with sections'],
    tecnica: [
      'Panel deslizante entre secciones y color de la ficha propagado como variable CSS.',
      'Sliding panel between sections, with the card colour propagated as a CSS variable.',
    ],
    coleccion: 'empleados',
    componente: 'CardTipo02',
    prop: 'ficha',
    clave: 'nombre',
  },
  {
    slug: 'card-03',
    titulo: ['Perfil sobre imagen', 'Profile over an image'],
    tecnica: [
      'Zoom del fondo al pasar el cursor, capa de contraste y acciones al pie.',
      'Background zoom on hover, contrast layer and footer actions.',
    ],
    coleccion: 'perfilesRed',
    componente: 'CardTipo03',
    prop: 'perfil',
    clave: 'nombre',
  },
  {
    slug: 'card-04',
    titulo: ['Producto con ficha desplegable', 'Product card with unfolding details'],
    tecnica: [
      'Círculo que se expande y panel de tallas y colores que aparece al pasar el cursor.',
      'Expanding circle and a sizes-and-colours panel revealed on hover.',
    ],
    coleccion: 'zapatillas',
    componente: 'CardTipo04',
    prop: 'producto',
    clave: 'id',
  },
  {
    slug: 'card-05',
    titulo: ['Producto de tienda con variantes', 'Store product with variants'],
    tecnica: [
      'Selector de color que intercambia la imagen, valoración en SVG y texto recortado a dos líneas.',
      'Colour picker swapping the image, SVG rating and text clamped to two lines.',
    ],
    coleccion: 'productos',
    componente: 'CardTipo05',
    prop: 'producto',
    clave: 'nombre',
  },
  {
    slug: 'card-06',
    titulo: ['Lámina de coleccionable', 'Collectible poster'],
    tecnica: [
      'Perspectiva 3D: el fondo se tumba y la figura sale del marco al pasar el cursor.',
      '3D perspective: the backdrop tilts and the figure steps out of the frame on hover.',
    ],
    coleccion: 'coleccionables',
    componente: 'CardTipo06',
    prop: 'pieza',
    clave: 'imgFondo',
    alto: 340,
  },
  {
    slug: 'card-07',
    titulo: ['Destino de viaje', 'Travel destination'],
    tecnica: [
      'Panel que asciende, subrayado que entra desde un lado y texto revelado con retardo.',
      'Rising panel, underline sliding in from one side and a delayed text reveal.',
    ],
    coleccion: 'destinos',
    componente: 'CardTipo07',
    prop: 'destino',
    clave: 'lugar',
  },
  {
    slug: 'card-08',
    titulo: ['Promoción con óvalo', 'Promo card with an oval'],
    tecnica: [
      'Óvalo que sube al pasar el cursor y franja de descuento que responde al rótulo.',
      'Oval rising on hover and a discount band reacting to the label.',
    ],
    coleccion: 'promociones',
    componente: 'CardTipo08',
    prop: 'promocion',
    clave: 'img',
  },
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
lineas.push("import Carrusel from '@/lab/cards/Carrusel';");
for (let n = 1; n <= CARDS.length; n += 1) {
  lineas.push(`import CardTipo0${n} from '@/lab/cards/CardTipo0${n}';`);
}
const COLECCIONES = [...new Set(CARDS.map((c) => c.coleccion))].sort();
lineas.push(`import { ${COLECCIONES.join(', ')} } from '@/lab/cards/datos';`);
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
  lineas.push("    seccion: '100-dias-css',");
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
  lineas.push("    seccion: 'componentes',");
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
  lineas.push("    seccion: 'componentes',");
  lineas.push("    categoria: 'botones',");
  lineas.push(`    tecnica: { es: ${JSON.stringify(tece)}, en: ${JSON.stringify(tecen)} },`);
  lineas.push(`    componente: <ButtonType0${n} />,`);
  lineas.push('    alto: 140,');
  lineas.push('  },');
});

lineas.push('  {');
lineas.push("    slug: 'formulario-autenticacion',");
lineas.push("    titulo: { es: 'Pantalla de autenticación', en: 'Authentication screen' },");
lineas.push("    seccion: 'pantallas',");
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

CARDS.forEach((card) => {
  lineas.push('  {');
  lineas.push(`    slug: ${JSON.stringify(card.slug)},`);
  lineas.push(
    `    titulo: { es: ${JSON.stringify(card.titulo[0])}, en: ${JSON.stringify(card.titulo[1])} },`,
  );
  lineas.push("    seccion: 'cards',");
  lineas.push("    categoria: 'cards',");
  lineas.push(
    `    tecnica: { es: ${JSON.stringify(card.tecnica[0])}, en: ${JSON.stringify(card.tecnica[1])} },`,
  );
  lineas.push('    componente: (');
  lineas.push('      <Carrusel>');
  lineas.push(`        {${card.coleccion}.map((elemento) => (`);
  lineas.push(`          <${card.componente} key={elemento.${card.clave}} ${card.prop}={elemento} />`);
  lineas.push('        ))}');
  lineas.push('      </Carrusel>');
  lineas.push('    ),');
  lineas.push(`    alto: ${card.alto ?? 320},`);
  lineas.push('  },');
});

lineas.push('];');
lineas.push('');
lineas.push("/** Piezas de una sección, en el orden en que se registraron. */");
lineas.push("export function piezasPorSeccion(seccion: PiezaLab['seccion']): PiezaLab[] {");
lineas.push('  return piezasLab.filter((pieza) => pieza.seccion === seccion);');
lineas.push('}');
lineas.push('');
lineas.push("/** Cuántas piezas tiene cada sección, para el índice del Laboratorio. */");
lineas.push("export function conteoPorSeccion(): Record<string, number> {");
lineas.push('  return piezasLab.reduce<Record<string, number>>((acumulado, pieza) => {');
lineas.push('    acumulado[pieza.seccion] = (acumulado[pieza.seccion] ?? 0) + 1;');
lineas.push('    return acumulado;');
lineas.push('  }, {});');
lineas.push('}');

writeFileSync('src/contenido/lab.tsx', `${lineas.join('\n')}\n`, 'utf8');
console.log(
  `lab.tsx generado: ${dias.length} animaciones + ${INPUTS.length + BOTONES.length + 1} piezas de UI + ${CARDS.length} cards`,
);
