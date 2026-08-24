import { useId, useState, type ReactNode } from 'react';

import Icono from '@/componentes/iconos/Icono';

interface Props {
  titulo: string;
  children: ReactNode;
  /** Abierto por defecto. En móvil conviene cerrar las secciones largas. */
  inicialAbierto?: boolean;
}

/**
 * Sección plegable del perfil.
 *
 * Reemplaza al `<fieldset>` de la versión anterior, que alternaba el alto con
 * un valor fijo en píxeles pasado por prop: cualquier cambio de contenido o de
 * ancho de pantalla lo desbordaba o dejaba un hueco. Aquí el alto lo resuelve
 * la animación de `grid-template-rows`, que se adapta al contenido real.
 */
export default function Desplegable({ titulo, children, inicialAbierto = true }: Props) {
  const [abierto, setAbierto] = useState(inicialAbierto);
  const idContenido = useId();

  return (
    <div className="overflow-hidden rounded-xl border border-borde bg-superficie">
      <h3>
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls={idContenido}
          className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-display font-semibold transition-colors hover:bg-superficie-alt"
        >
          {titulo}
          <Icono
            nombre="chevron-abajo"
            tamano={18}
            className={`shrink-0 text-texto-suave transition-transform duration-300 ${
              abierto ? 'rotate-180' : ''
            }`}
          />
        </button>
      </h3>

      <div
        id={idContenido}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          abierto ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-borde px-5 py-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
