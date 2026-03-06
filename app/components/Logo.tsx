export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kid Cakes logo"
    >
      <circle cx="20" cy="20" r="20" fill="#F5B44C" />
      <path
        d="M8 24 A12 12 0 0 1 32 24"
        stroke="#304B70"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="10" y="25" width="20" height="5" rx="2.5" fill="#FFF4E4" />
      <rect x="11" y="20" width="18" height="5" rx="2.5" fill="#FFF4E4" />
      <rect x="12" y="15" width="16" height="5" rx="2.5" fill="#FFF4E4" />
      <path
        d="M15 28 Q20 30 25 28"
        stroke="#304B70"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
