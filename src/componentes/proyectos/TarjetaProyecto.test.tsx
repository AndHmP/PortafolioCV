import { describe, expect, it } from 'vitest';

import { renderizar, screen } from '@/test/utilidades';
import type { Proyecto } from '@/tipos';

import TarjetaProyecto from './TarjetaProyecto';

const BASE: Proyecto = {
  slug: 'sistema-inventario',
  estado: 'publicado',
  tipo: 'fullstack',
  periodo: '2026-03',
  contexto: { es: 'Proyecto propio', en: 'Personal project' },
  titulo: { es: 'Sistema de inventario', en: 'Inventory system' },
  resumen: { es: 'Control de stock para una ferretería.', en: 'Stock control for a hardware store.' },
  problema: { es: 'p', en: 'p' },
  solucion: { es: 's', en: 's' },
  stack: ['react', 'typescript', 'fastapi', 'postgresql', 'docker', 'nginx'],
};

describe('TarjetaProyecto', () => {
  it('muestra título, contexto y resumen', () => {
    renderizar(<TarjetaProyecto proyecto={BASE} />);

    expect(screen.getByRole('heading', { name: 'Sistema de inventario' })).toBeInTheDocument();
    expect(screen.getByText('Proyecto propio')).toBeInTheDocument();
    expect(screen.getByText('Control de stock para una ferretería.')).toBeInTheDocument();
  });

  it('enlaza al caso de estudio por slug', () => {
    renderizar(<TarjetaProyecto proyecto={BASE} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/proyectos/sistema-inventario');
  });

  it('resume el stack y cuenta las tecnologías restantes', () => {
    renderizar(<TarjetaProyecto proyecto={BASE} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    // 6 tecnologías, se muestran 4 y el resto se agrupa.
    expect(screen.getByText('+2')).toBeInTheDocument();
    expect(screen.queryByText('NGINX')).not.toBeInTheDocument();
  });

  it('cae en la inicial del título cuando no hay captura', () => {
    renderizar(<TarjetaProyecto proyecto={BASE} />);

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.getByText('S')).toBeInTheDocument();
  });

  it('muestra la portada cuando el proyecto la declara', () => {
    const conImagen: Proyecto = {
      ...BASE,
      imagenes: [
        {
          src: '/proyectos/sistema-inventario/panel.png',
          alt: { es: 'Panel de control', en: 'Dashboard' },
          portada: true,
        },
      ],
    };

    renderizar(<TarjetaProyecto proyecto={conImagen} />);

    const imagen = screen.getByRole('img', { name: 'Panel de control' });
    expect(imagen).toHaveAttribute('src', '/proyectos/sistema-inventario/panel.png');
    expect(imagen).toHaveAttribute('loading', 'lazy');
  });

  it('omite el contexto cuando el proyecto no lo declara', () => {
    const { contexto: _contexto, ...sinContexto } = BASE;
    renderizar(<TarjetaProyecto proyecto={sinContexto} />);

    expect(screen.queryByText('Proyecto propio')).not.toBeInTheDocument();
  });
});
