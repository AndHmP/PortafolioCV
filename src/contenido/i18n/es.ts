/**
 * Diccionario base. `en.ts` se declara como `typeof es`, de modo que
 * TypeScript falla la compilación si falta cualquier traducción.
 */
export const es = {
  nav: {
    inicio: 'Inicio',
    proyectos: 'Proyectos',
    perfil: 'Perfil',
    laboratorio: 'Laboratorio',
    abrirMenu: 'Abrir menú de navegación',
    cerrarMenu: 'Cerrar menú de navegación',
    saltarContenido: 'Saltar al contenido principal',
    navegacionPrincipal: 'Navegación principal',
  },

  acciones: {
    verProyectos: 'Ver proyectos',
    verProyecto: 'Ver caso de estudio',
    verTodos: 'Ver todos los proyectos',
    descargarCV: 'Descargar CV',
    contactar: 'Contactar',
    verRepo: 'Código',
    verDemo: 'Demo',
    verVideo: 'Video',
    verArticulo: 'Artículo',
    volver: 'Volver',
    volverProyectos: 'Volver a proyectos',
    verCodigo: 'Ver código',
    ocultarCodigo: 'Ocultar código',
    copiar: 'Copiar',
    copiado: 'Copiado',
    anterior: 'Anterior',
    siguiente: 'Siguiente',
  },

  tema: {
    cambiar: 'Cambiar tema',
    claro: 'Tema claro',
    oscuro: 'Tema oscuro',
  },

  idioma: {
    cambiar: 'Cambiar idioma',
    actual: 'Español',
    otro: 'English',
  },

  inicio: {
    disponible: 'Disponible para nuevas oportunidades',
    metricaExperiencia: 'años de experiencia',
    metricaProyectos: 'proyectos publicados',
    metricaEmpresas: 'empresas',
    metricaTecnologias: 'tecnologías',
    tituloProyectos: 'Proyectos destacados',
    subtituloProyectos: 'Casos de estudio con el problema, la solución y las decisiones técnicas detrás.',
    tituloStack: 'Stack técnico',
    subtituloStack: 'Lo que uso a diario y lo que uso cuando el problema lo pide.',
    tituloExperiencia: 'Experiencia',
    subtituloExperiencia: 'Dónde he trabajado y qué construí ahí.',
    tituloContacto: 'Hablemos',
    subtituloContacto: 'Si tienes un proyecto o una vacante en mente, escríbeme.',
    tituloLaboratorio: 'Laboratorio UI',
    subtituloLaboratorio: 'Componentes e interacciones construidos con CSS, con su código a la vista.',
    explorarLaboratorio: 'Explorar el laboratorio',
  },

  proyectos: {
    titulo: 'Proyectos',
    subtitulo:
      'Cada proyecto documenta el problema que resolvía, cómo lo resolví y qué decidí en el camino.',
    filtros: 'Filtros',
    filtrarTecnologia: 'Tecnología',
    filtrarTipo: 'Tipo',
    todos: 'Todos',
    limpiar: 'Limpiar filtros',
    sinResultados: 'No hay proyectos que coincidan con estos filtros.',
    contadorUno: 'proyecto',
    contadorVarios: 'proyectos',
    catalogoVacio: 'Todavía no hay proyectos publicados.',
  },

  detalle: {
    contexto: 'Contexto',
    periodo: 'Periodo',
    problema: 'El problema',
    solucion: 'La solución',
    decisiones: 'Decisiones técnicas',
    retos: 'Retos',
    resultados: 'Resultados',
    arquitectura: 'Arquitectura',
    capturas: 'Capturas',
    stack: 'Stack',
    codigoPrivado: 'Código propiedad de la empresa',
    codigoPrivadoDetalle:
      'Este trabajo se realizó en el marco de una relación laboral, así que el código fuente pertenece a la empresa y no puede publicarse. El caso describe mi participación, las decisiones técnicas que tomé y los resultados.',
    noEncontrado: 'Ese proyecto no existe',
    noEncontradoDetalle: 'Puede que el enlace esté mal o que el proyecto ya no esté publicado.',
  },

  perfil: {
    titulo: 'Perfil',
    subtitulo: 'Quién soy, qué sé hacer y de dónde vengo.',
    datosPersonales: 'Datos personales',
    sobreMi: 'Sobre mí',
    contacto: 'Contacto',
    conocimientos: 'Conocimientos',
    formacion: 'Formación académica',
    experiencia: 'Experiencia laboral',
    valores: 'Valores',
    edad: 'años',
    nivelAvanzado: 'Avanzado',
    nivelIntermedio: 'Intermedio',
    nivelBasico: 'Básico',
    aniosDeUso: 'de uso',
    logros: 'Lo que hice',
    idiomas: 'Idiomas',
  },

  laboratorio: {
    titulo: 'Laboratorio UI',
    subtitulo:
      'Componentes e interacciones construidos principalmente con CSS. Cada pieza indica qué técnica demuestra.',
    todas: 'Todas',
    animaciones: 'Animaciones',
    inputs: 'Campos',
    botones: 'Botones',
    formularios: 'Formularios',
    tecnica: 'Técnica',
    contadorUno: 'pieza',
    contadorVarios: 'piezas',
    sinResultados: 'No hay piezas en esta categoría.',
    explorarSeccion: 'Explorar sección',
    volverLaboratorio: 'Volver al laboratorio',
    seccionNoEncontrada: 'Esa sección no existe',
    seccionNoEncontradaDetalle: 'Puede que el enlace esté mal escrito.',
    paginacion: 'Paginación de piezas',
    paginaDe: 'Página {actual} de {total}',
    verTodos: 'Ver todos',
  },

  tipos: {
    fullstack: 'Full Stack',
    web: 'Web',
    movil: 'Móvil',
    backend: 'Backend',
    microservicios: 'Microservicios',
    laboratorio: 'Laboratorio',
  },

  noEncontrado: {
    titulo: 'Página no encontrada',
    mensaje: 'La dirección que buscas no existe o cambió de lugar.',
    volver: 'Volver al inicio',
  },

  footer: {
    construidoCon: 'Construido con React, TypeScript y Vite.',
    verCodigo: 'Ver el código de este sitio',
    derechos: 'Todos los derechos reservados.',
  },

  comun: {
    cargando: 'Cargando…',
    error: 'Algo salió mal',
    errorDetalle: 'No se pudo cargar esta sección. Intenta recargar la página.',
  },
};

export type Diccionario = typeof es;
