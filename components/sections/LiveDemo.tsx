"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, RefreshCw, Lock, Sparkles } from "lucide-react";
import { useAudience } from "../AudienceContext";

type Variant = {
  eyebrow: string;
  agentTag: string;
  agentLabel: string;
  heading: string;
  body: string;
  bullets: { label: string; text: string }[];
  url: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  accent: string;
  ringColor: string;
  pillBg: string;
  pillFg: string;
};

const RECRUITER: Variant = {
  eyebrow: "[02] LIVE — SHERLOCK",
  agentTag: "Sherlock",
  agentLabel: "Proof analyzer",
  heading: "Drop in a profile. Watch Sherlock triangulate the proof.",
  body: "Sherlock is the proof engine behind FORGE. Paste a candidate URL — GitHub, LinkedIn, portfolio — and it pulls the receipts that actually map to the role: depth of commits, team impact, real artefacts. No keyword theatre.",
  bullets: [
    { label: "Triangulates", text: "GitHub · work history · clubs · projects" },
    { label: "Surfaces", text: "the few candidates whose claims hold up" },
    { label: "Output", text: "a proof report your hiring manager will read" },
  ],
  url: "https://ingen-hrandstudent.vercel.app/analyse-profile",
  primaryCta: { label: "OPEN FULL APP", href: "https://ingen-hrandstudent.vercel.app/analyse-profile" },
  secondaryCta: { label: "BOOK A DEMO", href: "#" },
  accent: "#6B2F8E",
  ringColor: "rgba(176,84,231,0.35)",
  pillBg: "rgba(176,84,231,0.14)",
  pillFg: "#6B2F8E",
};

const STUDENT: Variant = {
  eyebrow: "[02] LIVE — STUDENT WORKSPACE",
  agentTag: "iNGEN",
  agentLabel: "Student workspace",
  heading: "Step inside your iNGEN workspace.",
  body: "This is the actual student app — the same surface where Aristotle drafts your roadmap and Columbus ranks open roles against your evidence. Click around, scroll, try it.",
  bullets: [
    { label: "Roadmap", text: "milestones sequenced for the next 90 days" },
    { label: "Evidence", text: "repos, courses, projects auto-attached" },
    { label: "Scout", text: "matched roles ranked against your proof" },
  ],
  url: "https://ingen-hrandstudent.vercel.app/student",
  primaryCta: { label: "OPEN FULL APP", href: "https://ingen-hrandstudent.vercel.app/student" },
  secondaryCta: { label: "WATCH A DEMO", href: "#" },
  accent: "#F5A623",
  ringColor: "rgba(245,166,35,0.4)",
  pillBg: "rgba(245,166,35,0.15)",
  pillFg: "#7a5310",
};

function BrowserChrome({
  url,
  iframeKey,
  onReload,
}: {
  url: string;
  iframeKey: number;
  onReload: () => void;
}) {
  const display = url.replace(/^https?:\/\//, "");
  return (
    <div className="flex items-center gap-3 px-4 h-11 border-b border-ink/10 bg-[#F4F1EE]">
      <div className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 flex items-center gap-2 bg-white border border-ink/10 rounded px-3 h-7 max-w-[640px]">
        <Lock className="w-3 h-3 text-ink/40" />
        <span className="text-[12px] font-mono text-ink/70 truncate">
          {display}
        </span>
      </div>
      <button
        onClick={onReload}
        aria-label="Reload preview"
        className="text-ink/50 hover:text-ink transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
      </button>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink/50 hover:text-ink transition-colors"
        aria-label="Open in new tab"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function LiveDemo() {
  const { audience } = useAudience();
  const v = audience === "student" ? STUDENT : RECRUITER;
  const [iframeKey, setIframeKey] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const reload = () => {
    setLoaded(false);
    setIframeKey((k) => k + 1);
  };

  return (
    <section
      className="relative bg-brand-bg overflow-hidden"
      aria-label="Live product demo"
    >
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none halftone-light-top opacity-80"
        aria-hidden
      />

      <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-20 pb-24 relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start mb-10">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-[0.18em] text-ink/55 mb-3">
              {v.eyebrow}
            </div>
            <h2 className="font-display text-[40px] lg:text-[52px] leading-[1.02] tracking-[-0.02em] text-ink mb-5">
              {v.heading}
            </h2>
            <p className="text-[16px] leading-[1.6] text-ink/70 max-w-[42ch]">
              {v.body}
            </p>
          </div>

          <div className="lg:pt-10">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] mb-5"
              style={{ background: v.pillBg, color: v.pillFg }}
            >
              <Sparkles className="w-3 h-3" />
              {v.agentTag} — {v.agentLabel}
            </span>
            <ul className="space-y-3">
              {v.bullets.map((b) => (
                <li
                  key={b.label}
                  className="flex items-start gap-3 text-[14px] text-ink/80"
                >
                  <span
                    className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: v.accent }}
                  />
                  <span>
                    <span className="font-mono uppercase tracking-[0.14em] text-[11px] text-ink/55 mr-2">
                      {b.label}
                    </span>
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-7">
              <a
                href={v.primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-mono uppercase tracking-[0.1em] bg-ink text-white px-5 py-3 inline-flex items-center gap-2"
              >
                {v.primaryCta.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={v.secondaryCta.href}
                className="text-[12px] font-mono uppercase tracking-[0.1em] border border-ink text-ink px-5 py-3"
              >
                {v.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div
            className="absolute -inset-3 rounded-2xl blur-2xl opacity-50 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${v.ringColor}, transparent 60%)`,
            }}
            aria-hidden
          />
          <div
            className="relative rounded-2xl overflow-hidden border bg-white shadow-[0_40px_80px_-30px_rgba(14,14,16,0.35)]"
            style={{ borderColor: "rgba(14,14,16,0.10)" }}
          >
            <BrowserChrome url={v.url} iframeKey={iframeKey} onReload={reload} />

            <div className="relative w-full aspect-[16/10] bg-[#FBFAF8]">
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center text-[12px] font-mono uppercase tracking-[0.18em] text-ink/40">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className="inline-block w-2 h-2 rounded-full animate-pulse"
                      style={{ background: v.accent }}
                    />
                    Loading {v.agentTag}…
                  </span>
                </div>
              )}
              <iframe
                key={iframeKey}
                src={v.url}
                title={`${v.agentTag} live preview`}
                onLoad={() => setLoaded(true)}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allow="clipboard-read; clipboard-write"
                className="absolute inset-0 w-full h-full bg-white"
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-ink/45">
            <span>Live · embedded from {v.url.replace(/^https?:\/\//, "").split("/")[0]}</span>
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              Open full app
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
