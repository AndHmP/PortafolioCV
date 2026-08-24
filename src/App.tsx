import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@/componentes/layout/Layout';
import Cargando from '@/componentes/ui/Cargando';
import DesplazarAlInicio from '@/componentes/layout/DesplazarAlInicio';

import Inicio from '@/paginas/Inicio';

/*
 * Solo la portada entra en el bundle inicial. El Laboratorio pesa
 * (109 componentes con sus hojas de estilo) y no tiene por qué costarle
 * descarga a quien solo viene a ver los proyectos.
 */
const Proyectos = lazy(() => import('@/paginas/Proyectos'));
const ProyectoDetalle = lazy(() => import('@/paginas/ProyectoDetalle'));
const Perfil = lazy(() => import('@/paginas/Perfil'));
const Laboratorio = lazy(() => import('@/paginas/Laboratorio'));
const LaboratorioSeccion = lazy(() => import('@/paginas/LaboratorioSeccion'));
const NoEncontrado = lazy(() => import('@/paginas/NoEncontrado'));

export default function App() {
  return (
    <>
      <DesplazarAlInicio />
      <Layout>
        <Suspense fallback={<Cargando />}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/laboratorio" element={<Laboratorio />} />
            <Route path="/laboratorio/:seccion" element={<LaboratorioSeccion />} />
            <Route path="*" element={<NoEncontrado />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}
