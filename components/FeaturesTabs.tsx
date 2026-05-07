"use client";

import { useState } from "react";

type TabKey = "search" | "insights" | "engagement";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "search",
    label: "Search (PeopleGPT)",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M13 13L10.5 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: "insights",
    label: "Insights",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <path d="M2 12L6 7L9 10L14 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: "engagement",
    label: "Engagement",
    icon: (
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3.5" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.5 4.5L8 9L13.5 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const PEOPLE = [
  { name: "Dean Wiegand", title: "Senior Software Engineer", co: "Acme Inc.", match: 100, c: "bg-brand-good" },
  { name: "Krystal Hahn", title: "Software Engineer", co: "Stark", match: 90, c: "bg-brand-good" },
  { name: "Wade Walter", title: "Software Engineer", co: "Vial", match: 85, c: "bg-brand-good" },
  { name: "Jenna Alvarez", title: "Frontend Engineer", co: "Hooli", match: 80, c: "bg-brand-good" },
  { name: "Ethan Chen", title: "Full-Stack Engineer", co: "Initech", match: 78, c: "bg-brand-good" },
];

function SearchPanel() {
  return (
    <div className="bg-brand-purple/95 rounded-md p-6 relative overflow-hidden h-full min-h-[420px]">
      <div className="absolute inset-0 diag-pattern opacity-40 pointer-events-none" />
      <div className="relative bg-white rounded shadow-xl p-3 max-w-md">
        <div className="flex flex-wrap gap-1.5 pb-2 border-b border-black/5">
          <span className="text-[11px] bg-brand-tint text-brand-purple px-2 py-0.5 rounded">Software Engineer</span>
          <span className="text-[11px] bg-brand-tint text-brand-purple px-2 py-0.5 rounded">San Francisco</span>
          <span className="text-[11px] bg-brand-tint text-brand-purple px-2 py-0.5 rounded">Series B co</span>
        </div>
        <div className="text-[11px] text-brand-mute mt-2 mb-1">Autopilot Results (420)</div>
        <ul className="text-[12px] divide-y divide-black/5">
          {PEOPLE.map((p) => (
            <li key={p.name} className="flex items-center justify-between py-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-tint" />
                <span className="text-brand-ink">{p.name}</span>
              </div>
              <span className="text-brand-subtle">{p.title}</span>
              <span className="text-brand-subtle">{p.co}</span>
              <span className={`${p.c} text-white text-[10px] px-1.5 py-0.5 rounded-sm`}>{p.match}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative mt-4 bg-white rounded shadow-md p-2 max-w-[240px] text-[12px]">
        <div className="text-brand-purple font-medium mb-0.5">Email outreach</div>
        <div className="text-brand-mute">Published 4 sequences</div>
      </div>
    </div>
  );
}

function InsightsPanel() {
  return (
    <div className="bg-[#2F8D6E] rounded-md p-6 relative overflow-hidden h-full min-h-[420px] flex items-center justify-center">
      <div className="absolute inset-0 diag-pattern opacity-30 pointer-events-none" />
      <div className="relative bg-white rounded shadow-xl p-4 w-full max-w-md">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] bg-brand-tint text-brand-purple px-1.5 py-0.5 rounded">Sales manager</span>
          <span className="text-[10px] text-brand-mute">in</span>
          <span className="text-[10px] bg-brand-tint text-brand-purple px-1.5 py-0.5 rounded">Toronto</span>
          <span className="text-[10px] text-brand-mute">+ 12 more</span>
        </div>
        <div className="text-[11px] text-brand-ink font-medium mb-2">Talent Insights (50)</div>
        <div className="grid grid-cols-2 gap-3">
          <svg viewBox="0 0 200 80" className="w-full h-20">
            <polyline points="0,60 30,52 60,40 90,48 120,30 150,32 180,18 200,22"
              fill="none" stroke="#186AD8" strokeWidth="2" />
            <polyline points="0,68 30,62 60,55 90,58 120,52 150,48 180,40 200,38"
              fill="none" stroke="#9B51E0" strokeWidth="2" />
          </svg>
          <div className="flex items-center justify-center">
            <div className="relative w-20 h-20 rounded-full"
              style={{ background: "conic-gradient(#186AD8 0 45%, #9B51E0 45% 75%, #DA60D4 75% 90%, #DDC73C 90% 100%)" }}>
              <div className="absolute inset-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1.5 rounded-full bg-brand-tint" />
          ))}
        </div>
      </div>
    </div>
  );
}

function EngagementPanel() {
  return (
    <div className="bg-[#3C5A99] rounded-md p-6 relative overflow-hidden h-full min-h-[420px] flex items-center justify-center">
      <div className="absolute inset-0 diag-pattern opacity-30 pointer-events-none" />
      <div className="relative bg-white rounded shadow-xl p-4 w-full max-w-md text-[12px]">
        <div className="text-brand-mute mb-2">Recipients (820)</div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-[10px] bg-brand-tint text-brand-purple px-1.5 py-0.5 rounded">+ Insert AI Content</span>
          <span className="text-[10px] bg-black/5 text-brand-ink px-1.5 py-0.5 rounded">First Name</span>
          <span className="text-[10px] bg-black/5 text-brand-ink px-1.5 py-0.5 rounded">Last Name</span>
          <span className="text-[10px] bg-black/5 text-brand-ink px-1.5 py-0.5 rounded">Full Name</span>
          <span className="text-[10px] bg-black/5 text-brand-ink px-1.5 py-0.5 rounded">Current Company</span>
        </div>
        <div className="border-t border-black/5 pt-2 mb-2">
          <div className="text-[10px] bg-brand-tint text-brand-purple inline-block px-1.5 py-0.5 rounded mb-2">First Name</div>
          <p className="text-brand-ink leading-relaxed">
            I came across your profile while searching for an{" "}
            <span className="bg-brand-tint text-brand-purple px-1 rounded">experienced engineer</span>...
          </p>
        </div>
      </div>
    </div>
  );
}

const PANEL_CONTENT: Record<TabKey, { eyebrow: string; title: string; copy: string; cta1: string; panel: React.ReactNode }> = {
  search: {
    eyebrow: "Search (PeopleGPT) & CRM",
    title: "Talent discovery across 800M+ global profiles",
    copy: "Unlock scale with efficient AI talent sourcing across 30+ diverse data sources. Juicebox builds enriched candidate profiles using high-signal filters focused on impact and achievements.",
    cta1: "Try PeopleGPT",
    panel: <SearchPanel />,
  },
  insights: {
    eyebrow: "Insights",
    title: "Real-time insights for every talent pool",
    copy: "Access real-time talent market insights with AI-driven talent insights. Leverage data from Juicebox to help you adapt to market changes, and align with hiring managers with confidence.",
    cta1: "Try AI Talent Insights",
    panel: <InsightsPanel />,
  },
  engagement: {
    eyebrow: "Outreach",
    title: "Boost replies with automated, personalized outreach",
    copy: "Juicebox is an AI recruiting platform that powers outbound talent sourcing with dynamic, multi-step sequences, delivering up to 3x more replies. Get tracking updates on opens, replies, engagement and more, with AI-powered sourcing.",
    cta1: "Try AI Sequencing",
    panel: <EngagementPanel />,
  },
};

export default function FeaturesTabs() {
  const [active, setActive] = useState<TabKey>("search");
  const data = PANEL_CONTENT[active];

  return (
    <section className="bg-brand-bg relative">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="label-mono text-brand-mute mb-3">[01] Features</div>
        <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl">
          How it works: Humans + Agents
        </h2>

        <div className="mt-12 border-t border-black/10">
          <div className="flex">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`flex items-center gap-2 px-5 py-3.5 label-mono border-r border-black/10 transition-colors ${
                  active === t.key
                    ? "text-brand-purple bg-white"
                    : "text-brand-mute bg-brand-bg hover:text-brand-ink"
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
            <div className="flex-1 diag-pattern border-r border-black/10" />
          </div>

          <div className="grid lg:grid-cols-2 border-t border-black/10">
            <div className="p-6 lg:p-10 border-r border-black/10 bg-white">
              {data.panel}
            </div>
            <div className="p-8 lg:p-14 bg-white flex flex-col justify-center">
              <div className="label-mono text-brand-purple">{data.eyebrow}</div>
              <h3 className="font-display mt-3 text-[32px] md:text-[40px] leading-[1.1] tracking-tightest text-brand-ink">
                {data.title}
              </h3>
              <p className="mt-5 text-brand-muted text-[15px] leading-relaxed max-w-md">
                {data.copy}
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a href="#" className="btn-dark">{data.cta1}</a>
                <a href="#" className="btn-outline">Book a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
