# Portafolio — Anderson Huamancaja Porras

Portafolio profesional bilingüe (español / inglés) de un desarrollador Full Stack. No es una landing con una lista de tecnologías: cada proyecto se presenta como un caso de estudio con el problema que resolvía, cómo se resolvió y qué se decidió en el camino.

**Stack:** React 19 · TypeScript (modo estricto) · Vite 6 · Tailwind CSS · React Router 7 · Vitest + React Testing Library

---

## Qué hay dentro

| Ruta | Contenido |
|---|---|
| `/` | Portada: presentación, métricas, proyectos destacados, stack, trayectoria y contacto |
| `/proyectos` | Catálogo filtrable por tecnología y por tipo de proyecto |
| `/proyectos/:slug` | Caso de estudio: problema → solución → arquitectura → decisiones técnicas → retos → resultados |
| `/perfil` | Perfil completo: datos, trayectoria, formación, conocimientos y valores |
| `/laboratorio` | 35 piezas de interfaz construidas con CSS, cada una indicando qué técnica demuestra |

---

## Cómo correrlo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

### Comandos disponibles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Verifica tipos y compila a `dist/` |
| `npm run preview` | Sirve el build de producción localmente |
| `npm test` | Ejecuta la suite de pruebas |
| `npm run test:watch` | Pruebas en modo observador |
| `npm run test:coverage` | Pruebas con reporte de cobertura |
| `npm run lint` | Revisa estilo, hooks y accesibilidad |
| `npm run typecheck` | Solo verificación de tipos |
| `npm run verificar` | **Antes de desplegar:** falla si quedan datos sin completar |

---

## Agregar un proyecto

Este es el punto de extensión del portafolio. Agregar un proyecto son **dos pasos**:

**1.** Añade un objeto a [`src/contenido/proyectos.ts`](src/contenido/proyectos.ts):

```ts
{
  slug: 'gestion-ferreteria',        // define la URL: /proyectos/gestion-ferreteria
  estado: 'publicado',               // 'publicado' | 'en-desarrollo' | 'archivado'
  destacado: true,                   // aparece en la portada
  tipo: 'fullstack',                 // web | movil | backend | microservicios | fullstack
  periodo: '2026-09',                // YYYY-MM, ordena el catálogo
  titulo:   { es: '…', en: '…' },
  resumen:  { es: '…', en: '…' },    // 2-3 líneas para la tarjeta
  problema: { es: '…', en: '…' },
  solucion: { es: '…', en: '…' },
  decisionesTecnicas: [{ titulo: { es: '…', en: '…' }, detalle: { es: '…', en: '…' } }],
  retos:      { es: '…', en: '…' },
  resultados: { es: ['…'], en: ['…'] },
  stack: ['react', 'typescript', 'fastapi', 'postgresql'],   // claves de stack.ts
  arquitectura: '…',                 // diagrama ASCII o Mermaid, opcional
  enlaces: { demo: 'https://…', repo: 'https://…' },
  imagenes: [{ src: '/proyectos/gestion-ferreteria/panel.png',
               alt: { es: '…', en: '…' }, portada: true }],
}
```

**2.** Deja las capturas en `public/proyectos/<slug>/`.

Eso es todo. La tarjeta del grid, la página de detalle, los filtros, el conteo de la portada y el `sitemap.xml` se derivan del catálogo. No hay que tocar ningún otro archivo.

> Las claves de `stack` deben existir en [`src/contenido/stack.ts`](src/contenido/stack.ts). Si no existen, `npm test` falla antes de que llegue al sitio.

Los proyectos con `estado: 'en-desarrollo'` quedan registrados pero no se renderizan. Cuando uno esté listo, se cambia el flag a `'publicado'` y aparece.

---

## Decisiones técnicas

**Vite en lugar de Create React App.** El proyecto venía de un CRA *eyectado*, con toda la configuración de webpack copiada al repositorio. CRA está descontinuado desde 2025. La migración eliminó unas 40 dependencias de build y bajó el tiempo de compilación de decenas de segundos a ~2 s.

**Vite en lugar de Next.js.** Next.js habría dado renderizado en servidor, pero un portafolio de contenido estático no lo necesita y sumaría una capa de servidor que mantener. El SEO se cubre con meta etiquetas por ruta, `sitemap.xml` generado en el build y datos estructurados `Person`.

**i18n tipado, sin librería.** El diccionario en inglés se declara como `typeof es`, así que **TypeScript falla la compilación si falta una traducción**. Una librería de i18n habría detectado ese mismo error recién en tiempo de ejecución, y solo si alguien visitaba esa pantalla en ese idioma.

**El tema se aplica antes del primer pintado.** Un script en línea en el `<head>` lee `localStorage` y fija `data-tema` antes de que React monte. Sin eso, quien usa tema oscuro ve un destello blanco en cada carga.

**Los filtros viven en la URL.** `/proyectos?tec=react&tipo=web` es un enlace compartible y el botón «atrás» del navegador funciona como se espera.

**Iconos SVG en línea, sin Font Awesome.** Se eliminaron dos peticiones externas bloqueantes y la dependencia de un kit personal que puede expirar.

**Las piezas del Laboratorio conservan su código original.** Reescribir 35 componentes probados solo para renombrar clases sería trabajo sin beneficio y arriesgaría romper animaciones muy afinadas. Sus utilidades heredadas viven acotadas bajo `.lab-heredado` ([`src/lab/estilos/utilidades-heredadas.css`](src/lab/estilos/utilidades-heredadas.css)), de modo que el resto del sitio usa Tailwind sin interferencias.

---

## Estructura

```
src/
├── contenido/        # Única fuente de verdad: proyectos, stack, perfil, i18n
│   ├── proyectos.ts  # ← el catálogo (punto de extensión)
│   ├── stack.ts      # tecnologías y niveles
│   ├── perfil.ts     # datos personales y trayectoria
│   ├── experiencia.ts
│   ├── lab.tsx       # registro de piezas del laboratorio
│   └── i18n/         # diccionarios es / en
├── tipos/            # contratos de datos
├── contextos/        # tema e idioma
├── hooks/            # useTema, useIdioma, useMeta
├── componentes/      # layout, ui, iconos, proyectos, perfil
├── paginas/          # una por ruta
├── lab/              # piezas del laboratorio (código heredado, conservado)
├── utilidades/       # lógica pura (filtros)
└── plugins/          # generación de sitemap en el build
```

---

## Pruebas

```bash
npm test
```

La suite cubre:

- **Integridad del catálogo** — slugs únicos y válidos, textos en ambos idiomas, tecnologías que existen en `stack.ts`, formato de fechas, URLs absolutas. Es la red de seguridad del punto de extensión.
- **Lógica de filtrado** — por tecnología, por tipo, combinada, sin resultados, y que no mute el arreglo original.
- **Diccionarios de idioma** — mismas claves, sin textos vacíos, sin español filtrado en las traducciones.
- **Contextos de tema e idioma** — alternancia, persistencia y respeto del tema ya aplicado en el documento.
- **`TarjetaProyecto`** — datos, enlaces, resumen del stack y comportamiento sin captura.
- **Humo sobre la app completa** — las cinco rutas montan sin errores y los proyectos en desarrollo no son accesibles.

---

## Despliegue

Configurado para [Vercel](https://vercel.com) mediante [`vercel.json`](vercel.json), que incluye el *rewrite* de SPA necesario para que recargar `/proyectos/<slug>` funcione.

```bash
npm run verificar    # falla si quedan datos sin completar
npm run build
```

La integración continua ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) corre lint, tipos, pruebas y build en cada push.

---

## Pendientes antes de publicar

- [ ] Añadir `public/og-portada.png` (1200×630) para las tarjetas de redes sociales.
- [ ] Añadir capturas de los proyectos propios en `public/proyectos/<slug>/`.
- [ ] Para los casos de DACTA, KYB IMPORT, CONDO CLEANER y GETBYTE: pedir autorización antes de publicar cualquier captura de sistemas internos.
- [ ] Confirmar que el dominio `www.portafolio-virtual.com` apunta al despliegue (`SITIO_URL` en `perfil.ts`).

`npm run verificar` comprueba que no queden marcadores sin completar en el contenido.
