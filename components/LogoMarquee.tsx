"use client";

import { useAudience } from "./AudienceContext";

const recruiterLogos = [
  "Hello AI", "Orbit Commerce", "Sheridine Studio", "Forge Labs", "Stark", "Initech",
  "Vial", "Hooli", "Acme Inc.", "Cursor", "Anyscale", "Founders Fund",
];

const studentSchools = [
  "University of Sydney", "MIT", "Stanford", "Carnegie Mellon", "Georgia Tech",
  "UC Berkeley", "Waterloo", "ETH Zürich", "IIT Bombay", "Imperial College",
];

function RecruiterMarquee() {
  return (
    <section className="bg-brand-bg border-t border-b border-black/5 py-10 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 mb-5 flex items-center justify-between">
        <span className="label-mono text-brand-mute">Hiring teams shipping with FORGE</span>
        <span className="label-mono text-brand-mute hidden md:inline">Idea → Series A · 30+ pipelines</span>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
          {[...recruiterLogos, ...recruiterLogos].map((name, i) => (
            <div key={i} className="flex items-center justify-center min-w-[160px] text-brand-ink/75">
              <span className="text-[22px] font-semibold tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StudentMarquee() {
  return (
    <section className="bg-forge-cream border-t border-b border-forge-line py-8 overflow-hidden relative">
      <div className="absolute inset-0 dotted-grid opacity-50" />
      <div className="relative mx-auto max-w-[1320px] px-6 mb-5 flex items-center justify-between">
        <span className="label-mono-warm">Trusted by students from</span>
        <span className="label-mono-warm hidden md:inline">Forging across 60+ campuses</span>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap gap-12 px-8">
          {[...studentSchools, ...studentSchools].map((name, i) => (
            <div key={i} className="flex items-center justify-center min-w-[200px] text-forge-ink/70 gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forge-amber" />
              <span className="text-[16px] font-medium tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LogoMarquee() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentMarquee /> : <RecruiterMarquee />;
}
