import type { Experiencia } from '@/tipos';

/**
 * Trayectoria profesional, tomada del CV oficial.
 * Orden: de más reciente a más antiguo.
 */
export const experiencias: Experiencia[] = [
  {
    clave: 'dacta',
    empresa: 'DACTA S.A.C.',
    puesto: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    periodo: { es: 'Ene 2025 — Actualidad · Lima, Perú', en: 'Jan 2025 — Present · Lima, Peru' },
    desde: '2025-01',
    hasta: 'actual',
    descripcion: {
      es: 'Desarrollo de una plataforma web en producción con usuarios finales, bajo arquitecturas de microfrontends en el cliente y microservicios en el servidor, además de las aplicaciones Android nativas que la acompañan.',
      en: 'Development of a production web platform with real end users, under a microfrontend architecture on the client and microservices on the server, plus the native Android applications that go with it.',
    },
    logros: {
      es: [
        'Desarrollé módulos de interfaz con React y TypeScript bajo una arquitectura de microfrontends que redujo el acoplamiento entre equipos.',
        'Implementé pruebas unitarias en el frontend con Jest y React Testing Library, mejorando la confiabilidad de los componentes y reduciendo la aparición de errores en producción.',
        'Gestioné el estado de la aplicación con Context API y React Query (TanStack), y construí interfaces con Tailwind CSS, Material UI y styled-components.',
        'Diseñé e implementé APIs REST con Python y FastAPI en una arquitectura de microservicios, con contratos claros entre servicios y validación de datos.',
        'Desarrollé aplicaciones móviles Android nativas con Java (Android Studio), distribuidas en producción a clientes finales e integradas con las APIs de la plataforma.',
        'Modelé y consulté bases de datos en SQL Server, optimizando consultas y procedimientos almacenados para soportar los módulos de negocio.',
        'Containericé aplicaciones con Docker y configuré NGINX como proxy inverso, incluyendo la gestión de dominios y subdominios para exponer los servicios en producción.',
        'Trabajé con Git usando ramas y Pull Requests, colaborando con el equipo en la revisión e integración de código.',
      ],
      en: [
        'Built interface modules with React and TypeScript under a microfrontend architecture that reduced coupling between teams.',
        'Implemented frontend unit tests with Jest and React Testing Library, improving component reliability and reducing production defects.',
        'Managed application state with Context API and React Query (TanStack), and built interfaces with Tailwind CSS, Material UI and styled-components.',
        'Designed and implemented REST APIs with Python and FastAPI in a microservice architecture, with clear contracts between services and data validation.',
        'Developed native Android applications in Java (Android Studio), shipped to production for end clients and integrated with the platform APIs.',
        'Modelled and queried SQL Server databases, optimising queries and stored procedures to support the business modules.',
        'Containerised applications with Docker and configured NGINX as a reverse proxy, including domain and subdomain management to expose services in production.',
        'Worked with Git using branches and pull requests, collaborating with the team on code review and integration.',
      ],
    },
    stack: [
      'react',
      'typescript',
      'microfrontends',
      'react-query',
      'tailwind',
      'material-ui',
      'styled-components',
      'jest',
      'testing-library',
      'python',
      'fastapi',
      'microservicios',
      'android',
      'java',
      'sqlserver',
      'docker',
      'nginx',
      'git',
    ],
  },
  {
    clave: 'condo-cleaner',
    empresa: 'CONDO CLEANER',
    puesto: { es: 'Desarrollador Web', en: 'Web Developer' },
    periodo: { es: 'Nov 2024 — Dic 2024 · Lima, Perú', en: 'Nov 2024 — Dec 2024 · Lima, Peru' },
    desde: '2024-11',
    hasta: '2024-12',
    descripcion: {
      es: 'Sitio web corporativo con catálogo interactivo de productos de limpieza, entregado de punta a punta en dos meses.',
      en: 'Corporate website with an interactive catalogue of cleaning products, delivered end to end in two months.',
    },
    logros: {
      es: [
        'Desarrollé la página web corporativa con un catálogo interactivo de productos de limpieza.',
        'Implementé funcionalidades de contacto y navegación que facilitaron la comunicación de los clientes con la empresa.',
      ],
      en: [
        'Built the corporate website with an interactive catalogue of cleaning products.',
        'Implemented contact and navigation features that made it easier for customers to reach the company.',
      ],
    },
    stack: ['react', 'javascript', 'html', 'css'],
  },
  {
    clave: 'kyb-import',
    empresa: 'KYB IMPORT',
    puesto: { es: 'Desarrollador de Software', en: 'Software Developer' },
    periodo: { es: 'Ago 2024 — Nov 2024 · Lima, Perú', en: 'Aug 2024 — Nov 2024 · Lima, Peru' },
    desde: '2024-08',
    hasta: '2024-11',
    descripcion: {
      es: 'Sistema de gestión de productos con interfaz administrativa y las APIs que lo respaldan, con control de acceso.',
      en: 'Product management system with an admin interface and the APIs behind it, including access control.',
    },
    logros: {
      es: [
        'Diseñé e implementé un sistema de gestión de productos con una interfaz administrativa para visualizar y administrar la información.',
        'Construí APIs para el manejo de la base de datos aplicando buenas prácticas de seguridad y control de acceso.',
      ],
      en: [
        'Designed and implemented a product management system with an admin interface to view and manage the information.',
        'Built APIs for database handling, applying security best practices and access control.',
      ],
    },
    stack: ['javascript', 'html', 'css', 'sqlserver'],
  },
  {
    clave: 'getbyte',
    empresa: 'GETBYTE',
    puesto: {
      es: 'Desarrollador Frontend (Practicante)',
      en: 'Frontend Developer (Intern)',
    },
    periodo: { es: 'Jun 2023 — Jun 2024 · Lima, Perú', en: 'Jun 2023 — Jun 2024 · Lima, Peru' },
    desde: '2023-06',
    hasta: '2024-06',
    descripcion: {
      es: 'Primera experiencia profesional: un año construyendo interfaces en React para proyectos web centrados en la experiencia de usuario.',
      en: 'First professional role: a year building React interfaces for web projects centred on the user experience.',
    },
    logros: {
      es: [
        'Desarrollé interfaces dinámicas y responsivas en React para proyectos web centrados en la experiencia de usuario.',
        'Construí componentes reutilizables e integré la aplicación con APIs y servicios de Firebase.',
      ],
      en: [
        'Built dynamic, responsive React interfaces for web projects centred on the user experience.',
        'Built reusable components and integrated the application with APIs and Firebase services.',
      ],
    },
    stack: ['react', 'javascript', 'css', 'firebase'],
  },
];
