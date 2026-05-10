"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

type Mode = "signup" | "login";

const chips: { label: string; cls: string; top: string; left: string }[] = [
  { label: "12+ years in industry",       cls: "chip-amber",    top: "12%",  left: "4%"  },
  { label: "Changed location",            cls: "chip-mint",     top: "4%",   left: "62%" },
  { label: "Left Apple in or after 2022", cls: "chip-indigo",   top: "26%",  left: "30%" },
  { label: "Cybersecurity certified (CISSP)", cls: "chip-lavender", top: "44%", left: "6%" },
  { label: "Less than 1yr at Co",         cls: "chip-peach",    top: "44%",  left: "62%" },
  { label: "IPO experience",              cls: "chip-yellow",   top: "62%",  left: "46%" },
  { label: "Expert in HR tech",           cls: "chip-salmon",   top: "82%",  left: "10%" },
];

const trustLogos = [
  "CURSOR",
  "Anyscale",
  "incident.io",
  "PATREON",
];

function GlobeIllustration() {
  return (
    <div className="relative w-full aspect-[5/4] max-w-[460px] mx-auto">
      {/* Globe wireframe */}
      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <g stroke="rgba(29,22,29,0.22)" strokeWidth="1">
          <ellipse cx="200" cy="160" rx="120" ry="120" />
          <ellipse cx="200" cy="160" rx="120" ry="40" />
          <ellipse cx="200" cy="160" rx="120" ry="80" />
          <ellipse cx="200" cy="160" rx="80"  ry="120" />
          <ellipse cx="200" cy="160" rx="40"  ry="120" />
          <line x1="80"  y1="160" x2="320" y2="160" />
          <line x1="200" y1="40"  x2="200" y2="280" />
        </g>
      </svg>

      {/* Tiny avatar dots */}
      {[
        { top: "18%", left: "16%", size: 28 },
        { top: "10%", left: "44%", size: 22 },
        { top: "28%", left: "78%", size: 24 },
        { top: "56%", left: "82%", size: 28 },
        { top: "78%", left: "70%", size: 26 },
        { top: "82%", left: "30%", size: 24 },
        { top: "60%", left: "12%", size: 22 },
      ].map((a, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-brand-purple/70 to-brand-ink/80 ring-2 ring-white shadow-md"
          style={{
            top: a.top,
            left: a.left,
            width: a.size,
            height: a.size,
          }}
        />
      ))}

      {/* Floating chips */}
      {chips.map((c) => (
        <div
          key={c.label}
          className={`chip ${c.cls} absolute whitespace-nowrap shadow-sm`}
          style={{ top: c.top, left: c.left }}
        >
          <span>{c.label}</span>
          <span className="opacity-50">×</span>
        </div>
      ))}
    </div>
  );
}

function ProviderButton({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="w-full flex items-center justify-center gap-3 h-12 rounded-md border border-black/10 bg-white text-[15px] font-medium text-brand-ink hover:border-brand-ink/40 hover:bg-black/[0.02] transition-colors"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default function AuthShell({ mode }: { mode: Mode }) {
  const isSignup = mode === "signup";

  return (
    <main className="min-h-screen w-full bg-brand-bg flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[1180px] grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* LEFT: Welcome card */}
        <div className="rounded-2xl border border-black/5 bg-[#f1eef1] px-8 py-10 lg:px-12 lg:py-14 flex flex-col">
          <div className="text-center">
            <h1 className="font-display text-[34px] md:text-[38px] leading-tight text-brand-ink">
              {isSignup ? "Welcome to iNGen" : "Welcome back to iNGen"}
            </h1>
            <p className="mt-3 text-[15px] text-brand-ink/70">
              {isSignup
                ? "Rethink the way you source, engage, and hire talent"
                : "Sign in to continue running proof-first hiring"}
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center my-8">
            <GlobeIllustration />
          </div>

          <div className="rounded-xl border border-black/10 bg-white px-6 py-5">
            <div className="text-center label-mono text-brand-ink mb-3">
              Trusted by 25,000+ recruiters and hiring managers
            </div>
            <div className="flex items-center justify-center gap-6 md:gap-9 flex-wrap">
              {trustLogos.map((name) => (
                <span
                  key={name}
                  className="text-[14px] font-semibold text-brand-ink/70 tracking-tight"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Auth panel */}
        <div className="rounded-2xl border border-black/5 bg-white px-8 py-12 lg:px-14 lg:py-16 flex flex-col">
          <div className="flex justify-center">
            <Link href="/" aria-label="iNGen home" className="inline-flex">
              <Logo />
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-center font-display text-[28px] md:text-[30px] leading-tight text-brand-ink mt-6 mb-8">
              {isSignup ? "Get started for free" : "Sign in to your account"}
            </h2>

            <div className="mx-auto w-full max-w-[400px] flex flex-col gap-3">
              <ProviderButton
                icon={
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                    <path
                      fill="#4285F4"
                      d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                    />
                    <path
                      fill="#34A853"
                      d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    />
                    <path
                      fill="#EA4335"
                      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                    />
                  </svg>
                }
              >
                Continue with Google
              </ProviderButton>

              <ProviderButton
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#1d161d" strokeWidth="1.6" />
                    <path d="M3.5 6.5L12 13L20.5 6.5" stroke="#1d161d" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                }
              >
                Continue with Email
              </ProviderButton>

              <ProviderButton
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="5" y="11" width="14" height="9" rx="2" stroke="#1d161d" strokeWidth="1.6" />
                    <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="#1d161d" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                }
              >
                Continue with SSO / SAML
              </ProviderButton>

              <p className="text-center text-[13px] text-brand-ink/60 mt-4">
                By proceeding, you agree to our{" "}
                <a href="#" className="underline hover:text-brand-ink">
                  Terms of Service
                </a>
              </p>

              <div className="mt-6 text-center text-[14px] text-brand-ink/70">
                {isSignup ? (
                  <>
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-medium text-brand-purple hover:underline"
                    >
                      Log in
                    </Link>
                  </>
                ) : (
                  <>
                    New to iNGen?{" "}
                    <Link
                      href="/signup"
                      className="font-medium text-brand-purple hover:underline"
                    >
                      Create an account
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
