"use client";

import Logo from "./Logo";
import { useAudience } from "./AudienceContext";

const recruiterCols = [
  { title: "Product", links: ["Dashboard", "Job Brief · Aristotle", "Candidate Intake · Aristotle", "Analyse Profile · Sherlock", "Interviews · Sherlock", "Settings"] },
  { title: "Agents", links: ["Aristotle (workflow AI)", "Sherlock (proof AI)", "Strictness modes", "GitHub Pull", "Auto-briefs"] },
  { title: "Resources", links: ["Docs", "Pricing", "Hiring playbook", "Proof scoring guide", "Partners", "Help Center"] },
  { title: "Security", links: ["Trust Center", "AI Audit Center", "Privacy Choices", "Data handling"] },
];

const studentCols = [
  { title: "Product", links: ["Roadmap (Aristotle)", "Jobs (Columbus)", "Manage Profile", "Collections", "Chrome Extension"] },
  { title: "Resources", links: ["Docs", "Pricing", "Roadmap Library", "Sample Profiles", "Interview Prep", "Help Center"] },
  { title: "For students", links: ["Free tier", "Campus ambassadors", "Referral", "Discord community", "Study guides"] },
  { title: "Company", links: ["Blog", "Careers", "LinkedIn", "X / Twitter", "Privacy Choices"] },
];

function RecruiterFooter() {
  return (
    <footer className="bg-brand-deep text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {recruiterCols.map((c) => (
            <div key={c.title}>
              <h4 className="label-mono text-white/55 mb-4">{c.title}</h4>
              <ul className="space-y-2.5 text-[13px]">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-white/85 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="label-mono text-white/55 mb-4">iNGEN in action</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="text-white/85 hover:text-white">Free Trial</a></li>
              <li><a href="#" className="text-white/85 hover:text-white">Sign In</a></li>
            </ul>
            <a href="#" className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 transition rounded-md px-3 py-2 text-[12px]">
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 2L9 6L3 10V2Z" fill="white" /></svg>
              </span>
              Watch Sherlock prove a profile
            </a>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="font-display text-[120px] md:text-[180px] leading-none text-white/5 tracking-tightest select-none pointer-events-none">
            iNGEN
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/60">
            <div className="flex items-center gap-3">
              <Logo light />
              <span>© 2026 iNGEN</span>
              <span className="opacity-60">·</span>
              <span>Proof-first hiring</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookies</a>
              <a href="#" className="hover:text-white">GDPR &amp; CCPA</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function StudentFooter() {
  return (
    <footer className="bg-brand-deep text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {studentCols.map((c) => (
            <div key={c.title}>
              <h4 className="label-mono text-white/55 mb-4">{c.title}</h4>
              <ul className="space-y-2.5 text-[13px]">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="text-white/85 hover:text-white">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="label-mono text-white/55 mb-4">iNGEN in action</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="text-white/85 hover:text-white">Start free</a></li>
              <li><a href="#" className="text-white/85 hover:text-white">Sign In</a></li>
            </ul>
            <a href="#" className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 transition rounded-md px-3 py-2 text-[12px]">
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 2L9 6L3 10V2Z" fill="white" /></svg>
              </span>
              Watch Aristotle build a roadmap
            </a>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="font-display text-[120px] md:text-[180px] leading-none text-white/5 tracking-tightest select-none pointer-events-none">
            iNGEN
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/60">
            <div className="flex items-center gap-3">
              <Logo light />
              <span>© 2026 iNGEN</span>
              <span className="opacity-60">·</span>
              <span>Proof-first hiring</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookies</a>
              <a href="#" className="hover:text-white">Trust Center</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentFooter /> : <RecruiterFooter />;
}
