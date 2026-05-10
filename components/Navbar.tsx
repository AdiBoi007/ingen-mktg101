"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useAudience, Audience } from "./AudienceContext";

const navItems = [
  { label: "Features", hasMenu: false, href: "/#features" },
  { label: "Pricing", hasMenu: false, href: "/pricing" },
];

function AudienceSwitch() {
  const { audience, setAudience } = useAudience();
  const opts: { key: Audience; label: string }[] = [
    { key: "recruiter", label: "For Recruiters" },
    { key: "student", label: "For Students" },
  ];

  return (
    <div
      role="tablist"
      aria-label="Audience"
      className="relative inline-flex items-center bg-black/5 border border-black/10 rounded-full p-1"
    >
      <span
        aria-hidden
        className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-brand-ink shadow-sm transition-transform duration-300 ease-out ${
          audience === "student" ? "translate-x-[calc(100%+0px)]" : "translate-x-0"
        }`}
        style={{ left: 4 }}
      />
      {opts.map((o) => {
        const active = audience === o.key;
        return (
          <button
            key={o.key}
            role="tab"
            aria-selected={active}
            onClick={() => setAudience(o.key)}
            className={`relative z-10 label-mono px-3.5 py-1.5 rounded-full transition-colors ${
              active ? "text-white" : "text-brand-ink/70 hover:text-brand-ink"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export default function Navbar() {
  const { audience } = useAudience();
  const isStudent = audience === "student";

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur border-b transition-colors ${
        isStudent
          ? "bg-forge-cream/90 border-forge-line"
          : "bg-brand-bg/95 border-black/5"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-6 h-[68px] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`label-mono flex items-center gap-1.5 ${
                isStudent
                  ? "text-forge-ink/80 hover:text-forge-ink"
                  : "text-brand-ink/85 hover:text-brand-ink"
              }`}
            >
              {item.label}
              {item.hasMenu && (
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <AudienceSwitch />
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={`hidden sm:inline-block label-mono px-3 py-2 ${
              isStudent
                ? "text-forge-ink/80 hover:text-forge-ink"
                : "text-brand-ink/85 hover:text-brand-ink"
            }`}
          >
            Login
          </Link>
          {isStudent ? (
            <>
              <Link
                href="/signup"
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-forge-line bg-white px-4 py-2 label-mono text-forge-ink hover:border-forge-ink transition-colors"
              >
                Sign Up
              </Link>
              <a href="#" className="btn-amber">
                View Demo
              </a>
            </>
          ) : (
            <>
              <Link href="/signup" className="btn-outline hidden md:inline-flex">
                Sign Up
              </Link>
              <a href="#" className="btn-dark bg-brand-purple hover:bg-brand-purple/90">
                View Demo
              </a>
            </>
          )}
        </div>
      </div>

      <div
        className={`md:hidden border-t px-6 py-2 flex justify-center ${
          isStudent ? "border-forge-line" : "border-black/5"
        }`}
      >
        <AudienceSwitch />
      </div>
    </header>
  );
}
