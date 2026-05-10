export function Logo({ className }: { className?: string }) {
  return (
    <svg 
      width="36" 
      height="36" 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Outer Hexagon with Emerald Gradient */}
      <path 
        d="M16 2L3 9.5V24.5L16 32L29 24.5V9.5L16 2Z" 
        fill="url(#everlegit-grad)"
      />
      {/* Inner Cutout (Deep Navy to match background) */}
      <path 
        d="M16 5.5L26 11.2V22.6L16 28.3L6 22.6V11.2L16 5.5Z" 
        fill="#0A0F1C"
      />
      {/* 3D Cube / Infrastructure Lines */}
      <path 
        d="M16 28.3V16M16 16L6 11.2M16 16L26 11.2" 
        stroke="url(#everlegit-grad)" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {/* Central Growth/Connection Node */}
      <circle cx="16" cy="16" r="3" fill="#00d4c8" />

      <defs>
        <linearGradient id="everlegit-grad" x1="3" y1="2" x2="29" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00d4c8" />
          <stop offset="1" stopColor="#008A80" />
        </linearGradient>
      </defs>
    </svg>
  );
}
