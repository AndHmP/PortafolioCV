import { useLayoutEffect, useRef, useState } from 'react';

import './estilos/InputType05.css';

/**
 * Campo con etiqueta lateral que empuja el texto según su propio ancho.
 *
 * La versión original inyectaba una etiqueta `<style>` completa en cada
 * render, con reglas globales que pisaban a cualquier otra instancia del
 * componente en la misma página. Aquí las medidas viajan como variables CSS
 * en el propio elemento, así que dos campos pueden coexistir sin interferir.
 */
export default function InputType05({
  placeholder,
  titulo,
}: {
  placeholder: string;
  titulo: string;
}) {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const etiquetaRef = useRef<HTMLDivElement>(null);

  const [enfocado, setEnfocado] = useState(false);
  const [valor, setValor] = useState('');
  const [medidas, setMedidas] = useState({ alto: 0, ancho: 0 });

  // useLayoutEffect y no useEffect: la medida se aplica antes del pintado,
  // de lo contrario se ve un salto en el primer render.
  useLayoutEffect(() => {
    const alto = contenedorRef.current?.offsetHeight ?? 0;
    const ancho = etiquetaRef.current?.offsetWidth ?? 0;
    setMedidas({ alto, ancho });
  }, [titulo]);

  const estilo = {
    '--alto-etiqueta': medidas.alto ? `${medidas.alto - 3}px` : '92%',
    '--desplazamiento': medidas.ancho ? `${medidas.ancho + 8}px` : '60px',
  } as React.CSSProperties;

  return (
    <div
      ref={contenedorRef}
      className={`ContenedorInputType05 relative ${enfocado ? 'Enfocado' : ''} ${
        valor ? 'ConValor' : ''
      }`}
      style={estilo}
    >
      <input
        type="text"
        className="InputType05"
        value={valor}
        placeholder={placeholder}
        aria-label={titulo}
        onChange={(e) => setValor(e.target.value)}
        onFocus={() => setEnfocado(true)}
        onBlur={() => setEnfocado(false)}
      />

      <div
        ref={etiquetaRef}
        className={`SeccName absolute flex items-center justify-center ${enfocado ? 'Active' : ''}`}
      >
        {titulo}
      </div>
    </div>
  );
}
