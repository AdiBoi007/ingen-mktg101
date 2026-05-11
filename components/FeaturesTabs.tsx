"use client";

import { useState, useEffect, useRef } from "react";
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
        <div className="label-mono text-brand-mute mb-3">[01] How iNGEN works</div>
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
    pill: string;
    title: string;
    copy: React.ReactNode;
    primaryCta: string;
    secondaryCta: string;
    image: string;
    imageAlt: string;
    /** later: video URL to swap in on scroll */
    video?: string;
    /** stage gradient — left → right */
    stageFrom: string;
    stageTo: string;
    /** accent for pill label */
    pillBg: string;
    pillFg: string;
  }
> = {
  roadmap: {
    pill: "ROADMAP & READINESS",
    title: "A learning roadmap calibrated to your hours, expertise, and goal.",
    copy: (
      <>
        Aristotle reads your background, target role and weekly hours — then ships a{" "}
        <strong className="text-brand-ink">52-topic Frontend Engineer plan</strong> tied to a{" "}
        <strong className="text-brand-ink">420-hour, 12-month budget</strong>. Switch between mind-map canvas and linear pathway, mark topics complete, and watch the readiness gauge climb in real time.
      </>
    ),
    primaryCta: "Try Aristotle",
    secondaryCta: "Watch the demo",
    image: "/student/roadmap-frontend.png",
    imageAlt: "Aristotle generates a Frontend Engineer roadmap as a horizontal mind-map of topics",
    stageFrom: "#5B2A86",
    stageTo: "#7C3AED",
    pillBg: "#EDE9FE",
    pillFg: "#5B21B6",
  },
  jobs: {
    pill: "COLUMBUS · JOB SCOUT",
    title: "Ranked role dossiers, not a job board you scroll.",
    copy: (
      <>
        Columbus scouts <strong className="text-brand-ink">RemoteOK, HN Who&apos;s Hiring, GitHub Jobs, Adzuna</strong> and company pages — then ranks every opening with a{" "}
        <strong className="text-brand-ink">% match, salary band, fit reasons</strong> and a one-click prep flow into your profile. Filter pills surface what matters: 90%+ match, remote, internship, startup.
      </>
    ),
    primaryCta: "Send Columbus scouting",
    secondaryCta: "Watch the demo",
    image: "/student/jobs-columbus.png",
    imageAlt: "Columbus shortlist of five backend engineer roles ranked by match percentage",
    stageFrom: "#B45309",
    stageTo: "#F59E0B",
    pillBg: "#FEF3C7",
    pillFg: "#92400E",
  },
  profile: {
    pill: "PROFILE & PROOF",
    title: "Turn scattered evidence into a recruiter-grade dossier.",
    copy: (
      <>
        Skill confidence per role — <strong className="text-brand-ink">React 93%, TypeScript 91%, Python 88%</strong>. Verified projects scored to{" "}
        <strong className="text-brand-ink">proof 96</strong>. Role-fit summaries auto-generated for IBM SDE, Backend, Frontend tracks. Connect GitHub or LinkedIn — Aristotle wires the rest.
      </>
    ),
    primaryCta: "Build my profile",
    secondaryCta: "Watch the demo",
    image: "/student/profile-readiness.png",
    imageAlt: "Recruiter-ready profile with verified projects, skill chips, and readiness meter",
    stageFrom: "#1E3A8A",
    stageTo: "#3B5BDB",
    pillBg: "#DBEAFE",
    pillFg: "#1E40AF",
  },
  collections: {
    pill: "COLLECTIONS · WORKSPACE",
    title: "Every saved profile, role, and roadmap — one workspace.",
    copy: (
      <>
        <strong className="text-brand-ink">4 profile variants</strong> per target — IBM SDE, Backend Engineer, Frontend, PM track —{" "}
        <strong className="text-brand-ink">11 saves total</strong>, high-signal items auto-tagged by Aristotle. Profile versioning per role means you never edit your master to apply.
      </>
    ),
    primaryCta: "Open Collections",
    secondaryCta: "Watch the demo",
    image: "/student/collections-saved.png",
    imageAlt: "Saved Collection workspace with profile versions, jobs, and roadmaps",
    stageFrom: "#155E63",
    stageTo: "#0E9F8E",
    pillBg: "#CCFBF1",
    pillFg: "#0F766E",
  },
};

const STUDENT_TAB_ORDER: StudentTab[] = ["roadmap", "jobs", "profile", "collections"];

function HatchPattern() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <pattern id="hatch-stripes" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#D4D4D4" strokeWidth="1" />
        </pattern>
        <pattern id="iso-grid" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(0)">
          <path d="M0 20 L40 0 M0 40 L40 20 M-20 20 L20 0 M0 0 L40 40 M-20 20 L20 40 M0 0 L40 40" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
    </svg>
  );
}

function HatchBand({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-12 ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <rect width="100%" height="100%" fill="url(#hatch-stripes)" />
      </svg>
    </div>
  );
}

const SEGMENT_VH = 90; // each tab occupies 90vh of scroll
const TOTAL_VH = SEGMENT_VH * STUDENT_TAB_ORDER.length;

function StudentFeatures() {
  const [active, setActive] = useState<StudentTab>("roadmap");
  const [progress, setProgress] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const data = STUDENT_PANELS[active];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mql.matches);
    const onChange = () => setReduceMotion(mql.matches);
    mql.addEventListener?.("change", onChange);
    return () => mql.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || reduceMotion) return;
    let rafId: number | null = null;
    const update = () => {
      const el = pinRef.current;
      if (!el) {
        rafId = null;
        return;
      }
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        rafId = null;
        return;
      }
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      const idx = Math.min(
        STUDENT_TAB_ORDER.length - 1,
        Math.floor(p * STUDENT_TAB_ORDER.length)
      );
      setActive(STUDENT_TAB_ORDER[idx]);
      rafId = null;
    };
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  const scrollToTab = (index: number) => {
    if (reduceMotion) {
      setActive(STUDENT_TAB_ORDER[index]);
      return;
    }
    const el = pinRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollable = rect.height - window.innerHeight;
    const target =
      containerTop + (scrollable * (index / STUDENT_TAB_ORDER.length)) + 24;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section className="bg-[#FAFAFA] relative">
      <HatchPattern />

      {/* Heading region — scrolls normally above the pin */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-32 pb-20">
        <div className="font-mono text-[12px] tracking-[0.2em] uppercase text-[#8A8A8A] mb-8">
          [01] How iNGEN works
        </div>
        <h2 className="font-display text-[48px] md:text-[88px] lg:text-[112px] leading-[0.96] tracking-[-0.04em] text-[#0E0E0E] max-w-6xl font-medium">
          How it works:<br />
          Students + Agents.
        </h2>
        <p className="mt-8 text-[18px] md:text-[20px] leading-relaxed text-[#6B6B6B] max-w-2xl">
          Four modules. Two agents. One workspace where roadmap, jobs, profile and
          collections live side by side — scroll to step through each one.
        </p>
      </div>

      {/* Pinned region — sticky inside a tall container drives tab progression */}
      <div
        ref={pinRef}
        className="relative"
        style={{ height: reduceMotion ? "auto" : `${TOTAL_VH}vh` }}
      >
        <div
          className={
            reduceMotion
              ? "relative bg-[#FAFAFA] flex flex-col"
              : "sticky top-0 h-screen min-h-[680px] overflow-hidden bg-[#FAFAFA] flex flex-col"
          }
        >
          {/* Tab bar */}
          <div
            role="tablist"
            aria-label="iNGEN modules"
            className="border-y border-[#E5E5E5] flex relative flex-shrink-0"
          >
            {studentTabs.map((t, i) => {
              const isActive = active === t.key;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.key}`}
                  id={`tab-${t.key}`}
                  onClick={() => scrollToTab(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowRight")
                      scrollToTab((i + 1) % STUDENT_TAB_ORDER.length);
                    if (e.key === "ArrowLeft")
                      scrollToTab(
                        (i - 1 + STUDENT_TAB_ORDER.length) % STUDENT_TAB_ORDER.length
                      );
                  }}
                  className={`relative flex items-center justify-center gap-2.5 flex-1 max-w-[320px] px-7 py-5 font-mono text-[13px] uppercase tracking-[0.08em] border-r border-[#E5E5E5] transition-colors ${
                    isActive
                      ? "text-[#5B21B6] font-semibold bg-white"
                      : "text-[#8A8A8A] hover:text-[#0E0E0E] bg-[#FAFAFA]"
                  }`}
                >
                  <span>{t.icon}</span>
                  <span>{t.label}</span>
                </button>
              );
            })}
            <div className="flex-1 relative">
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <rect width="100%" height="100%" fill="url(#hatch-stripes)" />
              </svg>
            </div>
          </div>

          {/* Progress indicator — drives smoothly with scroll */}
          <div className="h-[3px] w-full bg-[#E5E5E5] relative overflow-hidden flex-shrink-0">
            <div
              className="absolute top-0 left-0 h-full bg-[#5B21B6]"
              style={{
                width: `${progress * 100}%`,
                transition: reduceMotion ? "width 300ms ease" : "none",
              }}
            />
          </div>

          {/* Panel — fills remaining viewport height */}
          <div
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            className="grid lg:grid-cols-[45%_55%] flex-1 overflow-hidden bg-white min-h-0"
          >
            {/* LEFT — stage */}
            <div
              key={`stage-${active}`}
              className="relative overflow-hidden animate-[fadeUp_500ms_ease-out]"
              style={{
                background: `linear-gradient(135deg, ${data.stageFrom} 0%, ${data.stageTo} 100%)`,
              }}
            >
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <rect width="100%" height="100%" fill="url(#iso-grid)" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/5 pointer-events-none" />
              <div className="relative h-full flex items-center justify-center p-8 lg:p-16">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl ring-1 ring-black/10 bg-white">
                  {data.video ? (
                    <video
                      key={data.video}
                      src={data.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      key={data.image}
                      src={data.image}
                      alt={data.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-top"
                      priority={active === "roadmap"}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT — copy */}
            <div
              key={`copy-${active}`}
              className="p-10 lg:p-20 flex flex-col justify-center bg-white animate-[fadeUp_500ms_ease-out]"
            >
              <div>
                <span
                  className="inline-block font-mono text-[12px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm"
                  style={{ background: data.pillBg, color: data.pillFg }}
                >
                  {data.pill}
                </span>
              </div>
              <h3 className="font-display mt-7 text-[36px] md:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.025em] text-[#0E0E0E] font-medium max-w-2xl">
                {data.title}
              </h3>
              <p className="mt-7 text-[17px] md:text-[18px] leading-relaxed text-[#6B6B6B] max-w-lg">
                {data.copy}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#"
                  className="font-mono uppercase tracking-[0.05em] text-[13px] bg-[#0E0E0E] text-white px-7 py-4 border border-[#0E0E0E] hover:bg-white hover:text-[#0E0E0E] transition-colors"
                >
                  {data.primaryCta}
                </a>
                <a
                  href="#"
                  className="font-mono uppercase tracking-[0.05em] text-[13px] bg-white text-[#0E0E0E] border border-[#0E0E0E] px-7 py-4 hover:bg-[#0E0E0E] hover:text-white transition-colors"
                >
                  {data.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hatch divider */}
      <HatchBand />
    </section>
  );
}

export default function FeaturesTabs() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentFeatures /> : <RecruiterFeatures />;
}
