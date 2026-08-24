import type { ReactNode } from 'react';

import CssIcono from './marcas/CssIcono';
import HtmlIcono from './marcas/HtmlIcono';
import IllustratorIcono from './marcas/IllustratorIcono';
import JavaScriptIcono from './marcas/JavaScriptIcono';
import PowerPointIcono from './marcas/PowerPointIcono';
import ReactIcono from './marcas/ReactIcono';
import WordIcono from './marcas/WordIcono';

import InicialIcono from './marcas/InicialIcono';
import PrimariaIcono from './marcas/PrimariaIcono';
import SecundariaIcono from './marcas/SecundariaIcono';
import SenatiIcono from './marcas/SenatiIcono';


/**
 * Registro de iconos ilustrados.
 * El contenido (`src/contenido/*`) guarda solo la clave; el JSX vive aquí.
 * Así los datos siguen siendo serializables y testeables sin renderizar React.
 */
const REGISTRO: Record<string, ReactNode> = {
  react: <ReactIcono />,
  javascript: <JavaScriptIcono />,
  html: <HtmlIcono />,
  css: <CssIcono />,
  illustrator: <IllustratorIcono />,
  word: <WordIcono />,
  powerpoint: <PowerPointIcono />,

  inicial: <InicialIcono />,
  primaria: <PrimariaIcono />,
  secundaria: <SecundariaIcono />,
  senati: <SenatiIcono />,
};

export function obtenerIconoIlustrado(clave: string): ReactNode | null {
  return REGISTRO[clave] ?? null;
}

export function tieneIconoIlustrado(clave: string): boolean {
  return clave in REGISTRO;
}
