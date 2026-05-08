"use client";

import { useState } from "react";
import { useAudience } from "./AudienceContext";

const recruiterFaqs = [
  {
    q: "Who is FORGE built for?",
    a: "Startup recruiters, founders, hiring managers, and product/engineering leads at early-stage companies between Idea and Series A. If you are hiring with a constrained budget and a small team, FORGE is the command center built for you.",
  },
  {
    q: "What is the difference between Aristotle and Sherlock?",
    a: "Aristotle is the workflow AI. It runs job briefs, candidate discovery, interview workflow, and dashboard intelligence. Sherlock is the proof AI. It investigates candidates — GitHub, work history, university, club affiliations, certifications — and surfaces a confidence-scored profile. No other assistants will appear in the product.",
  },
  {
    q: "How does the proof score actually work?",
    a: "Sherlock triangulates four signal categories — work, university, club affiliation, and open-source / GitHub evidence — and returns a confidence percentage and a risk tier (LOW / MEDIUM). Strictness is tunable per workspace as Balanced, Strict, or Very strict.",
  },
  {
    q: "How fast is the job brief intake?",
    a: "Aristotle's two-minute conversational intake produces three artifacts in one pass: a recruiter-ready brief, a LinkedIn post, and a Boolean candidate search query. Paste a draft JD or describe the role roughly — your brief writes itself in the right pane as you answer.",
  },
  {
    q: "Will FORGE integrate with the tools we already use?",
    a: "Yes. GitHub, LinkedIn, Google Calendar, Gmail, Notion, and Slack are first-class integrations. Sherlock's GitHub Pull and Aristotle's Calendar / Gmail hooks are wired so proof-pulls and scheduling happen inside FORGE.",
  },
  {
    q: "What about hiring budget visibility?",
    a: "The dashboard surfaces a live spend breakdown — Sourcing, Screening, Interviews, Tools — alongside remaining budget, projected hire cost, average screen cost, and runway in weeks. Default currency supports AUD, USD, GBP, and EUR.",
  },
  {
    q: "How do interviews and scorecards work?",
    a: "Interviews defaults to 15 / 30 / 60 min slots and a four-stage flow (Technical Screen → Deep Dive → Culture Fit → Final Round). Interview packets generate automatically after candidate selection, and you can include red flags and a scorecard. Calendar provider is Google Calendar or Manual.",
  },
];

const studentFaqs = [
  {
    q: "Who is FORGE built for?",
    a: "FORGE is built for students, early-career engineers, and graduating candidates preparing for technical roles. If you have scattered projects, side-quests, internships, and certifications and want a single, recruiter-grade dossier, you are the target audience.",
  },
  {
    q: "What does Aristotle actually do?",
    a: "Aristotle is the AI assistant anchoring Roadmap and Profile. It generates a guided learning roadmap calibrated to your expertise, goal, and weekly study time, and turns your raw evidence into a verified profile — scored skills, role-fit summaries, interview talking points.",
  },
  {
    q: "How is Columbus different from a job board?",
    a: "Columbus is an AI scout, not a feed. It stages job dossiers from RemoteOK, HN Who's Hiring, GitHub Jobs Archive, Adzuna, and company career pages, then ranks each one against your profile with a % match, salary band, tag chips, and a one-line reason it fits.",
  },
  {
    q: "Do I need a perfect profile to start?",
    a: "No. Most students begin at 0%. Connect LinkedIn or GitHub, drop in a project, and Aristotle does the first pass. The readiness gauge is a tool, not a gate.",
  },
  {
    q: "Can I tailor a different profile per role?",
    a: "Yes — Collections lets you save tailored profile variants per target. Backend Engineer Profile, Software Development Engineer I — IBM Profile, Frontend role version. One master, many shipped versions.",
  },
  {
    q: "Is FORGE free for students?",
    a: "FORGE has a generous free tier with full Aristotle and Columbus access for one active target role. Upgrade to forge multiple parallel pathways and unlock unlimited Collections.",
  },
  {
    q: "How is my data handled?",
    a: "Your projects, repos, and profile evidence stay yours. We use your data only to generate proof and roadmaps inside FORGE. You can export or delete everything at any time.",
  },
];

function FAQList({ items, accent }: { items: { q: string; a: string }[]; accent: "purple" | "amber" }) {
  const [open, setOpen] = useState(0);
  const isAmber = accent === "amber";

  return (
    <ul
      className={`border-y divide-y ${isAmber ? "border-forge-line divide-forge-line" : "border-black/10 divide-black/10"}`}
    >
      {items.map((f, i) => (
        <li key={f.q}>
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full text-left py-4 px-1 flex items-start justify-between gap-6"
          >
            <span className={`text-[15px] font-medium ${isAmber ? "text-forge-ink" : "text-brand-ink"}`}>{f.q}</span>
            <span className={`text-lg leading-none mt-0.5 transition-transform ${open === i ? "rotate-45" : ""} ${isAmber ? "text-forge-amber" : "text-brand-mute"}`}>
              +
            </span>
          </button>
          {open === i && (
            <p className={`text-[14px] leading-relaxed pb-5 px-1 max-w-2xl ${isAmber ? "text-forge-ink/75" : "text-brand-muted"}`}>
              {f.a}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}

function RecruiterFAQ() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="label-mono text-brand-mute mb-3">[06] FAQ</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink">
            Your questions, answered
          </h2>
          <p className="mt-5 text-[15px] text-brand-muted max-w-md leading-relaxed">
            Everything we wished a startup hiring team had on day one. Aristotle handles the workflow.
            Sherlock handles the proof. You hire on signal, not vibes.
          </p>
          <a href="#" className="btn-dark mt-7">Book a Demo</a>
        </div>

        <div className="relative">
          <div className="absolute -top-6 right-0 w-1/2 h-6 diag-pattern" />
          <div className="absolute -bottom-6 right-0 w-1/2 h-6 diag-pattern" />
          <FAQList items={recruiterFaqs} accent="purple" />
        </div>
      </div>
    </section>
  );
}

function StudentFAQ() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="label-mono text-brand-mute mb-3">[06] FAQ</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink">
            Your questions, answered
          </h2>
          <p className="mt-5 text-[15px] text-brand-muted max-w-md leading-relaxed">
            Everything we wished someone had told us when we were graduating. Still
            stuck? Aristotle is one prompt away.
          </p>
          <a href="#" className="btn-dark mt-7">Start free</a>
        </div>

        <div className="relative">
          <div className="absolute -top-6 right-0 w-1/2 h-6 diag-pattern" />
          <div className="absolute -bottom-6 right-0 w-1/2 h-6 diag-pattern" />
          <FAQList items={studentFaqs} accent="purple" />
        </div>
      </div>
    </section>
  );
}

export default function FAQ() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentFAQ /> : <RecruiterFAQ />;
}
