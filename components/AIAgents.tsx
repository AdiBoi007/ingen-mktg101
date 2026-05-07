const candidates = [
  { name: "Dean Wiegand", title: "Senior Software Engineer", co: "Acme Inc.", m: 100 },
  { name: "Krystal Hahn", title: "Software Engineer", co: "Stark", m: 90 },
  { name: "Wade Walter", title: "Software Engineer III", co: "Vial", m: 85 },
  { name: "Jenna Alvarez", title: "Frontend Engineer", co: "Hooli", m: 80 },
  { name: "Ethan Chen", title: "Full-Stack Engineer", co: "Initech", m: 78 },
];

const agentBadges = [
  {
    label: "Project manager agent",
    desc: "35 profiles ready for review",
    pos: "left-4 top-12",
    accent: "text-brand-magenta",
    icon: "✎",
  },
  {
    label: "Data analyst agent",
    desc: "Running 24/7 in background",
    pos: "right-6 top-6",
    accent: "text-brand-purple",
    icon: "▦",
  },
  {
    label: "Software engineer agent",
    desc: "35 profiles ready for review",
    pos: "right-10 bottom-20",
    accent: "text-brand-azure",
    icon: "</>",
  },
];

const subFeatures = [
  {
    eyebrow: "AI Search",
    title: "Search on autopilot",
    body:
      "Your AI recruiting agents search through 800M+ profiles across 30+ sources, managing the workflow end-to-end for continuous talent pipeline.",
  },
  {
    eyebrow: "Agentic Learning",
    title: "Gets better with every hire",
    body:
      "AI recruiting agents learn from every action, refining searches to match your hiring standards with greater precision and personalization.",
  },
  {
    eyebrow: "Automated Outreach",
    title: "Outreach that feels personal",
    body:
      "Your AI agents handle outreach and follow-ups automatically, so your team can focus on real conversations, not manual messaging.",
  },
];

export default function AIAgents() {
  return (
    <section className="relative bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="text-center mb-14">
          <div className="label-mono text-brand-mute mb-3">[02] AI Agents</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink">
            Deploy AI Agents for every recruiter
          </h2>
        </div>

        <div className="relative bg-brand-purple rounded-md overflow-hidden p-12 min-h-[460px]">
          <div className="absolute inset-0 diag-pattern opacity-30" />

          <div className="relative max-w-2xl mx-auto bg-white rounded-md shadow-2xl p-4">
            <div className="flex items-center justify-between border-b border-black/5 pb-2 mb-2">
              <span className="text-[12px] font-medium text-brand-ink">Profiles Ready for Review (35)</span>
              <span className="label-mono text-brand-mute">View all</span>
            </div>
            <ul className="text-[12px] divide-y divide-black/5">
              {candidates.map((c) => (
                <li key={c.name} className="grid grid-cols-12 gap-2 py-2 items-center">
                  <div className="col-span-4 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-brand-tint" />
                    <span className="text-brand-ink truncate">{c.name}</span>
                  </div>
                  <span className="col-span-4 text-brand-subtle truncate">{c.title}</span>
                  <span className="col-span-2 text-brand-subtle truncate">{c.co}</span>
                  <span className="col-span-2 text-right">
                    <span className="bg-brand-good text-white text-[10px] px-1.5 py-0.5 rounded-sm">
                      {c.m}%
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {agentBadges.map((b) => (
            <div
              key={b.label}
              className={`absolute ${b.pos} bg-white rounded-md shadow-lg px-3 py-2 max-w-[220px] hidden md:block`}
            >
              <div className="flex items-center gap-2">
                <span className={`${b.accent} font-mono text-sm`}>{b.icon}</span>
                <span className="text-[12px] font-medium text-brand-ink">{b.label}</span>
              </div>
              <div className="text-[11px] text-brand-mute mt-0.5">{b.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-black/10 mt-10 border border-black/10">
          {subFeatures.map((f) => (
            <div key={f.title} className="bg-brand-bg p-7">
              <div className="label-mono text-brand-purple mb-3">{f.eyebrow}</div>
              <h3 className="font-display text-[20px] text-brand-ink leading-snug mb-2">{f.title}</h3>
              <p className="text-[14px] text-brand-muted leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
