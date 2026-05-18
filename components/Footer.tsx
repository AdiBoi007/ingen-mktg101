"use client";

import { useState } from "react";
import Logo from "./Logo";
import { useAudience } from "./AudienceContext";

const recruiterCols = [
  {
    title: "Platform",
    links: [
      "Dashboard",
      "Aristotle — workflow AI",
      "Sherlock — proof AI",
      "Interviews",
      "Settings",
    ],
  },
  {
    title: "Resources",
    links: [
      "Docs",
      "Pricing",
      "Hiring playbook",
      "Proof scoring guide",
      "Partners",
      "Help Center",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Media Kit", "Press"],
  },
  {
    title: "Security & Legal",
    links: ["Trust Center", "AI Audit Center", "Privacy Choices", "Data handling"],
  },
];

const studentCols = [
  {
    title: "Platform",
    links: [
      "Roadmap (Aristotle)",
      "Jobs (Columbus)",
      "Manage Profile",
      "Collections",
      "Chrome Extension",
    ],
  },
  {
    title: "Resources",
    links: [
      "Docs",
      "Pricing",
      "Roadmap Library",
      "Sample Profiles",
      "Interview Prep",
      "Help Center",
    ],
  },
  {
    title: "For Students",
    links: [
      "Free tier",
      "Campus ambassadors",
      "Referral",
      "Discord community",
      "Study guides",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Media Kit", "Press"],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X / Twitter",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <h4 className="label-mono text-white/55 mb-4">Get Started</h4>
      <ul className="space-y-2.5 text-[13px] mb-5">
        <li>
          <a href="#" className="text-white/85 hover:text-white">
            Free Trial
          </a>
        </li>
        <li>
          <a href="#" className="text-white/85 hover:text-white">
            Sign In
          </a>
        </li>
        <li>
          <a href="#" className="text-white/85 hover:text-white">
            Book a Demo
          </a>
        </li>
      </ul>

      <p className="text-[12px] text-white/50 mb-2">
        Stay updated on proof-first hiring
      </p>
      {submitted ? (
        <p className="text-[13px] text-emerald-400">You&apos;re on the list!</p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSubmitted(true);
          }}
          className="flex gap-1.5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="flex-1 min-w-0 bg-white/10 border border-white/10 rounded-md px-3 py-1.5 text-[13px] text-white placeholder:text-white/35 focus:outline-none focus:border-white/30"
          />
          <button
            type="submit"
            className="bg-white text-brand-deep font-medium rounded-md px-3 py-1.5 text-[12px] hover:bg-white/90 transition shrink-0"
          >
            Join
          </button>
        </form>
      )}
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-[12px] text-white/60">
          <Logo light />
          <span>© 2026 iNGEN</span>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-label={s.name}
              className="text-white/40 hover:text-white transition"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-[12px] text-white/60">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <span className="opacity-40">·</span>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <span className="opacity-40">·</span>
          <a href="#" className="hover:text-white transition">
            Cookies
          </a>
          <span className="opacity-40">·</span>
          <a href="#" className="hover:text-white transition">
            GDPR &amp; CCPA
          </a>
        </div>
      </div>

      <p className="text-center text-[11px] text-white/30 mt-6">
        iNGEN — Proof-first talent OS
      </p>
    </div>
  );
}

function RecruiterFooter() {
  return (
    <footer className="bg-brand-deep text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 pb-16 border-b border-white/10">
          {recruiterCols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55 mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2.5 text-[13px] leading-relaxed">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/85 hover:text-white transition"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <WaitlistForm />
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4 pt-6 text-[12px] text-white/50">
          <span>hello@ingenworkspace.com</span>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

function StudentFooter() {
  return (
    <footer className="bg-brand-deep text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 pb-16 border-b border-white/10">
          {studentCols.map((c) => (
            <div key={c.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55 mb-4">
                {c.title}
              </h4>
              <ul className="space-y-2.5 text-[13px] leading-relaxed">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-white/85 hover:text-white transition"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <WaitlistForm />
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4 pt-6 text-[12px] text-white/50">
          <span>hello@ingenworkspace.com</span>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}

export default function Footer() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentFooter /> : <RecruiterFooter />;
}
