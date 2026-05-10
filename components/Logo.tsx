export default function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "#fff" : "#000000";
  return (
    <div className="flex items-center gap-2">
      <svg width="22" height="22" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-lg">
        <line x1="50" y1="10" x2="50" y2="90" stroke={color} strokeWidth="9" strokeLinecap="butt" />
        <line x1="10" y1="50" x2="90" y2="50" stroke={color} strokeWidth="9" strokeLinecap="butt" />
        <line x1="22" y1="22" x2="78" y2="78" stroke={color} strokeWidth="9" strokeLinecap="butt" />
        <line x1="78" y1="22" x2="22" y2="78" stroke={color} strokeWidth="9" strokeLinecap="butt" />
      </svg>
      <span
        className="text-[20px] font-medium tracking-tight"
        style={{ color, letterSpacing: "-0.02em" }}
      >
        iNGEN
      </span>
    </div>
  );
}
