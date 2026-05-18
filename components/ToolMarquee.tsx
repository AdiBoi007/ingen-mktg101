"use client";

const TOOLS = [
  "GitHub",
  "LinkedIn",
  "Gmail",
  "Google Calendar",
  "Notion",
  "Slack",
  "Greenhouse",
  "Lever",
  "Ashby",
  "Coursera",
];

export default function ToolMarquee() {
  return (
    <section className="bg-brand-bg border-b border-black/5">
      <div className="mx-auto max-w-[1320px] px-6 pt-28 pb-24">
        <div className="text-center mb-14">
          <div className="label-mono text-brand-mute mb-3">[—] Integrations</div>
          <h2 className="font-display text-[34px] md:text-[46px] leading-[1.08] tracking-tightest text-brand-ink">
            Connects with the tools you already use
          </h2>
        </div>

        <div className="relative group">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap gap-14 group-hover:[animation-play-state:paused]">
            {[...TOOLS, ...TOOLS].map((name, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[170px]"
              >
                <span className="text-[22px] font-semibold tracking-tight text-brand-ink/40 transition-all duration-300 hover:text-brand-purple hover:-translate-y-0.5 hover:scale-110 cursor-default">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
