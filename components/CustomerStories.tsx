"use client";

import Image from "next/image";
import { useAudience } from "./AudienceContext";

const recruiterStories = [
  { co: "Hello AI", headline: "How a 4-person founding team made their first three engineering hires on triangulated proof, not LinkedIn intuition", bg: "from-orange-200 to-orange-100" },
  { co: "Orbit Commerce", headline: "Cutting time-to-shortlist from 11 days to 38 minutes with Aristotle's 2-minute brief intake", bg: "from-blue-200 to-purple-100" },
  { co: "Sheridine Studio", headline: "Why their seed-stage product designer hire ran on Sherlock's confidence score, not portfolio screenshots", bg: "from-emerald-200 to-teal-100" },
  { co: "Forge Labs", headline: "Closing offers inside a $24k hiring budget — runway, spend, and pipeline in one dashboard", bg: "from-amber-200 to-yellow-100" },
];

function RecruiterStories() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="label-mono text-brand-mute mb-3">[04] Founder &amp; recruiter stories</div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl">
            How startup teams hire on proof, not resume claims
          </h2>
          <a href="#" className="btn-outline">View all stories</a>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {recruiterStories.map((s) => (
            <a key={s.co} href="#" className="group bg-white rounded-md overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className={`relative h-56 bg-gradient-to-br ${s.bg} flex items-center justify-center`}>
                <div className="text-[44px] font-display text-white/80 tracking-tightest drop-shadow-sm">{s.co}</div>
              </div>
              <div className="p-6">
                <div className="label-mono text-brand-mute mb-2">Customer Story</div>
                <h3 className="font-display text-[22px] leading-snug text-brand-ink group-hover:text-brand-purple transition-colors">{s.headline}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- STUDENT: Readiness gauge & proof stack -------------------- */

const tracks = [
  { label: "Frontend", value: 92, c: "#7DD3C0" },
  { label: "Backend", value: 70, c: "#F5A623" },
  { label: "AI Product", value: 84, c: "#6366F1" },
];

const skillChips = [
  { label: "React", value: 93, c: "chip-mint" },
  { label: "TypeScript", value: 91, c: "chip-lavender" },
  { label: "Python", value: 88, c: "chip-amber" },
  { label: "REST APIs", value: 84, c: "chip-salmon" },
  { label: "SQL", value: 80, c: "chip-yellow" },
  { label: "CRM", value: 78, c: "chip-peach" },
];

const recruiterChecklist = [
  { label: "Education", state: "complete" },
  { label: "Technical skills", state: "complete" },
  { label: "Project proof", state: "complete" },
  { label: "Role fit summary", state: "ready" },
  { label: "Interview talking points", state: "generated" },
];

function StudentStories() {
  const overall = 82;
  const r = 70;
  const c = 2 * Math.PI * r;
  const dash = (overall / 100) * c;

  return (
    <section className="relative bg-forge-cream overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-mono-warm">[04] Recruiter readiness</span>
          <span className="h-px flex-1 bg-forge-line" />
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-forge text-[44px] md:text-[58px] leading-[1.02] text-forge-ink max-w-3xl">
            Your readiness, <br />
            <span className="text-forge-amber">measured in proof.</span>
          </h2>
          <p className="max-w-sm text-[15px] text-forge-mute">
            Every signal — verified projects, scored skills, recruiter-checklist items —
            rolls up into a single quantified gauge you can move week over week.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 relative bg-white border border-forge-line rounded-2xl p-8 shadow-sm">
            <div className="label-mono-warm">Overall Recruiter Readiness</div>

            <div className="mt-6 flex items-center gap-6">
              <div className="relative w-44 h-44 shrink-0">
                <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r={r} stroke="#E5DDCC" strokeWidth="14" fill="none" />
                  <circle
                    cx="80"
                    cy="80"
                    r={r}
                    stroke="url(#g1)"
                    strokeWidth="14"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${dash} ${c}`}
                  />
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F5A623" />
                      <stop offset="100%" stopColor="#7DD3C0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-forge text-[44px] leading-none text-forge-ink">{overall}<span className="text-[24px] text-forge-mute font-medium">%</span></span>
                  <span className="label-mono-warm mt-1">Ready</span>
                </div>
              </div>

              <div className="flex-1 space-y-3">
                {tracks.map((t) => (
                  <div key={t.label}>
                    <div className="flex justify-between text-[12px] text-forge-ink/80 mb-1">
                      <span className="font-medium">{t.label}</span>
                      <span className="font-mono">{t.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-forge-line overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${t.value}%`, background: t.c }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-forge-line">
              <div className="label-mono-warm mb-3">Recruiter checklist</div>
              <ul className="space-y-2">
                {recruiterChecklist.map((c) => (
                  <li key={c.label} className="flex items-center justify-between text-[13px]">
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-forge-mintSoft flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8.5L6.5 12L13 4" stroke="#0d5b4a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-forge-ink">{c.label}</span>
                    </span>
                    <span className="label-mono-warm">{c.state}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7 relative bg-forge-ink rounded-2xl p-8 text-white overflow-hidden">
            <div className="absolute inset-0 dotted-grid-dim opacity-30 pointer-events-none" />
            <div
              className="absolute -top-24 -right-12 w-72 h-72 rounded-full opacity-25 blur-3xl"
              style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between flex-wrap gap-3 mb-5">
                <div>
                  <div className="label-mono text-forge-amber">Role fit summary</div>
                  <div className="font-forge-mid text-[24px] mt-1">Software Development Engineer I — IBM</div>
                </div>
                <span className="chip chip-amber">5 Signals</span>
              </div>

              <p className="text-[14px] text-white/75 leading-relaxed">
                Builds AI products, recruiter tools, and practical full-stack experiences
                that move from prototype to shipped product. Strong React/TypeScript
                foundation, recent backend wins, and verified society leadership.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillChips.map((s) => (
                  <span key={s.label} className={`chip ${s.c} font-mono text-[11px]`}>
                    {s.label} <span className="opacity-70">{s.value}%</span>
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-4 gap-3">
                {[
                  { n: "04", l: "Hackathons", c: "bg-forge-amberSoft text-forge-ink" },
                  { n: "07", l: "Projects", c: "bg-forge-mintSoft text-forge-ink" },
                  { n: "12", l: "Public repos", c: "bg-forge-indigoSoft text-forge-ink" },
                  { n: "03", l: "Certifications", c: "bg-forge-peach text-forge-ink" },
                ].map((s) => (
                  <div key={s.l} className={`rounded-xl p-4 ${s.c}`}>
                    <div className="font-forge text-[28px] leading-none">{s.n}</div>
                    <div className="label-mono-warm mt-2">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="label-mono text-white/60 mb-3">Interview talking points</div>
                <ol className="space-y-2 text-[13px] text-white/80 list-decimal list-inside">
                  <li>Connect Ingen HR to recruiter workflow outcomes.</li>
                  <li>Explain how each project shows shipped judgment.</li>
                  <li>Use the CRM toolkit to demo data and API readiness.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white border border-forge-line p-6 relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full opacity-30 blur-2xl"
              style={{ background: "radial-gradient(circle, #7DD3C0 0%, transparent 70%)" }} />
            <div className="relative">
              <span className="chip chip-mint mb-3">Verified by Aristotle</span>
              <h3 className="font-forge-mid text-[20px] mt-1 text-forge-ink leading-snug">
                &ldquo;Veer&apos;s React proof stack is unusually deep — three shipped
                products, all reproducible.&rdquo;
              </h3>
              <div className="mt-3 label-mono-warm">John Doe — Tutor</div>
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-forge-line p-6 relative overflow-hidden">
            <div className="relative">
              <span className="chip chip-indigo mb-3">Project mentor</span>
              <h3 className="font-forge-mid text-[20px] mt-1 text-forge-ink leading-snug">
                &ldquo;Owned the AI workflow end-to-end. The kind of intern teams keep.&rdquo;
              </h3>
              <div className="mt-3 label-mono-warm">Maya Shah — Project Mentor</div>
            </div>
          </div>

          <div className="rounded-2xl bg-forge-amberSoft border border-forge-amber/40 p-6 relative">
            <span className="chip chip-amber mb-3">Recruiter insights</span>
            <ul className="space-y-1.5 text-[14px] text-forge-ink/85">
              <li>• 1 internship offer</li>
              <li>• 3 certifications</li>
              <li>• 4 verified project proofs</li>
              <li>• Backend readiness: growing</li>
              <li>• Frontend readiness: strong</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CustomerStories() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentStories /> : <RecruiterStories />;
}
