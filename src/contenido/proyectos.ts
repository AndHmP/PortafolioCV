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
 *
 *  NOTA sobre el trabajo en empresa: los casos de DACTA, KYB IMPORT,
 *  CONDO CLEANER y GETBYTE describen el trabajo al mismo nivel de detalle
 *  que el CV, sin nombres de clientes, datos de negocio ni capturas de
 *  sistemas internos. Si vas a añadir capturas de esos proyectos, pide
 *  autorización antes.
 * ────────────────────────────────────────────────────────────────────────────
 */

export const proyectos: Proyecto[] = [
  /* ═══════════════════════════════════════════════════════════════════════ */
  /*  PUBLICADOS                                                             */
  /* ═══════════════════════════════════════════════════════════════════════ */

  {
    slug: 'plataforma-microfrontends',
    estado: 'publicado',
    destacado: true,
    tipo: 'fullstack',
    periodo: '2025-01',
    titulo: {
      es: 'Plataforma web en microfrontends y microservicios',
      en: 'Web platform on microfrontends and microservices',
    },
    contexto: { es: 'DACTA S.A.C. · Trabajo profesional', en: 'DACTA S.A.C. · Professional work' },
    resumen: {
      es: 'Plataforma en producción con usuarios finales: módulos de interfaz desacoplados en React y TypeScript, APIs REST en FastAPI y despliegue en contenedores tras un proxy NGINX.',
      en: 'Production platform with real end users: decoupled React and TypeScript interface modules, REST APIs in FastAPI, and containerised deployment behind an NGINX proxy.',
    },
    problema: {
      es: 'Una plataforma que crece con varios equipos trabajando en paralelo tiende a convertirse en un frontend monolítico donde cualquier cambio obliga a desplegar todo y a coordinar con el resto. Eso frena las entregas y hace que un error en un módulo pueda tumbar la aplicación entera.',
      en: 'A platform that grows with several teams working in parallel tends to become a monolithic frontend where any change forces a full deployment and coordination with everyone else. That slows delivery and lets a bug in one module take down the whole application.',
    },
    solucion: {
      es: 'Los módulos de interfaz se construyeron bajo una arquitectura de microfrontends, de modo que cada equipo desarrolla y despliega su parte por separado. Del lado del servidor, las APIs REST se organizaron en microservicios con contratos explícitos y validación de datos en la frontera. Todo se ejecuta en contenedores Docker detrás de NGINX como proxy inverso, con la gestión de dominios y subdominios que expone cada servicio.',
      en: 'Interface modules were built under a microfrontend architecture, so each team develops and deploys its own part separately. On the server side, REST APIs were organised into microservices with explicit contracts and data validation at the boundary. Everything runs in Docker containers behind NGINX as a reverse proxy, with the domain and subdomain setup that exposes each service.',
    },
    decisionesTecnicas: [
      {
        titulo: {
          es: 'Microfrontends para desacoplar equipos, no por moda',
          en: 'Microfrontends to decouple teams, not for fashion',
        },
        detalle: {
          es: 'La arquitectura añade complejidad de build y de despliegue, así que solo se justifica cuando el cuello de botella real es la coordinación entre equipos. Ese era el caso: el beneficio fue reducir el acoplamiento, no la velocidad de carga.',
          en: 'The architecture adds build and deployment complexity, so it is only justified when the real bottleneck is coordination between teams. That was the case here: the gain was reduced coupling, not load speed.',
        },
      },
      {
        titulo: {
          es: 'React Query para el estado de servidor, Context API para el resto',
          en: 'React Query for server state, Context API for the rest',
        },
        detalle: {
          es: 'Separar ambos estados evita el error clásico de meter datos remotos en un store global y tener que reimplementar caché, revalidación y reintentos a mano. React Query (TanStack) se encarga del estado de servidor; Context API queda para lo que de verdad es estado de aplicación.',
          en: 'Separating the two avoids the classic mistake of pushing remote data into a global store and having to reimplement caching, revalidation and retries by hand. React Query (TanStack) owns server state; Context API is left for what is genuinely application state.',
        },
      },
      {
        titulo: {
          es: 'Pruebas unitarias donde el costo de fallar es alto',
          en: 'Unit tests where the cost of failure is high',
        },
        detalle: {
          es: 'Jest y React Testing Library sobre los componentes con lógica de negocio, no sobre todo por igual. Las pruebas ejercitan la interfaz como lo haría una persona usuaria, así que sobreviven a los refactors internos.',
          en: 'Jest and React Testing Library over components with business logic, not uniformly over everything. The tests exercise the interface the way a real user would, so they survive internal refactors.',
        },
      },
      {
        titulo: {
          es: 'SQL Server consultado con intención',
          en: 'Querying SQL Server deliberately',
        },
        detalle: {
          es: 'Los módulos de negocio dependen de consultas que se ejecutan constantemente. Optimizar consultas y procedimientos almacenados en lugar de resolverlo en la capa de aplicación mantiene el trabajo cerca de los datos.',
          en: 'The business modules depend on queries that run constantly. Optimising queries and stored procedures instead of solving it in the application layer keeps the work close to the data.',
        },
      },
    ],
    resultados: {
      es: [
        'Menor acoplamiento entre equipos: cada uno despliega su módulo sin bloquear al resto.',
        'Menos errores en producción tras introducir pruebas unitarias en los componentes clave.',
        'Servicios expuestos de forma reproducible con Docker y NGINX, con dominios y subdominios gestionados.',
      ],
      en: [
        'Lower coupling between teams: each one deploys its module without blocking the others.',
        'Fewer production defects after introducing unit tests on the key components.',
        'Services exposed reproducibly with Docker and NGINX, with managed domains and subdomains.',
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
      'sqlserver',
      'docker',
      'nginx',
      'git',
    ],
  },

  {
    slug: 'app-android-nativa',
    estado: 'publicado',
    destacado: true,
    tipo: 'movil',
    periodo: '2025-06',
    titulo: {
      es: 'Aplicaciones Android nativas en producción',
      en: 'Native Android applications in production',
    },
    contexto: { es: 'DACTA S.A.C. · Trabajo profesional', en: 'DACTA S.A.C. · Professional work' },
    resumen: {
      es: 'Aplicaciones Android nativas en Java, distribuidas a clientes finales e integradas con las mismas APIs REST que consume la plataforma web.',
      en: 'Native Android applications in Java, shipped to end clients and integrated with the same REST APIs the web platform consumes.',
    },
    problema: {
      es: 'Parte de los usuarios de la plataforma trabaja fuera del escritorio y necesitaba acceso desde el móvil. Una aplicación web adaptada no era suficiente: hacía falta integración real con el dispositivo y una experiencia que respondiera como una app nativa.',
      en: 'Some of the platform users work away from a desk and needed mobile access. An adapted web application was not enough: real device integration and a genuinely native-feeling experience were required.',
    },
    solucion: {
      es: 'Desarrollo nativo con Java en Android Studio, consumiendo las mismas APIs REST que la plataforma web. Reutilizar los contratos de los microservicios evitó mantener una capa de datos paralela para móvil: cuando el servicio cambia, cambia para ambos clientes.',
      en: 'Native development in Java with Android Studio, consuming the same REST APIs as the web platform. Reusing the microservice contracts avoided maintaining a parallel data layer for mobile: when the service changes, it changes for both clients.',
    },
    decisionesTecnicas: [
      {
        titulo: {
          es: 'Nativo en vez de multiplataforma',
          en: 'Native rather than cross-platform',
        },
        detalle: {
          es: 'Con Android como única plataforma objetivo, un framework multiplataforma habría añadido una capa de abstracción sin ahorrar trabajo real, y habría complicado el acceso a las capacidades del dispositivo.',
          en: 'With Android as the only target platform, a cross-platform framework would have added an abstraction layer without saving real work, and would have complicated access to device capabilities.',
        },
      },
      {
        titulo: {
          es: 'Reutilizar los contratos de la API, no duplicarlos',
          en: 'Reusing the API contracts instead of duplicating them',
        },
        detalle: {
          es: 'La aplicación móvil consume los mismos endpoints que la web. Mantener un backend específico para móvil habría duplicado la lógica de validación y abierto la puerta a que ambas versiones se desincronizaran.',
          en: 'The mobile application consumes the same endpoints as the web. Keeping a mobile-specific backend would have duplicated validation logic and opened the door to the two versions drifting apart.',
        },
      },
    ],
    resultados: {
      es: [
        'Aplicaciones distribuidas en producción a clientes finales.',
        'Una sola superficie de API para web y móvil, sin lógica de datos duplicada.',
      ],
      en: [
        'Applications shipped to production for end clients.',
        'A single API surface for web and mobile, with no duplicated data logic.',
      ],
    },
    stack: ['android', 'java', 'fastapi', 'python', 'sqlserver'],
  },

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
        titulo: {
          es: 'Tema aplicado antes del primer pintado',
          en: 'Theme applied before first paint',
        },
        detalle: {
          es: 'Un script en línea en el `<head>` lee localStorage y fija `data-tema` antes de que React monte. Sin eso, quien usa tema oscuro ve un destello blanco en cada carga. La versión anterior inyectaba un `<style>` durante el render, que además no persistía la preferencia.',
          en: 'An inline script in the `<head>` reads localStorage and sets `data-tema` before React mounts. Without it, dark-theme users get a white flash on every load. The previous version injected a `<style>` tag during render, and did not persist the preference either.',
        },
      },
    ],
    retos: {
      es: 'El mayor riesgo fue el carrusel de conocimientos: la versión anterior llamaba a `ReactDOM.createRoot()` dentro de un componente para insertar tarjetas manualmente en el DOM, y esas raíces nunca se desmontaban. Reescribirlo como un carrusel controlado por estado eliminó la fuga de memoria y, de paso, lo hizo navegable por teclado.',
      en: 'The biggest risk was the skills carousel: the previous version called `ReactDOM.createRoot()` inside a component to manually insert cards into the DOM, and those roots were never unmounted. Rewriting it as a state-driven carousel removed the memory leak and, along the way, made it keyboard navigable.',
    },
    resultados: {
      es: [
        'Tiempo de build de decenas de segundos a ~2 s, y unas 40 dependencias de build eliminadas.',
        'Eliminadas dos peticiones externas bloqueantes al reemplazar Font Awesome por iconos SVG en línea.',
        'Cobertura de pruebas sobre el catálogo, los filtros y los contextos de tema e idioma.',
        'Integración continua que corre lint, tipos, pruebas y build en cada push.',
      ],
      en: [
        'Build time from tens of seconds down to ~2 s, and around 40 build dependencies removed.',
        'Removed two render-blocking external requests by replacing Font Awesome with inline SVG icons.',
        'Test coverage over the catalogue, the filters and the theme and language contexts.',
        'Continuous integration running lint, types, tests and build on every push.',
      ],
    },
    stack: ['react', 'typescript', 'vite', 'tailwind', 'css', 'jest', 'testing-library', 'git'],
    enlaces: {
      repo: 'https://github.com/AndHmP/PortafolioCV',
    },
  },

  {
    slug: 'gestion-productos-kyb',
    estado: 'publicado',
    tipo: 'fullstack',
    periodo: '2024-11',
    titulo: {
      es: 'Sistema de gestión de productos — KYB Import',
      en: 'Product management system — KYB Import',
    },
    contexto: { es: 'KYB IMPORT · Trabajo profesional', en: 'KYB IMPORT · Professional work' },
    resumen: {
      es: 'Sistema de gestión de productos con interfaz administrativa y las APIs que lo respaldan, construidas con control de acceso y buenas prácticas de seguridad.',
      en: 'Product management system with an admin interface and the APIs behind it, built with access control and security best practices.',
    },
    problema: {
      es: 'Una importadora sin un sistema propio depende de archivos sueltos para llevar el control de sus productos. Eso hace imposible responder preguntas básicas sobre el inventario, y cualquier persona con acceso al archivo puede alterar información histórica sin dejar rastro.',
      en: 'An importer without its own system relies on loose files to keep track of its products. That makes basic inventory questions impossible to answer, and anyone with access to the file can alter historical information without leaving a trace.',
    },
    solucion: {
      es: 'Diseñé e implementé el sistema completo: la interfaz administrativa para visualizar y administrar la información, y las APIs que manejan la base de datos. El control de acceso se pensó desde el inicio, no como un añadido posterior: cada operación sobre los datos pasa por una validación de permisos en la API, no solo por una pantalla oculta en el cliente.',
      en: 'I designed and implemented the whole system: the admin interface to view and manage the information, and the APIs that handle the database. Access control was designed in from the start, not bolted on later: every data operation goes through permission validation in the API, not just a hidden screen on the client.',
    },
    decisionesTecnicas: [
      {
        titulo: {
          es: 'La autorización vive en la API, no en la interfaz',
          en: 'Authorisation lives in the API, not in the interface',
        },
        detalle: {
          es: 'Ocultar un botón no es control de acceso: cualquiera puede llamar al endpoint directamente. Validar los permisos en el servidor hace que la interfaz sea solo una comodidad, no la barrera de seguridad.',
          en: 'Hiding a button is not access control: anyone can call the endpoint directly. Validating permissions on the server makes the interface a convenience, not the security boundary.',
        },
      },
      {
        titulo: {
          es: 'Modelar el dominio antes de escribir pantallas',
          en: 'Modelling the domain before writing screens',
        },
        detalle: {
          es: 'Definir primero las entidades y sus relaciones evitó tener que rehacer las pantallas cada vez que aparecía un caso de negocio que el modelo no soportaba.',
          en: 'Defining the entities and their relationships first avoided having to redo screens every time a business case appeared that the model could not support.',
        },
      },
    ],
    resultados: {
      es: [
        'La empresa pasó de archivos sueltos a una única fuente de datos consultable.',
        'Operaciones sobre los datos restringidas por rol, verificadas del lado del servidor.',
      ],
      en: [
        'The company moved from loose files to a single queryable source of data.',
        'Data operations restricted by role, verified on the server side.',
      ],
    },
    stack: ['javascript', 'html', 'css', 'sqlserver'],
  },

  {
    slug: 'web-corporativa-condo-cleaner',
    estado: 'publicado',
    tipo: 'web',
    periodo: '2024-12',
    titulo: {
      es: 'Sitio corporativo con catálogo — Condo Cleaner',
      en: 'Corporate site with catalogue — Condo Cleaner',
    },
    contexto: {
      es: 'CONDO CLEANER · Trabajo profesional',
      en: 'CONDO CLEANER · Professional work',
    },
    resumen: {
      es: 'Sitio web corporativo con catálogo interactivo de productos de limpieza, más los flujos de contacto y navegación que acercan al cliente a la empresa.',
      en: 'Corporate website with an interactive catalogue of cleaning products, plus the contact and navigation flows that bring customers closer to the company.',
    },
    problema: {
      es: 'La empresa no tenía presencia web propia. Sus productos no eran consultables en línea y los clientes potenciales no tenían una vía directa de contacto, así que cada consulta dependía de canales informales.',
      en: 'The company had no web presence of its own. Its products were not browsable online and potential customers had no direct way to get in touch, so every enquiry depended on informal channels.',
    },
    solucion: {
      es: 'Desarrollé el sitio corporativo completo, con un catálogo interactivo donde el cliente puede recorrer los productos de limpieza, y funcionalidades de contacto y navegación que convierten esa consulta en una conversación con la empresa.',
      en: 'I built the full corporate site, with an interactive catalogue where customers can browse the cleaning products, and contact and navigation features that turn that browsing into a conversation with the company.',
    },
    decisionesTecnicas: [
      {
        titulo: {
          es: 'El catálogo como dato, no como marcado',
          en: 'The catalogue as data, not as markup',
        },
        detalle: {
          es: 'Escribir cada producto directamente en el HTML habría obligado a tocar código en cada alta o baja. Tratarlo como una lista de datos permite que el catálogo crezca sin rehacer la página.',
          en: 'Writing each product directly into the HTML would have meant touching code for every addition or removal. Treating it as a data list lets the catalogue grow without rebuilding the page.',
        },
      },
    ],
    resultados: {
      es: [
        'La empresa pasó a tener presencia web propia con su catálogo consultable en línea.',
        'Vía de contacto directa desde el sitio, sin depender de canales informales.',
      ],
      en: [
        'The company gained its own web presence with a browsable online catalogue.',
        'A direct contact path from the site, without relying on informal channels.',
      ],
    },
    stack: ['react', 'javascript', 'html', 'css'],
  },

  {
    slug: 'interfaces-getbyte',
    estado: 'publicado',
    tipo: 'web',
    periodo: '2024-06',
    titulo: {
      es: 'Interfaces y componentes reutilizables — GETBYTE',
      en: 'Interfaces and reusable components — GETBYTE',
    },
    contexto: {
      es: 'GETBYTE · Prácticas profesionales',
      en: 'GETBYTE · Professional internship',
    },
    resumen: {
      es: 'Un año construyendo interfaces dinámicas y responsivas en React, con una biblioteca de componentes reutilizables e integración con APIs y servicios de Firebase.',
      en: 'A year building dynamic, responsive React interfaces, with a reusable component library and integration with APIs and Firebase services.',
    },
    problema: {
      es: 'En proyectos web que se entregan uno tras otro, resolver cada pantalla desde cero multiplica el trabajo y produce interfaces que se ven distintas entre sí sin motivo. El costo aparece tarde: cuando hay que cambiar algo en todas partes.',
      en: 'In web projects delivered one after another, solving every screen from scratch multiplies the work and produces interfaces that look different from each other for no reason. The cost shows up late: when something has to change everywhere.',
    },
    solucion: {
      es: 'Construí componentes reutilizables en lugar de pantallas a medida, e integré las aplicaciones con APIs y servicios de Firebase para autenticación y datos. Fue mi primera experiencia profesional y donde aprendí que la parte difícil del frontend no es que se vea bien una vez, sino que siga viéndose bien después de veinte cambios.',
      en: 'I built reusable components instead of bespoke screens, and integrated the applications with APIs and Firebase services for auth and data. It was my first professional role, and where I learned that the hard part of frontend is not looking good once, but still looking good after twenty changes.',
    },
    decisionesTecnicas: [
      {
        titulo: {
          es: 'Firebase para no construir lo que no era el producto',
          en: 'Firebase to avoid building what was not the product',
        },
        detalle: {
          es: 'En proyectos de plazo corto, levantar autenticación y persistencia propias consume el tiempo que necesita la funcionalidad que sí distingue al producto. Firebase resolvió esa base para poder invertir el esfuerzo en la interfaz.',
          en: 'On short-deadline projects, rolling your own auth and persistence eats the time the differentiating features need. Firebase covered that foundation so the effort could go into the interface.',
        },
      },
    ],
    stack: ['react', 'javascript', 'css', 'firebase'],
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
      es: 'Decir "domino CSS" en un CV no demuestra nada. Hacía falta evidencia concreta y revisable de técnicas específicas: animaciones por fotogramas, transformaciones 3D, recortes con clip-path, estados de foco sin JavaScript, layouts que se sostienen sin librerías.',
      en: 'Saying "I know CSS" on a CV proves nothing. Concrete, reviewable evidence of specific techniques was needed: keyframe animations, 3D transforms, clip-path masking, focus states without JavaScript, layouts that hold up without libraries.',
    },
    solucion: {
      es: 'Un ejercicio sostenido de una pieza por sesión, reunido en una galería filtrable donde cada componente se ve funcionando y se indica qué técnica demuestra.',
      en: 'A sustained one-piece-per-session exercise, gathered into a filterable gallery where each component can be seen working and states which technique it demonstrates.',
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
    stack: [
      'react',
      'typescript',
      'tailwind',
      'react-query',
      'python',
      'fastapi',
      'postgresql',
      'jest',
      'testing-library',
    ],
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
