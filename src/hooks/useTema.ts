import { useContext } from 'react';

import { ContextoTema } from '@/contextos/contextos';

export function useTema() {
  const valor = useContext(ContextoTema);
  if (!valor) {
    throw new Error('useTema debe usarse dentro de <TemaProvider>');
  }
  return valor;
}
