"use client";

import Image from "next/image";
import { useAudience } from "./AudienceContext";

const recruiterFeatured = {
  tag: "Launch",
  title: "Introducing Sherlock — proof triangulation across GitHub, work, university, and clubs",
  date: "Apr 28, 2026",
  read: "5 MIN",
};

const recruiterPosts = [
  { tag: "Aristotle update", title: "Job Brief intake now ships a Boolean search query alongside the LinkedIn post", date: "Apr 14, 2026", read: "3 MIN" },
  { tag: "Dashboard", title: "Hiring budget card adds runway, projected hire cost, and Now / Next / Then queue", date: "Apr 14, 2026", read: "3 MIN" },
  { tag: "Sherlock update", title: "Strictness modes (Balanced / Strict / Very strict) now tunable per workspace", date: "Mar 29, 2026", read: "4 MIN" },
  { tag: "Integrations", title: "Native GitHub, Google Calendar, and Gmail connectors out of the box", date: "Mar 20, 2026", read: "4 MIN" },
];

function RecruiterUpdates() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="text-center mb-12">
          <div className="label-mono text-brand-mute mb-3">[05] Updates from the workshop</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl mx-auto">
            What we&apos;re shipping for proof-first hiring teams
          </h2>
          <a href="#" className="btn-outline mt-7">Read the changelog</a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <a href="#" className="group bg-white border border-black/5 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-72 bg-gradient-to-br from-brand-tint via-white to-brand-tint p-8">
              <div className="absolute top-6 left-6">
                <span className="label-mono bg-brand-purple text-white px-2.5 py-1 rounded-sm">{recruiterFeatured.tag}</span>
              </div>
              <div className="h-full flex items-center justify-center">
                <div className="font-display text-[28px] tracking-tightest text-brand-ink text-center max-w-xs">
                  Sherlock ships proof triangulation
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-[22px] leading-snug text-brand-ink group-hover:text-brand-purple transition-colors">
                {recruiterFeatured.title}
              </h3>
              <div className="mt-3 label-mono text-brand-mute">{recruiterFeatured.date} · {recruiterFeatured.read}</div>
            </div>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recruiterPosts.slice(0, 4).map((p) => (
              <a key={p.title} href="#" className="group bg-white border border-black/5 rounded-md overflow-hidden flex flex-col">
                <div className="h-32 bg-gradient-to-br from-brand-tint to-white p-3 flex items-end">
                  <span className="label-mono bg-brand-deep text-white px-2 py-0.5 rounded-sm">{p.tag}</span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-display text-[15px] leading-snug text-brand-ink group-hover:text-brand-purple transition-colors flex-1">{p.title}</h3>
                  <div className="mt-3 label-mono text-brand-mute text-[10px]">{p.date} · {p.read}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STUDENT: Stories + Updates -------------------- */

const studentPosts = [
  {
    tag: "Aristotle update",
    title: "AI Engineer roadmap now ships LLM-eval, fine-tuning, and prompt-context modules",
    date: "May 5, 2026",
    read: "4 MIN",
    chip: "chip-indigo",
    image: "/student/roadmap-ai.png",
  },
  {
    tag: "Columbus update",
    title: "Sources expanded — RemoteOK, HN Who's Hiring, GitHub Jobs, Adzuna, career pages",
    date: "Apr 28, 2026",
    read: "3 MIN",
    chip: "chip-amber",
    image: "/student/jobs-columbus.png",
  },
  {
    tag: "Profile update",
    title: "Verified proof scores rolled out — every project gets a 0-100 signal rating",
    date: "Apr 14, 2026",
    read: "3 MIN",
    chip: "chip-mint",
    image: "/student/profile-evidence.png",
  },
  {
    tag: "Collections",
    title: "Save profile variants per target — IBM SDE version, backend version, frontend version",
    date: "Apr 1, 2026",
    read: "2 MIN",
    chip: "chip-peach",
    image: "/student/collections-saved.png",
  },
];

const featuredPost = {
  tag: "Launch",
  title: "FORGE goes proof-first",
  date: "May 7, 2026",
  read: "6 MIN",
  body:
    "We rebuilt the student platform around one idea — every applicant should walk into a recruiter conversation with quantified, verifiable proof. Here's how Aristotle and Columbus make it real.",
  image: "/student/pathway-doordash.png",
};

function StudentUpdates() {
  return (
    <section className="relative bg-forge-cream overflow-hidden">
      <div className="absolute inset-0 dotted-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-24">
        <div className="flex items-center gap-3 mb-3">
          <span className="label-mono-warm">[05] Updates from the workshop</span>
          <span className="h-px flex-1 bg-forge-line" />
        </div>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <h2 className="font-forge text-[44px] md:text-[58px] leading-[1.02] text-forge-ink max-w-3xl">
            What we shipped <br />
            <span className="text-forge-amber">this month.</span>
          </h2>
          <a href="#" className="btn-ink-pill">Read the changelog</a>
        </div>

        <a href="#" className="group block relative rounded-2xl overflow-hidden border border-forge-line bg-white shadow-sm hover:shadow-md transition-shadow">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto">
              <Image
                src={featuredPost.image}
                alt="Job pathway preview"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <span className="absolute top-4 left-4 chip chip-amber">{featuredPost.tag}</span>
            </div>
            <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center">
              <div className="label-mono-warm mb-3">{featuredPost.date} · {featuredPost.read}</div>
              <h3 className="font-forge text-[32px] md:text-[40px] leading-[1.05] text-forge-ink group-hover:text-forge-amber transition-colors">
                {featuredPost.title}
              </h3>
              <p className="mt-4 text-[15px] text-forge-ink/70 leading-relaxed max-w-xl">
                {featuredPost.body}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 label-mono-warm text-forge-ink">
                Read launch note
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </a>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {studentPosts.map((p) => (
            <a key={p.title} href="#" className="group bg-white border border-forge-line rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                />
                <span className={`absolute top-3 left-3 chip ${p.chip}`}>{p.tag}</span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-forge-mid text-[16px] leading-snug text-forge-ink group-hover:text-forge-amber transition-colors flex-1">
                  {p.title}
                </h3>
                <div className="mt-4 label-mono-warm">{p.date} · {p.read}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LatestUpdates() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentUpdates /> : <RecruiterUpdates />;
}
