import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { IdiomaProvider } from './contextos/IdiomaProvider';
import { TemaProvider } from './contextos/TemaProvider';
import './estilos/global.css';

const contenedor = document.getElementById('root');
if (!contenedor) {
  throw new Error('No se encontró el elemento #root en index.html');
}

createRoot(contenedor).render(
  <StrictMode>
    <BrowserRouter>
      <TemaProvider>
        <IdiomaProvider>
          <App />
        </IdiomaProvider>
      </TemaProvider>
    </BrowserRouter>
  </StrictMode>,
);
