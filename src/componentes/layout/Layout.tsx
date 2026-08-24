import type { ReactNode } from 'react';

import { useIdioma } from '@/hooks/useIdioma';

import Footer from './Footer';
import NavBar from './NavBar';

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useIdioma();

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#contenido" className="salto-contenido">
        {t.nav.saltarContenido}
      </a>
      <NavBar />
      <main id="contenido" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
