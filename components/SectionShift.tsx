"use client";

import { useAudience } from "./AudienceContext";

function RecruiterShift() {
  return (
    <section className="relative bg-brand-deep text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 halftone-bottom opacity-90 pointer-events-none" />
      <div className="mx-auto max-w-[1100px] px-6 py-28 text-center relative">
        <span className="label-mono text-brand-lavender inline-block mb-6">The shift</span>
        <h2 className="font-display text-[44px] md:text-[64px] leading-[1.05] tracking-tightest">
          Stop hiring resumes. <br />
          Start hiring <span className="text-brand-lavender">proof.</span>
        </h2>
        <p className="mt-6 text-[20px] md:text-[26px] text-white/85 max-w-3xl mx-auto leading-snug">
          FORGE replaces resume-claim hiring with a triangulated confidence score — work,
          university, club affiliation, and open-source evidence — so every candidate
          you screen is investigated, not skimmed.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {[
            { stat: "2 min", label: "from intake → recruiter-ready brief, LinkedIn post & search query", c: "text-brand-lavender" },
            { stat: "Proof", label: "GitHub + work + university + club signals triangulated by Sherlock", c: "text-brand-good" },
            { stat: "Now / Next / Then", label: "AI action queue tied to the live pipeline", c: "text-brand-gold" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className={`font-display text-[36px] leading-none tracking-tightest ${s.c}`}>{s.stat}</div>
              <div className="mt-2 text-[13px] text-white/65 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudentShift() {
  return (
    <section className="relative bg-forge-ink text-white overflow-hidden">
      <div className="absolute inset-0 dotted-grid-dim opacity-30 pointer-events-none" />
      <div
        className="absolute -top-32 left-1/3 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
      />
      <div className="mx-auto max-w-[1100px] px-6 py-28 text-center relative">
        <span className="label-mono text-forge-amber inline-block mb-6">The shift</span>
        <h2 className="font-forge text-[44px] md:text-[64px] leading-[1.0]">
          From applying. To <span className="text-forge-amber">proving.</span>
        </h2>
        <p className="mt-6 text-[18px] md:text-[22px] text-white/80 max-w-3xl mx-auto leading-snug">
          Resumes are flat. Recruiters scan for signal. FORGE turns every project,
          internship, and side-quest into ranked, verifiable proof — and matches you
          to the roles where it lands hardest.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {[
            { stat: "82%", label: "average recruiter readiness after 4 weeks", c: "text-forge-amber" },
            { stat: "3×", label: "more callbacks vs. resume-only applicants", c: "text-forge-mint" },
            { stat: "5", label: "ranked role dossiers per Columbus scout", c: "text-forge-indigo2" },
          ].map((s) => (
            <div key={s.stat} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className={`font-forge text-[44px] leading-none ${s.c}`}>{s.stat}</div>
              <div className="mt-2 text-[13px] text-white/65 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SectionShift() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentShift /> : <RecruiterShift />;
}
