"use client";

const LOGOS = [
  "Hello AI",
  "Orbit Commerce",
  "Sheridine Studio",
  "Forge Labs",
  "Stark",
  "Initech",
  "Vial",
  "Hooli",
  "Acme Inc.",
  "Cursor",
  "Anyscale",
  "Founders Fund",
];

export default function TrustBar() {
  return (
    <section className="border-t border-b border-hairline py-8 overflow-hidden bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 mb-5 flex items-center justify-between gap-4">
        <span className="label-mono text-brand-mute">
          Trusted by 25,000+ recruiters and hiring managers
        </span>
        <span className="label-mono text-brand-mute hidden md:inline">
          Idea → Series A · 30+ pipelines
        </span>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[180px] text-brand-ink/55"
            >
              <span className="text-[20px] font-semibold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
