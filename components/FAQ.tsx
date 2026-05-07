"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who can use Juicebox?",
    a: "Juicebox is built for recruiters. If you are searching for hard-to-find talent, Juicebox is a fit for you. We work with companies ranging from Fortune 500 to boutique recruiting agencies — and hopefully, you too.",
  },
  { q: "Can I try Juicebox for free?", a: "Yes — every plan includes a free trial so you can explore the full capabilities of Juicebox before committing." },
  { q: "Can I use Juicebox with my team?", a: "Absolutely. Juicebox supports collaborative workflows with shared search history, candidate pools, and team-level CRM access." },
  { q: "How long does it take to set up and start using Juicebox?", a: "Most teams are up and running in under 10 minutes. Sign up, connect your ATS, and start sourcing immediately." },
  { q: "Does Juicebox have global candidate data?", a: "Yes. Juicebox indexes over 800M global profiles across 30+ data sources." },
  { q: "Will it integrate with my ATS or CRM?", a: "Juicebox integrates with Lever, Greenhouse, Ashby, Bullhorn, Workday, Crelate, Recruiterflow, and 40+ more tools." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="label-mono text-brand-mute mb-3">[06] FAQ</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink">
            Your questions, answered
          </h2>
          <p className="mt-5 text-[15px] text-brand-muted max-w-md leading-relaxed">
            We&apos;re here to help. Reach out to our sales team for guidance on how to integrate Juicebox into your recruiting workflow.
          </p>
          <a href="#" className="btn-dark mt-7">Book a Demo</a>
        </div>

        <div className="relative">
          <div className="absolute -top-6 right-0 w-1/2 h-6 diag-pattern" />
          <div className="absolute -bottom-6 right-0 w-1/2 h-6 diag-pattern" />
          <ul className="border-y border-black/10 divide-y divide-black/10">
            {faqs.map((f, i) => (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full text-left py-4 px-1 flex items-start justify-between gap-6"
                >
                  <span className="text-[15px] font-medium text-brand-ink">{f.q}</span>
                  <span className="text-brand-mute text-lg leading-none mt-0.5">
                    {open === i ? "×" : "+"}
                  </span>
                </button>
                {open === i && (
                  <p className="text-[14px] text-brand-muted leading-relaxed pb-5 px-1 max-w-2xl">
                    {f.a}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
