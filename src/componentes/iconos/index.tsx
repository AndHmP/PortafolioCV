import type { ReactNode } from 'react';

import AndroidIcono from './marcas/AndroidIcono';
import AngularIcono from './marcas/AngularIcono';
import BalsamiqIcono from './marcas/BalsamiqIcono';
import ClaudeCodeIcono from './marcas/ClaudeCodeIcono';
import CssIcono from './marcas/CssIcono';
import DockerIcono from './marcas/DockerIcono';
import FastApiIcono from './marcas/FastApiIcono';
import FigmaIcono from './marcas/FigmaIcono';
import FirebaseIcono from './marcas/FirebaseIcono';
import GitIcono from './marcas/GitIcono';
import HtmlIcono from './marcas/HtmlIcono';
import IllustratorIcono from './marcas/IllustratorIcono';
import JavaIcono from './marcas/JavaIcono';
import JavaScriptIcono from './marcas/JavaScriptIcono';
import JestIcono from './marcas/JestIcono';
import MaterialUiIcono from './marcas/MaterialUiIcono';
import MicrofrontendsIcono from './marcas/MicrofrontendsIcono';
import MicroserviciosIcono from './marcas/MicroserviciosIcono';
import NextJsIcono from './marcas/NextJsIcono';
import NginxIcono from './marcas/NginxIcono';
import PostgreSqlIcono from './marcas/PostgreSqlIcono';
import PowerPointIcono from './marcas/PowerPointIcono';
import PrimeReactIcono from './marcas/PrimeReactIcono';
import PrototipadoIcono from './marcas/PrototipadoIcono';
import PythonIcono from './marcas/PythonIcono';
import ReactIcono from './marcas/ReactIcono';
import ReactQueryIcono from './marcas/ReactQueryIcono';
import SqlServerIcono from './marcas/SqlServerIcono';
import StyledComponentsIcono from './marcas/StyledComponentsIcono';
import TailwindIcono from './marcas/TailwindIcono';
import TestingLibraryIcono from './marcas/TestingLibraryIcono';
import TypeScriptIcono from './marcas/TypeScriptIcono';
import ViteIcono from './marcas/ViteIcono';
import WordIcono from './marcas/WordIcono';

import InicialIcono from './marcas/InicialIcono';
import PrimariaIcono from './marcas/PrimariaIcono';
import SecundariaIcono from './marcas/SecundariaIcono';
import SenatiIcono from './marcas/SenatiIcono';

/**
 * Registro de iconos ilustrados.
 * El contenido (`src/contenido/*`) guarda solo la clave; el JSX vive aquí.
 * Así los datos siguen siendo serializables y testeables sin renderizar React.
 *
 * Las marcas salen del set monocromo de Simple Icons, salvo cuatro que no
 * tienen logotipo libre y se dibujaron aquí: microfrontends, microservicios,
 * SQL Server y prototipado. Java usa la marca de OpenJDK por el mismo motivo.
 * Todas pintan con `currentColor`, así heredan el color de acento de la tarjeta.
 */
const REGISTRO: Record<string, ReactNode> = {
  /* Frontend */
  react: <ReactIcono />,
  typescript: <TypeScriptIcono />,
  javascript: <JavaScriptIcono />,
  nextjs: <NextJsIcono />,
  angular: <AngularIcono />,
  microfrontends: <MicrofrontendsIcono />,
  'react-query': <ReactQueryIcono />,
  tailwind: <TailwindIcono />,
  'material-ui': <MaterialUiIcono />,
  primereact: <PrimeReactIcono />,
  'styled-components': <StyledComponentsIcono />,
  html: <HtmlIcono />,
  css: <CssIcono />,

  /* Backend */
  python: <PythonIcono />,
  fastapi: <FastApiIcono />,
  microservicios: <MicroserviciosIcono />,

  /* Móvil */
  android: <AndroidIcono />,
  java: <JavaIcono />,

  /* Datos */
  sqlserver: <SqlServerIcono />,
  postgresql: <PostgreSqlIcono />,
  firebase: <FirebaseIcono />,

  /* Infraestructura */
  docker: <DockerIcono />,
  nginx: <NginxIcono />,
  git: <GitIcono />,
  vite: <ViteIcono />,

  /* Calidad */
  jest: <JestIcono />,
  'testing-library': <TestingLibraryIcono />,

  /* IA y diseño */
  'claude-code': <ClaudeCodeIcono />,
  figma: <FigmaIcono />,
  balsamiq: <BalsamiqIcono />,
  prototipado: <PrototipadoIcono />,
  illustrator: <IllustratorIcono />,

  /* Ofimática */
  word: <WordIcono />,
  powerpoint: <PowerPointIcono />,

  /* Formación */
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
