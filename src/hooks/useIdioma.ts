import { useContext } from 'react';

import { ContextoIdioma } from '@/contextos/contextos';

export function useIdioma() {
  const valor = useContext(ContextoIdioma);
  if (!valor) {
    throw new Error('useIdioma debe usarse dentro de <IdiomaProvider>');
  }
  return valor;
}
