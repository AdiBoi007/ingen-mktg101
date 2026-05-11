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
          iNGEN replaces resume-claim hiring with a triangulated confidence score — work,
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
    <section className="relative bg-brand-deep text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 halftone-bottom opacity-90 pointer-events-none" />
      <div className="mx-auto max-w-[1100px] px-6 py-28 text-center relative">
        <span className="label-mono text-brand-lavender inline-block mb-6">The shift</span>
        <h2 className="font-display text-[44px] md:text-[64px] leading-[1.05] tracking-tightest">
          From applying. <br />
          Start <span className="text-brand-lavender">proving.</span>
        </h2>
        <p className="mt-6 text-[20px] md:text-[26px] text-white/85 max-w-3xl mx-auto leading-snug">
          Resumes are flat. Recruiters scan for signal. iNGEN turns every project,
          internship, and side-quest into ranked, verifiable proof — and matches you
          to the roles where it lands hardest.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          {[
            { stat: "82%", label: "average recruiter readiness after 4 weeks", c: "text-brand-lavender" },
            { stat: "3×", label: "more callbacks vs. resume-only applicants", c: "text-brand-good" },
            { stat: "5", label: "ranked role dossiers per Columbus scout", c: "text-brand-gold" },
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

export default function SectionShift() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentShift /> : <RecruiterShift />;
}
