"use client";

import { useState, useEffect } from "react";
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
            <a href="#" className="btn-dark bg-white !text-brand-ink hover:!bg-white/90">
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

function TypingHeadline() {
  const lines = ["the role roadmap.", "your job pathway.", "your proof stack."];
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"type" | "hold" | "delete">("type");

  useEffect(() => {
    const target = lines[idx];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "type") {
      if (text.length < target.length) {
        t = setTimeout(() => setText(target.slice(0, text.length + 1)), 55);
      } else {
        t = setTimeout(() => setPhase("hold"), 1700);
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("delete"), 800);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(target.slice(0, text.length - 1)), 28);
      } else {
        setIdx((i) => (i + 1) % lines.length);
        setPhase("type");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx]);

  return (
    <span className="text-forge-amber cursor-blink">{text || " "}</span>
  );
}

function StudentHero() {
  const [prompt, setPrompt] = useState("");
  const [phIndex, setPhIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setPhIndex((i) => (i + 1) % studentPlaceholders.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-forge-cream text-forge-ink">
      <div className="absolute inset-0 dotted-grid pointer-events-none opacity-90" />

      <div
        className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-32 -right-24 w-[480px] h-[480px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366F1 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-forge-line px-3 py-1.5 label-mono text-forge-ink shadow-sm">
              <span className="w-5 h-5 rounded-full bg-forge-indigo flex items-center justify-center">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.4 4.6L11 6L7.4 7.4L6 11L4.6 7.4L1 6L4.6 4.6L6 1Z" fill="white" />
                </svg>
              </span>
              <span className="text-forge-indigo">Aristotle</span>
              <span className="opacity-30">|</span>
              <span>Proof-first hiring</span>
            </span>

            <h1 className="font-forge mt-6 text-[60px] md:text-[80px] leading-[0.95] text-forge-ink">
              Build <br />
              <TypingHeadline />
            </h1>

            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-forge-ink/75">
              FORGE turns scattered projects, certificates, and side-quests into a
              recruiter-grade dossier. An AI roadmap calibrated to your goal, an
              AI scout that hunts the right roles, and one workspace that proves
              you&apos;re ready.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#" className="btn-amber">
                Start your roadmap
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="btn-ink-pill">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M3 2L9 6L3 10V2Z" fill="white" />
                </svg>
                Watch demo
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#F5A623", "#7DD3C0", "#6366F1", "#F0A39A"].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-forge-cream" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-[13px] text-forge-ink/70"><span className="font-semibold text-forge-ink">12,400+</span> students forging</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-forge-ink/70">
                <span className="pulse-dot" />
                <span>Aristotle online</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative bg-white rounded-2xl border border-forge-line shadow-2xl shadow-black/[0.06] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-forge-line bg-forge-paper">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <div className="ml-auto label-mono-warm">forge.ingen.app/student</div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="label-mono-warm">Aristotle</span>
                  <span className="text-forge-ink/30">·</span>
                  <span className="label-mono-warm">Quick Suggestions</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Data Analyst", time: "360h / 9 months", c: "chip-mint" },
                    { label: "AI Engineer", time: "520h / 14 months", c: "chip-indigo" },
                    { label: "Frontend Engineer", time: "420h / 12 months", c: "chip-amber", active: true },
                  ].map((r) => (
                    <div
                      key={r.label}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 border ${
                        r.active
                          ? "bg-forge-amberSoft/60 border-forge-amber"
                          : "bg-forge-paper border-forge-line"
                      }`}
                    >
                      <div>
                        <div className="text-[14px] font-medium text-forge-ink">{r.label}</div>
                        <div className="text-[11px] text-forge-mute">{r.time}</div>
                      </div>
                      {r.active ? (
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-forge-ink text-forge-amber px-2 py-1 rounded-full">Active</span>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-forge-mute">
                          <path d="M5 3L11 8L5 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 bg-forge-paper border border-forge-line rounded-full px-3 py-2">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-forge-indigo">
                    <path d="M8 2L9.5 6L13.5 7.5L9.5 9L8 13L6.5 9L2.5 7.5L6.5 6L8 2Z" fill="currentColor" />
                  </svg>
                  <input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={`Try: ${studentPlaceholders[phIndex]}`}
                    className="flex-1 bg-transparent outline-none text-[13px] text-forge-ink placeholder:text-forge-mute"
                  />
                  <button className="text-[10px] font-mono uppercase tracking-wider bg-forge-amber text-forge-ink px-2.5 py-1 rounded-full">
                    Generate
                  </button>
                </div>
              </div>

              <div className="px-5 pb-5">
                <div className="rounded-xl bg-forge-ink p-4 relative overflow-hidden">
                  <div className="absolute inset-0 dotted-grid-dim opacity-30" />
                  <div className="relative">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/60 mb-3">
                      <span>Frontend Engineer · Roadmap</span>
                      <span>0% · 0 / 52 topics</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px]">
                      {[
                        { l: "Internet Fundamentals", c: "bg-forge-amber" },
                        { l: "Web Architecture", c: "bg-forge-mint" },
                        { l: "Network Protocols", c: "bg-forge-amber" },
                        { l: "HTML / CSS", c: "bg-forge-mint" },
                        { l: "Layout systems", c: "bg-forge-amber" },
                        { l: "JS Foundations", c: "bg-forge-mint" },
                      ].map((n) => (
                        <div key={n.l} className={`${n.c} text-forge-ink rounded-md px-2 py-1.5 font-medium`}>
                          {n.l}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -top-6 -right-4 bg-white border border-forge-line shadow-lg rounded-xl px-3 py-2 float-y">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-forge-mintSoft flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="text-forge-mint">
                    <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <div className="text-[11px] font-medium text-forge-ink">Verified by Aristotle</div>
                  <div className="text-[10px] text-forge-mute">96 proof score</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 bg-white border border-forge-line shadow-lg rounded-xl px-3 py-2 float-y-slow">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-forge-amberSoft flex items-center justify-center">
                  <span className="text-[14px]">🔥</span>
                </span>
                <div>
                  <div className="text-[11px] font-medium text-forge-ink">Columbus active</div>
                  <div className="text-[10px] text-forge-mute">Found 5 roles · 96% match</div>
                </div>
              </div>
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
