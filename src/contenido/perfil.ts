import type { DatoContacto, Formacion, Idiomahablado, Texto, Valor } from '@/tipos';

/*
 * Datos del perfil, alineados con el CV oficial.
 *
 * Se retiraron a propósito el DNI y la dirección domiciliaria que tenía la
 * versión anterior del portafolio: son datos sensibles que no deben estar en
 * un sitio público indexable. El teléfono y el correo sí figuran, porque ya
 * están en el CV que se envía a las empresas.
 */

export const NOMBRE_COMPLETO = 'Anderson Huamancaja Porras';
export const FECHA_NACIMIENTO = '2005-08-06';
/** Inicio de la trayectoria profesional (GETBYTE, junio 2023). */
export const INICIO_CARRERA = 2023;

export const SITIO_URL = 'https://www.portafolio-virtual.com';

export const rol: Texto = {
  es: 'Desarrollador Full Stack',
  en: 'Full Stack Developer',
};

export const especialidad: Texto = {
  es: 'React · TypeScript · Python (FastAPI)',
  en: 'React · TypeScript · Python (FastAPI)',
};

export const titular: Texto = {
  es: 'Profesional Técnico titulado en Ingeniería de Software con IA. Construyo plataformas web en producción con React y TypeScript, y las APIs que las sostienen con Python y FastAPI.',
  en: 'Certified Technical Professional in Software Engineering with AI. I build production web platforms with React and TypeScript, and the APIs that back them with Python and FastAPI.',
};

export const ubicacion: Texto = {
  es: 'Lima, Perú',
  en: 'Lima, Peru',
};

export const sobreMi: Texto = {
  es: 'Profesional Técnico titulado en Ingeniería de Software con Inteligencia Artificial (SENATI) y desarrollador Full Stack con 3 años de experiencia, enfocado en frontend con React y TypeScript y con base sólida en backend con Python y FastAPI. He trabajado en plataformas web en producción bajo arquitecturas de microfrontends y microservicios, con pruebas unitarias, bases de datos SQL Server, desarrollo móvil Android nativo con Java y despliegue de contenedores con Docker y NGINX. Me especializo en construir interfaces responsivas y mantenibles centradas en la experiencia de usuario.',
  en: 'Certified Technical Professional in Software Engineering with Artificial Intelligence (SENATI) and Full Stack developer with 3 years of experience, focused on the frontend with React and TypeScript and with a solid backend foundation in Python and FastAPI. I have worked on production web platforms under microfrontend and microservice architectures, with unit testing, SQL Server databases, native Android development in Java, and container deployment with Docker and NGINX. I specialise in building responsive, maintainable interfaces centred on the user experience.',
};

export const contacto: DatoContacto[] = [
  {
    icono: 'correo',
    etiqueta: { es: 'Correo', en: 'Email' },
    valor: 'ahuamancajaporras@gmail.com',
    url: 'mailto:ahuamancajaporras@gmail.com',
  },
  {
    icono: 'whatsapp',
    etiqueta: { es: 'WhatsApp', en: 'WhatsApp' },
    valor: '(+51) 908 822 952',
    url: 'https://wa.me/51908822952',
  },
  {
    icono: 'linkedin',
    etiqueta: { es: 'LinkedIn', en: 'LinkedIn' },
    valor: 'anderson-huamancaja-porras',
    url: 'https://www.linkedin.com/in/anderson-huamancaja-porras',
  },
  {
    icono: 'github',
    etiqueta: { es: 'GitHub', en: 'GitHub' },
    valor: 'AndHmP',
    url: 'https://github.com/AndHmP',
  },
  {
    icono: 'ubicacion',
    etiqueta: { es: 'Ubicación', en: 'Location' },
    valor: 'Lima, Perú',
  },
];

/**
 * Ruta del CV en PDF dentro de `public/`.
 * El nombre del archivo es también el que ve la persona al descargarlo, así
 * que se mantiene tal cual: `CV_Anderson_Huamancaja_Porras.pdf`.
 */
export const RUTA_CV = '/CV_Anderson_Huamancaja_Porras.pdf';

export const formacion: Formacion[] = [
  {
    clave: 'senati',
    institucion: 'SENATI — Centro de Formación Profesional Independencia',
    titulo: {
      es: 'Título Profesional Técnico en Ingeniería de Software con Inteligencia Artificial',
      en: 'Professional Technical Degree in Software Engineering with Artificial Intelligence',
    },
    periodo: {
      es: '2022 — 2024 · Titulado en septiembre de 2026 · Lima, Perú',
      en: '2022 — 2024 · Graduated September 2026 · Lima, Peru',
    },
    descripcion: {
      es: 'Formación técnica en desarrollo de software: programación orientada a objetos, bases de datos relacionales, arquitectura de aplicaciones y fundamentos de inteligencia artificial. Título conferido por la Dirección Nacional de SENATI, Dirección Zonal Lima-Callao, bajo la Ley 29672.',
      en: 'Technical training in software development: object-oriented programming, relational databases, application architecture and AI fundamentals. Degree conferred by the National Directorate of SENATI, Lima-Callao Zonal Directorate, under Law 29672.',
    },
    icono: 'senati',
    estado: 'titulado',
    /* Solo la resolución directoral: es el dato con el que la institución
       verifica el título. El DNI que figura en el diploma no se publica. */
    credencial: {
      es: 'R.D. N.º RD-482143-2026 · Modalidad Regular',
      en: 'Resolution No. RD-482143-2026 · Regular programme',
    },
    expedido: '2026-09-13',
  },
];

/**
 * Distintivo de titulación para la portada. Se deriva de `formacion` en vez de
 * repetirse a mano, para que no queden dos versiones del mismo dato.
 */
export const titulacion = formacion.find((etapa) => etapa.estado === 'titulado');

export const idiomas: Idiomahablado[] = [
  {
    clave: 'espanol',
    nombre: { es: 'Español', en: 'Spanish' },
    nivel: { es: 'Nativo', en: 'Native' },
  },
  {
    clave: 'ingles',
    nombre: { es: 'Inglés', en: 'English' },
    nivel: { es: 'Básico — en proceso de mejora', en: 'Basic — actively improving' },
  },
];

export const valores: Valor[] = [
  {
    clave: 'autodidacta',
    titulo: { es: 'Autodidacta', en: 'Self-taught' },
    contenido: {
      es: 'Aprendo tecnologías nuevas por mi cuenta y de forma constante. Este portafolio pasó de Create React App a Vite y TypeScript porque decidí que tenía que hacerlo.',
      en: 'I pick up new technologies on my own, continuously. This portfolio moved from Create React App to Vite and TypeScript because I decided it had to.',
    },
  },
  {
    clave: 'responsabilidad',
    titulo: { es: 'Responsabilidad', en: 'Accountability' },
    contenido: {
      es: 'Cumplo lo que comprometo, en el plazo acordado, y aviso temprano cuando algo no va a llegar.',
      en: 'I deliver what I commit to, on the agreed date, and flag early when something will not make it.',
    },
  },
  {
    clave: 'organizacion',
    titulo: { es: 'Organización', en: 'Organisation' },
    contenido: {
      es: 'Planifico la tarea antes de escribirla y documento las decisiones técnicas en Markdown, para que el equipo pueda seguir el razonamiento sin preguntarme.',
      en: 'I plan the task before writing it and document technical decisions in Markdown, so the team can follow the reasoning without asking me.',
    },
  },
  {
    clave: 'creatividad',
    titulo: { es: 'Creatividad', en: 'Creativity' },
    contenido: {
      es: 'Mi formación en diseño gráfico me da criterio visual: no solo implemento interfaces, también sé cuándo una está mal resuelta.',
      en: 'My graphic design background gives me visual judgement: I do not just implement interfaces, I can tell when one is poorly resolved.',
    },
  },
  {
    clave: 'respeto',
    titulo: { es: 'Respeto', en: 'Respect' },
    contenido: {
      es: 'Reviso Pull Requests buscando entender la intención antes de proponer cambios. Las revisiones son sobre el código, no sobre la persona.',
      en: 'I review pull requests seeking to understand the intent before proposing changes. Reviews are about the code, not the person.',
    },
  },
  {
    clave: 'independencia',
    titulo: { es: 'Independencia', en: 'Independence' },
    contenido: {
      es: 'Trabajo con autonomía: investigo, decido y documento por qué elegí ese camino.',
      en: 'I work autonomously: I research, decide, and document why I chose that path.',
    },
  },
];

/** Edad actual, calculada en cada render en vez de quedar congelada en el código. */
export function calcularEdad(referencia: Date = new Date()): number {
  const nacimiento = new Date(FECHA_NACIMIENTO);
  let edad = referencia.getFullYear() - nacimiento.getFullYear();
  const mes = referencia.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && referencia.getDate() < nacimiento.getDate())) {
    edad -= 1;
  }
  return edad;
}

/** Años de experiencia profesional, también calculados. */
export function calcularAniosExperiencia(referencia: Date = new Date()): number {
  return Math.max(1, referencia.getFullYear() - INICIO_CARRERA);
}
