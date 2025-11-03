export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Círculo externo - azul marinho */}
      <circle cx="50" cy="50" r="48" fill="hsl(221, 83%, 23%)" />
      
      {/* Estrela central - dourado */}
      <path
        d="M50 20 L55 40 L75 40 L59 52 L65 72 L50 60 L35 72 L41 52 L25 40 L45 40 Z"
        fill="hsl(43, 74%, 49%)"
      />
      
      {/* Círculo interno - vermelho */}
      <circle cx="50" cy="50" r="15" fill="hsl(0, 100%, 27%)" />
      
      {/* Letra N estilizada - branco */}
      <text
        x="50"
        y="58"
        fontSize="20"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        fontFamily="Playfair Display, serif"
      >
        N
      </text>
    </svg>
  );
}
