"use client";

import { useAudience } from "./AudienceContext";

const candidates = [
  { name: "Maya Chen", title: "Founding Full-stack", co: "Orbit Commerce", m: 93 },
  { name: "Alex Rivera", title: "Backend · MVP", co: "Hello AI", m: 92 },
  { name: "Sara Okafor", title: "Backend · APIs", co: "Initech", m: 92 },
  { name: "Anika Sharma", title: "Product Designer · v1", co: "Sheridine", m: 91 },
  { name: "Owen Brooks", title: "Data Analyst · Launch", co: "Stark", m: 90 },
];

const agentBadges = [
  { label: "Aristotle · workflow AI", desc: "Brief drafted · LinkedIn post staged", pos: "left-4 top-12", accent: "text-brand-magenta", icon: "✎" },
  { label: "Sherlock · proof AI", desc: "Triangulating GitHub × USYD × AWS", pos: "right-6 top-6", accent: "text-brand-purple", icon: "◌" },
  { label: "Hiring action queue", desc: "Now: review 3 selected candidates", pos: "right-10 bottom-20", accent: "text-brand-azure", icon: "→" },
];

const recruiterSubFeatures = [
  { eyebrow: "Aristotle · workflow",
    title: "From rough role to recruiter brief in 2 minutes",
    body: "Aristotle handles job briefs, candidate discovery, interview workflow, and hiring dashboard intelligence. Choose tone Concise / Detailed / Aggressive and let auto-briefs run on every new role." },
  { eyebrow: "Sherlock · proof",
    title: "Confidence, not claims — triangulated across 4 signal types",
    body: "Sherlock scores candidate proof across work history, university, club affiliation, and open-source evidence. Strictness Balanced / Strict / Very strict, plus optional GitHub Pull, decide how hard the AI presses." },
  { eyebrow: "One pipeline · one command",
    title: "Shortlisted → Selected → Scheduled → Offer-ready",
    body: "A four-stage pipeline plus a Now / Next / Then action queue. Every nudge is tied to live state — finish interview packs before adding more candidates, approve sourcing spend, send the scheduling email." },
];

function RecruiterAgents() {
  return (
    <section className="relative bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="text-center mb-14">
          <div className="label-mono text-brand-mute mb-3">[02] Aristotle &amp; Sherlock</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl mx-auto">
            Two agents work the pipeline. <br />
            <span className="text-brand-purple">Aristotle runs flow. Sherlock proves the proof.</span>
          </h2>
        </div>

        <div className="relative bg-brand-purple rounded-md overflow-hidden p-12 min-h-[460px]">
          <div className="absolute inset-0 diag-pattern opacity-30" />

          <div className="relative max-w-2xl mx-auto bg-white rounded-md shadow-2xl p-4">
            <div className="flex items-center justify-between border-b border-black/5 pb-2 mb-2">
              <span className="text-[12px] font-medium text-brand-ink">Candidates ready for screen · 5 of 11</span>
              <span className="label-mono text-brand-mute">View pipeline</span>
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
            <div key={b.label}
              className={`absolute ${b.pos} bg-white rounded-md shadow-lg px-3 py-2 max-w-[220px] hidden md:block`}>
              <div className="flex items-center gap-2">
                <span className={`${b.accent} font-mono text-sm`}>{b.icon}</span>
                <span className="text-[12px] font-medium text-brand-ink">{b.label}</span>
              </div>
              <div className="text-[11px] text-brand-mute mt-0.5">{b.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-black/10 mt-10 border border-black/10">
          {recruiterSubFeatures.map((f) => (
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

/* -------------------- STUDENT: Aristotle + Columbus -------------------- */

function StudentAgents() {
  return (
    <section className="relative bg-forge-cream overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-mono-warm">[02] Meet your agents</span>
          <span className="h-px flex-1 bg-forge-line" />
        </div>

        <h2 className="font-forge text-[44px] md:text-[58px] leading-[1.02] text-forge-ink max-w-4xl">
          Two agents work for you. <br />
          <span className="text-forge-indigo">Aristotle teaches.</span>{" "}
          <span className="text-forge-amber">Columbus scouts.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">
          <div className="relative bg-white border border-forge-line rounded-2xl p-7 overflow-hidden">
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-30 blur-2xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
            />
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 chip chip-indigo">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2L9.5 6L13.5 7.5L9.5 9L8 13L6.5 9L2.5 7.5L6.5 6L8 2Z" fill="currentColor" />
                  </svg>
                  Aristotle
                </span>
                <h3 className="font-forge mt-3 text-[28px] leading-tight text-forge-ink">
                  Your roadmap & profile teacher
                </h3>
                <p className="mt-2 text-[14px] text-forge-ink/70 leading-relaxed">
                  Generates the roadmap, scores your skills, writes role-fit summaries, and
                  preps interview talking points. Plug it into your goal — a tailored
                  curriculum and recruiter-grade dossier follow.
                </p>
              </div>
              <span className="w-10 h-10 rounded-full bg-forge-indigo flex items-center justify-center text-white shrink-0">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L9.5 6L13.5 7.5L9.5 9L8 13L6.5 9L2.5 7.5L6.5 6L8 2Z" fill="currentColor" />
                </svg>
              </span>
            </div>

            <div className="mt-6 space-y-2">
              {[
                { you: false, text: "Update my profile for backend role at DoorDash" },
                { you: true, text: "Pulled GitHub. Adding 2 backend projects · regenerated role-fit summary." },
                { you: false, text: "Show leadership and NEXUS society proof" },
                { you: true, text: "Adding NEXUS society lead role · 4 verified project proofs surfaced." },
              ].map((m, i) => (
                <div
                  key={i}
                  className={`text-[13px] rounded-2xl px-3.5 py-2.5 max-w-[85%] ${
                    m.you
                      ? "bg-forge-indigoSoft text-forge-ink ml-auto"
                      : "bg-forge-paper border border-forge-line text-forge-ink"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Generate role-fit summary", "Score my skills", "Add NEXUS proof", "Prep interview"].map((c) => (
                <span key={c} className="chip chip-indigo cursor-pointer hover:opacity-90">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="relative bg-forge-ink rounded-2xl p-7 overflow-hidden text-white">
            <div className="absolute inset-0 dotted-grid-dim opacity-30 pointer-events-none" />
            <div
              className="absolute -top-12 -right-12 w-56 h-56 rounded-full opacity-30 blur-2xl pointer-events-none"
              style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 chip chip-amber">
                  <span>🔥</span>
                  Columbus
                </span>
                <h3 className="font-forge mt-3 text-[28px] leading-tight">
                  Your AI job scout
                </h3>
                <p className="mt-2 text-[14px] text-white/75 leading-relaxed">
                  Stages dossiers from RemoteOK, HN Who&apos;s Hiring, GitHub Jobs Archive,
                  Adzuna, and company career pages — ranks each by % match against your
                  profile, and explains why each role fits.
                </p>
              </div>
              <span className="w-10 h-10 rounded-full bg-forge-amber flex items-center justify-center text-forge-ink shrink-0 text-lg">
                🔥
              </span>
            </div>

            <div className="relative mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-white/55 mb-3">
                <span className="flex items-center gap-2">
                  <span className="pulse-dot" />
                  Scout active
                </span>
                <span>5 staged · before filters</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  { co: "Hello AI", role: "Backend Engineer · AI Workflows", m: 96, sal: "$135-170K" },
                  { co: "Orbit Commerce", role: "Backend Engineer · Commerce APIs", m: 93, sal: "$110-140K" },
                  { co: "Sheridine Studio", role: "Full Stack · Backend-leaning", m: 91, sal: "$90-115K" },
                ].map((j) => (
                  <li key={j.co} className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.05] px-3 py-2.5">
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium truncate">{j.co}</div>
                      <div className="text-[11px] text-white/55 truncate">{j.role}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] text-white/55">{j.sal}</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-forge-amber text-forge-ink px-2 py-0.5 rounded-full">
                        {j.m}% match
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-5 flex items-center gap-2 text-[11px] text-white/55">
              <span className="label-mono">Sources:</span>
              <span>RemoteOK</span>
              <span>·</span>
              <span>HN Who&apos;s Hiring</span>
              <span>·</span>
              <span>GitHub Jobs</span>
              <span>·</span>
              <span>Adzuna</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px mt-10 bg-forge-line border border-forge-line rounded-2xl overflow-hidden">
          {[
            { eyebrow: "Roadmap on autopilot", title: "Calibrated to your hours, expertise, goal",
              body: "Aristotle reads three inputs and ships a 52-topic curriculum tied to a clear hour budget." },
            { eyebrow: "Agentic learning", title: "Gets sharper with every prompt",
              body: "Every chip you tap, every project you add — Aristotle re-scores your readiness in real time." },
            { eyebrow: "Apply on autopilot", title: "Columbus drafts the apply path",
              body: "Each scouted role lands with salary, fit reasons, and a one-click prep flow into your profile." },
          ].map((f) => (
            <div key={f.title} className="bg-forge-paper p-7">
              <div className="label-mono-warm mb-3">{f.eyebrow}</div>
              <h3 className="font-forge-mid text-[20px] text-forge-ink leading-snug mb-2">{f.title}</h3>
              <p className="text-[14px] text-forge-ink/70 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AIAgents() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentAgents /> : <RecruiterAgents />;
}
