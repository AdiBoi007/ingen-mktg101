"use client";

import {
  useRef,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import {
  Search,
  BarChart3,
  Mail,
  Sparkles,
  ThumbsUp,
  ThumbsDown,
  type LucideIcon,
} from "lucide-react";
import { useAudience } from "../AudienceContext";

const EASE = [0.22, 1, 0.36, 1] as const;

type Step = {
  id: string;
  tabLabel: string;
  icon: LucideIcon;
  bgColor: string;
  accentColor: string;
  pillLabel: string;
  heading: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  visual: ReactNode;
};

/* ----------------------------- Visual mocks ----------------------------- */

function FilterChipRow({ chips }: { chips: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 mb-3">
      {chips.map((c, i) => (
        <span
          key={i}
          className="text-[11px] font-mono text-ink/70 bg-ink/[0.04] border border-ink/10 rounded px-2 py-1"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function CandidateRow({
  name,
  role,
  company,
  match,
}: {
  name: string;
  role: string;
  company: string;
  match: number;
}) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .join("");
  return (
    <div className="grid grid-cols-[28px,1fr,auto] items-center gap-3 py-2 border-t border-ink/[0.06] first:border-t-0">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-ink/10 to-ink/5 flex items-center justify-center text-[10px] font-medium text-ink/70">
        {initials}
      </div>
      <div className="min-w-0">
        <div className="text-[12px] font-medium text-ink truncate">{name}</div>
        <div className="text-[11px] text-ink/55 truncate">
          {role} · {company}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-1.5 py-0.5">
          {match}%
        </span>
        <ThumbsUp className="w-3.5 h-3.5 text-ink/40" />
        <ThumbsDown className="w-3.5 h-3.5 text-ink/40" />
      </div>
    </div>
  );
}

function SearchResultsCard({
  resultsLabel,
  filterChips,
  rows,
  pillLeft,
  pillRight,
}: {
  resultsLabel: string;
  filterChips: string[];
  rows: { name: string; role: string; company: string; match: number }[];
  pillLeft: string;
  pillRight: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -top-3 -left-3 z-10 text-[10px] font-mono uppercase tracking-wider bg-amber-300 text-ink rounded px-2 py-1 shadow-sm">
        {pillLeft}
      </div>
      <div className="absolute -top-3 -right-3 z-10 text-[10px] font-mono uppercase tracking-wider bg-emerald-300 text-ink rounded px-2 py-1 shadow-sm">
        {pillRight}
      </div>
      <FilterChipRow chips={filterChips} />
      <div className="text-[11px] font-mono text-ink/60 mb-2">
        {resultsLabel}
      </div>
      <div>
        {rows.map((r) => (
          <CandidateRow key={r.name} {...r} />
        ))}
      </div>
    </div>
  );
}

function InsightsChartCard({
  resultsLabel,
  filterChips,
  bars,
}: {
  resultsLabel: string;
  filterChips: string[];
  bars: { label: string; value: number; color: string }[];
}) {
  return (
    <div>
      <FilterChipRow chips={filterChips} />
      <div className="text-[11px] font-mono text-ink/60 mb-3">
        {resultsLabel}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-ink/[0.06] rounded-md p-3">
          <div className="text-[10px] font-mono text-ink/50 mb-2 uppercase tracking-wider">
            Trend
          </div>
          <svg viewBox="0 0 120 60" className="w-full h-20">
            <defs>
              <linearGradient id="iw-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#6B2F8E" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#6B2F8E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 45 L20 38 L40 42 L60 28 L80 22 L100 18 L120 10 L120 60 L0 60 Z"
              fill="url(#iw-area)"
            />
            <path
              d="M0 45 L20 38 L40 42 L60 28 L80 22 L100 18 L120 10"
              stroke="#6B2F8E"
              strokeWidth="1.6"
              fill="none"
            />
          </svg>
        </div>
        <div className="border border-ink/[0.06] rounded-md p-3 flex flex-col items-center">
          <div className="text-[10px] font-mono text-ink/50 mb-2 uppercase tracking-wider self-start">
            Mix
          </div>
          <svg viewBox="0 0 60 60" className="w-20 h-20">
            <circle
              cx="30"
              cy="30"
              r="22"
              fill="none"
              stroke="#EEE8FD"
              strokeWidth="10"
            />
            <circle
              cx="30"
              cy="30"
              r="22"
              fill="none"
              stroke="#6B2F8E"
              strokeWidth="10"
              strokeDasharray="80 200"
              transform="rotate(-90 30 30)"
            />
            <circle
              cx="30"
              cy="30"
              r="22"
              fill="none"
              stroke="#B054E7"
              strokeWidth="10"
              strokeDasharray="40 200"
              strokeDashoffset="-80"
              transform="rotate(-90 30 30)"
            />
          </svg>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {bars.map((b) => (
          <div key={b.label} className="flex items-center gap-2">
            <div className="text-[11px] text-ink/70 w-24 truncate">
              {b.label}
            </div>
            <div className="flex-1 h-2 rounded-full bg-ink/[0.05] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${b.value}%`, background: b.color }}
              />
            </div>
            <div className="text-[11px] font-mono text-ink/50 w-8 text-right">
              {b.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmailComposerCard({
  recipientsLabel,
  tokens,
  subjectLine,
}: {
  recipientsLabel: string;
  tokens: string[];
  subjectLine: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-mono text-ink/60 mb-3">
        {recipientsLabel}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span className="inline-flex items-center gap-1 text-[11px] font-mono bg-violet-100 text-violet-800 border border-violet-200 rounded px-2 py-1">
          <Sparkles className="w-3 h-3" /> Smart AI
        </span>
        {tokens.map((t) => (
          <span
            key={t}
            className="text-[11px] font-mono bg-ink/[0.04] text-ink/70 border border-ink/10 rounded px-2 py-1"
          >
            + {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-1 text-[12px] text-ink/50 border-t border-b border-ink/[0.06] py-1.5 mb-3">
        <span className="font-bold px-1.5">B</span>
        <span className="italic px-1.5">I</span>
        <span className="underline px-1.5">U</span>
        <span className="px-1.5">≡</span>
        <span className="px-1.5 font-mono">⌘</span>
        <span className="px-1.5">…</span>
      </div>
      <div className="text-[12px] text-ink/40 mb-2">{subjectLine}</div>
      <div className="text-[13px] text-ink min-h-[80px]">
        H<span className="inline-block w-[1px] h-3.5 bg-ink animate-pulse ml-0.5" />
      </div>
    </div>
  );
}

/* --------------------------- Step data builders --------------------------- */

function recruiterSteps(): Step[] {
  return [
    {
      id: "intake",
      tabLabel: "INTAKE · ARISTOTLE",
      icon: Search,
      bgColor: "#5B2B8C",
      accentColor: "#C9B6E4",
      pillLabel: "INTAKE & SEARCH",
      heading: "From open role to ranked shortlist in 48 hours",
      body: "Aristotle takes the intake call, writes the role brief in your language, and runs a structured search across GitHub, work history, and university signals. Your shortlist arrives ranked by what candidates have built, with the reasoning in plain English so you can defend it to your hiring manager.",
      primaryCta: { label: "TRY ARISTOTLE", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <SearchResultsCard
          pillLeft="Strong fit"
          pillRight="Reviewed"
          filterChips={[
            "Backend · MVP",
            "Sydney / Remote",
            "Idea → Series A",
            "+2 filters",
          ]}
          resultsLabel="Aristotle shortlist (12)"
          rows={[
            { name: "Alex Rivera", role: "Backend · MVP", company: "Hello AI", match: 92 },
            { name: "Maya Chen", role: "Founding FS", company: "Orbit", match: 93 },
            { name: "Owen Brooks", role: "Data · Launch", company: "Stark", match: 90 },
            { name: "Anika Sharma", role: "Designer · v1", company: "Sheridine", match: 91 },
          ]}
        />
      ),
    },
    {
      id: "proof",
      tabLabel: "PROOF · SHERLOCK",
      icon: BarChart3,
      bgColor: "#1F6F73",
      accentColor: "#9DD5D8",
      pillLabel: "PROOF & TRIANGULATION",
      heading: "Triangulated proof for every candidate",
      body: "Sherlock cross-checks GitHub commits, university clubs, prior teams, and project artefacts to surface the few candidates whose claims actually hold up. Hiring managers see the receipts, not just the resume.",
      primaryCta: { label: "TRY SHERLOCK", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <InsightsChartCard
          filterChips={["Founding eng · NYC", "+3 filters"]}
          resultsLabel="Proof signal (last 90 days)"
          bars={[
            { label: "GitHub depth", value: 82, color: "#6B2F8E" },
            { label: "Team impact", value: 71, color: "#B054E7" },
            { label: "Club / community", value: 56, color: "#DDC73C" },
          ]}
        />
      ),
    },
    {
      id: "outreach",
      tabLabel: "OUTREACH · WORKFLOW",
      icon: Mail,
      bgColor: "#2B3A6B",
      accentColor: "#A8B6E0",
      pillLabel: "OUTREACH",
      heading: "Personal outreach, written from the proof",
      body: "Drafts grounded in each candidate's actual work — the repo they shipped, the club they led — so first messages read like a hiring manager wrote them, not a sequence tool.",
      primaryCta: { label: "TRY OUTREACH", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <EmailComposerCard
          recipientsLabel="Drafts ready (28)"
          tokens={["First name", "Last role", "Top repo", "Recent project"]}
          subjectLine="Subject — Saw your work on {Top repo}"
        />
      ),
    },
  ];
}

function studentSteps(): Step[] {
  return [
    {
      id: "roadmap",
      tabLabel: "ROADMAP · ARISTOTLE",
      icon: Search,
      bgColor: "#5B2B8C",
      accentColor: "#C9B6E4",
      pillLabel: "ROADMAP",
      heading: "A roadmap built around your target role",
      body: "Tell Aristotle the role you want. It maps the skills, projects, and proof artefacts you need — sequenced for the next 90 days, not a four-year plan you'll never finish.",
      primaryCta: { label: "START YOUR ROADMAP", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <SearchResultsCard
          pillLeft="On track"
          pillRight="Proof ready"
          filterChips={[
            "Target · AI Engineer",
            "Junior",
            "Remote-friendly",
            "+1 filter",
          ]}
          resultsLabel="Your roadmap (8 milestones)"
          rows={[
            { name: "Build retrieval demo", role: "Project · Week 2", company: "Aristotle", match: 88 },
            { name: "Ship eval suite", role: "Project · Week 4", company: "Aristotle", match: 85 },
            { name: "Join open-source RAG", role: "Community · Week 6", company: "Columbus", match: 90 },
            { name: "Talk: model evals", role: "Talk · Week 8", company: "Aristotle", match: 82 },
          ]}
        />
      ),
    },
    {
      id: "scout",
      tabLabel: "SCOUT · COLUMBUS",
      icon: BarChart3,
      bgColor: "#1F6F73",
      accentColor: "#9DD5D8",
      pillLabel: "ROLES & MATCH",
      heading: "Real roles, ranked against your proof",
      body: "Columbus scans the open roles and ranks them by how well your roadmap evidence — repos, courses, projects — matches what each team is actually hiring for.",
      primaryCta: { label: "OPEN ROLE FEED", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <InsightsChartCard
          filterChips={["AI / ML eng", "Junior · 2025 grad", "+2 filters"]}
          resultsLabel="Match strength by signal"
          bars={[
            { label: "GitHub depth", value: 74, color: "#6B2F8E" },
            { label: "Coursework", value: 68, color: "#B054E7" },
            { label: "Project impact", value: 81, color: "#DDC73C" },
          ]}
        />
      ),
    },
    {
      id: "apply",
      tabLabel: "APPLY · WORKFLOW",
      icon: Mail,
      bgColor: "#2B3A6B",
      accentColor: "#A8B6E0",
      pillLabel: "APPLY",
      heading: "Applications written from your evidence",
      body: "Cover letters and outreach drafted from the projects you've actually shipped — not a generic template. Each one points the hiring team straight to the proof.",
      primaryCta: { label: "DRAFT AN APPLICATION", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <EmailComposerCard
          recipientsLabel="Applications drafted (5)"
          tokens={["Hiring manager", "Team", "Top project", "Course"]}
          subjectLine="Subject — Re: {Role} at {Team}"
        />
      ),
    },
  ];
}

/* ------------------------------- Section -------------------------------- */

type Props = {
  sectionNumber?: string;
  eyebrow?: string;
  title?: string;
};

export default function HowItWorks({
  sectionNumber = "01",
  eyebrow = "HOW IT WORKS",
  title,
}: Props) {
  const { audience } = useAudience();
  const reducedMotion = useReducedMotion();

  const steps = useMemo(
    () => (audience === "student" ? studentSteps() : recruiterSteps()),
    [audience],
  );
  const heading =
    title ?? (audience === "student"
      ? "Two agents. One defensible roadmap."
      : "Two agents. One defensible shortlist.");

  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState({ x: 0, w: 0 });
  const [inView, setInView] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = containerRef.current;
      if (!el) return;
      const offsetTop = el.offsetTop;
      const range = el.offsetHeight - window.innerHeight;
      const y = window.scrollY || window.pageYOffset || 0;
      const p =
        range > 0 ? Math.min(1, Math.max(0, (y - offsetTop) / range)) : 0;
      scrollYProgress.set(p);
      setActiveIndex(
        Math.min(
          steps.length - 1,
          Math.max(0, Math.floor(p * steps.length - 1e-6)),
        ),
      );
    };
    const onScroll = () => {
      update();
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollYProgress, steps.length]);

  // Smooth color crossfade between bgColors
  const bgColor = useTransform(
    scrollYProgress,
    steps.map((_, i) => i / Math.max(1, steps.length - 1)),
    steps.map((s) => s.bgColor),
  );

  // Subtle parallax for the visual card
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Heading lift-in on first pin
  const headingY = useTransform(scrollYProgress, [0, 0.08], [10, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.06], [0, 1]);

  // Bottom progress bar scaleX
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Update tab indicator position on activeIndex / resize
  useEffect(() => {
    const update = () => {
      const el = tabRefs.current[activeIndex];
      const bar = tabBarRef.current;
      if (!el || !bar) return;
      const elRect = el.getBoundingClientRect();
      const barRect = bar.getBoundingClientRect();
      setIndicator({ x: elRect.left - barRect.left, w: elRect.width });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeIndex, steps.length]);

  // Track when section is in view (for keyboard arrow handling)
  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.2 },
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollToStep = (i: number) => {
    const c = containerRef.current;
    if (!c) return;
    const top = c.offsetTop + (i / steps.length) * c.offsetHeight + 1;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    if (!inView) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        scrollToStep(Math.min(steps.length - 1, activeIndex + 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToStep(Math.max(0, activeIndex - 1));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [inView, activeIndex, steps.length]);

  /* ------------------------- Mobile / reduced-motion ------------------------- */
  if (!isDesktop || reducedMotion) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 pt-16 lg:pt-24 pb-10">
          <div className="text-[13px] font-mono uppercase tracking-[0.18em] text-ink/60 mb-1.5">
            [{sectionNumber}] {eyebrow}
          </div>
          <h2 className="font-display text-[32px] lg:text-[48px] leading-[1.0] tracking-[-0.02em] text-ink">
            {heading}
          </h2>
        </div>
        <div className="space-y-16 pb-24">
          {steps.map((step) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="px-6"
            >
              <div className="text-[13px] font-mono uppercase tracking-[0.18em] text-ink/60 mb-3 inline-flex items-center gap-2">
                <step.icon className="w-3.5 h-3.5" />
                {step.tabLabel}
              </div>
              <div
                className="rounded-xl p-6 mb-6 relative overflow-hidden"
                style={{ background: step.bgColor }}
              >
                <div className="absolute inset-0 hatched opacity-25 pointer-events-none" />
                <div className="relative bg-white rounded-xl p-5 shadow-2xl border border-black/[0.06] max-w-[520px] mx-auto">
                  {step.visual}
                </div>
              </div>
              <span
                className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] rounded px-2 py-1 mb-3"
                style={{
                  background: `${step.accentColor}33`,
                  color: step.bgColor,
                }}
              >
                {step.pillLabel}
              </span>
              <h3 className="font-display text-[26px] leading-[1.1] tracking-[-0.02em] text-ink mb-3">
                {step.heading}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink/75 mb-5">
                {step.body}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={step.primaryCta.href}
                  className="text-[12px] font-mono uppercase tracking-[0.1em] bg-ink text-white px-5 py-3"
                >
                  {step.primaryCta.label}
                </a>
                <a
                  href={step.secondaryCta.href}
                  className="text-[12px] font-mono uppercase tracking-[0.1em] border border-ink text-ink px-5 py-3"
                >
                  {step.secondaryCta.label}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <style jsx>{`
          .hatched {
            background-image: repeating-linear-gradient(
              135deg,
              transparent 0 6px,
              rgba(255, 255, 255, 0.18) 6px 7px
            );
          }
        `}</style>
      </section>
    );
  }

  /* ----------------------------- Desktop pinned ----------------------------- */
  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${steps.length * 100}vh` }}
      aria-label="How it works"
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden flex flex-col"
      >
        {/* Header */}
        <motion.div
          style={{ y: headingY, opacity: headingOpacity }}
          className="mx-auto max-w-[1280px] w-full px-12 pt-16"
        >
          <div className="text-[13px] font-mono uppercase tracking-[0.18em] text-ink/60 mb-1.5">
            [{sectionNumber}] {eyebrow}
          </div>
          <h2 className="font-display text-[48px] leading-[1.0] tracking-[-0.02em] text-ink">
            {heading}
          </h2>
        </motion.div>

        {/* Tab strip */}
        <div
          ref={tabBarRef}
          className="relative mt-12 border-y border-ink/15 h-14 flex"
          role="tablist"
          aria-label="Feature steps"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = activeIndex === i;
            return (
              <button
                key={step.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={isActive}
                aria-controls={`hiw-panel-${step.id}`}
                onClick={() => scrollToStep(i)}
                className={`relative flex items-center gap-2 px-5 w-[260px] border-r border-ink/15 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink ${
                  isActive ? "text-ink" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[13px] font-mono tracking-[0.12em]">
                  {step.tabLabel}
                </span>
              </button>
            );
          })}
          <div
            className="flex-1 hatched-light"
            aria-hidden
            style={{ minWidth: 0 }}
          />
          <motion.div
            className="absolute bottom-[-1px] h-[2px] bg-ink"
            initial={false}
            animate={{ x: indicator.x, width: indicator.w }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          <motion.div
            className="absolute bottom-[-1px] left-0 h-[2px] bg-ink/80 origin-left"
            style={{ scaleX: progressScale, width: "100%" }}
            aria-hidden
          />
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-2 flex-1 min-h-0">
          {/* Left visual */}
          <motion.div
            className="relative overflow-hidden"
            style={{ background: bgColor }}
          >
            <div className="absolute inset-0 hatched-on-color pointer-events-none" />
            <div className="relative h-full w-full flex items-center justify-center px-12">
              <motion.div style={{ y: visualY }} className="w-full max-w-[520px]">
                <motion.div
                  key={steps[activeIndex].id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="bg-white rounded-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] border border-black/[0.06] p-5"
                >
                  {steps[activeIndex].visual}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right text */}
          <div className="relative bg-white">
            <div className="h-full w-full px-16 py-16 flex items-center">
                <motion.div
                  key={steps[activeIndex].id + "-text"}
                  id={`hiw-panel-${steps[activeIndex].id}`}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="max-w-[520px]"
                >
                  <span
                    className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] rounded px-2 py-1 mb-5"
                    style={{
                      background: `${steps[activeIndex].accentColor}33`,
                      color: steps[activeIndex].bgColor,
                    }}
                  >
                    {steps[activeIndex].pillLabel}
                  </span>
                  <h3 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-ink mb-4">
                    {steps[activeIndex].heading}
                  </h3>
                  <p className="text-[16px] leading-[1.55] text-ink/75 mb-7">
                    {steps[activeIndex].body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={steps[activeIndex].primaryCta.href}
                      className="text-[12px] font-mono uppercase tracking-[0.1em] bg-ink text-white px-5 py-3"
                    >
                      {steps[activeIndex].primaryCta.label}
                    </a>
                    <a
                      href={steps[activeIndex].secondaryCta.href}
                      className="text-[12px] font-mono uppercase tracking-[0.1em] border border-ink text-ink px-5 py-3"
                    >
                      {steps[activeIndex].secondaryCta.label}
                    </a>
                  </div>
                </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hatched-light {
          background-image: repeating-linear-gradient(
            135deg,
            transparent 0 6px,
            rgba(29, 22, 29, 0.18) 6px 7px
          );
        }
        .hatched-on-color {
          background-image: repeating-linear-gradient(
            135deg,
            transparent 0 8px,
            rgba(255, 255, 255, 0.12) 8px 9px
          );
        }
      `}</style>
    </section>
  );
}
