/* Rayos del símbolo, en grados. Los pares son largos y los impares cortos:
   esa alternancia es lo que le da la forma de destello. */
const RAYOS = [
  { angulo: 0, inicio: 2, largo: 20 },
  { angulo: 30, inicio: 4.5, largo: 15 },
  { angulo: 60, inicio: 2, largo: 20 },
  { angulo: 90, inicio: 4.5, largo: 15 },
  { angulo: 120, inicio: 2, largo: 20 },
  { angulo: 150, inicio: 4.5, largo: 15 },
];

const ClaudeCodeIcono = () => (
  <svg
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    {RAYOS.map(({ angulo, inicio, largo }) => (
      <rect
        key={angulo}
        x="11.1"
        y={inicio}
        width="1.8"
        height={largo}
        rx="0.9"
        transform={`rotate(${angulo} 12 12)`}
      />
    ))}
  </svg>
);

export default ClaudeCodeIcono;
