import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variante = 'primario' | 'secundario' | 'texto';
type Tamano = 'normal' | 'pequeno';

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none';

const VARIANTES: Record<Variante, string> = {
  primario: 'bg-acento text-acento-contraste hover:bg-acento-hover',
  secundario: 'border border-borde text-texto hover:border-acento hover:text-acento',
  texto: 'text-acento hover:text-acento-hover hover:underline underline-offset-4',
};

const TAMANOS: Record<Tamano, string> = {
  normal: 'px-5 py-2.5 text-sm',
  pequeno: 'px-3 py-1.5 text-xs',
};

interface Comun {
  variante?: Variante;
  tamano?: Tamano;
  children: ReactNode;
  className?: string;
}

type PropsBoton = Comun & ButtonHTMLAttributes<HTMLButtonElement> & { como?: 'boton' };
type PropsRuta = Comun & { como: 'ruta'; a: string };
type PropsEnlace = Comun &
  AnchorHTMLAttributes<HTMLAnchorElement> & { como: 'enlace'; href: string; externo?: boolean };

type Props = PropsBoton | PropsRuta | PropsEnlace;

function clasesDe(variante: Variante, tamano: Tamano, extra: string) {
  return `${BASE} ${VARIANTES[variante]} ${TAMANOS[tamano]} ${extra}`.trim();
}

/**
 * Botón único del sitio, en tres formas: `<button>`, `<Link>` de router y
 * `<a>` externo. Unificarlas evita que cada pantalla reinvente sus estilos,
 * que es lo que pasaba en la versión anterior.
 */
export default function Boton(props: Props) {
  if (props.como === 'ruta') {
    const { a, variante = 'primario', tamano = 'normal', className = '', children } = props;
    return (
      <Link to={a} className={clasesDe(variante, tamano, className)}>
        {children}
      </Link>
    );
  }

  if (props.como === 'enlace') {
    const {
      como: _como,
      externo = true,
      variante = 'primario',
      tamano = 'normal',
      className = '',
      children,
      ...resto
    } = props;
    return (
      <a
        className={clasesDe(variante, tamano, className)}
        {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...resto}
      >
        {children}
      </a>
    );
  }

  const {
    como: _como,
    variante = 'primario',
    tamano = 'normal',
    className = '',
    children,
    ...resto
  } = props;
  return (
    <button type="button" className={clasesDe(variante, tamano, className)} {...resto}>
      {children}
    </button>
  );
}
