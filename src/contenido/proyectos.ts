import type { Proyecto } from '@/tipos';

/*
 * ────────────────────────────────────────────────────────────────────────────
 *  CATÁLOGO DE PROYECTOS — punto de extensión del portafolio
 * ────────────────────────────────────────────────────────────────────────────
 *
 *  Para agregar un proyecto:
 *
 *    1. Añade un objeto a este arreglo.
 *    2. Deja las imágenes en `public/proyectos/<slug>/`.
 *    3. Listo.
 *
 *  La tarjeta del grid, la página de detalle, los filtros por tecnología y
 *  tipo, el conteo de la portada y el sitemap se derivan de aquí. No hay que
 *  tocar ningún otro archivo.
 *
 *  El campo `estado` controla la visibilidad:
 *    · 'publicado'     → visible en el sitio
 *    · 'en-desarrollo' → registrado pero oculto (cambiar a 'publicado' al terminar)
 *    · 'archivado'     → oculto, se conserva por historial
 *
 *  Las claves de `stack` deben existir en `contenido/stack.ts`. El test
 *  `proyectos.test.ts` lo verifica, junto con los slugs únicos y los campos
 *  obligatorios.
 * ────────────────────────────────────────────────────────────────────────────
 */

export const proyectos: Proyecto[] = [
  /* ═══════════════════════════════════════════════════════════════════════ */
  /*  PUBLICADOS                                                             */
  /* ═══════════════════════════════════════════════════════════════════════ */

  {
    slug: 'portafolio-virtual',
    estado: 'publicado',
    destacado: true,
    tipo: 'web',
    periodo: '2026-08',
    titulo: {
      es: 'Este portafolio',
      en: 'This portfolio',
    },
    contexto: { es: 'Proyecto propio', en: 'Personal project' },
    resumen: {
      es: 'Portafolio bilingüe con catálogo de proyectos extensible, tema claro/oscuro persistente y laboratorio de interfaces. Migrado de Create React App a Vite y TypeScript.',
      en: 'Bilingual portfolio with an extensible project catalogue, persistent light/dark theme and a UI lab. Migrated from Create React App to Vite and TypeScript.',
    },
    problema: {
      es: 'La primera versión era un conjunto de experimentos sueltos detrás de un login falso: no había sección de proyectos, el build seguía sobre Create React App eyectado (descontinuado desde 2025), no era responsive y exponía datos personales sensibles. Un reclutador no podía ver mi trabajo sin atravesar una pantalla de inicio de sesión que no validaba nada.',
      en: 'The first version was a set of loose experiments behind a fake login: there was no projects section, the build still ran on ejected Create React App (discontinued since 2025), it was not responsive, and it exposed sensitive personal data. A recruiter could not see my work without going through a login screen that validated nothing.',
    },
    solucion: {
      es: 'Reconstruí el proyecto sobre Vite y TypeScript en modo estricto, con un catálogo de proyectos tipado como única fuente de verdad. El contenido está separado de la presentación: agregar un proyecto es añadir un objeto a un archivo. El tema y el idioma persisten en localStorage y se aplican antes del primer pintado para evitar el parpadeo.',
      en: 'I rebuilt the project on Vite and strict-mode TypeScript, with a typed project catalogue as the single source of truth. Content is separated from presentation: adding a project means adding one object to one file. Theme and language persist in localStorage and are applied before first paint to avoid the flash.',
    },
    decisionesTecnicas: [
      {
        titulo: { es: 'Vite en lugar de Next.js', en: 'Vite instead of Next.js' },
        detalle: {
          es: 'Next.js habría dado renderizado en servidor, pero un portafolio de contenido estático no lo necesita y habría añadido una capa de servidor que mantener. Vite da builds de segundos y HMR instantáneo; el SEO se cubre con meta etiquetas por ruta y datos estructurados.',
          en: 'Next.js would have provided server rendering, but a static-content portfolio does not need it and it would add a server layer to maintain. Vite gives second-long builds and instant HMR; SEO is covered with per-route meta tags and structured data.',
        },
      },
      {
        titulo: { es: 'i18n tipado sin librería', en: 'Typed i18n without a library' },
        detalle: {
          es: 'El diccionario en inglés se declara como `typeof es`, así que TypeScript falla la compilación si falta una traducción. Una librería de i18n habría detectado el mismo error recién en tiempo de ejecución, y solo si alguien visitaba esa pantalla en ese idioma.',
          en: 'The English dictionary is declared as `typeof es`, so TypeScript fails the build if a translation is missing. An i18n library would have caught the same error only at runtime, and only if someone visited that screen in that language.',
        },
      },
      {
        titulo: { es: 'Tema aplicado antes del primer pintado', en: 'Theme applied before first paint' },
        detalle: {
          es: 'Un script en línea en el `<head>` lee localStorage y fija `data-theme` antes de que React monte. Sin eso, quien usa tema oscuro ve un destello blanco en cada carga. La versión anterior inyectaba un `<style>` durante el render, que además no persistía la preferencia.',
          en: 'An inline script in the `<head>` reads localStorage and sets `data-theme` before React mounts. Without it, dark-theme users get a white flash on every load. The previous version injected a `<style>` tag during render, and did not persist the preference either.',
        },
      },
    ],
    retos: {
      es: 'El mayor riesgo fue el carrusel de conocimientos: la versión anterior llamaba a `ReactDOM.createRoot()` dentro de un componente para insertar tarjetas manualmente en el DOM, y esas raíces nunca se desmontaban. Reescribirlo como un carrusel controlado por estado eliminó la fuga de memoria y, de paso, lo hizo navegable por teclado.',
      en: 'The biggest risk was the skills carousel: the previous version called `ReactDOM.createRoot()` inside a component to manually insert cards into the DOM, and those roots were never unmounted. Rewriting it as a state-driven carousel removed the memory leak and, along the way, made it keyboard navigable.',
    },
    resultados: {
      es: [
        'Eliminadas dos peticiones externas bloqueantes al reemplazar Font Awesome por iconos SVG en línea.',
        'Cobertura de pruebas sobre el catálogo, los filtros y los contextos de tema e idioma.',
        'Integración continua que corre lint, pruebas y build en cada push.',
      ],
      en: [
        'Removed two render-blocking external requests by replacing Font Awesome with inline SVG icons.',
        'Test coverage over the catalogue, the filters and the theme and language contexts.',
        'Continuous integration running lint, tests and build on every push.',
      ],
    },
    stack: ['react', 'typescript', 'vite', 'tailwind', 'css', 'jest', 'testing-library', 'git'],
    enlaces: {
      repo: 'https://github.com/AndHmP/PortafolioCV',
    },
  },

  {
    slug: 'condo-cleaner-gestion',
    estado: 'publicado',
    destacado: true,
    tipo: 'fullstack',
    periodo: '2023-08',
    titulo: {
      es: 'Sistema de gestión y visualización — Condo Cleaner',
      en: 'Management and reporting system — Condo Cleaner',
    },
    contexto: { es: 'Condo Cleaner · Trabajo profesional', en: 'Condo Cleaner · Professional work' },
    resumen: {
      es: 'Dos aplicaciones complementarias para una empresa de servicios de limpieza: una administra la base de datos operativa y otra la consulta, separando por diseño la escritura de la lectura.',
      en: 'Two complementary applications for a cleaning services company: one administers the operational database, the other queries it, separating writes from reads by design.',
    },
    problema: {
      es: 'La información operativa vivía repartida en hojas de cálculo. Consolidarla para tomar decisiones era un trabajo manual y repetitivo, y cualquier persona del equipo podía alterar datos históricos sin dejar rastro.',
      en: 'Operational information lived scattered across spreadsheets. Consolidating it for decision-making was manual, repetitive work, and anyone on the team could alter historical data without leaving a trace.',
    },
    solucion: {
      es: 'Construí dos sistemas separados sobre la misma base de datos. El de administración concentra las operaciones de escritura y queda restringido a quien corresponde; el de visualización es de solo lectura y es el que usa el resto del equipo para consultar el estado del negocio.',
      en: 'I built two separate systems over the same database. The admin one concentrates write operations and is restricted to the right people; the reporting one is read-only and is what the rest of the team uses to check the state of the business.',
    },
    decisionesTecnicas: [
      {
        titulo: { es: 'Separar escritura de lectura', en: 'Separating writes from reads' },
        detalle: {
          es: 'Una sola aplicación con permisos por rol habría sido más rápida de construir, pero deja la puerta abierta a que un error de permisos exponga operaciones destructivas. Dos aplicaciones distintas hacen que el sistema de consulta simplemente no tenga código capaz de borrar nada.',
          en: 'A single application with role-based permissions would have been faster to build, but it leaves the door open for a permissions bug to expose destructive operations. Two separate applications mean the reporting system simply has no code capable of deleting anything.',
        },
      },
    ],
    resultados: {
      es: [
        'La consolidación manual de información en hojas de cálculo dejó de ser parte de la operación diaria.',
        'El equipo pasó a consultar una única fuente de datos en lugar de archivos sueltos.',
      ],
      en: [
        'Manual spreadsheet consolidation stopped being part of daily operations.',
        'The team moved to a single source of data instead of loose files.',
      ],
    },
    stack: ['react', 'javascript', 'sqlserver', 'css'],
  },

  {
    slug: 'kyb-imports-plataforma',
    estado: 'publicado',
    tipo: 'fullstack',
    periodo: '2023-04',
    titulo: {
      es: 'Administración y visualización de datos — KyB Imports',
      en: 'Data administration and reporting — KyB Imports',
    },
    contexto: { es: 'KyB Imports · Trabajo profesional', en: 'KyB Imports · Professional work' },
    resumen: {
      es: 'Sistema de administración de base de datos y plataforma web de consulta para una importadora, diseñando el modelo de datos desde cero.',
      en: 'Database administration system and web reporting platform for an importer, designing the data model from scratch.',
    },
    problema: {
      es: 'La empresa no tenía un modelo de datos: la información del negocio estaba dispersa en archivos sin relación entre sí, lo que hacía imposible responder preguntas básicas sobre el estado del inventario o de las operaciones.',
      en: 'The company had no data model: business information was scattered across unrelated files, making it impossible to answer basic questions about inventory or operations status.',
    },
    solucion: {
      es: 'Diseñé el modelo relacional partiendo de las entidades reales del negocio, construí la interfaz de administración para cargarlo y mantenerlo, y una plataforma web que presenta la información consolidada.',
      en: 'I designed the relational model starting from the real business entities, built the admin interface to load and maintain it, and a web platform that presents the consolidated information.',
    },
    decisionesTecnicas: [
      {
        titulo: { es: 'Modelar el dominio antes de escribir pantallas', en: 'Modelling the domain before writing screens' },
        detalle: {
          es: 'Fue mi primer proyecto profesional y la tentación era empezar por la interfaz. Definir primero las entidades y sus relaciones evitó tener que rehacer las pantallas cada vez que aparecía un caso que el modelo no soportaba.',
          en: 'It was my first professional project and the temptation was to start with the interface. Defining the entities and their relationships first avoided having to redo screens every time a case appeared that the model could not support.',
        },
      },
    ],
    stack: ['javascript', 'html', 'css', 'sqlserver'],
  },

  {
    slug: 'sitio-corporativo-lyh',
    estado: 'publicado',
    tipo: 'web',
    periodo: '2024-02',
    titulo: {
      es: 'Sitio corporativo — Inversiones y Distribución L&H',
      en: 'Corporate website — Inversiones y Distribución L&H',
    },
    contexto: {
      es: 'Inversiones y Distribución L&H · Trabajo profesional',
      en: 'Inversiones y Distribución L&H · Professional work',
    },
    resumen: {
      es: 'Sitio web corporativo llevado de punta a punta: estructura de contenido, diseño visual, maquetación y despliegue.',
      en: 'Corporate website taken end to end: content structure, visual design, markup and deployment.',
    },
    problema: {
      es: 'La empresa no tenía presencia web propia y dependía de terceros para mostrar su portafolio de servicios, lo que la dejaba sin control sobre cómo se presentaba ante sus clientes.',
      en: 'The company had no web presence of its own and depended on third parties to show its service portfolio, leaving it without control over how it presented itself to clients.',
    },
    solucion: {
      es: 'Diseñé y desarrollé el sitio completo, estructurando el portafolio de servicios de forma que la empresa pudiera actualizarlo después sin depender de mí.',
      en: 'I designed and developed the full site, structuring the service portfolio so the company could update it later without depending on me.',
    },
    stack: ['html', 'css', 'javascript', 'illustrator'],
  },

  {
    slug: 'laboratorio-ui',
    estado: 'publicado',
    tipo: 'laboratorio',
    periodo: '2025-06',
    titulo: {
      es: 'Laboratorio UI — 35 piezas de interfaz',
      en: 'UI Lab — 35 interface pieces',
    },
    contexto: { es: 'Proyecto propio', en: 'Personal project' },
    resumen: {
      es: 'Colección de componentes e interacciones construidos solo con CSS: animaciones, campos de formulario y botones, cada uno con su código a la vista.',
      en: 'A collection of components and interactions built with CSS alone: animations, form fields and buttons, each with its source on display.',
    },
    problema: {
      es: 'Decir "domino CSS" en un CV no demuestra nada. Hacía falta evidencia concreta y revisable de técnicas específicas: animaciones por fotogramas, transformaciones 3D, estados de foco sin JavaScript, layouts que se sostienen sin librerías.',
      en: 'Saying "I know CSS" on a CV proves nothing. Concrete, reviewable evidence of specific techniques was needed: keyframe animations, 3D transforms, focus states without JavaScript, layouts that hold up without libraries.',
    },
    solucion: {
      es: 'Un ejercicio sostenido de una pieza por sesión, reunido en una galería filtrable donde cada componente se ve funcionando y se puede leer su implementación.',
      en: 'A sustained one-piece-per-session exercise, gathered into a filterable gallery where each component can be seen working and its implementation read.',
    },
    stack: ['css', 'html', 'react', 'typescript'],
    enlaces: {
      demo: '/laboratorio',
    },
  },

  /* ═══════════════════════════════════════════════════════════════════════ */
  /*  EN DESARROLLO                                                          */
  /*  Registrados y ocultos. Cambiar `estado` a 'publicado' al terminarlos.  */
  /*  Corresponden al plan de PROMP_PORTAFOLIO_VIRTUAL.md                    */
  /* ═══════════════════════════════════════════════════════════════════════ */

  {
    slug: 'gestion-ferreteria',
    estado: 'en-desarrollo',
    destacado: true,
    tipo: 'fullstack',
    periodo: '2026-09',
    titulo: {
      es: 'Sistema de gestión de inventario y pedidos',
      en: 'Inventory and order management system',
    },
    contexto: { es: 'Proyecto propio', en: 'Personal project' },
    resumen: {
      es: 'Sistema completo para una ferretería: catálogo de productos, clientes, pedidos y un panel con métricas de operación.',
      en: 'Complete system for a hardware store: product catalogue, customers, orders and an operations metrics dashboard.',
    },
    problema: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    solucion: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    stack: ['react', 'typescript', 'tailwind', 'react-query', 'python', 'fastapi', 'postgresql', 'jest', 'testing-library'],
  },

  {
    slug: 'app-tecnicos-campo',
    estado: 'en-desarrollo',
    tipo: 'movil',
    periodo: '2026-10',
    titulo: {
      es: 'App Android para técnicos de campo',
      en: 'Android app for field technicians',
    },
    contexto: { es: 'Proyecto propio', en: 'Personal project' },
    resumen: {
      es: 'Aplicación Android nativa para gestión de tareas en campo, con persistencia local para operar sin conexión y sincronización con una API REST.',
      en: 'Native Android application for field task management, with local persistence for offline operation and REST API sync.',
    },
    problema: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    solucion: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    stack: ['android', 'java', 'fastapi', 'python'],
  },

  {
    slug: 'microservicios-docker',
    estado: 'en-desarrollo',
    tipo: 'microservicios',
    periodo: '2026-11',
    titulo: {
      es: 'Sistema de microservicios con Docker y NGINX',
      en: 'Microservices system with Docker and NGINX',
    },
    contexto: { es: 'Proyecto propio', en: 'Personal project' },
    resumen: {
      es: 'Tres servicios independientes en FastAPI comunicándose por REST, con NGINX como gateway y todo el sistema levantándose con un solo comando.',
      en: 'Three independent FastAPI services communicating over REST, with NGINX as gateway and the whole system starting with a single command.',
    },
    problema: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    solucion: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    stack: ['python', 'fastapi', 'microservicios', 'docker', 'nginx', 'postgresql'],
  },

  {
    slug: 'landing-nextjs',
    estado: 'en-desarrollo',
    tipo: 'web',
    periodo: '2026-12',
    titulo: {
      es: 'Landing corporativa con Next.js',
      en: 'Corporate landing page with Next.js',
    },
    contexto: { es: 'Proyecto propio', en: 'Personal project' },
    resumen: {
      es: 'Sitio de una página con formulario de contacto funcional, SEO técnico y diseño responsive.',
      en: 'Single-page site with a working contact form, technical SEO and responsive design.',
    },
    problema: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    solucion: {
      es: 'Pendiente de redactar al construir el proyecto.',
      en: 'To be written when the project is built.',
    },
    stack: ['nextjs', 'typescript', 'tailwind', 'html'],
  },
];

/* ---------------------------------------------------------------- */
/* Selectores derivados                                              */
/* ---------------------------------------------------------------- */

/** Ordena de más reciente a más antiguo por `periodo` (YYYY-MM). */
function porFechaDescendente(a: Proyecto, b: Proyecto): number {
  return b.periodo.localeCompare(a.periodo);
}

/** Los únicos proyectos que se muestran en el sitio público. */
export const proyectosPublicados: Proyecto[] = proyectos
  .filter((p) => p.estado === 'publicado')
  .sort(porFechaDescendente);

export const proyectosDestacados: Proyecto[] = proyectosPublicados.filter((p) => p.destacado);

export function buscarProyecto(slug: string): Proyecto | undefined {
  return proyectosPublicados.find((p) => p.slug === slug);
}

/** Tecnologías presentes en el catálogo publicado, para poblar los filtros. */
export function tecnologiasEnCatalogo(): string[] {
  const claves = new Set<string>();
  proyectosPublicados.forEach((p) => p.stack.forEach((c) => claves.add(c)));
  return [...claves].sort();
}

/** Tipos de proyecto presentes en el catálogo publicado. */
export function tiposEnCatalogo(): Proyecto['tipo'][] {
  const tipos = new Set<Proyecto['tipo']>();
  proyectosPublicados.forEach((p) => tipos.add(p.tipo));
  return [...tipos];
}
