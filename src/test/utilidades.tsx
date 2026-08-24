import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { IdiomaProvider } from '@/contextos/IdiomaProvider';
import { TemaProvider } from '@/contextos/TemaProvider';

function Envoltorio({ children }: { children: ReactNode }) {
  return (
    <MemoryRouter>
      <TemaProvider>
        <IdiomaProvider>{children}</IdiomaProvider>
      </TemaProvider>
    </MemoryRouter>
  );
}

/** Renderiza con router, tema e idioma, como en la aplicación real. */
export function renderizar(ui: ReactElement, opciones?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: Envoltorio, ...opciones });
}

export * from '@testing-library/react';
