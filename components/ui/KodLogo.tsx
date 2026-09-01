// KOD Universe SVG Logo — custom wordmark + crown icon
export function KodLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 60"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      role="img"
    >
      {/* Crown / abstract mark */}
      <g transform="translate(0, 2)">
        {/* Crown points */}
        <path
          d="M18 2 L14 10 L10 5 L6 10 L2 2 L0 12 L20 12 Z"
          fillOpacity="0.9"
        />
        {/* Crown base bar */}
        <rect x="0" y="12" width="20" height="2" rx="1" />
      </g>

      {/* KOD text */}
      <text
        x="26"
        y="16"
        fontSize="14"
        fontWeight="700"
        fontFamily="Metropolis, Inter, sans-serif"
        letterSpacing="1"
        fill="currentColor"
      >
        KOD
      </text>

      {/* UNIVERSE subtext */}
      <text
        x="26"
        y="26"
        fontSize="5.5"
        fontWeight="500"
        fontFamily="Metropolis, Inter, sans-serif"
        letterSpacing="2.5"
        fill="currentColor"
        fillOpacity="0.7"
      >
        UNIVERSE
      </text>
    </svg>
  );
}
