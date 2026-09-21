import './estilos/Dia75.scss';

/* Día 75 — Spinning Discs
   "Seis discos que, girando, se ven como una bola."

   Son seis círculos blancos al 30 % de opacidad, cada uno inclinado 30° más en
   X. Como están en el mismo espacio 3D, donde se cruzan el blanco se suma y
   aparecen los gajos. El conjunto da tumbos por los tres ejes en 7 s. */

const DISCOS = Array.from({ length: 6 }, (_, i) => i + 1);

export default function Dia75() {
  return (
    <div className="Dia75">
      <div className="Dia75-centro">
        <div className="Dia75-bola">
          {DISCOS.map((n) => (
            <div key={n} className={`Dia75-disco d${n}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

