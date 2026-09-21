/**
 * Ola del encabezado del perfil.
 *
 * Es el borde inferior de la banda oscura: un único trazo sólido del mismo
 * color, sin capas ni transparencias. El contenido va sobre la banda, donde el
 * contraste está garantizado, y la ola solo marca la transición hacia el resto
 * de la página.
 *
 * El perfil no es una sinusoide repetida —se notaba el patrón— sino la suma de
 * tres ondas de distinto periodo, amplitud y fase. Como los tres periodos
 * dividen el ancho del mosaico, la suma vale lo mismo en los extremos y el
 * dibujo encaja consigo mismo; pero por el camino no se repite, así que el
 * borde parece irregular.
 *
 * Se dibuja el doble del mosaico y se arrastra exactamente un mosaico: al
 * terminar coincide con el principio y el bucle no se ve. El movimiento es
 * lento a propósito; es un fondo, no un reclamo.
 *
 * La animación se detiene sola con `prefers-reduced-motion`, cubierto en
 * `global.css`.
 */

/** Ancho del mosaico. Se dibuja el doble y se arrastra justo esta distancia. */
const MOSAICO = 1440;
const ALTO = 140;
/** Un punto cada 12 unidades: a este tamaño el trazo ya se ve continuo. */
const PASO = 12;
/**
 * Línea base de la ola dentro del `viewBox`.
 *
 * La onda oscila como mucho la suma de las amplitudes, así que BASE tiene que
 * ser mayor que esa suma y BASE + suma no puede pasar de ALTO. Si se incumple,
 * la cresta o el valle se recortan contra el borde y aparece un tramo recto
 * que se ve como una costura.
 */
const BASE = 60;

/** Periodos divisores de MOSAICO, para que el mosaico cierre sin costura. */
const ARMONICOS = [
  { periodo: 1440, amplitud: 26, fase: 0.12 },
  { periodo: 720, amplitud: 17, fase: 0.58 },
  { periodo: 480, amplitud: 9, fase: 0.31 },
];

const SUMA = ARMONICOS.reduce((t, a) => t + a.amplitud, 0);
if (SUMA > BASE || BASE + SUMA > ALTO) {
  throw new Error(`Dia de olas: la onda se saldría del viewBox (suma ${SUMA}, base ${BASE}).`);
}

function perfil() {
  const puntos: string[] = [];
  for (let x = 0; x <= MOSAICO * 2; x += PASO) {
    const y = ARMONICOS.reduce(
      (suma, a) => suma + a.amplitud * Math.sin(2 * Math.PI * (x / a.periodo + a.fase)),
      BASE,
    );
    puntos.push(`${x},${y.toFixed(2)}`);
  }
  return `M${puntos.join('L')}L${MOSAICO * 2},0L0,0Z`;
}

export default function OlaPerfil() {
  return (
    <svg
      viewBox={`0 0 ${MOSAICO} ${ALTO}`}
      preserveAspectRatio="none"
      className="h-full w-full fill-[var(--color-texto)]"
      aria-hidden="true"
      focusable="false"
    >
      <g className="ola-perfil">
        <path d={perfil()} />
      </g>
    </svg>
  );
}



