import type { Diccionario } from './es';

/**
 * El tipo `Diccionario` se deriva del diccionario en español, así que omitir
 * o renombrar una clave rompe la compilación en vez de fallar en producción.
 */
export const en: Diccionario = {
  nav: {
    inicio: 'Home',
    proyectos: 'Projects',
    perfil: 'Profile',
    laboratorio: 'UI Lab',
    abrirMenu: 'Open navigation menu',
    cerrarMenu: 'Close navigation menu',
    saltarContenido: 'Skip to main content',
    navegacionPrincipal: 'Main navigation',
  },

  acciones: {
    verProyectos: 'View projects',
    verProyecto: 'Read case study',
    verTodos: 'View all projects',
    descargarCV: 'Download CV',
    contactar: 'Get in touch',
    verRepo: 'Code',
    verDemo: 'Demo',
    verVideo: 'Video',
    verArticulo: 'Article',
    volver: 'Back',
    volverProyectos: 'Back to projects',
    verCodigo: 'View source',
    ocultarCodigo: 'Hide source',
    copiar: 'Copy',
    copiado: 'Copied',
    anterior: 'Previous',
    siguiente: 'Next',
  },

  tema: {
    cambiar: 'Toggle theme',
    claro: 'Light theme',
    oscuro: 'Dark theme',
  },

  idioma: {
    cambiar: 'Change language',
    actual: 'English',
    otro: 'Español',
  },

  inicio: {
    disponible: 'Available for new opportunities',
    metricaExperiencia: 'years of experience',
    metricaProyectos: 'published projects',
    metricaEmpresas: 'companies',
    metricaTecnologias: 'technologies',
    tituloProyectos: 'Featured projects',
    subtituloProyectos: 'Case studies with the problem, the solution and the technical decisions behind them.',
    tituloStack: 'Tech stack',
    subtituloStack: 'What I use daily, and what I reach for when the problem calls for it.',
    tituloExperiencia: 'Experience',
    subtituloExperiencia: 'Where I have worked and what I built there.',
    tituloContacto: 'Let us talk',
    subtituloContacto: 'If you have a project or a role in mind, drop me a line.',
    tituloLaboratorio: 'UI Lab',
    subtituloLaboratorio: 'Components and interactions built with CSS, with their source on display.',
    explorarLaboratorio: 'Explore the lab',
  },

  proyectos: {
    titulo: 'Projects',
    subtitulo:
      'Each project documents the problem it solved, how I solved it and what I decided along the way.',
    filtros: 'Filters',
    filtrarTecnologia: 'Technology',
    filtrarTipo: 'Type',
    todos: 'All',
    limpiar: 'Clear filters',
    sinResultados: 'No projects match these filters.',
    contadorUno: 'project',
    contadorVarios: 'projects',
    catalogoVacio: 'No projects published yet.',
  },

  detalle: {
    contexto: 'Context',
    periodo: 'Period',
    problema: 'The problem',
    solucion: 'The solution',
    decisiones: 'Technical decisions',
    retos: 'Challenges',
    resultados: 'Outcomes',
    arquitectura: 'Architecture',
    capturas: 'Screenshots',
    stack: 'Stack',
    noEncontrado: 'That project does not exist',
    noEncontradoDetalle: 'The link may be wrong, or the project may no longer be published.',
  },

  perfil: {
    titulo: 'Profile',
    subtitulo: 'Who I am, what I can do and where I come from.',
    datosPersonales: 'Personal details',
    sobreMi: 'About me',
    contacto: 'Contact',
    conocimientos: 'Skills',
    formacion: 'Education',
    experiencia: 'Work experience',
    valores: 'Values',
    edad: 'years old',
    nivelAvanzado: 'Advanced',
    nivelIntermedio: 'Intermediate',
    nivelBasico: 'Basic',
    aniosDeUso: 'of use',
    logros: 'What I did',
    idiomas: 'Languages',
  },

  laboratorio: {
    titulo: 'UI Lab',
    subtitulo:
      'Components and interactions built mostly with CSS. Each piece states which technique it demonstrates.',
    todas: 'All',
    animaciones: 'Animations',
    inputs: 'Fields',
    botones: 'Buttons',
    formularios: 'Forms',
    tecnica: 'Technique',
    contadorUno: 'piece',
    contadorVarios: 'pieces',
    sinResultados: 'No pieces in this category.',
  },

  tipos: {
    fullstack: 'Full Stack',
    web: 'Web',
    movil: 'Mobile',
    backend: 'Backend',
    microservicios: 'Microservices',
    laboratorio: 'Lab',
  },

  noEncontrado: {
    titulo: 'Page not found',
    mensaje: 'The address you are looking for does not exist or has moved.',
    volver: 'Back to home',
  },

  footer: {
    construidoCon: 'Built with React, TypeScript and Vite.',
    verCodigo: 'View this site source',
    derechos: 'All rights reserved.',
  },

  comun: {
    cargando: 'Loading…',
    error: 'Something went wrong',
    errorDetalle: 'This section could not be loaded. Try reloading the page.',
  },
};
