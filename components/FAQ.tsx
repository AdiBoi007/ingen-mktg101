"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAudience } from "./AudienceContext";

const recruiterFaqs = [
  {
    q: "Who can use iNGen?",
    a: "iNGen is built for recruiters, founders, and hiring leads at startups between Idea and Series A — anyone hunting hard-to-find engineering talent on a constrained budget.",
  },
  {
    q: "Can I try iNGen for free?",
    a: "Yes. iNGen offers a free pilot for one active role so you can run Aristotle's intake, Sherlock's proof investigation, and the dashboard end-to-end before committing. No card required to start.",
  },
  {
    q: "Can I use iNGen with my team?",
    a: "Absolutely. iNGen workspaces support multiple seats, shared candidate pools, role-based permissions, and a unified spend dashboard so your hiring manager, recruiter, and engineering lead all stay in sync.",
  },
  {
    q: "How long does it take to set up and start using iNGen?",
    a: "Under five minutes. Connect GitHub, LinkedIn, Google Calendar, and Gmail, drop in a draft JD, and Aristotle generates your brief, LinkedIn post, and Boolean search in a single two-minute conversation.",
  },
  {
    q: "Does iNGen have global candidate data?",
    a: "Yes. Sherlock triangulates GitHub, university records, club affiliations, and verified work history across global sources, with default currency support for AUD, USD, GBP, and EUR on the spend dashboard.",
  },
  {
    q: "Will it integrate with my ATS or CRM?",
    a: "GitHub, LinkedIn, Google Calendar, Gmail, Notion, and Slack are first-class integrations today. ATS connectors for Greenhouse, Lever, and Ashby are on the rolling roadmap — talk to us about your stack.",
  },
];

const studentFaqs = [
  {
    q: "Who can use iNGen?",
    a: "iNGen is built for students, early-career engineers, and graduating candidates preparing for technical roles. If you have scattered projects, internships, and certifications and want a single, recruiter-grade dossier — iNGen is a fit for you.",
  },
  {
    q: "Can I try iNGen for free?",
    a: "Yes. iNGen has a generous free tier with full Aristotle and Columbus access for one active target role. You can build your verified profile, run a roadmap, and stage job dossiers without paying a cent.",
  },
  {
    q: "Can I use iNGen with my study group?",
    a: "Yes. Share Collections with peers, swap roadmap milestones, and compare proof scores. Your projects stay private by default — you control what is visible to the group.",
  },
  {
    q: "How long does it take to set up and start using iNGen?",
    a: "Under three minutes. Connect LinkedIn or GitHub, drop in one project, and Aristotle does the first pass. Most students go from 0% readiness to a recruiter-shareable profile in a single sitting.",
  },
  {
    q: "Does iNGen have jobs from outside the US?",
    a: "Yes. Columbus stages dossiers from RemoteOK, HN Who's Hiring, GitHub Jobs Archive, Adzuna, and global company career pages — ranked against your profile with a percentage match and salary band.",
  },
  {
    q: "Will it integrate with my LinkedIn or GitHub?",
    a: "Both, natively. Aristotle pulls from LinkedIn for work history and from GitHub for code evidence, then turns the raw signal into scored skills, role-fit summaries, and interview talking points.",
  },
];

const itemVariants = {
  collapsed: { opacity: 0, height: 0, marginTop: 0 },
  open: { opacity: 1, height: "auto", marginTop: 8 },
};

function FAQList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-y border-black/15 divide-y divide-black/15">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="group w-full text-left py-5 px-5 flex items-start justify-between gap-6 transition-colors hover:bg-black/[0.02]"
            >
              <span className="text-[15px] font-medium text-black leading-snug">
                {f.q}
              </span>
              <span className="relative w-4 h-4 mt-1 shrink-0">
                <span
                  className={`absolute inset-x-0 top-1/2 h-px bg-black transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-y-0 left-1/2 w-px bg-black transition-transform duration-300 ${
                    isOpen ? "-rotate-45" : ""
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={itemVariants}
                  transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25, delay: 0.05 }}
                    className="text-[14px] leading-relaxed pb-6 px-5 pr-12 max-w-2xl text-black/70"
                  >
                    {f.a}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

function FAQSection({
  items,
  intro,
  ctaLabel,
}: {
  items: { q: string; a: string }[];
  intro: string;
  ctaLabel: string;
}) {
  return (
    <section className="relative bg-brand-bg">
      {/* outer vertical guide rules — like the screenshot edges */}
      <div className="pointer-events-none absolute inset-y-0 left-3 w-px vertical-rule" />
      <div className="pointer-events-none absolute inset-y-0 right-3 w-px vertical-rule" />

      <div className="mx-auto max-w-[1320px] px-6 py-24 grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative"
        >
          {/* inner vertical guide rule on the left card edge */}
          <div className="pointer-events-none absolute -left-6 top-0 bottom-0 w-px vertical-rule hidden lg:block" />

          <div className="label-mono text-black/55 mb-3">[06] FAQ</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.04] tracking-tightest text-black">
            Your questions, answered
          </h2>
          <p className="mt-5 text-[15px] text-black/65 max-w-md leading-relaxed">
            {intro}
          </p>
          <a href="#" className="btn-dark mt-7">{ctaLabel}</a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative"
        >
          {/* diagonal hatching corners — matches Juicebox FAQ */}
          <div className="absolute -top-8 left-0 right-0 h-7 diag-pattern" />
          <div className="absolute -bottom-8 left-0 right-0 h-7 diag-pattern" />
          {/* tiny vertical ticks on either end of the bands */}
          <div className="absolute -top-8 left-0 h-7 w-px bg-black/15" />
          <div className="absolute -top-8 right-0 h-7 w-px bg-black/15" />
          <div className="absolute -bottom-8 left-0 h-7 w-px bg-black/15" />
          <div className="absolute -bottom-8 right-0 h-7 w-px bg-black/15" />

          <FAQList items={items} />
        </motion.div>
      </div>
    </section>
  );
}

export default function FAQ() {
  const { audience } = useAudience();
  if (audience === "student") {
    return (
      <FAQSection
        items={studentFaqs}
        intro="We're here to help. Reach out to the iNGen team for guidance on getting your profile, roadmap, and Columbus job dossiers set up in minutes."
        ctaLabel="Start free"
      />
    );
  }
  return (
    <FAQSection
      items={recruiterFaqs}
      intro="We're here to help. Reach out to our team for guidance on how to integrate iNGen — Aristotle for workflow, Sherlock for proof — into your hiring stack."
      ctaLabel="Book a Demo"
    />
  );
}
