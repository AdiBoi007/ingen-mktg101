"use client";

import Logo from "./Logo";
import { useAudience } from "./AudienceContext";

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.linkedin.com/company/ingenlabs/", icon: <LinkedInIcon />, label: "LinkedIn" },
  { href: "https://www.instagram.com/ingen_labs/", icon: <InstagramIcon />, label: "Instagram" },
];

const linkHrefs: Record<string, string> = {
  Careers: "https://v0-ingen-labs-careers-page.vercel.app/",
  "Trust Center": "/trust",
  "Privacy Choices": "/privacy",
  "Data handling": "/privacy",
};

const recruiterCols = [
  { title: "Platform", links: ["Dashboard", "Aristotle — workflow AI", "Sherlock — proof AI", "Interviews", "Settings"] },
  { title: "Resources", links: ["Docs", "Pricing", "Hiring playbook", "Proof scoring guide", "Partners", "Help Center"] },
  { title: "Company", links: ["About Us", "Careers", "Blog", "Media Kit", "Press"] },
  { title: "Security & Legal", links: ["Trust Center", "AI Audit Center", "Privacy Choices", "Data handling"] },
];

const studentCols = [
  { title: "Platform", links: ["Roadmap (Aristotle)", "Jobs (Columbus)", "Manage Profile", "Collections", "Chrome Extension"] },
  { title: "Resources", links: ["Docs", "Pricing", "Roadmap Library", "Sample Profiles", "Interview Prep", "Help Center"] },
  { title: "For Students", links: ["Free tier", "Campus ambassadors", "Referral", "Discord community", "Study guides"] },
  { title: "Company", links: ["About Us", "Careers", "Blog", "Media Kit", "Press"] },
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
                {c.links.map((l) => {
                  const href = linkHrefs[l] ?? "#";
                  const external = href.startsWith("http");
                  return (
                    <li key={l}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-white/85 hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="label-mono text-white/55 mb-4">Get Started</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="text-white/85 hover:text-white">Free Trial</a></li>
              <li><a href="#" className="text-white/85 hover:text-white">Sign In</a></li>
              <li><a href="#" className="text-white/85 hover:text-white">Book a Demo</a></li>
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
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:text-white transition-colors">{s.icon}</a>
              ))}
              <span className="opacity-40">·</span>
              <a href={linkHrefs.Careers} target="_blank" rel="noopener noreferrer" className="hover:text-white">Careers</a>
              <span className="opacity-40">·</span>
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <span className="opacity-40">·</span>
              <a href="/terms" className="hover:text-white">Terms</a>
              <span className="opacity-40">·</span>
              <a href="/cookies" className="hover:text-white">Cookies</a>
              <span className="opacity-40">·</span>
              <a href="/trust" className="hover:text-white">Trust Center</a>
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
                {c.links.map((l) => {
                  const href = linkHrefs[l] ?? "#";
                  const external = href.startsWith("http");
                  return (
                    <li key={l}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-white/85 hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="label-mono text-white/55 mb-4">Get Started</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="text-white/85 hover:text-white">Start free</a></li>
              <li><a href="#" className="text-white/85 hover:text-white">Sign In</a></li>
              <li><a href="#" className="text-white/85 hover:text-white">Book a Demo</a></li>
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
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="hover:text-white transition-colors">{s.icon}</a>
              ))}
              <span className="opacity-40">·</span>
              <a href={linkHrefs.Careers} target="_blank" rel="noopener noreferrer" className="hover:text-white">Careers</a>
              <span className="opacity-40">·</span>
              <a href="/privacy" className="hover:text-white">Privacy</a>
              <span className="opacity-40">·</span>
              <a href="/terms" className="hover:text-white">Terms</a>
              <span className="opacity-40">·</span>
              <a href="/cookies" className="hover:text-white">Cookies</a>
              <span className="opacity-40">·</span>
              <a href="/trust" className="hover:text-white">Trust Center</a>
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
