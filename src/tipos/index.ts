import type { ReactNode } from 'react';

/* ---------------------------------------------------------------- */
/* Base                                                              */
/* ---------------------------------------------------------------- */

export type Idioma = 'es' | 'en';
export type Tema = 'claro' | 'oscuro';

/** Todo texto visible del portafolio vive en los dos idiomas. */
export type Texto = Record<Idioma, string>;

/** Igual que `Texto`, pero para contenido con varios párrafos. */
export type Parrafos = Record<Idioma, string[]>;

/* ---------------------------------------------------------------- */
/* Stack técnico                                                     */
/* ---------------------------------------------------------------- */

export type CategoriaTecnologia =
  | 'frontend'
  | 'backend'
  | 'movil'
  | 'datos'
  | 'infraestructura'
  | 'calidad'
  | 'diseno';

export type NivelTecnologia = 'avanzado' | 'intermedio' | 'basico';

export interface Tecnologia {
  clave: string;
  nombre: string;
  categoria: CategoriaTecnologia;
  nivel: NivelTecnologia;
  descripcion: Texto;
  /** Años de uso profesional. Se muestra como "3 años" / "3 years". */
  anios?: number;
}

/* ---------------------------------------------------------------- */
/* Proyectos — el catálogo extensible                                */
/* ---------------------------------------------------------------- */

/**
 * Estado de publicación.
 * `en-desarrollo` deja el proyecto registrado pero fuera del sitio público:
 * es el flag que se cambia a `publicado` cuando el proyecto está listo.
 */
export type EstadoProyecto = 'publicado' | 'en-desarrollo' | 'archivado';

export type TipoProyecto =
  | 'fullstack'
  | 'web'
  | 'movil'
  | 'backend'
  | 'microservicios'
  | 'laboratorio';

export interface DecisionTecnica {
  titulo: Texto;
  detalle: Texto;
}

export interface ImagenProyecto {
  src: string;
  alt: Texto;
  /** Marca la imagen que se usa como portada en la tarjeta y en OG. */
  portada?: boolean;
}

export interface EnlacesProyecto {
  demo?: string;
  repo?: string;
  video?: string;
  articulo?: string;
}

export interface Proyecto {
  /** Identificador en la URL: /proyectos/<slug>. Debe ser único. */
  slug: string;
  estado: EstadoProyecto;
  /** Aparece en los destacados de la portada. */
  destacado?: boolean;
  tipo: TipoProyecto;
  titulo: Texto;
  /** 2-3 líneas para la tarjeta del grid. */
  resumen: Texto;
  /** Qué problema real resuelve. */
  problema: Texto;
  /** Cómo se resolvió. */
  solucion: Texto;
  decisionesTecnicas?: DecisionTecnica[];
  /** Qué salió mal y cómo se manejó. Es lo que separa un caso de estudio de un anuncio. */
  retos?: Texto;
  /** Impacto medible, cuando existe. */
  resultados?: Parrafos;
  /** Claves de `contenido/stack.ts`. Alimentan los filtros. */
  stack: string[];
  /** Diagrama Mermaid o ASCII de la arquitectura. */
  arquitectura?: string;
  enlaces?: EnlacesProyecto;
  imagenes?: ImagenProyecto[];
  /** Formato YYYY-MM. Ordena el catálogo de más reciente a más antiguo. */
  periodo: string;
  /** Contexto: cliente, empresa o proyecto propio. */
  contexto?: Texto;
}

/* ---------------------------------------------------------------- */
/* Perfil y trayectoria                                              */
/* ---------------------------------------------------------------- */

export type ClaveIcono = string;

export interface DatoContacto {
  icono: ClaveIcono;
  etiqueta: Texto;
  valor: string;
  url?: string;
  /** Se oculta del texto visible pero se usa en enlaces (ej. el número crudo). */
  soloEnlace?: boolean;
}

export interface Experiencia {
  clave: string;
  empresa: string;
  puesto: Texto;
  periodo: Texto;
  /** Formato YYYY-MM, para ordenar. */
  desde: string;
  hasta: string | 'actual';
  descripcion: Texto;
  logros: Parrafos;
  stack: string[];
}

export interface Formacion {
  clave: string;
  institucion: string;
  titulo: Texto;
  periodo: Texto;
  descripcion: Texto;
  icono: ClaveIcono;
}

export interface Valor {
  clave: string;
  titulo: Texto;
  contenido: Texto;
}

/* ---------------------------------------------------------------- */
/* Laboratorio UI                                                    */
/* ---------------------------------------------------------------- */

export type CategoriaLab = 'animaciones' | 'inputs' | 'botones' | 'formularios';

export interface PiezaLab {
  slug: string;
  titulo: Texto;
  categoria: CategoriaLab;
  /** Qué técnica demuestra la pieza. */
  tecnica: Texto;
  componente: ReactNode;
  /** Alto sugerido del lienzo, en px. */
  alto?: number;
  /** Fondo oscuro fijo para piezas diseñadas sobre negro. */
  fondoFijo?: 'oscuro' | 'claro';
}
