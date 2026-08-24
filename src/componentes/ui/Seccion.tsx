import type { ReactNode } from 'react';

interface Props {
  id?: string;
  titulo: string;
  subtitulo?: string;
  children: ReactNode;
  /** Fondo alterno, para separar visualmente bloques consecutivos. */
  alterno?: boolean;
  accion?: ReactNode;
}

/** Envoltorio de sección con encabezado consistente en toda la portada. */
export default function Seccion({ id, titulo, subtitulo, children, alterno, accion }: Props) {
  return (
    <section id={id} className={`py-16 md:py-24 ${alterno ? 'bg-base-alt' : ''}`.trim()}>
      <div className="contenedor">
        <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{titulo}</h2>
            {subtitulo && <p className="mt-2 text-texto-suave">{subtitulo}</p>}
          </div>
          {accion}
        </header>
        {children}
      </div>
    </section>
  );
}
