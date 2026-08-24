import type { Experiencia } from '@/tipos';

/*
 * TODO — confirmar fechas exactas.
 *
 * Las duraciones vienen de las que ya estaban registradas ("1-2 años",
 * "6 meses"), pero los meses de inicio y fin son una reconstrucción
 * plausible. Ajústalos a tus fechas reales: un reclutador va a cruzarlos con
 * tu LinkedIn, y una inconsistencia ahí cuesta credibilidad.
 *
 * Orden: de más reciente a más antiguo.
 */
export const experiencias: Experiencia[] = [
  {
    clave: 'getbyte',
    empresa: 'GETBYTE',
    puesto: { es: 'Desarrollador Frontend', en: 'Frontend Developer' },
    periodo: { es: 'Oct 2024 — Actualidad', en: 'Oct 2024 — Present' },
    desde: '2024-10',
    hasta: 'actual',
    descripcion: {
      es: 'Desarrollo de interfaces para productos web orientados a cliente final, trabajando en equipo con diseño y backend dentro de un ciclo de entregas continuo.',
      en: 'Building interfaces for customer-facing web products, working alongside design and backend within a continuous delivery cycle.',
    },
    logros: {
      es: [
        'Construí interfaces con React y PrimeReact siguiendo el sistema de diseño de la empresa, priorizando componentes reutilizables por encima de pantallas hechas a medida.',
        'Integré el frontend con APIs REST manejando estados de carga, error y vacío de forma explícita, en lugar de asumir siempre el camino feliz.',
        'Participé en revisiones de código del equipo, tanto recibiendo como dando retroalimentación.',
      ],
      en: [
        'Built interfaces with React and PrimeReact following the company design system, favouring reusable components over one-off screens.',
        'Integrated the frontend with REST APIs handling loading, error and empty states explicitly, rather than always assuming the happy path.',
        'Took part in team code reviews, both receiving and giving feedback.',
      ],
    },
    stack: ['react', 'javascript', 'typescript', 'css', 'git'],
  },
  {
    clave: 'dacta',
    empresa: 'DACTA',
    puesto: { es: 'Desarrollador de Aplicaciones', en: 'Application Developer' },
    periodo: { es: 'Mar 2024 — Sep 2024', en: 'Mar 2024 — Sep 2024' },
    desde: '2024-03',
    hasta: '2024-09',
    descripcion: {
      es: 'Desarrollo de herramientas internas para la operación de técnicos de campo, donde la conectividad intermitente era una restricción de diseño, no un caso borde.',
      en: 'Internal tooling for field technician operations, where intermittent connectivity was a design constraint, not an edge case.',
    },
    logros: {
      es: [
        'Trabajé sobre el flujo de asignación y seguimiento de tareas para personal en campo.',
        'Enfrenté el problema de sincronizar datos capturados sin conexión con el sistema central.',
      ],
      en: [
        'Worked on the task assignment and tracking flow for field personnel.',
        'Tackled the problem of syncing data captured offline back into the central system.',
      ],
    },
    stack: ['android', 'java', 'python', 'sqlserver'],
  },
  {
    clave: 'lyh',
    empresa: 'Inversiones y Distribución L&H',
    puesto: { es: 'Desarrollador Web', en: 'Web Developer' },
    periodo: { es: 'Sep 2023 — Feb 2024', en: 'Sep 2023 — Feb 2024' },
    desde: '2023-09',
    hasta: '2024-02',
    descripcion: {
      es: 'Diseño y desarrollo del sitio web corporativo de la empresa, desde la propuesta visual hasta la publicación.',
      en: 'Design and development of the company corporate website, from visual proposal through to launch.',
    },
    logros: {
      es: [
        'Llevé el proyecto de punta a punta: estructura de contenido, diseño, maquetación y despliegue.',
        'Construí la presentación del portafolio de servicios de forma que la empresa pudiera actualizarla sin depender de mí.',
      ],
      en: [
        'Ran the project end to end: content structure, design, markup and deployment.',
        'Built the service portfolio presentation so the company could update it without depending on me.',
      ],
    },
    stack: ['html', 'css', 'javascript', 'illustrator'],
  },
  {
    clave: 'condo-cleaner',
    empresa: 'Condo Cleaner',
    puesto: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    periodo: { es: 'May 2023 — Ago 2023', en: 'May 2023 — Aug 2023' },
    desde: '2023-05',
    hasta: '2023-08',
    descripcion: {
      es: 'Dos sistemas complementarios: uno para administrar la base de datos operativa y otro para consultarla y presentarla al equipo.',
      en: 'Two complementary systems: one to administer the operational database and another to query and present it to the team.',
    },
    logros: {
      es: [
        'Separé la escritura de datos de su lectura en dos aplicaciones distintas, para que el personal operativo no tuviera acceso a operaciones destructivas.',
        'Reduje el trabajo manual de consolidación de información que antes se hacía en hojas de cálculo.',
      ],
      en: [
        'Split data writing from data reading into two distinct applications, so operational staff had no access to destructive operations.',
        'Cut down the manual consolidation work previously done in spreadsheets.',
      ],
    },
    stack: ['react', 'javascript', 'sqlserver', 'css'],
  },
  {
    clave: 'kyb-imports',
    empresa: 'KyB Imports',
    puesto: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    periodo: { es: 'Ene 2023 — Abr 2023', en: 'Jan 2023 — Apr 2023' },
    desde: '2023-01',
    hasta: '2023-04',
    descripcion: {
      es: 'Primera experiencia profesional: un sistema de administración de base de datos y una plataforma web para visualizar la información del negocio.',
      en: 'First professional role: a database administration system and a web platform to visualise business information.',
    },
    logros: {
      es: [
        'Diseñé el modelo de datos y la interfaz de administración desde cero.',
        'Entregué a la empresa una vista consolidada de su información, que antes estaba repartida en archivos sueltos.',
      ],
      en: [
        'Designed the data model and the admin interface from scratch.',
        'Gave the company a consolidated view of their information, previously scattered across loose files.',
      ],
    },
    stack: ['javascript', 'html', 'css', 'sqlserver'],
  },
];
