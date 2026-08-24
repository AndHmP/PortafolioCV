import { createContext } from 'react';

import type { Diccionario } from '@/contenido/i18n/es';
import type { Idioma, Tema, Texto } from '@/tipos';

export interface ValorTema {
  tema: Tema;
  alternarTema: () => void;
  fijarTema: (tema: Tema) => void;
}

export interface ValorIdioma {
  idioma: Idioma;
  alternarIdioma: () => void;
  fijarIdioma: (idioma: Idioma) => void;
  /** Diccionario de interfaz en el idioma activo. */
  t: Diccionario;
  /** Resuelve un `Texto` bilingüe del contenido al idioma activo. */
  tr: (texto: Texto) => string;
  /** Resuelve un arreglo bilingüe de párrafos. */
  trs: (parrafos: Record<Idioma, string[]>) => string[];
}

export const ContextoTema = createContext<ValorTema | null>(null);
export const ContextoIdioma = createContext<ValorIdioma | null>(null);

export const CLAVE_TEMA = 'portafolio:tema';
export const CLAVE_IDIOMA = 'portafolio:idioma';
