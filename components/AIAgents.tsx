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

const studentRoadmapRows = [
  { name: "Maya Chen", title: "Frontend Engineer · Roadmap", co: "96% ready", m: 96 },
  { name: "Alex Rivera", title: "Backend Developer · DoorDash path", co: "82% ready", m: 82 },
  { name: "Sara Okafor", title: "AI Engineer · Track", co: "74% ready", m: 74 },
  { name: "Anika Sharma", title: "Data Analyst · Launch path", co: "88% ready", m: 88 },
  { name: "Owen Brooks", title: "Product Manager · Startup track", co: "71% ready", m: 71 },
];

const studentAgentBadges = [
  { label: "Aristotle · roadmap AI", desc: "Roadmap drafted · Profile scored", pos: "left-4 top-12", accent: "text-brand-magenta", icon: "✎" },
  { label: "Columbus · scout AI", desc: "5 roles staged · 96% top match", pos: "right-6 top-6", accent: "text-brand-purple", icon: "◌" },
  { label: "Readiness action queue", desc: "Now: complete 3 roadmap topics", pos: "right-10 bottom-20", accent: "text-brand-azure", icon: "→" },
];

const studentSubFeatures = [
  { eyebrow: "Aristotle · roadmap",
    title: "Calibrated to your hours, expertise, and goal",
    body: "Aristotle reads three inputs and ships a 52-topic curriculum tied to a clear hour budget. Mark topics complete, switch between mind-map and linear pathway, and watch the readiness gauge climb." },
  { eyebrow: "Aristotle · profile",
    title: "Scored skills, role-fit summaries, interview prep",
    body: "Every project you add gets scored. Every skill gets a confidence percentage. Role-fit summaries are generated per target — IBM SDE, Backend Engineer, Frontend role." },
  { eyebrow: "Columbus · scout",
    title: "Ranks roles, not a job board you scroll",
    body: "Each scouted role lands with salary, fit reasons, and a one-click prep flow into your profile. Sources: RemoteOK, HN Who's Hiring, GitHub Jobs, Adzuna." },
];

function StudentAgents() {
  return (
    <section className="relative bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="text-center mb-14">
          <div className="label-mono text-brand-mute mb-3">[02] Aristotle &amp; Columbus</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl mx-auto">
            Two agents work for you. <br />
            <span className="text-brand-purple">Aristotle teaches. Columbus scouts.</span>
          </h2>
        </div>

        <div className="relative bg-brand-purple rounded-md overflow-hidden p-12 min-h-[460px]">
          <div className="absolute inset-0 diag-pattern opacity-30" />

          <div className="relative max-w-2xl mx-auto bg-white rounded-md shadow-2xl p-4">
            <div className="flex items-center justify-between border-b border-black/5 pb-2 mb-2">
              <span className="text-[12px] font-medium text-brand-ink">Students ready to apply · 5 of 11</span>
              <span className="label-mono text-brand-mute">View profiles</span>
            </div>
            <ul className="text-[12px] divide-y divide-black/5">
              {studentRoadmapRows.map((c) => (
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

          {studentAgentBadges.map((b) => (
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
          {studentSubFeatures.map((f) => (
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

export default function AIAgents() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentAgents /> : <RecruiterAgents />;
}
