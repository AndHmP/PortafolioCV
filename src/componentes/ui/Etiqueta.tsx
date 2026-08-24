import type { ReactNode } from 'react';

type Tono = 'neutro' | 'acento' | 'contorno';

const TONOS: Record<Tono, string> = {
  neutro: 'bg-superficie-alt text-texto-suave',
  acento: 'bg-acento-suave text-acento',
  contorno: 'border border-borde text-texto-suave',
};

interface Props {
  children: ReactNode;
  tono?: Tono;
  className?: string;
}

/** Píldora para tecnologías, tipos de proyecto y categorías. */
export default function Etiqueta({ children, tono = 'neutro', className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${TONOS[tono]} ${className}`.trim()}
    >
      {children}
    </span>
  );
}
