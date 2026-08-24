import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';

import { useIdioma } from '@/hooks/useIdioma';
import { useTema } from '@/hooks/useTema';
import { renderizar, screen } from '@/test/utilidades';

import { CLAVE_IDIOMA, CLAVE_TEMA } from './contextos';

function Sonda() {
  const { tema, alternarTema } = useTema();
  const { idioma, alternarIdioma, t } = useIdioma();

  return (
    <div>
      <span data-testid="tema">{tema}</span>
      <span data-testid="idioma">{idioma}</span>
      <span data-testid="traduccion">{t.nav.proyectos}</span>
      <button onClick={alternarTema}>tema</button>
      <button onClick={alternarIdioma}>idioma</button>
    </div>
  );
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-tema');
  document.documentElement.setAttribute('lang', 'es');
});

describe('TemaProvider', () => {
  it('arranca en claro cuando no hay preferencia guardada', () => {
    renderizar(<Sonda />);
    expect(screen.getByTestId('tema')).toHaveTextContent('claro');
  });

  it('alterna el tema y lo refleja en el atributo data-tema', async () => {
    const usuario = userEvent.setup();
    renderizar(<Sonda />);

    await usuario.click(screen.getByRole('button', { name: 'tema' }));

    expect(screen.getByTestId('tema')).toHaveTextContent('oscuro');
    expect(document.documentElement.getAttribute('data-tema')).toBe('oscuro');
  });

  it('persiste la preferencia en localStorage', async () => {
    const usuario = userEvent.setup();
    renderizar(<Sonda />);

    await usuario.click(screen.getByRole('button', { name: 'tema' }));

    expect(localStorage.getItem(CLAVE_TEMA)).toBe('oscuro');
  });

  it('respeta el tema ya aplicado en el documento antes de montar', () => {
    // Es lo que hace el script en línea de index.html para evitar el parpadeo.
    document.documentElement.setAttribute('data-tema', 'oscuro');

    renderizar(<Sonda />);

    expect(screen.getByTestId('tema')).toHaveTextContent('oscuro');
  });
});

describe('IdiomaProvider', () => {
  it('arranca en español y traduce la interfaz', () => {
    renderizar(<Sonda />);

    expect(screen.getByTestId('idioma')).toHaveTextContent('es');
    expect(screen.getByTestId('traduccion')).toHaveTextContent('Proyectos');
  });

  it('cambia el diccionario y el atributo lang al alternar', async () => {
    const usuario = userEvent.setup();
    renderizar(<Sonda />);

    await usuario.click(screen.getByRole('button', { name: 'idioma' }));

    expect(screen.getByTestId('idioma')).toHaveTextContent('en');
    expect(screen.getByTestId('traduccion')).toHaveTextContent('Projects');
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(localStorage.getItem(CLAVE_IDIOMA)).toBe('en');
  });

  it('recupera el idioma guardado en una visita posterior', () => {
    localStorage.setItem(CLAVE_IDIOMA, 'en');

    renderizar(<Sonda />);

    expect(screen.getByTestId('idioma')).toHaveTextContent('en');
  });
});
