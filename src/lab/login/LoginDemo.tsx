import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import Icono from '@/componentes/iconos/Icono';

import './estilos/LoginInterfaz.css';

/*
 * Pantalla de autenticación conservada del diseño original del portafolio.
 *
 * Dejó de ser la puerta de entrada del sitio: antes hacía `navigate('/home')`
 * sin validar nada y llamaba a `http://127.0.0.1:8000`, una API local que no
 * existe en producción. Ahora es una demo autocontenida con validación real
 * (react-hook-form + zod), lista para reutilizarse en otro proyecto.
 */

const esquemaLogin = z.object({
  correo: z.string().min(1, 'El correo es obligatorio').email('Formato de correo inválido'),
  contrasena: z.string().min(8, 'Mínimo 8 caracteres'),
});

const esquemaRegistro = z
  .object({
    nombre: z.string().min(2, 'Mínimo 2 caracteres'),
    correo: z.string().min(1, 'El correo es obligatorio').email('Formato de correo inválido'),
    contrasena: z
      .string()
      .min(8, 'Mínimo 8 caracteres')
      .regex(/[0-9]/, 'Debe incluir al menos un número'),
    confirmacion: z.string(),
  })
  .refine((datos) => datos.contrasena === datos.confirmacion, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmacion'],
  });

type DatosLogin = z.infer<typeof esquemaLogin>;
type DatosRegistro = z.infer<typeof esquemaRegistro>;

function MensajeError({ mensaje }: { mensaje?: string }) {
  if (!mensaje) return null;
  return (
    <p role="alert" className="ErrorCampo">
      {mensaje}
    </p>
  );
}

function RedesSociales() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div>Iniciar sesión con otras plataformas</div>
      <div className="IconosRedes flex w-full items-center justify-center">
        <Icono nombre="google" tamano={20} titulo="Google" />
        <Icono nombre="facebook" tamano={20} titulo="Facebook" />
        <Icono nombre="linkedin" tamano={20} titulo="LinkedIn" />
      </div>
    </section>
  );
}

export default function LoginDemo() {
  const [panelRegistro, setPanelRegistro] = useState(false);
  const [enviado, setEnviado] = useState<string | null>(null);

  const login = useForm<DatosLogin>({ resolver: zodResolver(esquemaLogin) });
  const registro = useForm<DatosRegistro>({ resolver: zodResolver(esquemaRegistro) });

  // La demo no envía nada a ningún servidor: confirma que la validación pasó.
  const alIniciarSesion = (datos: DatosLogin) => {
    setEnviado(`Validación correcta. Se enviaría el correo ${datos.correo}.`);
    login.reset();
  };

  const alRegistrar = (datos: DatosRegistro) => {
    setEnviado(`Validación correcta. Se registraría a ${datos.nombre}.`);
    registro.reset();
  };

  return (
    <div className="LoginInterfaz relative flex items-center justify-around">
      {/* Formulario de inicio de sesión */}
      <div className="ContenedorForms flex flex-col items-center justify-center">
        <h1>Iniciar Sesión</h1>
        <form
          className="form flex w-full flex-col items-center justify-center"
          onSubmit={login.handleSubmit(alIniciarSesion)}
          noValidate
        >
          <input
            type="email"
            placeholder="Ingrese su correo"
            aria-label="Correo electrónico"
            aria-invalid={Boolean(login.formState.errors.correo)}
            {...login.register('correo')}
          />
          <MensajeError mensaje={login.formState.errors.correo?.message} />

          <input
            type="password"
            placeholder="Ingrese su contraseña"
            aria-label="Contraseña"
            aria-invalid={Boolean(login.formState.errors.contrasena)}
            {...login.register('contrasena')}
          />
          <MensajeError mensaje={login.formState.errors.contrasena?.message} />

          <section className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <input type="checkbox" id="CheckboxRecordar" />
              <label htmlFor="CheckboxRecordar">Recuérdamelo</label>
            </div>
            <button type="button" className="EnlaceOlvido">
              ¿Olvidaste tu contraseña?
            </button>
          </section>

          <button className="submitEnv" type="submit">
            Iniciar sesión
          </button>
        </form>

        <RedesSociales />
      </div>

      {/* Formulario de registro */}
      <div className="ContenedorForms flex flex-col items-center justify-center">
        <h1>Registrarse</h1>
        <form
          className="form flex w-full flex-col items-center justify-center"
          onSubmit={registro.handleSubmit(alRegistrar)}
          noValidate
        >
          <input
            type="text"
            placeholder="Nombre de usuario"
            aria-label="Nombre de usuario"
            aria-invalid={Boolean(registro.formState.errors.nombre)}
            {...registro.register('nombre')}
          />
          <MensajeError mensaje={registro.formState.errors.nombre?.message} />

          <input
            type="email"
            placeholder="Correo electrónico"
            aria-label="Correo electrónico"
            aria-invalid={Boolean(registro.formState.errors.correo)}
            {...registro.register('correo')}
          />
          <MensajeError mensaje={registro.formState.errors.correo?.message} />

          <input
            type="password"
            placeholder="Contraseña"
            aria-label="Contraseña"
            aria-invalid={Boolean(registro.formState.errors.contrasena)}
            {...registro.register('contrasena')}
          />
          <MensajeError mensaje={registro.formState.errors.contrasena?.message} />

          <input
            type="password"
            placeholder="Verificar contraseña"
            aria-label="Verificar contraseña"
            aria-invalid={Boolean(registro.formState.errors.confirmacion)}
            {...registro.register('confirmacion')}
          />
          <MensajeError mensaje={registro.formState.errors.confirmacion?.message} />

          <button className="submitEnv" type="submit">
            Registrar
          </button>
        </form>

        <RedesSociales />
      </div>

      {/* Panel deslizante que alterna entre ambos formularios */}
      <div
        className={`absolute flex h-full w-full items-center justify-center overflow-hidden ${
          panelRegistro ? 'Login' : 'Register'
        }`}
      >
        <div className="absolute h-full w-full" />

        <div className="LoginContenedor absolute flex flex-col items-center justify-center">
          <h1>Iniciar Sesión</h1>
          <p>
            Ya tienes una cuenta. Ingresa con tu correo y contraseña para volver a tu espacio de
            trabajo.
          </p>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => setPanelRegistro(false)}
          >
            Iniciar Sesión
            <Icono nombre="chevron-derecha" tamano={14} />
          </button>
        </div>

        <div className="RegisterContenedor absolute flex flex-col items-center justify-center">
          <h1>Registrar</h1>
          <p>
            Todavía no tienes cuenta. Crea una en menos de un minuto y empieza a usar la plataforma.
          </p>
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => setPanelRegistro(true)}
          >
            <Icono nombre="chevron-izquierda" tamano={14} />
            Regístrate
          </button>
        </div>
      </div>

      {enviado && (
        <p className="AvisoDemo" role="status">
          {enviado}
        </p>
      )}
    </div>
  );
}
