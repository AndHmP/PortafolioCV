/**
 * Verificación previa al despliegue.
 *
 * Falla si quedan marcadores TODO_ en el contenido. No forma parte de la
 * integración continua a propósito: los marcadores son legítimos mientras el
 * portafolio está en construcción, pero no deben llegar al sitio publicado.
 *
 *   npm run verificar
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const RAIZ = 'src/contenido';
const hallazgos = [];

function recorrer(directorio) {
  for (const entrada of readdirSync(directorio)) {
    const ruta = join(directorio, entrada);
    if (statSync(ruta).isDirectory()) {
      recorrer(ruta);
      continue;
    }
    if (!/\.(ts|tsx)$/.test(entrada) || entrada.endsWith('.test.ts')) continue;

    readFileSync(ruta, 'utf8')
      .split('\n')
      .forEach((linea, i) => {
        if (linea.includes('TODO_')) {
          hallazgos.push(`${ruta}:${i + 1}  ${linea.trim()}`);
        }
      });
  }
}

recorrer(RAIZ);

if (hallazgos.length > 0) {
  console.error(`\n✖ Quedan ${hallazgos.length} marcadores por completar:\n`);
  hallazgos.forEach((h) => console.error(`   ${h}`));
  console.error('\nReemplázalos por los datos reales antes de publicar.\n');
  process.exit(1);
}

console.log('✔ Sin marcadores pendientes. El contenido está listo para publicarse.');
