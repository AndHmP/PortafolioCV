import Icono from '@/componentes/iconos/Icono';
import { contacto, NOMBRE_COMPLETO } from '@/contenido/perfil';
import { useIdioma } from '@/hooks/useIdioma';
import type { ClaveIconoUI } from '@/componentes/iconos/Icono';

const REDES = ['github', 'linkedin', 'correo'];

export default function Footer() {
  const { t, tr } = useIdioma();
  const anio = new Date().getFullYear();

  const enlaces = contacto.filter((c) => c.url && REDES.includes(c.icono));

  return (
    <footer className="border-t border-borde bg-base-alt py-10">
      <div className="contenedor flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-display font-semibold">{NOMBRE_COMPLETO}</p>
          <p className="mt-1 text-sm text-texto-suave">{t.footer.construidoCon}</p>
        </div>

        <div className="flex items-center gap-2">
          {enlaces.map((enlace) => (
            <a
              key={enlace.icono}
              href={enlace.url}
              target={enlace.icono === 'correo' ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="rounded-lg p-2.5 text-texto-suave transition-colors hover:bg-superficie-alt hover:text-acento"
              aria-label={tr(enlace.etiqueta)}
            >
              <Icono nombre={enlace.icono as ClaveIconoUI} tamano={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="contenedor mt-8 border-t border-borde pt-6 text-center text-xs text-texto-suave">
        © {anio} {NOMBRE_COMPLETO}. {t.footer.derechos}
      </div>
    </footer>
  );
}
