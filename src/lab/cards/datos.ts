/**
 * Datos de demostración de la galería de cards.
 *
 * No son contenido del portafolio: son el relleno que necesitan las cards para
 * enseñar su diseño, así que viven junto a los componentes y no en
 * `src/contenido`.
 *
 * Se conservan tal como estaban en la versión original. Lo único que cambia es
 * de dónde salen las imágenes: antes se enlazaban en caliente a servidores
 * ajenos —y varios de esos enlaces ya se estaban cayendo— y ahora están
 * guardadas en `public/lab/cards`.
 */

export interface Zapatilla {
  id: string;
  producto: string;
  img: string;
  /** El primer color tiñe el fondo de la card; el resto son variantes. */
  colores: string[];
  nombre: string;
  precio: string;
}

export interface FichaEmpleado {
  nombre: string;
  puesto: string;
  img: string;
  color: string;
  secciones: { titulo: string; filas: { clave: string; valor: string }[] }[];
}

export interface PerfilRed {
  nombre: string;
  img: string;
  fondo: string;
  rol: string;
}

export interface ProductoTienda {
  nombre: string;
  /** Vacío cuando el logotipo original ya no existe en su origen. */
  marca: string;
  descripcion: string;
  estrellas: number;
  precio: string;
  variantes: { color: string; img: string }[];
}

export interface Coleccionable {
  imgFondo: string;
  imgFigura: string;
  imgTitulo: string;
}

export interface Destino {
  lugar: string;
  descripcion: string;
  img: string;
}

export interface Promocion {
  titulo: [string, string, string];
  contenido: string;
  img: string;
  descuento: [string, string, string];
  color: string;
}

const RUTA = '/lab/cards';

export const zapatillas: Zapatilla[] = [
  {
    id: '01',
    producto: 'sneakers',
    img: `${RUTA}/zapatilla-01.png`,
    colores: ['#565555', '#C10A0A', '#1C87A1'],
    nombre: 'Nike Gray',
    precio: '2.45',
  },
  {
    id: '02',
    producto: 'sneakers',
    img: `${RUTA}/zapatilla-02.png`,
    colores: ['#C10A0A', '#565555', '#8DA332'],
    nombre: 'Nike Red',
    precio: '2.45',
  },
  {
    id: '03',
    producto: 'sneakers',
    img: `${RUTA}/zapatilla-03.png`,
    colores: ['#8DA332', '#1C87A1', '#565555'],
    nombre: 'Nike Green',
    precio: '2.45',
  },
  {
    id: '04',
    producto: 'sneakers',
    img: `${RUTA}/zapatilla-04.png`,
    colores: ['#1C87A1', '#C10A0A', '#8DA332'],
    nombre: 'Nike Blue',
    precio: '2.45',
  },
];

/* Las tres secciones se repiten entre fichas: es una plantilla, no datos. */
const SOBRE_MI = {
  titulo: 'About me',
  filas: [
    { clave: 'Language', valor: 'English' },
    { clave: 'Hometown', valor: 'London' },
    { clave: 'Date of birth', valor: '03 December 1990' },
    { clave: 'Relationship', valor: 'Married' },
  ],
};

const APTITUDES = {
  titulo: 'My Skills',
  filas: [
    { clave: 'HTML', valor: '85%' },
    { clave: 'VUE', valor: '90%' },
    { clave: 'AngularJS', valor: '70%' },
    { clave: 'NodeJS', valor: '82%' },
  ],
};

const CONTACTOS = {
  titulo: 'My Contacts',
  filas: [
    { clave: 'E-mail', valor: 'text@gmail.com' },
    { clave: 'Phone', valor: '7-900-000-00-00' },
    { clave: 'WhatsApp', valor: '+7 000 000-00-00' },
    { clave: 'Skype', valor: 'username' },
  ],
};

export const empleados: FichaEmpleado[] = [
  {
    nombre: 'Stas Melnikov',
    puesto: 'UI Developer',
    img: `${RUTA}/empleado-01.jpg`,
    color: '#041986',
    secciones: [SOBRE_MI, APTITUDES, CONTACTOS],
  },
  {
    nombre: 'Ana Williams',
    puesto: 'UI Developer',
    img: `${RUTA}/empleado-02.jpg`,
    color: '#e51313',
    secciones: [SOBRE_MI, CONTACTOS],
  },
  {
    nombre: 'Logan Parker',
    puesto: 'UI Developer',
    img: `${RUTA}/empleado-03.jpg`,
    color: '#039905',
    secciones: [SOBRE_MI, APTITUDES, CONTACTOS],
  },
  {
    nombre: 'Emily Harper',
    puesto: 'UI Developer',
    img: `${RUTA}/empleado-04.jpg`,
    color: '#dc9900',
    secciones: [APTITUDES, CONTACTOS],
  },
];

export const perfilesRed: PerfilRed[] = [
  {
    nombre: 'John Smith',
    img: `${RUTA}/avatar-01.jpg`,
    fondo: `${RUTA}/perfil-01-fondo.jpg`,
    rol: 'FullStack Developer',
  },
  {
    nombre: 'Olivia Bennett',
    img: `${RUTA}/avatar-02.jpg`,
    fondo: `${RUTA}/perfil-02-fondo.jpg`,
    rol: 'FullStack Developer',
  },
  {
    nombre: 'Ethan Cooper',
    img: `${RUTA}/avatar-03.jpg`,
    fondo: `${RUTA}/perfil-03-fondo.jpg`,
    rol: 'FullStack Developer',
  },
];

const DESCRIPCION_PRODUCTO =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem nisi adipisci error eligendi';

export const productos: ProductoTienda[] = [
  {
    nombre: 'Zapato Running 413',
    marca: `${RUTA}/marca-01.png`,
    descripcion: DESCRIPCION_PRODUCTO,
    estrellas: 4,
    precio: '105.00',
    variantes: [
      { color: '#E52E37', img: `${RUTA}/producto-01-color-01.png` },
      { color: '#474747', img: `${RUTA}/producto-01-color-02.png` },
      { color: '#3865DC', img: `${RUTA}/producto-01-color-03.png` },
      { color: '#141414', img: `${RUTA}/producto-01-color-04.png` },
    ],
  },
  {
    nombre: 'ADIDAS GAZE ZX',
    marca: `${RUTA}/marca-02.png`,
    descripcion: DESCRIPCION_PRODUCTO,
    estrellas: 3,
    precio: '96.00',
    variantes: [
      { color: '#1E1C27', img: `${RUTA}/producto-02-color-01.png` },
      { color: '#A35B8D', img: `${RUTA}/producto-02-color-02.png` },
      { color: '#D97052', img: `${RUTA}/producto-02-color-03.png` },
      { color: '#465F80', img: `${RUTA}/producto-02-color-04.png` },
    ],
  },
  {
    /* Su logotipo daba 404 en el origen desde antes de recuperar la sección,
       así que la card se dibuja sin él, igual que en el sitio publicado. */
    nombre: 'Nike Kyrie Irving Citron',
    marca: '',
    descripcion: DESCRIPCION_PRODUCTO,
    estrellas: 5,
    precio: '114.00',
    variantes: [
      { color: '#58A19E', img: `${RUTA}/producto-03-color-01.png` },
      { color: '#161513', img: `${RUTA}/producto-03-color-02.png` },
      { color: '#E0D68A', img: `${RUTA}/producto-03-color-03.png` },
      { color: '#454547', img: `${RUTA}/producto-03-color-04.png` },
    ],
  },
  {
    nombre: 'Zapatos Vans Comfycush',
    marca: `${RUTA}/marca-04.png`,
    descripcion: DESCRIPCION_PRODUCTO,
    estrellas: 4,
    precio: '90.00',
    variantes: [
      { color: '#161616', img: `${RUTA}/producto-04-color-01.png` },
      { color: '#C1C1C6', img: `${RUTA}/producto-04-color-02.png` },
    ],
  },
];

export const coleccionables: Coleccionable[] = Array.from({ length: 10 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    imgFondo: `${RUTA}/poster-${n}-fondo.webp`,
    imgFigura: `${RUTA}/poster-${n}-figura.webp`,
    imgTitulo: `${RUTA}/poster-${n}-titulo.webp`,
  };
});

const DESCRIPCION_DESTINO =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam rem quos labore dolores exercitationem tenetur debitis sequi omnis commodi magni reiciendis distinctio fugiat quis, eos placeat repellat iste ad.';

export const destinos: Destino[] = [
  { lugar: 'Colombia', descripcion: DESCRIPCION_DESTINO, img: `${RUTA}/destino-01.jpg` },
  { lugar: 'Peru', descripcion: DESCRIPCION_DESTINO, img: `${RUTA}/destino-02.jpg` },
  { lugar: 'Chile', descripcion: DESCRIPCION_DESTINO, img: `${RUTA}/destino-03.jpg` },
  { lugar: 'Ecuador', descripcion: DESCRIPCION_DESTINO, img: `${RUTA}/destino-04.jpg` },
];

/* Los títulos llevan una parte resaltada en el color de la card. El original
   guardaba JSX dentro de los datos; aquí viajan como tres tramos de texto y es
   la card la que decide cómo pintar el del medio. */
export const promociones: Promocion[] = [
  {
    titulo: ['Discover your ', 'perfect match', ' today!'],
    contenido:
      'Unlock the best deals and find exactly what you need. Don’t miss out on exclusive offers tailored for you!',
    img: `${RUTA}/promo-01.avif`,
    descuento: ['Sign up', ' now ', 'and enjoy 50% off your first purchase!'],
    color: '#ff5733',
  },
  {
    titulo: ['Your ', 'dream choice', ' awaits!'],
    contenido:
      'Experience top-quality products designed for your needs. Get ready to upgrade your lifestyle with the best offers available!',
    img: `${RUTA}/promo-02.jpg`,
    descuento: ['Exclusive deal:', ' 30% ', 'off for a limited time!'],
    color: '#007acc',
  },
  {
    titulo: ['Start your ', 'journey', ' with us!'],
    contenido:
      'Shop smarter and save more with our incredible selection. Quality, affordability, and satisfaction guaranteed!',
    img: `${RUTA}/promo-03.png`,
    descuento: ['Get an extra', ' 20% ', 'off on your next order!'],
    color: '#1ca85c',
  },
];
