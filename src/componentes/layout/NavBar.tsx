import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Icono from '@/componentes/iconos/Icono';
import { useIdioma } from '@/hooks/useIdioma';
import { useTema } from '@/hooks/useTema';
import type { ClaveIconoUI } from '@/componentes/iconos/Icono';

const ENLACES: { a: string; clave: 'inicio' | 'proyectos' | 'perfil' | 'laboratorio'; icono: ClaveIconoUI }[] = [
  { a: '/', clave: 'inicio', icono: 'inicio' },
  { a: '/proyectos', clave: 'proyectos', icono: 'proyectos' },
  { a: '/perfil', clave: 'perfil', icono: 'perfil' },
  { a: '/laboratorio', clave: 'laboratorio', icono: 'laboratorio' },
];

export default function NavBar() {
  const { t, idioma, alternarIdioma } = useIdioma();
  const { tema, alternarTema } = useTema();
  const { pathname } = useLocation();
  const [abierto, setAbierto] = useState(false);

  // El menú móvil se cierra al navegar; sin esto queda tapando la página nueva.
  useEffect(() => setAbierto(false), [pathname]);

  // Bloquea el scroll de fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = abierto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [abierto]);

  useEffect(() => {
    if (!abierto) return;
    const alPresionar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(false);
    };
    window.addEventListener('keydown', alPresionar);
    return () => window.removeEventListener('keydown', alPresionar);
  }, [abierto]);

  const claseEnlace = ({ isActive }: { isActive: boolean }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'bg-acento-suave text-acento' : 'text-texto-suave hover:text-texto'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-borde bg-base/85 backdrop-blur-md">
      <div className="contenedor flex h-16 items-center justify-between gap-4">
        <NavLink to="/" className="font-display text-lg font-bold tracking-tight" aria-label="Anderson Huamancaja">
          Anderson
          <span className="text-acento">.</span>
        </NavLink>

        <nav aria-label={t.nav.navegacionPrincipal} className="hidden items-center gap-1 md:flex">
          {ENLACES.map((enlace) => (
            <NavLink key={enlace.a} to={enlace.a} end={enlace.a === '/'} className={claseEnlace}>
              {t.nav[enlace.clave]}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={alternarIdioma}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-texto-suave transition-colors hover:text-texto"
            aria-label={`${t.idioma.cambiar}: ${t.idioma.otro}`}
          >
            <Icono nombre="idioma" tamano={18} />
            <span className="uppercase">{idioma}</span>
          </button>

          <button
            type="button"
            onClick={alternarTema}
            className="rounded-lg p-2 text-texto-suave transition-colors hover:text-texto"
            aria-label={t.tema.cambiar}
            aria-pressed={tema === 'oscuro'}
          >
            <Icono nombre={tema === 'oscuro' ? 'sol' : 'luna'} tamano={18} />
          </button>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            className="rounded-lg p-2 text-texto-suave transition-colors hover:text-texto md:hidden"
            aria-label={abierto ? t.nav.cerrarMenu : t.nav.abrirMenu}
            aria-expanded={abierto}
            aria-controls="menu-movil"
          >
            <Icono nombre={abierto ? 'cerrar' : 'menu'} tamano={20} />
          </button>
        </div>
      </div>

      {abierto && (
        <nav
          id="menu-movil"
          aria-label={t.nav.navegacionPrincipal}
          className="border-t border-borde bg-base md:hidden"
        >
          <div className="contenedor flex flex-col py-2">
            {ENLACES.map((enlace) => (
              <NavLink
                key={enlace.a}
                to={enlace.a}
                end={enlace.a === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-acento-suave text-acento' : 'text-texto-suave hover:text-texto'
                  }`
                }
              >
                <Icono nombre={enlace.icono} tamano={18} />
                {t.nav[enlace.clave]}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
