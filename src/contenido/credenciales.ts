import { formacion } from './perfil';

import type { Credencial } from '@/tipos';

/**
 * Títulos y certificados, para la vista `/credenciales`.
 *
 * Los títulos NO se escriben aquí: se derivan de `formacion`, que es donde ya
 * viven. Duplicar el dato garantizaría que un día se corrija en un sitio y no
 * en el otro.
 *
 * Los certificados sí se añaden a mano, uno por entrada. Para agregar uno:
 *
 *   1. Copia el bloque de ejemplo de abajo y descoméntalo.
 *   2. `verificacion` es lo que más pesa; ponlo siempre que el emisor dé una
 *      URL de comprobación. Sin ella, cualquiera puede inventarse el título.
 *   3. Si además quieres enseñar el documento, deja el archivo en
 *      `public/credenciales/` y apunta `documento` a él.
 */

/**
 * Lo que `formacion` no guarda: el documento y el enlace de comprobación.
 * Se indexan por la clave de la etapa para no duplicar el resto del dato.
 *
 * El PDF de `public/` NO es el original: se rasterizó y se borraron los tres
 * números de documento —el del titular y los de los dos firmantes de SENATI—
 * porque `public/` se publica tal cual. El QR del diploma, que es lo que
 * verifica de verdad, sigue intacto y apunta a la misma URL de abajo.
 */
const PRUEBAS: Record<
  string,
  Pick<Credencial, 'documento' | 'vistaPrevia' | 'verificacion'>
> = {
  senati: {
    documento: '/credenciales/titulo-senati.pdf',
    vistaPrevia: '/credenciales/titulo-senati.jpg',
    verificacion:
      'https://diplomas-senati.plussigner.com/SENATI/documento/sys/busquedaTitulos.php?resolucion=08d46d1c30e32937c191532553e8b9adc4510e70ea81971764eb0bd1149917a1',
  },
};

const titulos: Credencial[] = formacion
  .filter((etapa) => etapa.estado === 'titulado')
  .map((etapa) => ({
    clave: etapa.clave,
    tipo: 'titulo' as const,
    titulo: etapa.titulo,
    emisor: etapa.institucion,
    expedido: etapa.expedido ?? '',
    descripcion: etapa.descripcion,
    icono: etapa.icono,
    codigo: etapa.credencial,
    ...PRUEBAS[etapa.clave],
  }));

const certificados: Credencial[] = [
  /*
  {
    clave: 'ejemplo-emisor-2026',
    tipo: 'certificado',
    titulo: { es: 'Nombre del curso', en: 'Course name' },
    emisor: 'Quién lo expide',
    expedido: '2026-01-31',
    descripcion: { es: 'Qué cubrió.', en: 'What it covered.' },
    codigo: { es: 'Código: ABC-123', en: 'Code: ABC-123' },
    verificacion: 'https://…',
    documento: '/credenciales/ejemplo.pdf',
  },
  */
];

/** Todas, de la más reciente a la más antigua. */
export const credenciales: Credencial[] = [...titulos, ...certificados].sort((a, b) =>
  b.expedido.localeCompare(a.expedido),
);

export const credencialesPorTipo = (tipo: Credencial['tipo']) =>
  credenciales.filter((c) => c.tipo === tipo);
