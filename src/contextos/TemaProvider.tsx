import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

import type { Tema } from '@/tipos';

import { CLAVE_TEMA, ContextoTema } from './contextos';

/**
 * Lee el tema ya resuelto por el script en línea de `index.html`.
 * Ese script corre antes del primer pintado, así que aquí solo se recoge el
 * valor: React nunca vuelve a decidirlo desde cero y no hay parpadeo.
 */
function temaInicial(): Tema {
  if (typeof document === 'undefined') return 'claro';

  const enDocumento = document.documentElement.getAttribute('data-tema');
  if (enDocumento === 'claro' || enDocumento === 'oscuro') return enDocumento;

  try {
    const guardado = localStorage.getItem(CLAVE_TEMA);
    if (guardado === 'claro' || guardado === 'oscuro') return guardado;
  } catch {
    /* modo privado o almacenamiento bloqueado */
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
}

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(temaInicial);

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', tema === 'oscuro' ? '#0e0e13' : '#ffffff');

    try {
      localStorage.setItem(CLAVE_TEMA, tema);
    } catch {
      /* la preferencia no persiste, pero la sesión actual funciona igual */
    }
  }, [tema]);

  const fijarTema = useCallback((siguiente: Tema) => setTema(siguiente), []);
  const alternarTema = useCallback(
    () => setTema((actual) => (actual === 'claro' ? 'oscuro' : 'claro')),
    [],
  );

  const valor = useMemo(() => ({ tema, alternarTema, fijarTema }), [tema, alternarTema, fijarTema]);

  return <ContextoTema.Provider value={valor}>{children}</ContextoTema.Provider>;
}
