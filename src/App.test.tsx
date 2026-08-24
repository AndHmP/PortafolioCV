import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import App from './App';
import { IdiomaProvider } from './contextos/IdiomaProvider';
import { TemaProvider } from './contextos/TemaProvider';
import { render, screen, waitFor } from '@testing-library/react';

/**
 * Pruebas de humo sobre la aplicación completa.
 *
 * Montan el árbol real (router, tema, idioma, rutas perezosas) para detectar
 * errores de ejecución que la verificación de tipos no ve: un contexto sin
 * proveedor, una ruta mal registrada o un import roto tras refactorizar.
 */
function montar(ruta: string) {
  return render(
    <MemoryRouter initialEntries={[ruta]}>
      <TemaProvider>
        <IdiomaProvider>
          <App />
        </IdiomaProvider>
      </TemaProvider>
    </MemoryRouter>,
  );
}

describe('App', () => {
  it('muestra la portada en la raíz, sin login de por medio', async () => {
    montar('/');

    expect(
      await screen.findByRole('heading', { level: 1, name: /Anderson Huamancaja Porras/ }),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: /Navegación principal/i })).toBeInTheDocument();
  });

  it('carga la página de proyectos con su catálogo', async () => {
    montar('/proyectos');

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Proyectos' }),
    ).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
    });
  });

  it('resuelve un caso de estudio por su slug', async () => {
    montar('/proyectos/portafolio-virtual');

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Este portafolio' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'El problema' })).toBeInTheDocument();
  });

  it('no publica los proyectos marcados como en desarrollo', async () => {
    montar('/proyectos/gestion-ferreteria');

    expect(await screen.findByRole('heading', { name: /no existe/i })).toBeInTheDocument();
  });

  it('carga el perfil', async () => {
    montar('/perfil');

    expect(
      await screen.findByRole('heading', { level: 1, name: /Anderson Huamancaja Porras/ }),
    ).toBeInTheDocument();
  });

  it('carga el laboratorio con sus piezas', async () => {
    montar('/laboratorio');

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Laboratorio UI' }),
    ).toBeInTheDocument();
  });

  it('responde con 404 en una ruta inexistente', async () => {
    montar('/una-ruta-que-no-existe');

    expect(await screen.findByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument();
  });

  it('ofrece un enlace de salto al contenido para navegación por teclado', async () => {
    montar('/');

    expect(await screen.findByRole('link', { name: /Saltar al contenido/i })).toBeInTheDocument();
  });
});
