import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

import { en } from '@/contenido/i18n/en';
import { es } from '@/contenido/i18n/es';
import type { Idioma, Texto } from '@/tipos';

import { CLAVE_IDIOMA, ContextoIdioma } from './contextos';

const DICCIONARIOS = { es, en };

function idiomaInicial(): Idioma {
  if (typeof document === 'undefined') return 'es';

  try {
    const guardado = localStorage.getItem(CLAVE_IDIOMA);
    if (guardado === 'es' || guardado === 'en') return guardado;
  } catch {
    /* modo privado o almacenamiento bloqueado */
  }

  // Sin preferencia guardada, se respeta el idioma del navegador.
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(idiomaInicial);

  useEffect(() => {
    document.documentElement.setAttribute('lang', idioma);
    try {
      localStorage.setItem(CLAVE_IDIOMA, idioma);
    } catch {
      /* idem */
    }
  }, [idioma]);

  const fijarIdioma = useCallback((siguiente: Idioma) => setIdioma(siguiente), []);
  const alternarIdioma = useCallback(
    () => setIdioma((actual) => (actual === 'es' ? 'en' : 'es')),
    [],
  );

  const valor = useMemo(
    () => ({
      idioma,
      alternarIdioma,
      fijarIdioma,
      t: DICCIONARIOS[idioma],
      tr: (texto: Texto) => texto[idioma],
      trs: (parrafos: Record<Idioma, string[]>) => parrafos[idioma],
    }),
    [idioma, alternarIdioma, fijarIdioma],
  );

  return <ContextoIdioma.Provider value={valor}>{children}</ContextoIdioma.Provider>;
}
