import type { PiezaLab } from '@/tipos';

import '@/lab/estilos/utilidades-heredadas.css';

import Dia01 from '@/lab/animaciones/Dia01';
import Dia02 from '@/lab/animaciones/Dia02';
import Dia03 from '@/lab/animaciones/Dia03';
import Dia04 from '@/lab/animaciones/Dia04';
import Dia05 from '@/lab/animaciones/Dia05';
import Dia06 from '@/lab/animaciones/Dia06';
import Dia07 from '@/lab/animaciones/Dia07';
import Dia08 from '@/lab/animaciones/Dia08';
import Dia09 from '@/lab/animaciones/Dia09';
import Dia10 from '@/lab/animaciones/Dia10';
import Dia11 from '@/lab/animaciones/Dia11';
import Dia12 from '@/lab/animaciones/Dia12';
import Dia13 from '@/lab/animaciones/Dia13';
import Dia14 from '@/lab/animaciones/Dia14';
import Dia15 from '@/lab/animaciones/Dia15';
import Dia16 from '@/lab/animaciones/Dia16';
import Dia17 from '@/lab/animaciones/Dia17';
import Dia18 from '@/lab/animaciones/Dia18';
import Dia19 from '@/lab/animaciones/Dia19';
import Dia20 from '@/lab/animaciones/Dia20';
import Dia21 from '@/lab/animaciones/Dia21';
import Dia22 from '@/lab/animaciones/Dia22';
import Dia23 from '@/lab/animaciones/Dia23';
import Dia24 from '@/lab/animaciones/Dia24';
import Dia25 from '@/lab/animaciones/Dia25';
import Dia26 from '@/lab/animaciones/Dia26';

import InputType01 from '@/lab/inputs/InputType01';
import InputType02 from '@/lab/inputs/InputType02';
import InputType03 from '@/lab/inputs/InputType03';
import InputType04 from '@/lab/inputs/InputType04';
import InputType05 from '@/lab/inputs/InputType05';
import InputType06 from '@/lab/inputs/InputType06';

import ButtonType01 from '@/lab/botones/ButtonType01';
import ButtonType02 from '@/lab/botones/ButtonType02';
import LoginDemo from '@/lab/login/LoginDemo';

/*
 * Registro del Laboratorio UI.
 *
 * Cada pieza declara qué técnica CSS demuestra. Las de "animaciones" vienen
 * del ejercicio de 100 días; su técnica se derivó leyendo qué propiedades usa
 * realmente cada hoja de estilo, no de una descripción genérica.
 */
export const piezasLab: PiezaLab[] = [
  {
    slug: 'animacion-01',
    titulo: { es: 'Día 01', en: 'Day 01' },
    categoria: 'animaciones',
    tecnica: { es: 'Degradados, sombras compuestas, posicionamiento absoluto.', en: 'Gradients, layered shadows, absolute positioning.' },
    componente: <Dia01 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-02',
    titulo: { es: 'Día 02', en: 'Day 02' },
    categoria: 'animaciones',
    tecnica: { es: 'Sombras compuestas, transiciones.', en: 'Layered shadows, transitions.' },
    componente: <Dia02 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-03',
    titulo: { es: 'Día 03', en: 'Day 03' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, recortes con clip-path, posicionamiento absoluto.', en: 'Keyframe animations, clip-path masking, absolute positioning.' },
    componente: <Dia03 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-04',
    titulo: { es: 'Día 04', en: 'Day 04' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, sombras compuestas, posicionamiento absoluto.', en: 'Keyframe animations, layered shadows, absolute positioning.' },
    componente: <Dia04 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-05',
    titulo: { es: 'Día 05', en: 'Day 05' },
    categoria: 'animaciones',
    tecnica: { es: 'Recortes con clip-path, sombras compuestas, css grid.', en: 'Clip-path masking, layered shadows, css grid.' },
    componente: <Dia05 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-06',
    titulo: { es: 'Día 06', en: 'Day 06' },
    categoria: 'animaciones',
    tecnica: { es: 'Recortes con clip-path, sombras compuestas, css grid.', en: 'Clip-path masking, layered shadows, css grid.' },
    componente: <Dia06 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-07',
    titulo: { es: 'Día 07', en: 'Day 07' },
    categoria: 'animaciones',
    tecnica: { es: 'Sombras compuestas, posicionamiento absoluto, estados de interacción.', en: 'Layered shadows, absolute positioning, interaction states.' },
    componente: <Dia07 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-08',
    titulo: { es: 'Día 08', en: 'Day 08' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, filtros css, formas circulares.', en: 'Keyframe animations, css filters, circular shapes.' },
    componente: <Dia08 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-09',
    titulo: { es: 'Día 09', en: 'Day 09' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, recortes con clip-path, degradados.', en: 'Keyframe animations, clip-path masking, gradients.' },
    componente: <Dia09 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-10',
    titulo: { es: 'Día 10', en: 'Day 10' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, degradados, css grid.', en: 'Keyframe animations, gradients, css grid.' },
    componente: <Dia10 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-11',
    titulo: { es: 'Día 11', en: 'Day 11' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, posicionamiento absoluto.', en: 'Keyframe animations, absolute positioning.' },
    componente: <Dia11 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-12',
    titulo: { es: 'Día 12', en: 'Day 12' },
    categoria: 'animaciones',
    tecnica: { es: 'Recortes con clip-path, posicionamiento absoluto, estados de interacción.', en: 'Clip-path masking, absolute positioning, interaction states.' },
    componente: <Dia12 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-13',
    titulo: { es: 'Día 13', en: 'Day 13' },
    categoria: 'animaciones',
    tecnica: { es: 'Filtros css, sombras compuestas, css grid.', en: 'Css filters, layered shadows, css grid.' },
    componente: <Dia13 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-14',
    titulo: { es: 'Día 14', en: 'Day 14' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, transformaciones 3d, sombras compuestas.', en: 'Keyframe animations, 3d transforms, layered shadows.' },
    componente: <Dia14 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-15',
    titulo: { es: 'Día 15', en: 'Day 15' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, degradados, sombras compuestas.', en: 'Keyframe animations, gradients, layered shadows.' },
    componente: <Dia15 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-16',
    titulo: { es: 'Día 16', en: 'Day 16' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, recortes con clip-path, posicionamiento absoluto.', en: 'Keyframe animations, clip-path masking, absolute positioning.' },
    componente: <Dia16 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-17',
    titulo: { es: 'Día 17', en: 'Day 17' },
    categoria: 'animaciones',
    tecnica: { es: 'Recortes con clip-path, degradados, sombras compuestas.', en: 'Clip-path masking, gradients, layered shadows.' },
    componente: <Dia17 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-18',
    titulo: { es: 'Día 18', en: 'Day 18' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, degradados, sombras compuestas.', en: 'Keyframe animations, gradients, layered shadows.' },
    componente: <Dia18 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-19',
    titulo: { es: 'Día 19', en: 'Day 19' },
    categoria: 'animaciones',
    tecnica: { es: 'Posicionamiento absoluto, transiciones, formas circulares.', en: 'Absolute positioning, transitions, circular shapes.' },
    componente: <Dia19 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-20',
    titulo: { es: 'Día 20', en: 'Day 20' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, estados de interacción, transiciones.', en: 'Keyframe animations, interaction states, transitions.' },
    componente: <Dia20 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-21',
    titulo: { es: 'Día 21', en: 'Day 21' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, recortes con clip-path, formas circulares.', en: 'Keyframe animations, clip-path masking, circular shapes.' },
    componente: <Dia21 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-22',
    titulo: { es: 'Día 22', en: 'Day 22' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, css grid, posicionamiento absoluto.', en: 'Keyframe animations, css grid, absolute positioning.' },
    componente: <Dia22 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-23',
    titulo: { es: 'Día 23', en: 'Day 23' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, recortes con clip-path, formas circulares.', en: 'Keyframe animations, clip-path masking, circular shapes.' },
    componente: <Dia23 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-24',
    titulo: { es: 'Día 24', en: 'Day 24' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, posicionamiento absoluto, estados de interacción.', en: 'Keyframe animations, absolute positioning, interaction states.' },
    componente: <Dia24 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-25',
    titulo: { es: 'Día 25', en: 'Day 25' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, transformaciones 3d, sombras compuestas.', en: 'Keyframe animations, 3d transforms, layered shadows.' },
    componente: <Dia25 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'animacion-26',
    titulo: { es: 'Día 26', en: 'Day 26' },
    categoria: 'animaciones',
    tecnica: { es: 'Animaciones por fotogramas, recortes con clip-path, estados de interacción.', en: 'Keyframe animations, clip-path masking, interaction states.' },
    componente: <Dia26 />,
    fondoFijo: 'oscuro',
  },
  {
    slug: 'campo-01',
    titulo: { es: 'Campo con leyenda flotante', en: 'Field with floating legend' },
    categoria: 'inputs',
    tecnica: { es: 'Fieldset con legend que cambia de color al enfocar.', en: 'Fieldset with a legend that recolours on focus.' },
    componente: <InputType01 placeholder="Correo electrónico" />,
    alto: 140,
  },
  {
    slug: 'campo-02',
    titulo: { es: 'Campo con borde animado', en: 'Field with animated border' },
    categoria: 'inputs',
    tecnica: { es: 'Transición del borde y la etiqueta según el estado de foco.', en: 'Border and label transition driven by focus state.' },
    componente: <InputType02 placeholder="Correo electrónico" />,
    alto: 140,
  },
  {
    slug: 'campo-03',
    titulo: { es: 'Campo con etiqueta ascendente', en: 'Field with rising label' },
    categoria: 'inputs',
    tecnica: { es: 'Etiqueta que sube al escribir, sin JavaScript de posicionamiento.', en: 'Label that rises while typing, with no positioning JavaScript.' },
    componente: <InputType03 placeholder="Correo electrónico" />,
    alto: 140,
  },
  {
    slug: 'campo-04',
    titulo: { es: 'Campo con subrayado', en: 'Underlined field' },
    categoria: 'inputs',
    tecnica: { es: 'Subrayado que crece desde el centro al enfocar.', en: 'Underline growing from the centre on focus.' },
    componente: <InputType04 placeholder="Correo electrónico" />,
    alto: 140,
  },
  {
    slug: 'campo-05',
    titulo: { es: 'Campo con título', en: 'Field with title' },
    categoria: 'inputs',
    tecnica: { es: 'Composición de título y campo en un mismo bloque.', en: 'Title and field composed into a single block.' },
    componente: <InputType05 placeholder="Correo electrónico" titulo="Nombre" />,
    alto: 140,
  },
  {
    slug: 'campo-06',
    titulo: { es: 'Campo con icono', en: 'Field with icon' },
    categoria: 'inputs',
    tecnica: { es: 'Icono posicionado dentro del campo sin romper el área de clic.', en: 'Icon positioned inside the field without breaking the click area.' },
    componente: <InputType06 placeholder="Correo electrónico" />,
    alto: 140,
  },
  {
    slug: 'boton-01',
    titulo: { es: 'Botón de envío animado', en: 'Animated submit button' },
    categoria: 'botones',
    tecnica: { es: 'Transición de fondo y desplazamiento del contenido al pasar el cursor.', en: 'Background transition and content shift on hover.' },
    componente: <ButtonType01 />,
    alto: 140,
  },
  {
    slug: 'boton-02',
    titulo: { es: 'Botón con relleno progresivo', en: 'Progressive fill button' },
    categoria: 'botones',
    tecnica: { es: 'Relleno que avanza desde un borde usando pseudoelementos.', en: 'Fill advancing from one edge using pseudo-elements.' },
    componente: <ButtonType02 />,
    alto: 140,
  },
  {
    slug: 'formulario-autenticacion',
    titulo: { es: 'Pantalla de autenticación', en: 'Authentication screen' },
    categoria: 'formularios',
    tecnica: {
      es: 'Panel deslizante entre inicio de sesión y registro, con validación en cliente mediante react-hook-form y zod.',
      en: 'Sliding panel between sign-in and sign-up, with client-side validation via react-hook-form and zod.',
    },
    componente: <LoginDemo />,
    alto: 620,
  },
];

/** Piezas de una categoría, o todas si no se indica ninguna. */
export function piezasPorCategoria(categoria: PiezaLab['categoria'] | null): PiezaLab[] {
  if (!categoria) return piezasLab;
  return piezasLab.filter((pieza) => pieza.categoria === categoria);
}
