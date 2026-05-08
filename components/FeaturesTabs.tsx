"use client";

import { useState } from "react";
import Image from "next/image";
import { useAudience } from "./AudienceContext";

type RecruiterTab = "brief" | "intake" | "interviews";
type StudentTab = "roadmap" | "jobs" | "profile" | "collections";

const recruiterTabs: { key: RecruiterTab; label: string; icon: React.ReactNode }[] = [
  {
    key: "brief",
    label: "Job Brief · Aristotle",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M3 2.5H10L13 5.5V13.5H3V2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M5 7H11M5 9.5H11M5 12H8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "intake",
    label: "Candidate Intake · Aristotle",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13 13L10.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "interviews",
    label: "Interviews · Sherlock",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="6" cy="5.5" r="2.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 13.5C2.5 11 4 10 6 10S9.5 11 10 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="6" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const PEOPLE = [
  { name: "Alex Rivera", title: "Backend · MVP", co: "Hello AI", match: 92 },
  { name: "Maya Chen", title: "Founding Full-stack", co: "Orbit", match: 93 },
  { name: "Owen Brooks", title: "Data Analyst · Launch", co: "Stark", match: 90 },
  { name: "Anika Sharma", title: "Product Designer · v1", co: "Sheridine", match: 91 },
  { name: "Sara Okafor", title: "Backend · APIs", co: "Initech", match: 92 },
];

function BriefPanel() {
  return (
    <div className="bg-brand-purple/95 rounded-md p-6 relative overflow-hidden h-full min-h-[420px]">
      <div className="absolute inset-0 diag-pattern opacity-40 pointer-events-none" />
      <div className="relative bg-white rounded shadow-xl p-4 max-w-md">
        <div className="flex items-center gap-2 pb-2 border-b border-black/5">
          <span className="w-6 h-6 rounded-full bg-brand-tint flex items-center justify-center">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L9.5 6L13.5 7.5L9.5 9L8 13L6.5 9L2.5 7.5L6.5 6L8 2Z" fill="#6B2F8E" />
            </svg>
          </span>
          <span className="text-[12px] font-medium text-brand-ink">Aristotle</span>
          <span className="ml-auto label-mono text-brand-mute">2 min intake</span>
        </div>
        <div className="space-y-2 mt-3">
          <div className="text-[12px] bg-brand-tint/60 border border-brand-purple/15 rounded-xl px-3 py-2 text-brand-ink">
            Let&apos;s build a job brief. Couple quick questions, then I&apos;ll generate the brief, a LinkedIn post, and a Boolean search query.
          </div>
          <div className="text-[12px] bg-brand-good/10 border border-brand-good/25 rounded-xl px-3 py-2 text-brand-ink ml-auto max-w-[80%]">
            Backend engineer for MVP — Idea stage, full-time, Sydney/Remote.
          </div>
          <div className="text-[12px] bg-brand-tint/60 border border-brand-purple/15 rounded-xl px-3 py-2 text-brand-ink">
            Got it. Generating recruiter brief, LinkedIn post and the candidate search query now.
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["Brief", "LinkedIn post", "Search query"].map((t) => (
            <div key={t} className="text-[10px] font-mono uppercase tracking-wider text-brand-purple bg-brand-tint border border-brand-purple/20 rounded-md px-2 py-1.5 text-center">
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IntakePanel() {
  return (
    <div className="bg-[#2F8D6E] rounded-md p-6 relative overflow-hidden h-full min-h-[420px]">
      <div className="absolute inset-0 diag-pattern opacity-30 pointer-events-none" />
      <div className="relative bg-white rounded shadow-xl p-4 w-full max-w-md">
        <div className="flex flex-wrap gap-1.5 pb-2 border-b border-black/5">
          <span className="text-[11px] bg-brand-tint text-brand-purple px-2 py-0.5 rounded">Backend engineer</span>
          <span className="text-[11px] bg-brand-tint text-brand-purple px-2 py-0.5 rounded">Idea stage</span>
          <span className="text-[11px] bg-brand-tint text-brand-purple px-2 py-0.5 rounded">Founding</span>
        </div>
        <div className="text-[11px] text-brand-mute mt-2 mb-1">Aristotle staged candidates · ranked by fit</div>
        <ul className="text-[12px] divide-y divide-black/5">
          {PEOPLE.map((p) => (
            <li key={p.name} className="grid grid-cols-12 gap-2 py-1.5 items-center">
              <div className="col-span-5 flex items-center gap-2 min-w-0">
                <div className="w-5 h-5 rounded-full bg-brand-tint" />
                <span className="text-brand-ink truncate">{p.name}</span>
              </div>
              <span className="col-span-4 text-brand-subtle truncate">{p.title}</span>
              <span className="col-span-2 text-brand-subtle truncate">{p.co}</span>
              <span className="col-span-1 text-right">
                <span className="bg-brand-good text-white text-[10px] px-1.5 py-0.5 rounded-sm">{p.match}%</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function InterviewsPanel() {
  const sources = ["GH", "USYD", "AMZ", "AWS", "MS", "K8S", "MRG", "EN", "GDSC"];
  const palette = ["chip-mint", "chip-lavender", "chip-amber", "chip-peach", "chip-indigo", "chip-salmon", "chip-yellow"];
  return (
    <div className="bg-[#3C5A99] rounded-md p-6 relative overflow-hidden h-full min-h-[420px]">
      <div className="absolute inset-0 diag-pattern opacity-30 pointer-events-none" />
      <div className="relative bg-white rounded shadow-xl p-4 w-full max-w-md text-[12px]">
        <div className="flex items-center gap-2 pb-2 border-b border-black/5">
          <span className="w-6 h-6 rounded-full bg-brand-deep flex items-center justify-center">
            <span className="block w-2 h-2 rounded-sm border border-white" />
          </span>
          <span className="text-[12px] font-medium text-brand-ink">Sherlock</span>
          <span className="ml-auto label-mono text-brand-mute">5 ready for screen</span>
        </div>
        <div className="label-mono text-brand-mute mt-3 mb-2">Top proof sources</div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {sources.map((s, i) => (
            <span key={s} className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${palette[i % palette.length]}`}>{s}</span>
          ))}
        </div>
        <ul className="space-y-1.5 border-t border-black/5 pt-2">
          {[
            { n: "Alex Rivera", st: "READY", c: "chip-lavender", risk: "LOW" },
            { n: "Maya Chen", st: "VIP", c: "chip-lavender", risk: "LOW" },
            { n: "Anika Sharma", st: "HIGH FIT", c: "chip-mint", risk: "LOW" },
            { n: "James Wu", st: "REVIEW", c: "chip-peach", risk: "MED" },
          ].map((c) => (
            <li key={c.n} className="flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-brand-tint" />
                <span className="text-brand-ink">{c.n}</span>
                <span className={`chip ${c.c} font-mono text-[9px] px-1.5 py-0`}>{c.st}</span>
              </span>
              <span className={`label-mono ${c.risk === "LOW" ? "text-brand-good" : "text-brand-gold"}`}>{c.risk}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const RECRUITER_PANELS: Record<
  RecruiterTab,
  { eyebrow: string; title: string; copy: string; cta: string; panel: React.ReactNode }
> = {
  brief: {
    eyebrow: "Job Brief Builder · Aristotle",
    title: "From rough idea to recruiter-ready brief in 2 minutes",
    copy:
      "Aristotle asks a handful of conversational questions, then ships three artifacts in one pass — a recruiter brief, a LinkedIn post you can publish, and a Boolean candidate search query. Drop a draft JD or describe the role roughly. Your brief writes itself in the right pane as you answer.",
    cta: "Build a brief with Aristotle",
    panel: <BriefPanel />,
  },
  intake: {
    eyebrow: "Candidate Intake · Aristotle",
    title: "Ranked candidates for the role you actually described",
    copy:
      "Tell Aristotle what you're hiring for — Backend engineer for MVP, Founding full-stack, Data analyst for launch, Product designer for v1. The chat compresses sourcing into one composer; the right pane stages discovered candidates ranked by fit against your brief, not a generic title match.",
    cta: "Open candidate intake",
    panel: <IntakePanel />,
  },
  interviews: {
    eyebrow: "Interview Command Live · Sherlock",
    title: "Triage, prep, and screen — all backed by triangulated proof",
    copy:
      "Sherlock surfaces the candidates you've already selected, plus a constellation of top proof sources — universities, employers, clubs, certifications — color-coded so you can scan institutional credibility at a glance. Filter by READY, VIP, HIGH FIT or REVIEW, and open a one-click interview packet with red flags and scorecard.",
    cta: "Open interview command",
    panel: <InterviewsPanel />,
  },
};

function RecruiterFeatures() {
  const [active, setActive] = useState<RecruiterTab>("brief");
  const data = RECRUITER_PANELS[active];

  return (
    <section className="bg-brand-bg relative">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="label-mono text-brand-mute mb-3">[01] How FORGE works</div>
        <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl">
          Brief, intake, interview — one command center.
        </h2>

        <div className="mt-12 border-t border-black/10">
          <div className="flex">
            {recruiterTabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex items-center gap-2 px-5 py-3.5 label-mono border-r border-black/10 transition-colors ${
                  active === t.key
                    ? "text-brand-purple bg-white"
                    : "text-brand-mute bg-brand-bg hover:text-brand-ink"
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
            <div className="flex-1 diag-pattern border-r border-black/10" />
          </div>

          <div className="grid lg:grid-cols-2 border-t border-black/10">
            <div className="p-6 lg:p-10 border-r border-black/10 bg-white">
              {data.panel}
            </div>
            <div className="p-8 lg:p-14 bg-white flex flex-col justify-center">
              <div className="label-mono text-brand-purple">{data.eyebrow}</div>
              <h3 className="font-display mt-3 text-[32px] md:text-[40px] leading-[1.1] tracking-tightest text-brand-ink">
                {data.title}
              </h3>
              <p className="mt-5 text-brand-muted text-[15px] leading-relaxed max-w-md">
                {data.copy}
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a href="#" className="btn-dark">{data.cta}</a>
                <a href="#" className="btn-outline">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STUDENT FEATURES -------------------- */

const studentTabs: {
  key: StudentTab;
  label: string;
  agent: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "roadmap",
    label: "Roadmap",
    agent: "Aristotle",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M2 12L6 4L10 10L14 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "jobs",
    label: "Jobs",
    agent: "Columbus",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="2.5" y="4.5" width="11" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 4.5V3.5A1 1 0 0 1 7 2.5H9A1 1 0 0 1 10 3.5V4.5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    key: "profile",
    label: "Profile",
    agent: "Aristotle",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 13.5C4 11 6 10 8 10S12 11 12.5 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "collections",
    label: "Collections",
    agent: "Saved",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M3 3H10A1 1 0 0 1 11 4V13L7 11L3 13V3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M11 5H13V14L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const STUDENT_PANELS: Record<
  StudentTab,
  {
    eyebrow: string;
    title: string;
    copy: string;
    cta: string;
    bullets: string[];
    image: string;
    imageAlt: string;
  }
> = {
  roadmap: {
    eyebrow: "Roadmap · Aristotle",
    title: "A guided learning roadmap calibrated to you",
    copy:
      "Aristotle generates a visual mind-map of every topic between you and your target role — calibrated to your current expertise, your goal, and your weekly study time. Mark topics complete, switch between mind-map and linear pathway, and watch the readiness gauge tick up.",
    cta: "Generate my roadmap",
    bullets: [
      "Quick suggestions: Data Analyst (360h), AI Engineer (520h), Frontend (420h)",
      "Customize by expertise level, goal, and weekly hours",
      "Granular topic completion: 0 of 52 topics, 420h / 12 months",
    ],
    image: "/student/roadmap-frontend.png",
    imageAlt: "Aristotle generates a Frontend Engineer roadmap as a horizontal mind-map of topics",
  },
  jobs: {
    eyebrow: "Jobs · Columbus",
    title: "An AI scout that ranks roles, not a job board you scroll",
    copy:
      "Columbus stages role dossiers from RemoteOK, HN Who's Hiring, GitHub Jobs, Adzuna, and company career pages — then ranks each one against your profile with a % match, salary band, tag chips, and a one-line relevance summary you can act on.",
    cta: "Send Columbus scouting",
    bullets: [
      "Filter pills: Remote, Internship, Startups, MNC, 90%+ Match",
      "Live shortlist with match % and ranked relevance summary",
      "Sources transparent — every dossier shows where it came from",
    ],
    image: "/student/jobs-columbus.png",
    imageAlt: "Columbus shortlist of five backend engineer roles ranked by match percentage",
  },
  profile: {
    eyebrow: "Manage Profile · Aristotle",
    title: "Turn scattered evidence into a recruiter-grade dossier",
    copy:
      "Verified projects with proof scores, skill chips with confidence percentages, role-fit summaries written for each target, plus a readiness meter per track. Connect LinkedIn or GitHub and Aristotle does the rest.",
    cta: "Build my profile",
    bullets: [
      "Skill confidence: React 93% · TypeScript 91% · Python 88%",
      "Project evidence stack with proof scores (96, 91, …)",
      "Per-track readiness meter — 92% Frontend, 70% Backend, 84% AI",
    ],
    image: "/student/profile-readiness.png",
    imageAlt: "Recruiter-ready profile with verified projects, skill chips, and readiness meter",
  },
  collections: {
    eyebrow: "Collections",
    title: "One workspace for every saved profile, role, and roadmap",
    copy:
      "Save tailored profile variants per target — IBM SDE, Backend Engineer, Frontend role — alongside ranked job dossiers and roadmaps. Keep an apply pipeline that mirrors how you actually job-hunt: many roles, many versions, one source of truth.",
    cta: "Open Collections",
    bullets: [
      "11 saved items: 4 Profiles · 4 Job shortlist · 3 Roadmaps",
      "High-signal saves automatically tagged by Aristotle",
      "Profile versioning per target role — never edit your master",
    ],
    image: "/student/collections-saved.png",
    imageAlt: "Saved Collection workspace with profile versions, jobs, and roadmaps",
  },
};

function StudentFeatures() {
  const [active, setActive] = useState<StudentTab>("roadmap");
  const data = STUDENT_PANELS[active];

  return (
    <section className="relative bg-forge-cream">
      <div className="absolute inset-0 dotted-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-mono-warm">[01] The four modules</span>
          <span className="h-px flex-1 bg-forge-line" />
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-forge text-[44px] md:text-[58px] leading-[1.0] text-forge-ink max-w-3xl">
            One product. <br />
            <span className="text-forge-amber">Four ways to forge proof.</span>
          </h2>
          <p className="text-[15px] text-forge-mute max-w-sm leading-relaxed">
            Roadmap, Jobs, Profile, Collections — every module is anchored by Aristotle
            (or its scouting twin, Columbus). Same workspace. Same dotted-grid canvas.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-px bg-forge-line border border-forge-line rounded-2xl overflow-hidden">
          <div className="lg:col-span-3 bg-forge-paper">
            <div role="tablist" aria-label="FORGE modules">
              {studentTabs.map((t) => {
                const isActive = active === t.key;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(t.key)}
                    className={`relative w-full text-left flex items-start gap-3 px-6 py-5 border-b border-forge-line transition-colors ${
                      isActive ? "bg-white" : "hover:bg-white/60"
                    }`}
                  >
                    <span
                      className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? "bg-forge-amber text-forge-ink" : "bg-white border border-forge-line text-forge-mute"
                      }`}
                    >
                      {t.icon}
                    </span>
                    <span className="flex-1">
                      <span className="block text-[15px] font-medium text-forge-ink">{t.label}</span>
                      <span className="block label-mono-warm mt-0.5">{t.agent}</span>
                    </span>
                    {isActive && (
                      <span className="absolute inset-y-0 right-0 w-1 bg-forge-amber" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-9 bg-white">
            <div className="grid lg:grid-cols-2 gap-0 h-full">
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="label-mono-warm">{data.eyebrow}</div>
                <h3 className="font-forge mt-3 text-[28px] md:text-[36px] leading-[1.05] text-forge-ink">
                  {data.title}
                </h3>
                <p className="mt-4 text-forge-ink/75 text-[15px] leading-relaxed">
                  {data.copy}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {data.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[14px] text-forge-ink/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-forge-amber shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center gap-3">
                  <a href="#" className="btn-amber">{data.cta}</a>
                  <a href="#" className="btn-ink-pill">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M3 2L9 6L3 10V2Z" fill="white" />
                    </svg>
                    See it live
                  </a>
                </div>
              </div>

              <div className="relative bg-forge-paper border-l border-forge-line p-6 lg:p-8 min-h-[380px]">
                <div className="absolute inset-0 dotted-grid opacity-50 pointer-events-none" />
                <div className="relative h-full">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-forge-line shadow-xl bg-white">
                    <Image
                      src={data.image}
                      alt={data.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-left-top"
                      priority={active === "roadmap"}
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 bg-forge-ink text-forge-amber text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
                    Live preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesTabs() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentFeatures /> : <RecruiterFeatures />;
}
