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

  it('carga las credenciales con el título de SENATI', async () => {
    montar('/credenciales');

    expect(
      await screen.findByRole('heading', { level: 1, name: /Credenciales/ }),
    ).toBeInTheDocument();
    // La resolución directoral es el dato que hace verificable el título.
    expect(await screen.findByText(/RD-482143-2026/)).toBeInTheDocument();
  });

  it('carga el laboratorio con sus piezas', async () => {
    montar('/laboratorio');

    // El laboratorio carga 35 componentes de forma perezosa, con sus hojas de
    // estilo. Bajo la suite completa en paralelo supera el timeout por defecto
    // de findBy (1 s), así que aquí se le da margen explícito.
    expect(
      await screen.findByRole(
        'heading',
        { level: 1, name: 'Laboratorio UI' },
        { timeout: 5000 },
      ),
    ).toBeInTheDocument();
  }, 15000);

  it('lista las secciones del laboratorio en el índice', async () => {
    montar('/laboratorio');

    expect(
      await screen.findByRole('link', { name: /100 días de CSS/i }, { timeout: 5000 }),
    ).toHaveAttribute('href', '/laboratorio/100-dias-css');
    expect(screen.getByRole('link', { name: /Librería de componentes/i })).toBeInTheDocument();
  }, 15000);

  it('abre una sección del laboratorio con sus piezas', async () => {
    montar('/laboratorio/100-dias-css');

    expect(
      await screen.findByRole('heading', { level: 1, name: '100 días de CSS' }, { timeout: 5000 }),
    ).toBeInTheDocument();
    // La primera página son 12 piezas, no las 100.
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(12);
    expect(screen.getByRole('navigation', { name: /Paginación/i })).toBeInTheDocument();
  }, 15000);

  it('muestra un aviso cuando la sección no existe', async () => {
    montar('/laboratorio/no-existe');

    expect(
      await screen.findByRole('heading', { name: /no existe/i }, { timeout: 5000 }),
    ).toBeInTheDocument();
  }, 15000);

  it('responde con 404 en una ruta inexistente', async () => {
    montar('/una-ruta-que-no-existe');

    expect(await screen.findByRole('heading', { name: 'Página no encontrada' })).toBeInTheDocument();
  });

  it('ofrece un enlace de salto al contenido para navegación por teclado', async () => {
    montar('/');

    expect(await screen.findByRole('link', { name: /Saltar al contenido/i })).toBeInTheDocument();
  });
});
