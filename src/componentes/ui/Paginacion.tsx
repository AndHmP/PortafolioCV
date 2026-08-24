import Icono from '@/componentes/iconos/Icono';
import { useIdioma } from '@/hooks/useIdioma';

interface Props {
  /** Página actual, empezando en 1. */
  pagina: number;
  totalPaginas: number;
  alCambiar: (pagina: number) => void;
  etiqueta: string;
}

/**
 * Calcula qué números mostrar: siempre la primera, la última y una ventana
 * alrededor de la actual. Los saltos se marcan con `null` para dibujar «…».
 *
 * Con 9 páginas caben todas, pero la ventana evita que la barra crezca sin
 * control si algún día se reduce el tamaño de página.
 */
function ventana(pagina: number, total: number): (number | null)[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const cerca = [pagina - 1, pagina, pagina + 1].filter((n) => n > 1 && n < total);
  const numeros = [1, ...cerca, total];

  const conSaltos: (number | null)[] = [];
  numeros.forEach((n, i) => {
    if (i > 0 && n - numeros[i - 1] > 1) conSaltos.push(null);
    conSaltos.push(n);
  });
  return conSaltos;
}

export default function Paginacion({ pagina, totalPaginas, alCambiar, etiqueta }: Props) {
  const { t } = useIdioma();
  if (totalPaginas <= 1) return null;

  const claseNumero = (activo: boolean) =>
    `h-9 min-w-9 rounded-lg px-3 text-sm font-medium transition-colors ${
      activo
        ? 'bg-acento text-acento-contraste'
        : 'text-texto-suave hover:bg-superficie-alt hover:text-texto'
    }`;

  const claseFlecha =
    'flex h-9 items-center gap-1 rounded-lg px-3 text-sm font-medium text-texto-suave transition-colors hover:bg-superficie-alt hover:text-texto disabled:pointer-events-none disabled:opacity-35';

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1" aria-label={etiqueta}>
      <button
        type="button"
        className={claseFlecha}
        onClick={() => alCambiar(pagina - 1)}
        disabled={pagina === 1}
      >
        <Icono nombre="chevron-izquierda" tamano={16} />
        <span className="hidden sm:inline">{t.acciones.anterior}</span>
      </button>

      {ventana(pagina, totalPaginas).map((n, i) =>
        n === null ? (
          <span
            key={`salto-${i}`}
            className="px-1 text-texto-suave"
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          <button
            key={n}
            type="button"
            className={claseNumero(n === pagina)}
            onClick={() => alCambiar(n)}
            aria-current={n === pagina ? 'page' : undefined}
          >
            {n}
          </button>
        ),
      )}

      <button
        type="button"
        className={claseFlecha}
        onClick={() => alCambiar(pagina + 1)}
        disabled={pagina === totalPaginas}
      >
        <span className="hidden sm:inline">{t.acciones.siguiente}</span>
        <Icono nombre="chevron-derecha" tamano={16} />
      </button>
    </nav>
  );
}
