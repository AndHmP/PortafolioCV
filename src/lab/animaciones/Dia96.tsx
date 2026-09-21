import './estilos/Dia96.scss';

/* Día 96 — Jumping Square
   "Un cuadrado que cae, se aplasta y salta girando."

   Cinco capas anidadas, una por gesto, todas de 1,6 s: caer, subir, aplastarse,
   girar al entrar y girar al salir. Separarlas permite darle a cada una su
   propia curva —la caída acelera, el rebote es simétrico, el giro frena— sin
   que se estorben.

   La sombra va aparte y se ensancha justo cuando el cuadrado toca el suelo. */

export default function Dia96() {
  return (
    <div className="Dia96">
      <div className="Dia96-centro">
        <div className="Dia96-cae">
          <div className="Dia96-sube">
            <div className="Dia96-aplasta">
              <div className="Dia96-gira-entra">
                <div className="Dia96-gira-sale">
                  <div className="Dia96-cuadrado" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Dia96-sombra" />
      </div>
    </div>
  );
}

