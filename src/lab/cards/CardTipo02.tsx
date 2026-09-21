import { useState } from 'react';
import type { CSSProperties } from 'react';

import type { FichaEmpleado } from './datos';

import './estilos/CardTipo02.scss';

/** El nombre se parte para poder resaltar el apellido, como en el diseño. */
function nombreCompuesto(nombre: string) {
  const [pila, ...resto] = nombre.split(' ');
  return (
    <>
      {pila} <strong>{resto.join(' ')}</strong>
    </>
  );
}

/**
 * Ficha de persona con secciones intercambiables.
 *
 * El color de la ficha llega como variable CSS en lugar de como una etiqueta
 * `<style>` inyectada, que era lo que hacía el original para teñir los puntos
 * del menú.
 */
export default function CardTipo02({ ficha }: { ficha: FichaEmpleado }) {
  const [indice, setIndice] = useState(0);

  return (
    <div
      className="ContenedorCardTipo02"
      style={{ '--color-ficha': ficha.color } as CSSProperties}
    >
      <div
        className="CardTipo02 flex flex-column align-items-center justify-content-start"
        style={{ backgroundColor: ficha.color }}
      >
        <div
          className="CardTipo02Header w-full flex align-items-center justify-content-center"
          style={{ background: `linear-gradient(0deg, ${ficha.color}, #ffffff5a)` }}
        >
          <div className="FotoProfile flex align-items-center justify-content-center">
            <img src={ficha.img} alt="" />
          </div>
          <div className="Nombre flex flex-column align-items-start justify-content-center">
            <p>{nombreCompuesto(ficha.nombre)}</p>
            <p>{ficha.puesto}</p>
          </div>
        </div>

        <div className="CardTipo02Body w-full flex align-items-center justify-content-start relative">
          <div
            className="Carrusel absolute w-auto h-full flex"
            style={{ left: `-${indice * 180}px` }}
          >
            {ficha.secciones.map((seccion) => (
              <div
                key={seccion.titulo}
                className="SubCard w-full h-full flex flex-column align-items-center justify-content-center"
              >
                <div className="Header w-full" style={{ backgroundColor: ficha.color }}>
                  {seccion.titulo}
                </div>
                <div className="Contenedor flex flex-wrap align-items-center justify-content-center w-full h-full">
                  {seccion.filas.map((fila) => (
                    <div
                      key={fila.clave}
                      className="flex flex-column align-items-center justify-content-center"
                    >
                      <p>{fila.clave}</p>
                      <p>{fila.valor}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="Menu w-full absolute flex align-items-center justify-content-center">
            {ficha.secciones.map((seccion, i) => (
              <button
                key={seccion.titulo}
                type="button"
                className={i === indice ? 'active' : ''}
                onClick={() => setIndice(i)}
                aria-label={seccion.titulo}
                aria-pressed={i === indice}
              />
            ))}
          </div>
        </div>

        <div className="CardTipo02Footer w-full" />
      </div>
    </div>
  );
}
