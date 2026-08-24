# Prompt para agente de IA: Generar proyectos de portafolio

Copia y pega esto en tu agente (Claude Code, Cursor, etc.). Puedes correrlo proyecto por proyecto o pedirle que arranque con el primero.

---

## Contexto

Soy Anderson Huamancaja Porras, Desarrollador Full Stack con 3 años de experiencia. Mi CV dice que domino: React, TypeScript, Next.js, Angular, Context API, React Query (TanStack), Tailwind CSS, Material UI, styled-components, Jest, React Testing Library, Python, FastAPI, arquitectura de microservicios, SQL Server, Firebase, Android nativo (Java), Docker, NGINX, Git.

Quiero construir 3-4 proyectos de portafolio REALES y funcionales (no mockups) que demuestren estas habilidades con evidencia concreta, no solo con una lista de tecnologías. Cada proyecto debe:

- Resolver un problema creíble y específico (no un "todo list" genérico ni un clon de Netflix)
- Estar completamente funcional, con datos de prueba realistas
- Tener un README profesional en español con: descripción, stack usado, capturas o GIF, cómo correrlo localmente, y decisiones técnicas relevantes
- Incluir al menos algunas pruebas unitarias donde aplique (Jest/RTL en frontend)
- Ser deployable gratis (Vercel/Netlify para frontend, Render/Railway para backend)

## Proyecto 1: Sistema de gestión con frontend + backend + base de datos

Construye un sistema de gestión de inventario/pedidos para una pequeña empresa (elige un rubro creíble: ferretería, distribuidora, o clínica). Debe incluir:

- **Frontend**: React + TypeScript + Tailwind CSS, con React Query para manejo de estado de servidor, formularios validados, tablas con filtros y paginación
- **Backend**: API REST con FastAPI (Python), con arquitectura organizada en capas (routers, servicios, modelos)
- **Base de datos**: PostgreSQL o SQLite para simplicidad de deploy (simulando lo que harías con SQL Server)
- **Funcionalidad mínima**: CRUD completo de productos/clientes, un dashboard con métricas simples, autenticación básica de usuario
- **Testing**: pruebas unitarias con Jest + React Testing Library para al menos 2-3 componentes clave

## Proyecto 2: App móvil Android nativa

Construye una app Android nativa (Java) que se conecte a una API REST propia. Sugerencia: app de seguimiento de gastos personales o gestión de tareas para técnicos de campo (algo relacionado a lo que ya trabajaste en DACTA). Debe incluir:

- Al menos 3 pantallas (lista, detalle, formulario de creación/edición)
- Consumo de API REST (puede ser el mismo backend del Proyecto 1 o uno nuevo simple)
- Persistencia local básica (SQLite o Room) para funcionar sin conexión
- Graba un video corto (1-2 min) mostrando el flujo de la app funcionando, para subirlo como demo ya que no todos pueden instalar un APK

## Proyecto 3: Microservicios con Docker

Construye un sistema pequeño de 2-3 microservicios independientes (ej: servicio de usuarios + servicio de notificaciones + servicio de pedidos) que se comuniquen entre sí vía REST. Debe incluir:

- Cada microservicio en FastAPI, con su propio Dockerfile
- `docker-compose.yml` que levante todo el sistema con un solo comando
- NGINX como reverse proxy/gateway al frente de los microservicios
- README explicando la arquitectura con un diagrama simple (puede ser ASCII o Mermaid)

## Proyecto 4 (opcional, si hay tiempo): Landing page o sitio con Next.js

Un sitio de una página para un negocio ficticio (puede inspirarse en Condo Cleaner de mi CV), con:

- Next.js + TypeScript + Tailwind
- Formulario de contacto funcional (puede usar un servicio como Formspree o EmailJS)
- Buen SEO básico (meta tags, sitemap)
- Diseño responsive y pulido, no genérico

## Instrucciones finales para el agente

1. Empieza por el Proyecto 1, complétalo end-to-end (código + tests + README + deploy) antes de pasar al siguiente.
2. Usa nombres de commit descriptivos en español, como si fuera trabajo real, para que el historial de GitHub se vea genuino.
3. Al terminar cada proyecto, dame instrucciones exactas de qué screenshots tomar para mi portafolio y qué texto usar como descripción corta (2-3 líneas) para mostrarlo.
4. No uses datos de ejemplo tipo "Lorem ipsum" — usa nombres, productos y escenarios realistas en español, ambientados en Perú si aplica (soles, direcciones de Lima, etc.).
