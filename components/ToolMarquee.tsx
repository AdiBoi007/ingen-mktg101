"use client";

const integrations: { name: string; domain: string }[] = [
  { name: "LinkedIn", domain: "linkedin.com" },
  { name: "GitHub", domain: "github.com" },
  { name: "Glassdoor", domain: "glassdoor.com" },
  { name: "Indeed", domain: "indeed.com" },
  { name: "Wellfound", domain: "wellfound.com" },
  { name: "Lever", domain: "lever.co" },
  { name: "Greenhouse", domain: "greenhouse.io" },
  { name: "Slack", domain: "slack.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Workday", domain: "workday.com" },
  { name: "Calendly", domain: "calendly.com" },
  { name: "Coursera", domain: "coursera.org" },
];

function ToolLogo({ name, domain }: { name: string; domain: string }) {
  return (
    <div className="flex items-center gap-3 px-8 shrink-0 group/logo transition-all duration-300 hover:-translate-y-1 hover:scale-110">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={name}
        width={28}
        height={28}
        loading="lazy"
        className="w-[28px] h-[28px] object-contain rounded-sm grayscale opacity-60 transition-all duration-300 group-hover/logo:grayscale-0 group-hover/logo:opacity-100"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />
      <span className="text-[20px] font-semibold tracking-tight text-brand-ink/45 whitespace-nowrap transition-colors duration-300 group-hover/logo:text-brand-ink">
        {name}
      </span>
    </div>
  );
}

export default function ToolMarquee() {
  const loop = [...integrations, ...integrations];
  return (
    <section className="bg-brand-bg border-b border-black/5">
      <div className="mx-auto max-w-[1320px] px-6 pt-28 pb-24">
        <div className="text-center mb-14">
          <h2 className="font-display text-[34px] md:text-[46px] leading-[1.08] tracking-tightest text-brand-ink">
            Connects with the tools you already use
          </h2>
        </div>

        <div className="relative group">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-bg to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-bg to-transparent z-10" />

          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {loop.map((it, i) => (
              <ToolLogo key={`${it.domain}-${i}`} name={it.name} domain={it.domain} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
