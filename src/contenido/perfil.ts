import type { DatoContacto, Formacion, Texto, Valor } from '@/tipos';

/*
 * ATENCIÓN — datos pendientes de completar.
 *
 * Los valores marcados con TODO_ son marcadores de posición. Reemplázalos por
 * tus datos reales antes de publicar; el test de integridad del perfil
 * (`perfil.test.ts`) falla mientras alguno siga presente, para que no se
 * escape a producción.
 *
 * Se retiraron a propósito el DNI y la dirección domiciliaria que tenía la
 * versión anterior: son datos sensibles que no deben estar en un sitio
 * público indexable.
 */

export const NOMBRE_COMPLETO = 'Anderson Huamancaja Porras';
export const FECHA_NACIMIENTO = '2005-08-06';
/** Año en que empezó a trabajar profesionalmente. Alimenta "X años de experiencia". */
export const INICIO_CARRERA = 2023;

export const SITIO_URL = 'https://anderson-huamancaja.vercel.app';

export const rol: Texto = {
  es: 'Desarrollador Full Stack',
  en: 'Full Stack Developer',
};

export const titular: Texto = {
  es: 'Construyo aplicaciones web y móviles que resuelven problemas reales de negocio, de la interfaz a la base de datos.',
  en: 'I build web and mobile applications that solve real business problems, from the interface down to the database.',
};

export const ubicacion: Texto = {
  es: 'Lima, Perú',
  en: 'Lima, Peru',
};

export const sobreMi: Texto = {
  es: 'Desarrollador Full Stack con 3 años de experiencia construyendo productos para empresas peruanas. Trabajo el frontend con React, TypeScript y Next.js, y el backend con Python y FastAPI sobre arquitecturas de microservicios contenerizadas con Docker. También desarrollo aplicaciones Android nativas en Java. Me interesa el código que se puede mantener: tipado estricto, pruebas donde importan y decisiones técnicas que quedan documentadas para quien venga después.',
  en: 'Full Stack developer with 3 years of experience building products for Peruvian companies. I work on the frontend with React, TypeScript and Next.js, and on the backend with Python and FastAPI over containerised microservice architectures. I also build native Android applications in Java. I care about maintainable code: strict typing, tests where they matter, and technical decisions documented for whoever comes next.',
};

export const contacto: DatoContacto[] = [
  {
    icono: 'correo',
    etiqueta: { es: 'Correo', en: 'Email' },
    valor: 'TODO_CORREO@ejemplo.com',
    url: 'mailto:TODO_CORREO@ejemplo.com',
  },
  {
    icono: 'whatsapp',
    etiqueta: { es: 'WhatsApp', en: 'WhatsApp' },
    valor: '+51 TODO_TELEFONO',
    url: 'https://wa.me/51TODO_TELEFONO',
  },
  {
    icono: 'linkedin',
    etiqueta: { es: 'LinkedIn', en: 'LinkedIn' },
    valor: 'Anderson Huamancaja',
    url: 'https://www.linkedin.com/in/TODO_LINKEDIN',
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

/** Ruta del CV en PDF dentro de `public/`. */
export const RUTA_CV = '/cv-anderson-huamancaja.pdf';

export const formacion: Formacion[] = [
  {
    clave: 'senati',
    institucion: 'SENATI',
    titulo: {
      es: 'Ingeniería de Software con mención en Inteligencia Artificial',
      en: 'Software Engineering, specialisation in Artificial Intelligence',
    },
    periodo: { es: '2022 — 2024', en: '2022 — 2024' },
    descripcion: {
      es: 'Formación técnica en desarrollo de software: programación orientada a objetos, bases de datos relacionales, arquitectura de aplicaciones y fundamentos de inteligencia artificial. Es la etapa donde pasé de escribir código a diseñar sistemas.',
      en: 'Technical training in software development: object-oriented programming, relational databases, application architecture and AI fundamentals. This is where I moved from writing code to designing systems.',
    },
    icono: 'senati',
  },
  {
    clave: 'secundaria',
    institucion: 'I.E.E. Carlos Wiesse',
    titulo: { es: 'Educación secundaria', en: 'Secondary education' },
    periodo: { es: '2016 — 2021', en: '2016 — 2021' },
    descripcion: {
      es: 'Educación secundaria completa, manteniéndome de forma consistente entre los tres primeros puestos de mi promoción.',
      en: 'Completed secondary education, consistently ranking among the top three students of my year.',
    },
    icono: 'secundaria',
  },
  {
    clave: 'primaria',
    institucion: 'I.E. 2059 Suecia',
    titulo: { es: 'Educación primaria', en: 'Primary education' },
    periodo: { es: '2011 — 2016', en: '2011 — 2016' },
    descripcion: {
      es: 'Educación primaria en Comas, Lima. Reconocido en concursos de dibujo en el primer y el último año.',
      en: 'Primary education in Comas, Lima. Awarded in drawing competitions in my first and final year.',
    },
    icono: 'primaria',
  },
  {
    clave: 'inicial',
    institucion: 'Colegio Luis Enrique',
    titulo: { es: 'Educación inicial', en: 'Early education' },
    periodo: { es: '2008 — 2011', en: '2008 — 2011' },
    descripcion: {
      es: 'Educación inicial, donde desarrollé las habilidades básicas y sociales de los primeros años.',
      en: 'Early education, where I developed the basic and social skills of the first years.',
    },
    icono: 'inicial',
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
      es: 'Divido el trabajo en piezas verificables y priorizo lo que desbloquea al resto del equipo.',
      en: 'I break work into verifiable pieces and prioritise what unblocks the rest of the team.',
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
      es: 'Reviso código buscando entender la intención antes de proponer cambios. Las revisiones son sobre el código, no sobre la persona.',
      en: 'I review code seeking to understand the intent before proposing changes. Reviews are about the code, not the person.',
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
