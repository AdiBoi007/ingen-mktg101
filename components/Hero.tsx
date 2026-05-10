"use client";

import { useState } from "react";
import { useAudience } from "./AudienceContext";

const recruiterPlaceholders = [
  "Backend engineer for MVP",
  "Founding full-stack engineer",
  "Data analyst for launch",
  "Product designer for v1",
  "Alex Rivera, github",
];

const studentPlaceholders = [
  "Data Analyst",
  "AI Engineer",
  "Frontend Engineer",
  "Backend Developer at DoorDash",
  "Product Manager at a Series B startup",
];

function RecruiterHero() {
  const [value, setValue] = useState("");
  const [phIndex, setPhIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-brand-deep text-white">
      <div className="absolute inset-x-0 top-0 h-40 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-56 halftone-bottom opacity-90 pointer-events-none" />

      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-12 relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 label-mono text-white">
            <span className="text-brand-lavender">New</span>
            <span className="opacity-50">|</span>
            <span>Aristotle + Sherlock are live</span>
          </span>

          <h1 className="font-display mt-7 text-[64px] md:text-[88px] leading-[0.95] tracking-tightest text-white">
            Proof-first hiring.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[17px] leading-relaxed text-white/85">
            FORGE is the{" "}
            <span className="text-white">AI recruiter command center</span> built
            for startup hiring teams (Idea → Series A). Two agents — Aristotle
            runs the workflow, Sherlock triangulates the proof — across GitHub,
            work history, university, and club signals.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3">
            <a href="#" className="btn-dark !bg-white !text-brand-ink hover:!bg-white/90">
              Try for Free
            </a>
            <a href="#" className="btn-outline btn-outline-light">
              Book a Demo
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-3">
            <span className="inline-block bg-brand-ink text-white label-mono px-3 py-1.5 rounded-sm">
              Tell me what role you&apos;re hiring for
            </span>
          </div>

          <div className="mx-auto max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden">
            <div className="px-4 pt-3">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-purple/30 bg-brand-tint px-2.5 py-1 text-[13px] text-brand-purple">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L9.5 6L13.5 7.5L9.5 9L8 13L6.5 9L2.5 7.5L6.5 6L8 2Z" fill="currentColor" />
                </svg>
                Aristotle — candidate intake
              </span>
            </div>
            <div className="flex items-center px-3 py-3 gap-2">
              <svg className="ml-1 text-brand-mute" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                <path d="M20 20L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setPhIndex((i) => (i + 1) % recruiterPlaceholders.length)}
                placeholder={recruiterPlaceholders[phIndex]}
                className="flex-1 outline-none text-[15px] text-brand-ink placeholder:text-brand-mute py-1"
              />
              <button aria-label="Search" className="w-9 h-9 rounded-md bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple/90 transition-colors">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudentHero() {
  const [value, setValue] = useState("");
  const [phIndex, setPhIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-brand-deep text-white">
      <div className="absolute inset-x-0 top-0 h-40 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-56 halftone-bottom opacity-90 pointer-events-none" />

      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-12 relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 label-mono text-white">
            <span className="text-brand-lavender">New</span>
            <span className="opacity-50">|</span>
            <span>Aristotle + Columbus are live</span>
          </span>

          <h1 className="font-display mt-7 text-[64px] md:text-[88px] leading-[0.95] tracking-tightest text-white">
            Build the role roadmap.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-[17px] leading-relaxed text-white/85">
            iNGEN is the{" "}
            <span className="text-white">proof-first career platform</span> built
            for students and early-career engineers. Two agents — Aristotle
            generates the roadmap, Columbus scouts the roles — across GitHub,
            LinkedIn, Coursera, and project evidence.
          </p>

          <div className="mt-9 flex items-center justify-center gap-3">
            <a href="#" className="btn-dark bg-white !text-brand-ink hover:!bg-white/90">
              Start your roadmap
            </a>
            <a href="#" className="btn-outline btn-outline-light">
              Watch the Demo
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-3">
            <span className="inline-block bg-brand-ink text-white label-mono px-3 py-1.5 rounded-sm">
              Tell Aristotle your target role
            </span>
          </div>

          <div className="mx-auto max-w-2xl bg-white rounded-md shadow-2xl overflow-hidden">
            <div className="px-4 pt-3">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-brand-purple/30 bg-brand-tint px-2.5 py-1 text-[13px] text-brand-purple">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L9.5 6L13.5 7.5L9.5 9L8 13L6.5 9L2.5 7.5L6.5 6L8 2Z" fill="currentColor" />
                </svg>
                Aristotle — roadmap generator
              </span>
            </div>
            <div className="flex items-center px-3 py-3 gap-2">
              <svg className="ml-1 text-brand-mute" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                <path d="M20 20L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setPhIndex((i) => (i + 1) % studentPlaceholders.length)}
                placeholder={studentPlaceholders[phIndex]}
                className="flex-1 outline-none text-[15px] text-brand-ink placeholder:text-brand-mute py-1"
              />
              <button aria-label="Search" className="w-9 h-9 rounded-md bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple/90 transition-colors">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentHero /> : <RecruiterHero />;
}
