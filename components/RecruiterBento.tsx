"use client";

import { useAudience } from "./AudienceContext";

/* Aceternity-style Bento Grid + Card Hover Effect for the recruiter side.
 * Renders only when the audience switch is on "recruiter".
 * Mirrors the seven sidebar destinations described in the iNGEN
 * recruiter product context: Dashboard, Job Brief, Search, Analyse Profile,
 * Interviews, Settings, Dark Mode toggle. */

type Cell = {
  span: string;
  eyebrow: string;
  title: string;
  body: string;
  art: React.ReactNode;
  accent: "purple" | "lavender" | "good" | "azure" | "magenta" | "gold";
};

const ACCENTS: Record<Cell["accent"], { ring: string; chip: string; dot: string }> = {
  purple: { ring: "hover:ring-brand-purple/40", chip: "bg-brand-tint text-brand-purple", dot: "bg-brand-purple" },
  lavender: { ring: "hover:ring-brand-lavender/40", chip: "bg-brand-soft/40 text-brand-purple", dot: "bg-brand-lavender" },
  good: { ring: "hover:ring-brand-good/40", chip: "bg-brand-good/10 text-brand-good", dot: "bg-brand-good" },
  azure: { ring: "hover:ring-brand-azure/40", chip: "bg-brand-azure/10 text-brand-azure", dot: "bg-brand-azure" },
  magenta: { ring: "hover:ring-brand-magenta/40", chip: "bg-brand-magenta/10 text-brand-magenta", dot: "bg-brand-magenta" },
  gold: { ring: "hover:ring-brand-gold/40", chip: "bg-brand-gold/15 text-[#7A6900]", dot: "bg-brand-gold" },
};

function MiniCalendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const dotted = new Set([3, 8, 14, 17, 22, 28]);
  const today = 8;
  return (
    <div className="grid grid-cols-7 gap-1.5 text-[10px] font-mono">
      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
        <span key={i} className="text-brand-mute text-center">{d}</span>
      ))}
      {days.map((d) => {
        const isToday = d === today;
        const hasDot = dotted.has(d);
        return (
          <span
            key={d}
            className={`relative aspect-square rounded-[4px] flex items-center justify-center ${
              isToday ? "bg-brand-ink text-white" : "text-brand-ink/70"
            }`}
          >
            {d}
            {hasDot && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-purple" />}
          </span>
        );
      })}
    </div>
  );
}

function PipelineMini() {
  const stages = [
    { l: "Shortlisted", n: 11 },
    { l: "Selected", n: 6 },
    { l: "Scheduled", n: 4 },
    { l: "Offer-ready", n: 1 },
  ];
  return (
    <div className="flex items-center gap-1.5">
      {stages.map((s, i) => (
        <div key={s.l} className="flex items-center gap-1.5">
          <div className="rounded-md border border-brand-purple/20 bg-brand-tint/40 px-2.5 py-1.5">
            <div className="font-mono text-[16px] leading-none text-brand-purple">{s.n}</div>
            <div className="label-mono mt-1 text-[8px] text-brand-mute">{s.l}</div>
          </div>
          {i < stages.length - 1 && (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-brand-purple/40">
              <path d="M2 5H8M8 5L5 2M8 5L5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function ChatLine() {
  return (
    <div className="space-y-1.5">
      <div className="text-[10px] bg-brand-tint/60 border border-brand-purple/20 rounded-xl px-2.5 py-1.5 max-w-[85%]">
        Let&apos;s build a job brief — 2 min.
      </div>
      <div className="text-[10px] bg-brand-good/10 border border-brand-good/25 rounded-xl px-2.5 py-1.5 ml-auto max-w-[80%]">
        Backend engineer, MVP, Sydney.
      </div>
      <div className="text-[10px] bg-brand-tint/60 border border-brand-purple/20 rounded-xl px-2.5 py-1.5 max-w-[90%]">
        Brief + LinkedIn post + search query staging now.
      </div>
    </div>
  );
}

function LoadingLetters({ word, accent }: { word: string; accent: string }) {
  return (
    <div className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em]">
      {word.split("").map((c, i) => (
        <span
          key={i}
          className={`${accent}`}
          style={{ animation: `pulseDot 1.6s ease-in-out ${i * 0.08}s infinite` }}
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function ProofMini() {
  const sources = [
    { l: "GH", c: "chip-mint" },
    { l: "USYD", c: "chip-lavender" },
    { l: "AMZ", c: "chip-amber" },
    { l: "AWS", c: "chip-peach" },
    { l: "MS", c: "chip-indigo" },
    { l: "K8S", c: "chip-salmon" },
    { l: "GDSC", c: "chip-yellow" },
    { l: "MRG", c: "chip-mint" },
  ];
  return (
    <div className="flex flex-wrap gap-1">
      {sources.map((s) => (
        <span key={s.l} className={`chip ${s.c} text-[9px] font-mono px-1.5 py-0`}>
          {s.l}
        </span>
      ))}
    </div>
  );
}

function BudgetMini() {
  return (
    <div className="space-y-2">
      <div>
        <div className="flex items-center justify-between text-[10px] font-mono text-brand-mute mb-1">
          <span>$16,400 left</span>
          <span>$24k total</span>
        </div>
        <div className="h-1.5 rounded-full bg-brand-soft/30 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-purple to-brand-lavender" style={{ width: "68%" }} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {[
          { l: "Avg screen", v: "$280" },
          { l: "Proj. hire", v: "$9.8k" },
          { l: "Runway", v: "6 wks" },
        ].map((m) => (
          <div key={m.l} className="rounded-md bg-brand-bg border border-black/5 px-2 py-1.5">
            <div className="text-[11px] font-mono font-semibold text-brand-ink">{m.v}</div>
            <div className="text-[8px] uppercase tracking-wider text-brand-mute mt-0.5">{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const cells: Cell[] = [
  {
    span: "lg:col-span-2 lg:row-span-1",
    eyebrow: "Dashboard · Startup Hiring",
    title: "Calendar, capacity & queue in one grid",
    body: "Interviews dotted on the calendar, team capacity at a glance, and a Now / Next / Then action queue tied to live pipeline state.",
    accent: "purple",
    art: (
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-brand-bg border border-black/5 p-3">
          <div className="label-mono text-brand-mute mb-2">May 2026</div>
          <MiniCalendar />
        </div>
        <div className="rounded-lg bg-brand-bg border border-black/5 p-3">
          <div className="label-mono text-brand-mute mb-2">Pipeline</div>
          <PipelineMini />
        </div>
      </div>
    ),
  },
  {
    span: "lg:col-span-1 lg:row-span-1",
    eyebrow: "Job Brief · Aristotle",
    title: "2-min intake → brief, LinkedIn, search query",
    body: "Conversational on the left. Live brief on the right. Three publishable artifacts in one pass.",
    accent: "lavender",
    art: (
      <div className="rounded-lg bg-brand-bg border border-black/5 p-3">
        <ChatLine />
      </div>
    ),
  },
  {
    span: "lg:col-span-1 lg:row-span-1",
    eyebrow: "Analyse Profile · Sherlock",
    title: "Triangulated proof, not resume claims",
    body: "Sherlock cross-references GitHub, LinkedIn, university, and work signals into a verified proof score.",
    accent: "magenta",
    art: (
      <div className="rounded-lg bg-brand-deep p-3 text-white relative overflow-hidden">
        <div className="absolute inset-0 halftone-top opacity-40" />
        <div className="relative">
          <div className="text-[10px] font-mono text-white/55 mb-2">Investigating · Alex Rivera, github</div>
          <LoadingLetters word="SHERLOCK" accent="text-brand-lavender" />
          <div className="mt-3 flex items-center gap-2 text-[10px] text-white/70">
            <span className="pulse-dot" />
            <span>92% confidence · LOW risk</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    span: "lg:col-span-1 lg:row-span-1",
    eyebrow: "Interviews · Sherlock",
    title: "Top proof sources at a glance",
    body: "A constellation of color-coded institution chips lets you scan credibility before opening a profile.",
    accent: "good",
    art: (
      <div className="rounded-lg bg-brand-bg border border-black/5 p-3">
        <div className="label-mono text-brand-mute mb-2">Top proof sources</div>
        <ProofMini />
      </div>
    ),
  },
  {
    span: "lg:col-span-2 lg:row-span-1",
    eyebrow: "Hiring Budget · Dashboard",
    title: "Spend, runway & projected hire — live",
    body: "Sourcing, screening, interviews, and tools rolled into a single live spend card with runway in weeks. AUD / USD / GBP / EUR.",
    accent: "azure",
    art: (
      <div className="rounded-lg bg-brand-bg border border-black/5 p-3">
        <BudgetMini />
      </div>
    ),
  },
];

function RecruiterBentoGrid() {
  return (
    <section className="bg-brand-bg relative">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-mono text-brand-mute">[06] The recruiter workspace</span>
          <span className="h-px flex-1 bg-black/10" />
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl">
            Seven destinations. <br />
            <span className="text-brand-purple">One command center.</span>
          </h2>
          <p className="max-w-sm text-[15px] text-brand-muted leading-relaxed">
            Dashboard, Job Brief, Candidate Search, Analyse Profile, Interviews, Settings — plus a dark-mode
            toggle and the user pinned at the bottom. Active route highlighted in orange.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cells.map((c, i) => {
            const a = ACCENTS[c.accent];
            return (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border border-black/5 p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 ring-1 ring-transparent ${a.ring} ${c.span}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                  <span className={`label-mono ${a.chip} px-2 py-0.5 rounded`}>{c.eyebrow}</span>
                </div>
                <h3 className="font-display text-[22px] leading-snug tracking-tightest text-brand-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] text-brand-muted leading-relaxed">{c.body}</p>
                <div className="mt-5">{c.art}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Aceternity-style "Spotlight Constellation" — a frosted dark card with a
 * mouse-aware spotlight (CSS-only) plus the colored proof-source pills. */
function ProofConstellation() {
  const sources = [
    { l: "USYD", c: "chip-lavender", cat: "University" },
    { l: "MS", c: "chip-indigo", cat: "Work" },
    { l: "AMZ", c: "chip-amber", cat: "Work" },
    { l: "GH", c: "chip-mint", cat: "Open source" },
    { l: "EN", c: "chip-peach", cat: "Club" },
    { l: "MRG", c: "chip-mint", cat: "Open source" },
    { l: "UNSW", c: "chip-lavender", cat: "University" },
    { l: "GDSC", c: "chip-yellow", cat: "Club" },
    { l: "KG", c: "chip-salmon", cat: "Certification" },
    { l: "AWS", c: "chip-peach", cat: "Certification" },
    { l: "K8S", c: "chip-salmon", cat: "Certification" },
    { l: "HC", c: "chip-mint", cat: "Club" },
    { l: "CV", c: "chip-amber", cat: "Work" },
    { l: "WIE", c: "chip-yellow", cat: "Club" },
  ];

  const candidates = [
    { n: "Maya Chen", role: "Founding full-stack", c: 93, st: "VIP", risk: "LOW" },
    { n: "Sara Okafor", role: "Backend · APIs", c: 92, st: "READY", risk: "LOW" },
    { n: "Alex Rivera", role: "Backend · MVP", c: 92, st: "READY", risk: "LOW" },
    { n: "Anika Sharma", role: "Designer · v1", c: 91, st: "HIGH FIT", risk: "LOW" },
    { n: "Owen Brooks", role: "Data · Launch", c: 90, st: "READY", risk: "LOW" },
    { n: "Sofia Alvarez", role: "Backend · Pairing", c: 89, st: "READY", risk: "LOW" },
    { n: "Daniel Kim", role: "ML Screen", c: 89, st: "REVIEW", risk: "MED" },
    { n: "Ethan Chen", role: "Full-stack", c: 88, st: "REVIEW", risk: "MED" },
    { n: "Priya Mehta", role: "Portfolio", c: 86, st: "READY", risk: "LOW" },
    { n: "Liam Torres", role: "Systems", c: 86, st: "REVIEW", risk: "MED" },
    { n: "James Wu", role: "Product", c: 77, st: "REVIEW", risk: "MED" },
  ];

  return (
    <section className="relative bg-brand-deep text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 halftone-bottom opacity-90 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-mono text-brand-lavender">[07] Top proof sources</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest">
            Scan credibility before <br />
            <span className="text-brand-lavender">you open a profile.</span>
          </h2>
          <p className="max-w-sm text-[15px] text-white/70 leading-relaxed">
            Each pastel pill is an institution Sherlock cross-references — university (lavender),
            work (peach / amber), open-source (mint), club (yellow), certification (salmon).
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 overflow-hidden group">
            <div
              aria-hidden
              className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), rgba(176,84,231,0.18), transparent 40%)",
              }}
            />
            <div className="relative">
              <div className="label-mono text-brand-lavender mb-4">Constellation · 14 institutions tagged</div>
              <div className="flex flex-wrap gap-2">
                {sources.map((s) => (
                  <span
                    key={s.l}
                    title={s.cat}
                    className={`chip ${s.c} font-mono text-[11px] cursor-default hover:scale-105 transition-transform`}
                  >
                    {s.l}
                    <span className="opacity-50">· {s.cat}</span>
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { l: "University", c: "bg-brand-soft/40 text-brand-lavender", n: "USYD · UNSW" },
                  { l: "Work", c: "bg-brand-tint/30 text-brand-purple", n: "AMZ · MS · CV" },
                  { l: "Open source", c: "bg-brand-good/20 text-brand-good", n: "GH · MRG · HC" },
                  { l: "Club", c: "bg-brand-gold/15 text-brand-gold", n: "EN · GDSC · WIE" },
                ].map((g) => (
                  <div key={g.l} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className={`label-mono ${g.c.split(" ")[1]} mb-1`}>{g.l}</div>
                    <div className="text-[12px] text-white/70 font-mono">{g.n}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="label-mono text-brand-lavender">Candidates ready for screen</div>
              <span className="label-mono text-white/55">11 staged</span>
            </div>
            <ul className="divide-y divide-white/10">
              {candidates.map((c) => (
                <li key={c.n} className="flex items-center justify-between py-2.5 text-[13px]">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-6 h-6 rounded-full bg-white/10 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-white truncate">{c.n}</div>
                      <div className="text-white/55 text-[11px] truncate">{c.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`label-mono ${c.risk === "LOW" ? "text-brand-good" : "text-brand-gold"}`}
                    >
                      {c.risk}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                        c.c >= 90 ? "bg-brand-good text-white" : "bg-brand-gold/30 text-brand-gold"
                      }`}
                    >
                      {c.c}%
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RecruiterBento() {
  const { audience } = useAudience();
  if (audience !== "recruiter") return null;
  return (
    <>
      <RecruiterBentoGrid />
      <ProofConstellation />
    </>
  );
}
