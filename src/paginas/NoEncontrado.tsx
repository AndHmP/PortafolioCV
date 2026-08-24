import Icono from '@/componentes/iconos/Icono';
import Boton from '@/componentes/ui/Boton';
import { useIdioma } from '@/hooks/useIdioma';
import { useMeta } from '@/hooks/useMeta';

export default function NoEncontrado() {
  const { t } = useIdioma();

  useMeta({
    titulo: `${t.noEncontrado.titulo} — Anderson Huamancaja`,
    descripcion: t.noEncontrado.mensaje,
  });

  return (
    <div className="contenedor flex min-h-[60vh] flex-col items-center justify-center gap-5 py-16 text-center">
      <p className="font-display text-7xl font-bold text-borde">404</p>
      <h1 className="font-display text-2xl font-bold">{t.noEncontrado.titulo}</h1>
      <p className="max-w-md text-texto-suave">{t.noEncontrado.mensaje}</p>
      <Boton como="ruta" a="/">
        <Icono nombre="inicio" tamano={16} />
        {t.noEncontrado.volver}
      </Boton>
    </div>
  );
}
