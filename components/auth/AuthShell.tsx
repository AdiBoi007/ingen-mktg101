"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import Logo from "@/components/Logo";

type Mode = "signup" | "login";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const chips: { label: string; cls: string; top: string; left: string }[] = [
  { label: "12+ years experience",         cls: "chip-amber",    top: "6%",  left: "4%"  },
  { label: "Stanford CS",                  cls: "chip-mint",     top: "2%",  left: "60%" },
  { label: "Ex-Apple",                     cls: "chip-indigo",   top: "26%", left: "70%" },
  { label: "CISSP certified",              cls: "chip-lavender", top: "72%", left: "4%"  },
  { label: "IPO experience",               cls: "chip-yellow",   top: "82%", left: "58%" },
];

const integrations: { name: string; domain: string }[] = [
  { name: "LinkedIn",   domain: "linkedin.com" },
  { name: "GitHub",     domain: "github.com" },
  { name: "Glassdoor",  domain: "glassdoor.com" },
  { name: "Indeed",     domain: "indeed.com" },
  { name: "Wellfound",  domain: "wellfound.com" },
  { name: "Lever",      domain: "lever.co" },
  { name: "Greenhouse", domain: "greenhouse.io" },
  { name: "Slack",      domain: "slack.com" },
  { name: "Notion",     domain: "notion.so" },
  { name: "Workday",    domain: "workday.com" },
  { name: "Calendly",   domain: "calendly.com" },
  { name: "Coursera",   domain: "coursera.org" },
];

function buildArcs() {
  const colors = ["#ffffff", "#cfcfcf", "#9aa0a6"];
  const pick = () => colors[Math.floor(Math.random() * colors.length)];
  return [
    { order: 1, startLat: 28.6139, startLng: 77.209,  endLat: 51.5072, endLng: -0.1276,    arcAlt: 0.3, color: pick() },
    { order: 1, startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503,   arcAlt: 0.4, color: pick() },
    { order: 2, startLat: 37.7749, startLng: -122.4194, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.5, color: pick() },
    { order: 2, startLat: -33.8688, startLng: 151.2093, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.4, color: pick() },
    { order: 3, startLat: 52.52,   startLng: 13.405,  endLat: 1.3521,  endLng: 103.8198,   arcAlt: 0.3, color: pick() },
    { order: 3, startLat: 19.0760, startLng: 72.8777, endLat: 48.8566, endLng: 2.3522,     arcAlt: 0.4, color: pick() },
    { order: 4, startLat: -22.9068, startLng: -43.1729, endLat: 40.7128, endLng: -74.006,  arcAlt: 0.5, color: pick() },
    { order: 4, startLat: 55.7558, startLng: 37.6173, endLat: 1.3521,  endLng: 103.8198,   arcAlt: 0.4, color: pick() },
  ];
}

function AuthGlobe() {
  const { globeConfig, sampleArcs } = useMemo(
    () => ({
      globeConfig: {
        pointSize: 3,
        // light-black ocean sphere
        globeColor: "#2A2A2E",
        showAtmosphere: true,
        // soft white atmospheric glow
        atmosphereColor: "#ffffff",
        atmosphereAltitude: 0.14,
        emissive: "#1A1A1F",
        emissiveIntensity: 0.18,
        shininess: 0.9,
        // continents in pure white
        polygonColor: "rgba(255,255,255,1)",
        ambientLight: "#ffffff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1600,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.7,
      },
      sampleArcs: buildArcs(),
    }),
    []
  );

  return (
    <div className="relative mx-auto w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-transparent to-black/10 blur-2xl" />
      <div className="absolute inset-0 [&>div]:!w-full [&>div]:!h-full [&_canvas]:!w-full [&_canvas]:!h-full">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>

      {chips.map((c) => (
        <div
          key={c.label}
          className={`chip ${c.cls} absolute whitespace-nowrap shadow-sm z-10`}
          style={{ top: c.top, left: c.left }}
        >
          <span>{c.label}</span>
          <span className="opacity-50">×</span>
        </div>
      ))}
    </div>
  );
}

function IntegrationLogo({ name, domain }: { name: string; domain: string }) {
  return (
    <div className="flex items-center gap-2.5 px-6 shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={name}
        width={22}
        height={22}
        loading="lazy"
        className="w-[22px] h-[22px] object-contain rounded-sm"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />
      <span className="text-[14px] font-medium text-brand-ink/80 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function IntegrationsMarquee() {
  const loop = [...integrations, ...integrations];
  return (
    <div className="rounded-xl border border-black/10 bg-white px-4 py-4 overflow-hidden">
      <div className="text-center label-mono text-brand-ink/80 mb-3">
        Seamlessly integrates with the tools you already use
      </div>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10"
          style={{
            background:
              "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="flex w-max animate-marquee">
          {loop.map((it, i) => (
            <IntegrationLogo key={`${it.domain}-${i}`} name={it.name} domain={it.domain} />
          ))}
        </div>
      </div>
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
      className="w-full flex items-center justify-center gap-3 h-11 rounded-md border border-black/10 bg-white text-[14px] font-medium text-brand-ink hover:border-brand-ink/40 hover:bg-black/[0.02] transition-colors"
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}

export default function AuthShell({ mode }: { mode: Mode }) {
  const isSignup = mode === "signup";

  return (
    <main className="min-h-screen w-full bg-brand-bg flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[1080px] grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {/* LEFT: Welcome card */}
        <div className="rounded-2xl border border-black/5 bg-[#f1eef1] px-6 py-8 lg:px-10 lg:py-10 flex flex-col">
          <div className="text-center">
            <h1 className="font-display text-[28px] md:text-[32px] leading-tight text-brand-ink">
              {isSignup ? "Welcome to iNGen" : "Welcome back to iNGen"}
            </h1>
            <p className="mt-2 text-[14px] text-brand-ink/70">
              {isSignup
                ? "Rethink the way you source, engage, and hire talent"
                : "Sign in to continue running proof-first hiring"}
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center my-4">
            <AuthGlobe />
          </div>

          <IntegrationsMarquee />
        </div>

        {/* RIGHT: Auth panel */}
        <div className="rounded-2xl border border-black/5 bg-white px-6 py-8 lg:px-12 lg:py-10 flex flex-col">
          <div className="flex justify-center">
            <Link href="/" aria-label="iNGen home" className="inline-flex">
              <Logo />
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-center font-display text-[24px] md:text-[26px] leading-tight text-brand-ink mt-4 mb-6">
              {isSignup ? "Get started for free" : "Sign in to your account"}
            </h2>

            <div className="mx-auto w-full max-w-[380px] flex flex-col gap-2.5">
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

              <p className="text-center text-[12px] text-brand-ink/60 mt-3">
                By proceeding, you agree to our{" "}
                <a href="#" className="underline hover:text-brand-ink">
                  Terms of Service
                </a>
              </p>

              <div className="mt-4 text-center text-[13px] text-brand-ink/70">
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
