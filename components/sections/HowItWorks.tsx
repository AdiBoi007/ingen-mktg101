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
  FileText,
  LayoutDashboard,
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

function RoleBriefCard({
  title,
  subtitle,
  chips,
  aiNote,
}: {
  title: string;
  subtitle: string;
  chips: string[];
  aiNote: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-mono text-ink/60 mb-1.5 uppercase tracking-wider">
        Role brief · Aristotle
      </div>
      <div className="text-[15px] font-semibold text-ink leading-snug">{title}</div>
      <div className="text-[12px] text-ink/55 mt-0.5">{subtitle}</div>
      <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
        {chips.map((c) => (
          <span
            key={c}
            className="text-[11px] font-mono text-violet-800 bg-violet-50 border border-violet-200 rounded px-2 py-1"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-ink/[0.08] bg-ink/[0.02] p-3">
        <div className="flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-700 mt-0.5 shrink-0" />
          <div className="text-[12px] text-ink/75 leading-relaxed">{aiNote}</div>
        </div>
      </div>
    </div>
  );
}

function HiringDashboardCard({
  stats,
  pipeline,
  insight,
  title = "Startup hiring dashboard",
}: {
  stats: { label: string; value: string }[];
  pipeline: string[];
  insight: string;
  title?: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-mono text-ink/60 mb-3 uppercase tracking-wider">
        {title}
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border border-ink/[0.08] rounded-md p-2.5 bg-white"
          >
            <div className="text-[14px] font-mono font-semibold text-ink">{s.value}</div>
            <div className="text-[10px] uppercase tracking-wider text-ink/50 mt-0.5">
              {s.label}
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] font-mono text-ink/50 mb-2 uppercase tracking-wider">
        Pipeline
      </div>
      <div className="flex items-center flex-wrap gap-1.5 mb-4">
        {pipeline.map((p, i) => (
          <div key={p} className="flex items-center gap-1.5">
            <span className="text-[11px] font-mono text-violet-800 bg-violet-50 border border-violet-200 rounded px-2 py-1">
              {p}
            </span>
            {i < pipeline.length - 1 && (
              <span className="text-ink/40 text-[11px]">→</span>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-md border border-ink/[0.08] bg-ink/[0.02] p-3">
        <div className="flex items-start gap-2">
          <Sparkles className="w-3.5 h-3.5 text-violet-700 mt-0.5 shrink-0" />
          <div className="text-[12px] text-ink/75 leading-relaxed">{insight}</div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------- Step data builders --------------------------- */

function recruiterSteps(): Step[] {
  return [
    {
      id: "intake",
      tabLabel: "ROLE INTAKE",
      icon: FileText,
      bgColor: "#5B2B8C",
      accentColor: "#C9B6E4",
      pillLabel: "ARISTOTLE · RECRUITING AGENT",
      heading: "Turn a messy hiring need into a real search.",
      body: "Tell Aristotle who you need to hire. It turns a rough role idea into a sharp brief, must-have criteria, search logic, and a candidate pipeline your team can actually act on.",
      primaryCta: { label: "BUILD THE ROLE", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <RoleBriefCard
          title="Founding Full-Stack Engineer"
          subtitle="Sydney / Remote · Seed-stage AI startup"
          chips={[
            "Brief generated",
            "Search ready",
            "12 candidates found",
            "5 high-signal profiles",
          ]}
          aiNote="Aristotle recommends prioritising candidates with shipped products, startup context, and strong GitHub evidence."
        />
      ),
    },
    {
      id: "search",
      tabLabel: "CANDIDATE SEARCH",
      icon: Search,
      bgColor: "#2F8D6E",
      accentColor: "#B8E2D1",
      pillLabel: "CANDIDATE SEARCH",
      heading: "Shortlists ranked by evidence, not resume polish.",
      body: "iNGEN finds candidates using the signals recruiters actually care about: shipped projects, GitHub depth, work history, university, clubs, open-source work, and role fit.",
      primaryCta: { label: "FIND CANDIDATES", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <SearchResultsCard
          pillLeft="Proof ranked"
          pillRight="High fit"
          filterChips={["GitHub", "Work history", "Projects", "University", "Clubs"]}
          resultsLabel="Aristotle shortlist · ranked by proof, not keywords"
          rows={[
            { name: "Maya Chen", role: "Founding FS", company: "Orbit", match: 93 },
            { name: "Alex Rivera", role: "Backend", company: "Hello AI", match: 92 },
            { name: "Anika Sharma", role: "Product Systems", company: "Sheridine", match: 91 },
            { name: "Owen Brooks", role: "Data Launch", company: "Stark", match: 90 },
          ]}
        />
      ),
    },
    {
      id: "proof",
      tabLabel: "PROOF SCAN",
      icon: BarChart3,
      bgColor: "#1F6F73",
      accentColor: "#9DD5D8",
      pillLabel: "SHERLOCK · PROOF AGENT",
      heading: "Know if the candidate is actually legit.",
      body: "Sherlock investigates the evidence behind every candidate. It checks GitHub, projects, work history, university, clubs, and public signals to show whether their profile holds up. No keyword theatre. Just receipts.",
      primaryCta: { label: "RUN PROOF SCAN", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <InsightsChartCard
          filterChips={["Alex Rivera", "92% confidence", "LOW risk"]}
          resultsLabel="Sherlock proof report · 5 sources verified"
          bars={[
            { label: "GitHub depth", value: 92, color: "#6B2F8E" },
            { label: "Work history", value: 84, color: "#B054E7" },
            { label: "Project evidence", value: 78, color: "#DDC73C" },
          ]}
        />
      ),
    },
    {
      id: "interview",
      tabLabel: "INTERVIEW COMMAND",
      icon: Mail,
      bgColor: "#2B3A6B",
      accentColor: "#A8B6E0",
      pillLabel: "INTERVIEW COMMAND",
      heading: "Walk into every interview already briefed.",
      body: "iNGEN turns candidate proof into interview context. Your team gets strengths, risks, proof sources, questions, red flags, and a scorecard before the call starts — every interview begins with evidence, not assumptions.",
      primaryCta: { label: "PREPARE INTERVIEW PACK", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <EmailComposerCard
          recipientsLabel="Pack ready · Maya Chen · Founding Full-Stack · LOW risk"
          tokens={["Why this candidate", "Proof summary", "Questions to ask", "Red flags"]}
          subjectLine="Interview pack — Maya Chen · 6 proof sources · technical screen"
        />
      ),
    },
    {
      id: "dashboard",
      tabLabel: "HIRING DASHBOARD",
      icon: LayoutDashboard,
      bgColor: "#7A3CA8",
      accentColor: "#D6BCF0",
      pillLabel: "HIRING DASHBOARD",
      heading: "Your hiring pipeline, without the spreadsheet chaos.",
      body: "Track candidates, interviews, budget, team capacity, pipeline movement, and next actions in one recruiter command center. Less hiring chaos. More hiring momentum.",
      primaryCta: { label: "OPEN DASHBOARD", href: "#" },
      secondaryCta: { label: "BOOK A DEMO", href: "#" },
      visual: (
        <HiringDashboardCard
          stats={[
            { label: "Budget left", value: "$16.4K" },
            { label: "Interviews this week", value: "5" },
            { label: "Offer-ready", value: "3" },
            { label: "Hiring runway", value: "6 wks" },
          ]}
          pipeline={["Shortlisted", "Selected", "Scheduled", "Offer-ready"]}
          insight="Finish interview packets before adding more candidates."
        />
      ),
    },
  ];
}

function studentSteps(): Step[] {
  return [
    {
      id: "roadmap",
      tabLabel: "ROADMAP",
      icon: FileText,
      bgColor: "#5B2B8C",
      accentColor: "#C9B6E4",
      pillLabel: "ARISTOTLE · SKILL ROADMAP",
      heading: "Build the skills companies actually hire for.",
      body: "Tell Aristotle your target role, current level, and weekly study time. It creates a step-by-step roadmap so you know exactly what to learn next — a role-based learning path, a weekly skill plan, progress tracking, and job-ready milestones.",
      primaryCta: { label: "BUILD MY ROADMAP", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <RoleBriefCard
          title="Target role: Frontend Engineer"
          subtitle="Plan: 12 months · 420 hours"
          chips={[
            "React",
            "TypeScript",
            "APIs",
            "Projects",
          ]}
          aiNote="Status: 0 of 52 skills completed. No more “where do I start?” — iNGEN turns your goal into a clear placement path."
        />
      ),
    },
    {
      id: "scout",
      tabLabel: "JOB SCOUT",
      icon: Search,
      bgColor: "#1F6F73",
      accentColor: "#9DD5D8",
      pillLabel: "COLUMBUS · JOB SCOUT",
      heading: "Find jobs that actually match you.",
      body: "Columbus scans roles, ranks them by fit, explains why they match, and helps you focus on the opportunities worth applying to — internships and graduate roles, a match score for every job, salary and skill signals, and apply-path suggestions.",
      primaryCta: { label: "SCOUT JOBS FOR ME", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <SearchResultsCard
          pillLeft="Ranked by fit"
          pillRight="96% match"
          filterChips={["Internships", "Graduate roles", "Remote-friendly", "+1 filter"]}
          resultsLabel="Stop doom-scrolling job boards. Columbus brings the right roles to you."
          rows={[
            { name: "Backend Product Engineer", role: "Python · SQL · APIs", company: "Strong fit", match: 96 },
            { name: "Frontend Engineer", role: "React · TypeScript", company: "High fit", match: 92 },
            { name: "Data Analyst (New Grad)", role: "SQL · Python", company: "Good fit", match: 88 },
            { name: "ML Intern", role: "Projects · Repos", company: "Worth a look", match: 84 },
          ]}
        />
      ),
    },
    {
      id: "proof",
      tabLabel: "PROOF PROFILE",
      icon: BarChart3,
      bgColor: "#7A3CA8",
      accentColor: "#D6BCF0",
      pillLabel: "ARISTOTLE · PROOF PROFILE",
      heading: "Turn your projects into recruiter signal.",
      body: "iNGEN converts your GitHub, projects, hackathons, certifications, and experience into a clean proof-based profile recruiters can understand instantly — verified project proof, skill confidence scores, a role-fit summary, and a recruiter-ready export.",
      primaryCta: { label: "BUILD MY PROOF PROFILE", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <InsightsChartCard
          filterChips={["82% Placement Ready", "7 Projects", "12 Repos", "3 Certifications"]}
          resultsLabel="Your resume says what you did. Your iNGEN profile proves it."
          bars={[
            { label: "React", value: 93, color: "#6B2F8E" },
            { label: "TypeScript", value: 91, color: "#B054E7" },
            { label: "Python", value: 88, color: "#DDC73C" },
          ]}
        />
      ),
    },
    {
      id: "interview",
      tabLabel: "INTERVIEW PREP",
      icon: Mail,
      bgColor: "#2B3A6B",
      accentColor: "#A8B6E0",
      pillLabel: "ARISTOTLE · INTERVIEW COACH",
      heading: "Know what to say before the interview.",
      body: "Aristotle turns your proof profile into talking points, role-fit answers, and project stories so you can explain your work like a strong candidate — project explanations, role-fit answers, strength and gap analysis, and interview talking points.",
      primaryCta: { label: "PREPARE MY INTERVIEW", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <EmailComposerCard
          recipientsLabel="Walk in prepared. Talk like someone who knows their work."
          tokens={["Project story", "Role-fit answer", "Strengths", "Gaps"]}
          subjectLine="Interview talking point — explain how your API project shows backend thinking, data flow, and production awareness."
        />
      ),
    },
    {
      id: "workspace",
      tabLabel: "SAVED APPLICATIONS",
      icon: LayoutDashboard,
      bgColor: "#2F8D6E",
      accentColor: "#B8E2D1",
      pillLabel: "PLACEMENT WORKSPACE",
      heading: "Save every job, roadmap, and profile version.",
      body: "Keep your best job matches, tailored profiles, and skill roadmaps in one place so every application has the right version of you — saved job shortlists, role-specific profiles, roadmap versions, and an application-ready workspace.",
      primaryCta: { label: "OPEN MY WORKSPACE", href: "#" },
      secondaryCta: { label: "WATCH A DEMO", href: "#" },
      visual: (
        <HiringDashboardCard
          title="Saved collection"
          stats={[
            { label: "Profiles", value: "4" },
            { label: "Job shortlists", value: "4" },
            { label: "Roadmaps", value: "3" },
            { label: "High-signal saves", value: "6" },
          ]}
          pipeline={["Saved", "Tailored", "Applied", "Tracked"]}
          insight="One place for every role you are chasing."
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
  eyebrow = "FEATURES",
  title,
}: Props) {
  const { audience } = useAudience();
  const reducedMotion = useReducedMotion();

  const steps = useMemo(
    () => (audience === "student" ? studentSteps() : recruiterSteps()),
    [audience],
  );
  const isStudent = audience === "student";
  const heading =
    title ?? (isStudent
      ? "Everything you need to go from student to shortlisted."
      : "From role intent to interview-ready talent.");
  const eyebrowLabel = isStudent ? "STUDENT PLACEMENT OS" : eyebrow;
  const studentSubheadline =
    "iNGEN gives you a clear career path, matched job opportunities, a proof-based profile, and interview-ready talking points in one workspace.";

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
            [{sectionNumber}] {eyebrowLabel}
          </div>
          <h2 className="font-display text-[32px] lg:text-[48px] leading-[1.0] tracking-[-0.02em] text-ink max-w-4xl">
            {heading}
          </h2>
          {audience === "recruiter" && (
            <p className="mt-4 max-w-2xl text-[15px] lg:text-[17px] leading-relaxed text-ink/70">
              iNGEN gives recruiters a proof-first hiring workflow: build the role, find candidates,
              verify evidence, prepare interviews, and move the pipeline — all with Aristotle and
              Sherlock working behind the scenes.
            </p>
          )}
          {isStudent && (
            <p className="mt-4 max-w-2xl text-[15px] lg:text-[17px] leading-relaxed text-ink/70">
              {studentSubheadline}
            </p>
          )}
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
            [{sectionNumber}] {eyebrowLabel}
          </div>
          <h2 className="font-display text-[48px] leading-[1.0] tracking-[-0.02em] text-ink max-w-4xl">
            {heading}
          </h2>
          {audience === "recruiter" && (
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/70">
              iNGEN gives recruiters a proof-first hiring workflow: build the role, find candidates,
              verify evidence, prepare interviews, and move the pipeline — all with Aristotle and
              Sherlock working behind the scenes.
            </p>
          )}
          {isStudent && (
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink/70">
              {studentSubheadline}
            </p>
          )}
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
                className={`relative flex items-center gap-2 px-4 flex-1 min-w-[180px] max-w-[240px] border-r border-ink/15 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-ink ${
                  isActive ? "text-ink" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="text-[11px] font-mono tracking-[0.1em] truncate">
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
