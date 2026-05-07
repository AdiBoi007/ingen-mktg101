export default function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "#fff" : "#1d161d";
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5" />
        <path
          d="M9 14c0 1.7 1.3 3 3 3s3-1.3 3-3V7"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span
        className="text-[20px] font-medium tracking-tight"
        style={{ color, letterSpacing: "-0.02em" }}
      >
        Juicebox
      </span>
    </div>
  );
}
