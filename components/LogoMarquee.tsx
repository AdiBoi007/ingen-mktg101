const logos = [
  "Patreon",
  "Flexport",
  "Ramp",
  "Verkada",
  "Samsara",
  "Quora",
  "Cursor",
  "Anyscale",
  "Notion",
  "Vibe",
];

export default function LogoMarquee() {
  return (
    <section className="bg-brand-bg border-t border-b border-black/5 py-10 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[160px] text-brand-ink/75"
            >
              <span className="text-[22px] font-semibold tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
