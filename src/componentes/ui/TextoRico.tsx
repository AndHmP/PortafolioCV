import { Fragment } from 'react';

/**
 * Renderiza los tramos entre acentos graves como código en línea.
 *
 * El contenido de los casos de estudio menciona identificadores y etiquetas
 * (`ReactDOM.createRoot()`, `<head>`, `data-tema`). Escribirlos con acentos
 * graves los mantiene legibles en el archivo de contenido; aquí se convierten
 * en `<code>` en vez de mostrarse como acentos sueltos.
 */
export default function TextoRico({ children }: { children: string }) {
  const tramos = children.split('`');

  return (
    <>
      {tramos.map((tramo, indice) =>
        indice % 2 === 1 ? (
          <code
            key={`${indice}-${tramo}`}
            className="rounded bg-superficie-alt px-1.5 py-0.5 font-mono text-[0.9em] text-acento"
          >
            {tramo}
          </code>
        ) : (
          <Fragment key={`${indice}-${tramo}`}>{tramo}</Fragment>
        ),
      )}
    </>
  );
}
