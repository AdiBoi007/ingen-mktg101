"use client";

import Image from "next/image";
import { useAudience } from "./AudienceContext";

const recruiterCells: { label: string; type: "logo" | "title" | "diag" | "more"; status?: "Connected" | "Not connected"; }[] = [
  { label: "GitHub", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "LinkedIn", type: "logo", status: "Not connected" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Google Calendar", type: "logo", status: "Connected" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Gmail", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "Notion", type: "logo", status: "Not connected" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "Slack", type: "logo", status: "Not connected" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "", type: "diag" },
  { label: "Sherlock GH Pull", type: "logo", status: "Connected" },

  { label: "Aristotle Briefs", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "Chrome", type: "logo" },
  { label: "", type: "diag" },
  { label: "Cal · Manual", type: "logo" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "AUD / USD / GBP / EUR", type: "logo" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "more", type: "more" },
];

function RecruiterIntegrations() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="grid grid-cols-6 border-l border-t border-black/10 relative">
          {recruiterCells.map((c, i) => {
            const span = c.type === "title" && i === 14 ? "col-span-2 row-span-2 -mr-px -mb-px" : "";
            if (c.type === "title" && i !== 14) return null;
            return (
              <div
                key={i}
                className={`relative aspect-[3/2] border-r border-b border-black/10 flex items-center justify-center ${span} ${
                  c.type === "diag" ? "diag-pattern" : "bg-brand-bg"
                }`}
              >
                {c.type === "logo" && (
                  <div className="flex flex-col items-center gap-1.5 text-center px-2">
                    <span className="text-[15px] font-medium text-brand-ink/70 tracking-tight leading-tight">
                      {c.label}
                    </span>
                    {c.status && (
                      <span
                        className={`label-mono text-[9px] ${
                          c.status === "Connected"
                            ? "text-brand-good"
                            : "text-brand-mute"
                        }`}
                      >
                        {c.status}
                      </span>
                    )}
                  </div>
                )}
                {c.type === "title" && i === 14 && (
                  <div className="text-center px-6">
                    <div className="label-mono text-brand-mute mb-3">[03] Integrations</div>
                    <h2 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-tightest text-brand-ink">
                      Native to the tools your hiring loop already lives in
                    </h2>
                  </div>
                )}
                {c.type === "more" && (
                  <span className="label-mono text-brand-mute">Tooling sprawl, collapsed</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- STUDENT: How FORGE works (the loop) -------------------- */

const journey = [
  {
    n: "01",
    eyebrow: "Set the goal",
    title: "Tell Aristotle who you want to become.",
    body: "Pick from quick suggestions or write your own — Frontend Engineer, AI Engineer, Backend Developer at DoorDash. Aristotle sets the time budget.",
    chip: "chip-amber",
    accent: "#F5A623",
  },
  {
    n: "02",
    eyebrow: "Forge the proof",
    title: "Generate the roadmap, build the dossier.",
    body: "Aristotle ships a 52-topic mind-map and a recruiter-ready profile in parallel — verified projects, scored skills, role-fit summary.",
    chip: "chip-indigo",
    accent: "#6366F1",
  },
  {
    n: "03",
    eyebrow: "Send the scout",
    title: "Columbus stages ranked role dossiers.",
    body: "Each role lands with a % match, a one-line relevance summary, salary band, and a clear apply path tied to your tailored profile version.",
    chip: "chip-mint",
    accent: "#7DD3C0",
  },
  {
    n: "04",
    eyebrow: "Ship & iterate",
    title: "Save versions, watch readiness climb.",
    body: "Save profile variants per target. Tick topics complete. Your 82% readiness gauge becomes the loop you actually look forward to.",
    chip: "chip-peach",
    accent: "#F5C6A5",
  },
];

function StudentIntegrations() {
  return (
    <section className="relative bg-forge-cream overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-mono-warm">[03] The FORGE loop</span>
          <span className="h-px flex-1 bg-forge-line" />
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-forge text-[44px] md:text-[58px] leading-[1.02] text-forge-ink max-w-3xl">
            Goal → proof → match → ship.
          </h2>
          <p className="max-w-sm text-[15px] text-forge-mute">
            Four steps. One workspace. Every loop tightens the gap between
            you and the recruiter on the other side.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="hidden lg:block absolute top-12 left-[7%] right-[7%] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #F5A623 0%, #6366F1 33%, #7DD3C0 66%, #F5C6A5 100%)",
            }}
          />

          <ol className="grid lg:grid-cols-4 gap-6">
            {journey.map((s) => (
              <li key={s.n} className="relative bg-white border border-forge-line rounded-2xl p-6 shadow-sm">
                <div
                  className="absolute -top-4 left-6 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[13px] font-bold text-forge-ink"
                  style={{ background: s.accent }}
                >
                  {s.n.replace(/^0/, "")}
                </div>
                <div className="mt-3">
                  <span className={`chip ${s.chip} mb-3`}>{s.eyebrow}</span>
                  <h3 className="font-forge-mid text-[20px] leading-snug text-forge-ink mt-1">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-forge-ink/70 leading-relaxed">
                    {s.body}
                  </p>
                </div>
                <svg
                  className="mt-5 w-full h-12 opacity-70"
                  viewBox="0 0 240 48"
                  fill="none"
                >
                  <path
                    d="M0 30 Q 60 0 120 30 T 240 30"
                    stroke={s.accent}
                    strokeWidth="2"
                    fill="none"
                    className="draw-line"
                  />
                  <circle cx="240" cy="30" r="4" fill={s.accent} />
                </svg>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 relative rounded-2xl bg-forge-ink text-white p-8 overflow-hidden">
            <div className="absolute inset-0 dotted-grid-dim opacity-30 pointer-events-none" />
            <div
              className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
            />
            <div className="relative">
              <span className="label-mono text-forge-amber">Single source of truth</span>
              <h3 className="font-forge text-[28px] md:text-[36px] leading-[1.05] mt-3 max-w-md">
                Pull GitHub. Pull LinkedIn. Forge ingests it all.
              </h3>
              <p className="mt-3 text-[14px] text-white/70 max-w-md">
                One click connects your repos, role history, and certifications. Aristotle
                turns it into a verified profile, scored skills, and proof tags before you
                finish your coffee.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["GitHub", "LinkedIn", "Coursera", "Devfolio", "Notion", "Resume PDF", "Personal site"].map((s) => (
                  <span key={s} className="text-[12px] font-medium border border-white/15 bg-white/[0.06] rounded-full px-3 py-1.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl bg-white border border-forge-line overflow-hidden">
            <div className="aspect-[4/5] relative">
              <Image
                src="/student/profile-evidence.png"
                alt="Project evidence stack with verified proof scores"
                fill
                sizes="400px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute top-3 right-3 chip chip-amber">96 proof</div>
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur rounded-lg border border-forge-line px-3 py-2">
              <div className="label-mono-warm">Verified by Aristotle</div>
              <div className="text-[13px] text-forge-ink font-medium">Project evidence stack</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Integrations() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentIntegrations /> : <RecruiterIntegrations />;
}
