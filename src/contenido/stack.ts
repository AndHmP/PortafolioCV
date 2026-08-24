import type { CategoriaTecnologia, Tecnologia, Texto } from '@/tipos';

/**
 * Stack técnico declarado en el CV.
 * Los `nivel` son una estimación conservadora: revísalos antes de publicar,
 * porque es lo primero que un entrevistador va a poner a prueba.
 */
export const tecnologias: Tecnologia[] = [
  /* ---------------- Frontend ---------------- */
  {
    clave: 'react',
    nombre: 'React',
    categoria: 'frontend',
    nivel: 'avanzado',
    anios: 3,
    descripcion: {
      es: 'Interfaces por componentes, hooks, Context API y patrones de composición.',
      en: 'Component-based UIs, hooks, Context API and composition patterns.',
    },
  },
  {
    clave: 'typescript',
    nombre: 'TypeScript',
    categoria: 'frontend',
    nivel: 'avanzado',
    anios: 2,
    descripcion: {
      es: 'Tipado estricto, genéricos y modelado de dominio para atrapar errores en compilación.',
      en: 'Strict typing, generics and domain modelling to catch errors at compile time.',
    },
  },
  {
    clave: 'javascript',
    nombre: 'JavaScript',
    categoria: 'frontend',
    nivel: 'avanzado',
    anios: 3,
    descripcion: {
      es: 'ES2022+, asincronía, manipulación del DOM y APIs del navegador.',
      en: 'ES2022+, async patterns, DOM manipulation and browser APIs.',
    },
  },
  {
    clave: 'nextjs',
    nombre: 'Next.js',
    categoria: 'frontend',
    nivel: 'intermedio',
    anios: 1,
    descripcion: {
      es: 'Renderizado en servidor, rutas y SEO para sitios que deben posicionar.',
      en: 'Server rendering, routing and SEO for sites that need to rank.',
    },
  },
  {
    clave: 'angular',
    nombre: 'Angular',
    categoria: 'frontend',
    nivel: 'intermedio',
    anios: 1,
    descripcion: {
      es: 'Módulos, servicios e inyección de dependencias en aplicaciones empresariales.',
      en: 'Modules, services and dependency injection in enterprise applications.',
    },
  },
  {
    clave: 'react-query',
    nombre: 'React Query',
    categoria: 'frontend',
    nivel: 'intermedio',
    descripcion: {
      es: 'Estado de servidor: caché, revalidación y sincronización sin reinventar reducers.',
      en: 'Server state: caching, revalidation and sync without reinventing reducers.',
    },
  },
  {
    clave: 'tailwind',
    nombre: 'Tailwind CSS',
    categoria: 'frontend',
    nivel: 'avanzado',
    anios: 2,
    descripcion: {
      es: 'Sistemas de diseño por utilidades, con tokens de tema y soporte de modo oscuro.',
      en: 'Utility-first design systems, with theme tokens and dark-mode support.',
    },
  },
  {
    clave: 'material-ui',
    nombre: 'Material UI',
    categoria: 'frontend',
    nivel: 'intermedio',
    descripcion: {
      es: 'Componentes accesibles listos para producción, con temas personalizados.',
      en: 'Accessible production-ready components with custom theming.',
    },
  },
  {
    clave: 'styled-components',
    nombre: 'styled-components',
    categoria: 'frontend',
    nivel: 'intermedio',
    descripcion: {
      es: 'CSS-in-JS con estilos por componente y temas dinámicos.',
      en: 'CSS-in-JS with per-component styles and dynamic theming.',
    },
  },
  {
    clave: 'html',
    nombre: 'HTML',
    categoria: 'frontend',
    nivel: 'avanzado',
    anios: 3,
    descripcion: {
      es: 'Marcado semántico y accesible, base de un SEO que funciona.',
      en: 'Semantic, accessible markup, the base of SEO that actually works.',
    },
  },
  {
    clave: 'css',
    nombre: 'CSS / Sass',
    categoria: 'frontend',
    nivel: 'avanzado',
    anios: 3,
    descripcion: {
      es: 'Grid, Flexbox, animaciones y diseño responsive. Ver el Laboratorio UI.',
      en: 'Grid, Flexbox, animations and responsive design. See the UI Lab.',
    },
  },

  /* ---------------- Backend ---------------- */
  {
    clave: 'python',
    nombre: 'Python',
    categoria: 'backend',
    nivel: 'intermedio',
    anios: 2,
    descripcion: {
      es: 'Servicios de API, automatización y procesamiento de datos.',
      en: 'API services, automation and data processing.',
    },
  },
  {
    clave: 'fastapi',
    nombre: 'FastAPI',
    categoria: 'backend',
    nivel: 'intermedio',
    anios: 2,
    descripcion: {
      es: 'APIs REST tipadas, con validación por Pydantic y documentación automática.',
      en: 'Typed REST APIs with Pydantic validation and automatic documentation.',
    },
  },
  {
    clave: 'microservicios',
    nombre: 'Microservicios',
    categoria: 'backend',
    nivel: 'intermedio',
    descripcion: {
      es: 'Servicios desacoplados que se comunican por REST, con un gateway al frente.',
      en: 'Decoupled services communicating over REST, behind a gateway.',
    },
  },
  {
    clave: 'nodejs',
    nombre: 'Node.js',
    categoria: 'backend',
    nivel: 'intermedio',
    descripcion: {
      es: 'Herramientas de build, scripts y APIs ligeras.',
      en: 'Build tooling, scripts and lightweight APIs.',
    },
  },

  /* ---------------- Móvil ---------------- */
  {
    clave: 'android',
    nombre: 'Android nativo',
    categoria: 'movil',
    nivel: 'intermedio',
    anios: 1,
    descripcion: {
      es: 'Aplicaciones nativas en Java, con consumo de API y persistencia local.',
      en: 'Native Java applications consuming APIs with local persistence.',
    },
  },
  {
    clave: 'java',
    nombre: 'Java',
    categoria: 'movil',
    nivel: 'intermedio',
    descripcion: {
      es: 'Programación orientada a objetos aplicada al desarrollo Android.',
      en: 'Object-oriented programming applied to Android development.',
    },
  },

  /* ---------------- Datos ---------------- */
  {
    clave: 'sqlserver',
    nombre: 'SQL Server',
    categoria: 'datos',
    nivel: 'intermedio',
    anios: 2,
    descripcion: {
      es: 'Consultas, procedimientos almacenados y modelado relacional.',
      en: 'Queries, stored procedures and relational modelling.',
    },
  },
  {
    clave: 'postgresql',
    nombre: 'PostgreSQL',
    categoria: 'datos',
    nivel: 'intermedio',
    descripcion: {
      es: 'Modelado relacional, índices y migraciones.',
      en: 'Relational modelling, indexes and migrations.',
    },
  },
  {
    clave: 'firebase',
    nombre: 'Firebase',
    categoria: 'datos',
    nivel: 'intermedio',
    descripcion: {
      es: 'Autenticación, base en tiempo real y hosting para prototipos rápidos.',
      en: 'Auth, realtime database and hosting for fast prototypes.',
    },
  },

  /* ---------------- Infraestructura ---------------- */
  {
    clave: 'docker',
    nombre: 'Docker',
    categoria: 'infraestructura',
    nivel: 'intermedio',
    descripcion: {
      es: 'Contenedores reproducibles y orquestación local con docker-compose.',
      en: 'Reproducible containers and local orchestration with docker-compose.',
    },
  },
  {
    clave: 'nginx',
    nombre: 'NGINX',
    categoria: 'infraestructura',
    nivel: 'intermedio',
    descripcion: {
      es: 'Reverse proxy, gateway de microservicios y servido de estáticos.',
      en: 'Reverse proxy, microservice gateway and static file serving.',
    },
  },
  {
    clave: 'git',
    nombre: 'Git',
    categoria: 'infraestructura',
    nivel: 'avanzado',
    anios: 3,
    descripcion: {
      es: 'Ramas, revisión de código y flujo de trabajo en equipo.',
      en: 'Branching, code review and team workflow.',
    },
  },
  {
    clave: 'vite',
    nombre: 'Vite',
    categoria: 'infraestructura',
    nivel: 'avanzado',
    descripcion: {
      es: 'Empaquetado moderno, HMR instantáneo y builds optimizados.',
      en: 'Modern bundling, instant HMR and optimised builds.',
    },
  },

  /* ---------------- Calidad ---------------- */
  {
    clave: 'jest',
    nombre: 'Jest / Vitest',
    categoria: 'calidad',
    nivel: 'intermedio',
    descripcion: {
      es: 'Pruebas unitarias y de integración con cobertura medible.',
      en: 'Unit and integration tests with measurable coverage.',
    },
  },
  {
    clave: 'testing-library',
    nombre: 'React Testing Library',
    categoria: 'calidad',
    nivel: 'intermedio',
    descripcion: {
      es: 'Pruebas que ejercitan la interfaz como lo haría una persona usuaria.',
      en: 'Tests that exercise the UI the way a real user would.',
    },
  },

  /* ---------------- Diseño ---------------- */
  {
    clave: 'illustrator',
    nombre: 'Illustrator',
    categoria: 'diseno',
    nivel: 'avanzado',
    anios: 4,
    descripcion: {
      es: 'Gráficos vectoriales, iconografía y recursos para interfaz.',
      en: 'Vector graphics, iconography and UI assets.',
    },
  },
  {
    clave: 'figma',
    nombre: 'Figma',
    categoria: 'diseno',
    nivel: 'intermedio',
    descripcion: {
      es: 'Maquetas y sistemas de diseño antes de escribir la primera línea.',
      en: 'Mockups and design systems before writing the first line of code.',
    },
  },
];

/** Índice por clave, para resolver el stack de proyectos y experiencias. */
export const tecnologiasPorClave: Record<string, Tecnologia> = Object.fromEntries(
  tecnologias.map((t) => [t.clave, t]),
);

export const etiquetasCategoria: Record<CategoriaTecnologia, Texto> = {
  frontend: { es: 'Frontend', en: 'Frontend' },
  backend: { es: 'Backend', en: 'Backend' },
  movil: { es: 'Móvil', en: 'Mobile' },
  datos: { es: 'Datos', en: 'Data' },
  infraestructura: { es: 'Infraestructura', en: 'Infrastructure' },
  calidad: { es: 'Calidad', en: 'Quality' },
  diseno: { es: 'Diseño', en: 'Design' },
};

export const ordenCategorias: CategoriaTecnologia[] = [
  'frontend',
  'backend',
  'movil',
  'datos',
  'infraestructura',
  'calidad',
  'diseno',
];

/** Devuelve el nombre legible de una clave; útil en tarjetas de proyecto. */
export function nombreTecnologia(clave: string): string {
  return tecnologiasPorClave[clave]?.nombre ?? clave;
}
