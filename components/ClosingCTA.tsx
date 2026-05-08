"use client";

import { useAudience } from "./AudienceContext";

function RecruiterCTA() {
  return (
    <section className="relative bg-brand-deep text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 halftone-bottom opacity-90 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 chip mb-6 !bg-white/10 !border-white/20 !text-white">
          <span className="pulse-dot" />
          Aristotle &amp; Sherlock are online
        </span>
        <h2 className="font-display text-[44px] md:text-[64px] leading-[1.05] tracking-tightest">
          Stop hiring resumes. <br />
          <span className="text-brand-lavender">Start hiring proof.</span>
        </h2>
        <p className="mt-5 text-[16px] text-white/80 max-w-xl mx-auto">
          Spin up your hiring command center in under 10 minutes. Connect GitHub, set your
          $24k budget, and let Aristotle and Sherlock work the pipeline.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <a href="#" className="btn-dark bg-white !text-brand-ink hover:!bg-white/90">
            Start free
          </a>
          <a href="#" className="btn-outline btn-outline-light">
            Book a demo
          </a>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
          {[
            "Aristotle drafts your brief, post & search query",
            "Sherlock triangulates the proof per candidate",
            "Pipeline + budget + actions in one dashboard",
          ].map((t, i) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[13px] text-white/80 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-lavender">0{i + 1}</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudentCTA() {
  return (
    <section className="relative bg-forge-ink text-white overflow-hidden">
      <div className="absolute inset-0 dotted-grid-dim opacity-30 pointer-events-none" />
      <div
        className="absolute -top-32 left-1/4 w-[460px] h-[460px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 right-1/4 w-[460px] h-[460px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1320px] px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 chip chip-amber mb-6">
          <span>🔥</span>
          Free to start · No card required
        </span>
        <h2 className="font-forge text-[48px] md:text-[72px] leading-[0.98]">
          Stop applying. <br />
          <span className="text-forge-amber">Start forging.</span>
        </h2>
        <p className="mt-6 text-[17px] text-white/75 max-w-xl mx-auto">
          One workspace. Two agents. A roadmap, a scout, a profile, and a saved
          collection that already speaks recruiter.
        </p>
        <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
          <a href="#" className="btn-amber">
            Start your roadmap
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M2 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#"
            className="btn-outline btn-outline-light !rounded-full"
          >
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M3 2L9 6L3 10V2Z" fill="white" />
            </svg>
            Watch the 90-second demo
          </a>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
          {[
            "Aristotle generates your roadmap",
            "Columbus scouts ranked roles",
            "Your readiness gauge starts climbing",
          ].map((t, i) => (
            <div key={t} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[13px] text-white/80 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-forge-amber">0{i + 1}</span>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ClosingCTA() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentCTA /> : <RecruiterCTA />;
}
