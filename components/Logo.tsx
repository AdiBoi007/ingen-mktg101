export default function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "#fff" : "#1d161d";
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 19V5L19 19V5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="text-[20px] font-medium tracking-tight"
        style={{ color, letterSpacing: "-0.02em" }}
      >
        Ingen
      </span>
    </div>
  );
}
