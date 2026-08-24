import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router mantiene la posición de scroll al cambiar de ruta, lo que hace
 * que al abrir un proyecto se caiga a la mitad de la página. Esto lo corrige.
 */
export default function DesplazarAlInicio() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}
