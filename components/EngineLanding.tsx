"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Bot,
  Check,
  ChevronRight,
  CircleCheck,
  FileText,
  Fingerprint,
  LayoutDashboard,
  MessageSquare,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  X,
  Zap,
} from "lucide-react";

const roles = ["Cybersecurity", "Sales", "Legal", "Product"] as const;
type Role = (typeof roles)[number];

const roleData: Record<Role, {
  mission: string;
  event: string;
  agent: string;
  message: string;
  deliverable: string;
  score: string;
}> = {
  Cybersecurity: {
    mission: "Contain a live account-takeover incident",
    event: "Suspicious XSS payload detected",
    agent: "Maya · Security Lead",
    message: "Is this exploitable in production? I need a recommendation before the release window closes.",
    deliverable: "Incident response memo + patch",
    score: "Threat identification",
  },
  Sales: {
    mission: "Run discovery with a sceptical founder",
    event: "Buyer raised a pricing objection",
    agent: "Alex · Founder, Northstar",
    message: "We tried an agency and got polished résumés that went nowhere. Why is this any different?",
    deliverable: "Call outcome + follow-up",
    score: "Discovery quality",
  },
  Legal: {
    mission: "Review a time-sensitive SaaS agreement",
    event: "New indemnity clause surfaced",
    agent: "Priya · Partner",
    message: "The client wants to sign today. Tell me what is genuinely material and what we can accept.",
    deliverable: "Risk memo + redlines",
    score: "Legal judgement",
  },
  Product: {
    mission: "Prioritise a roadmap under churn pressure",
    event: "Enterprise customer threatens to leave",
    agent: "Jon · Engineering Lead",
    message: "We have capacity for one major build. Which bet do we make, and what evidence supports it?",
    deliverable: "Decision memo + roadmap",
    score: "Prioritisation",
  },
};

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${light ? "text-white" : "text-black"}`}>
      <span className="relative grid h-6 w-6 place-items-center">
        <span className="absolute h-px w-6 rotate-0 bg-current" />
        <span className="absolute h-px w-6 rotate-45 bg-current" />
        <span className="absolute h-px w-6 rotate-90 bg-current" />
        <span className="absolute h-px w-6 -rotate-45 bg-current" />
      </span>
      <span className="text-[18px] font-semibold tracking-[-0.04em]">iNGEN</span>
    </span>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f7f3ec]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="iNGEN home"><Logo /></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {["Simulations", "Sherlock", "Aristotle", "Pricing"].map((item) => (
            <a key={item} href={item === "Pricing" ? "/pricing" : `#${item.toLowerCase()}`} className="engine-nav-link">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login" className="engine-nav-link px-3">Sign in</Link>
          <Link href="/book-demo" className="engine-pill engine-pill-dark">Design a simulation <ArrowRight size={14} /></Link>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full border border-black/15 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <span className="space-y-1"><i className="block h-px w-4 bg-black" /><i className="block h-px w-4 bg-black" /></span>}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-black/10 bg-[#f7f3ec] md:hidden">
            <div className="flex flex-col gap-5 px-6 py-6">
              {["Simulations", "Sherlock", "Aristotle"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg">{item}</a>)}
              <Link href="/pricing" className="text-lg">Pricing</Link>
              <Link href="/book-demo" className="engine-pill engine-pill-dark justify-center">Design a simulation</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MiniScore({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-[10px] text-white/55"><span>{label}</span><span className="font-mono">{value}</span></div>
      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }} transition={{ duration: 1, delay }} className="h-full rounded-full bg-[#ff765c]" />
      </div>
    </div>
  );
}

function SimulationWindow({ activeRole, setActiveRole }: { activeRole: Role; setActiveRole: (role: Role) => void }) {
  const data = roleData[activeRole];
  return (
    <div className="engine-window relative overflow-hidden">
      <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#ff765c] shadow-[0_0_12px_#ff765c]" /><span className="font-mono text-[9px] uppercase tracking-[.18em] text-white/60">Live simulation</span></div>
        <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-white/15" /><span className="h-2 w-2 rounded-full bg-white/15" /><span className="h-2 w-2 rounded-full bg-white/15" /></div>
      </div>

      <div className="border-b border-white/10 px-3 py-2.5">
        <div className="no-scrollbar flex gap-1 overflow-x-auto">
          {roles.map((role) => (
            <button key={role} onClick={() => setActiveRole(role)} className={`whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.12em] transition ${activeRole === role ? "bg-white text-black" : "text-white/45 hover:text-white"}`}>{role}</button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeRole} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }} className="grid min-h-[430px] md:grid-cols-[1fr_1.06fr]">
          <div className="border-b border-white/10 p-4 md:border-b-0 md:border-r md:p-5">
            <div className="flex items-center justify-between"><span className="engine-kicker-dark">Mission 01</span><span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-emerald-200">In progress</span></div>
            <h3 className="mt-4 max-w-[300px] text-[23px] font-medium leading-tight text-white">{data.mission}</h3>
            <p className="mt-3 text-[12px] leading-relaxed text-white/48">Work through the scenario, respond to your team, and submit a decision-ready deliverable.</p>

            <div className="mt-6 space-y-2">
              {[{ icon: FileText, text: "Mission brief", done: true }, { icon: MessageSquare, text: "Team room", done: true }, { icon: activeRole === "Cybersecurity" ? Terminal : LayoutDashboard, text: activeRole === "Cybersecurity" ? "Investigation" : "Workspace", done: false }, { icon: Bell, text: "Adaptive events", done: false }].map(({ icon: Icon, text, done }) => (
                <div key={text} className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${done ? "border-white/10 bg-white/[.045]" : "border-white/[.06] text-white/45"}`}><Icon size={14} /><span className="text-[11px]">{text}</span>{done && <Check className="ml-auto text-emerald-300" size={13} />}</div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
              <MiniScore label={data.score} value={86} />
              <MiniScore label="Communication" value={74} delay={.12} />
              <MiniScore label="AI judgement" value={81} delay={.24} />
            </div>
          </div>

          <div className="relative flex min-h-[390px] flex-col p-4 md:p-5">
            <motion.div animate={{ boxShadow: ["0 0 0 rgba(255,118,92,0)", "0 0 32px rgba(255,118,92,.16)", "0 0 0 rgba(255,118,92,0)"] }} transition={{ duration: 2.8, repeat: Infinity }} className="rounded-xl border border-[#ff765c]/25 bg-[#ff765c]/10 p-3">
              <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.14em] text-[#ffad9b]"><Zap size={11} /> Adaptive event · just now</div>
              <p className="mt-2 text-[12px] text-white/85">{data.event}</p>
            </motion.div>

            <div className="mt-4 flex-1 rounded-xl border border-white/10 bg-black/20 p-3.5">
              <div className="flex items-center gap-2 border-b border-white/10 pb-3"><div className="grid h-7 w-7 place-items-center rounded-full bg-white/10 text-[10px] text-white">{data.agent.charAt(0)}</div><div><p className="text-[10px] font-medium text-white">{data.agent}</p><p className="text-[8px] text-emerald-300">online</p></div></div>
              <div className="mt-4 max-w-[88%] rounded-xl rounded-tl-sm bg-white/[.07] p-3 text-[11px] leading-relaxed text-white/72">{data.message}</div>
              <div className="ml-auto mt-3 max-w-[82%] rounded-xl rounded-tr-sm bg-[#ff765c] p-3 text-[11px] leading-relaxed text-white">I’m checking the evidence now. I’ll update the room with impact, options, and my recommendation.</div>
              <div className="mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.03] px-3 py-2.5 text-[10px] text-white/35"><span>Message your team…</span><ArrowRight className="ml-auto" size={12} /></div>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[.035] px-3 py-3"><CircleCheck size={14} className="text-emerald-300" /><div><p className="text-[9px] text-white/40">Final deliverable</p><p className="text-[11px] text-white/80">{data.deliverable}</p></div><ChevronRight className="ml-auto text-white/30" size={14} /></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const [activeRole, setActiveRole] = useState<Role>("Cybersecurity");
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => setActiveRole((current) => roles[(roles.indexOf(current) + 1) % roles.length]), 6000);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="engine-hero relative overflow-hidden pt-[72px]">
      <div className="engine-grid absolute inset-0 opacity-60" />
      <div className="engine-orb engine-orb-one" /><div className="engine-orb engine-orb-two" />
      <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
        <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: .7 }} className="mx-auto max-w-[1050px] text-center">
          <div className="engine-eyebrow mx-auto"><Sparkles size={12} /> AI job simulations for every role</div>
          <h1 className="mt-7 text-[58px] leading-[.91] tracking-[-.055em] text-black sm:text-[76px] md:text-[108px]">
            See candidates <em className="font-normal text-[#f05f46]">do</em> the job<br className="hidden sm:block" /> before you hire them.
          </h1>
          <p className="mx-auto mt-7 max-w-[720px] text-[16px] leading-relaxed text-black/62 md:text-[19px]">
            iNGEN creates adaptive, role-specific job simulations where candidates solve real problems, work with AI agents, and prove how they think—before the first interview.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/book-demo" className="engine-pill engine-pill-dark w-full justify-center sm:w-auto">Design a simulation <ArrowRight size={14} /></Link>
            <a href="#simulations" className="engine-pill engine-pill-light w-full justify-center sm:w-auto"><Play size={13} fill="currentColor" /> Watch the experience</a>
          </div>
          <p className="mt-4 font-mono text-[9px] uppercase tracking-[.16em] text-black/38">No static tests · No black-box scores · Any profession</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 36, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .9, delay: .2, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto mt-14 max-w-[1060px]">
          <div className="absolute -inset-6 rounded-[40px] bg-[#ff765c]/10 blur-3xl" />
          <SimulationWindow activeRole={activeRole} setActiveRole={setActiveRole} />
          <div className="absolute -bottom-5 left-6 hidden items-center gap-2 rounded-full border border-black/10 bg-white/90 px-4 py-2.5 text-[11px] shadow-xl backdrop-blur md:flex"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" /><span className="relative h-2 w-2 rounded-full bg-emerald-500" /></span>Candidate evidence captured live</div>
        </motion.div>
      </div>
    </section>
  );
}

function SignalMarquee() {
  const items = ["Adaptive scenarios", "Recruiter-approved scoring", "AI teammate agents", "Evidence-linked reports", "Candidate AI assessment", "Every profession"];
  return (
    <div className="overflow-hidden border-y border-black/10 bg-[#efe9de] py-4">
      <div className="engine-marquee flex w-max items-center">
        {[...items, ...items].map((item, i) => <div key={`${item}-${i}`} className="flex items-center gap-8 px-4 font-mono text-[10px] uppercase tracking-[.17em] text-black/55"><span>{item}</span><span className="text-[#f05f46]">✦</span></div>)}
      </div>
    </div>
  );
}

function SectionHead({ number, eyebrow, title, body, dark = false }: { number: string; eyebrow: string; title: React.ReactNode; body: string; dark?: boolean }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} variants={reveal} transition={{ duration: .65 }} className="max-w-[760px]">
      <div className={`font-mono text-[10px] uppercase tracking-[.18em] ${dark ? "text-white/40" : "text-black/40"}`}>[{number}] {eyebrow}</div>
      <h2 className={`mt-5 text-[46px] leading-[.98] tracking-[-.045em] md:text-[72px] ${dark ? "text-white" : "text-black"}`}>{title}</h2>
      <p className={`mt-5 max-w-[610px] text-[15px] leading-relaxed md:text-[17px] ${dark ? "text-white/55" : "text-black/57"}`}>{body}</p>
    </motion.div>
  );
}

function OldVsEngine() {
  const rows = [
    ["Résumé claims", "Verified professional evidence"],
    ["Generic questions", "Realistic job scenarios"],
    ["One perfect answer", "Judgement under changing conditions"],
    ["Mystery AI score", "Evidence attached to every score"],
  ];
  return (
    <section className="bg-[#f7f3ec] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1250px]">
        <SectionHead number="01" eyebrow="The signal problem" title={<>Interviews reward performance.<br /><em className="font-normal text-[#f05f46]">iNGEN reveals ability.</em></>} body="A polished résumé and a rehearsed conversation tell you who interviews well. A realistic work simulation tells you who can actually do the job." />
        <div className="mt-14 overflow-hidden rounded-[26px] border border-black/10 bg-white/45">
          <div className="grid grid-cols-2 border-b border-black/10 bg-black/[.03] px-4 py-4 font-mono text-[9px] uppercase tracking-[.16em] text-black/40 md:px-8"><span>Traditional hiring</span><span>Hiring with iNGEN</span></div>
          {rows.map(([old, modern], i) => (
            <motion.div key={old} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="grid grid-cols-2 items-center border-b border-black/[.07] px-4 py-5 last:border-0 md:px-8 md:py-6">
              <div className="flex items-center gap-2 text-[13px] text-black/38 line-through decoration-black/25 md:text-[16px]"><X size={14} className="shrink-0" />{old}</div>
              <div className="flex items-center gap-2.5 text-[13px] font-medium text-black md:text-[16px]"><CircleCheck size={15} className="shrink-0 text-[#f05f46]" />{modern}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BuilderCard() {
  return (
    <div className="rounded-[24px] border border-black/10 bg-[#fffdf9] p-5 shadow-[0_24px_70px_rgba(35,24,17,.08)] md:p-7">
      <div className="flex items-center justify-between border-b border-black/10 pb-4"><div className="flex items-center gap-2"><div className="grid h-8 w-8 place-items-center rounded-lg bg-[#f05f46]/10 text-[#f05f46]"><Sparkles size={15} /></div><div><p className="text-[12px] font-semibold">Aristotle</p><p className="font-mono text-[8px] uppercase tracking-wider text-black/35">Simulation architect</p></div></div><span className="rounded-full border border-emerald-700/15 bg-emerald-50 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-emerald-700">Ready</span></div>
      <div className="mt-5 space-y-3">
        <div className="mr-10 rounded-2xl rounded-tl-sm bg-black/[.055] p-4 text-[12px] leading-relaxed text-black/64">What matters most for this Account Executive role?</div>
        <div className="ml-8 rounded-2xl rounded-tr-sm bg-black p-4 text-[12px] leading-relaxed text-white/90">Discovery, objection handling and commercial judgement. Allow AI, but assess whether they verify it.</div>
        <div className="mr-4 rounded-2xl rounded-tl-sm border border-[#f05f46]/18 bg-[#f05f46]/[.07] p-4 text-[12px] leading-relaxed text-black/68"><Sparkles className="mb-2 text-[#f05f46]" size={14} />I’ll create a 45-minute live buyer scenario with pricing pressure, competitor comparisons, internal agents, and a written follow-up.</div>
      </div>
      <div className="mt-5 flex items-center justify-between rounded-xl border border-black/10 bg-white px-3 py-3"><span className="text-[11px] text-black/38">Make communication 25%...</span><button className="grid h-8 w-8 place-items-center rounded-lg bg-[#f05f46] text-white" aria-label="Send"><ArrowRight size={13} /></button></div>
    </div>
  );
}

function MatrixCard() {
  const metrics = [["Discovery quality", 25], ["Objection handling", 20], ["Commercial judgement", 20], ["Communication", 20], ["AI usage", 15]] as const;
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[.055] p-5 backdrop-blur md:p-7">
      <div className="flex items-center justify-between"><div><p className="text-[13px] font-medium text-white">Evaluation matrix</p><p className="mt-1 text-[10px] text-white/35">Approved by recruiter</p></div><ShieldCheck size={20} className="text-emerald-300" /></div>
      <div className="mt-6 space-y-4">
        {metrics.map(([label, value], i) => <div key={label}><div className="flex justify-between text-[11px] text-white/60"><span>{label}</span><span className="font-mono text-white/40">{value}%</span></div><div className="mt-2 h-1.5 rounded-full bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: `${value * 3.15}%` }} viewport={{ once: true }} transition={{ duration: .8, delay: i * .08 }} className="h-full rounded-full bg-gradient-to-r from-[#ff765c] to-[#ffad96]" /></div></div>)}
      </div>
      <div className="mt-6 rounded-xl border border-white/10 bg-black/25 p-3 font-mono text-[8px] uppercase leading-relaxed tracking-[.12em] text-white/38">Candidate ranking locked to this matrix · résumé prestige excluded</div>
    </div>
  );
}

function Simulations() {
  return (
    <section id="simulations" className="relative overflow-hidden bg-[#080808] px-5 py-24 md:px-8 md:py-36">
      <div className="engine-dark-grid absolute inset-0" />
      <div className="relative mx-auto max-w-[1250px]">
        <SectionHead dark number="02" eyebrow="Adaptive job simulations" title={<>A custom job trial.<br /><em className="font-normal text-[#ff765c]">Built in conversation.</em></>} body="Tell Aristotle what good looks like. It designs the scenario, workplace agents, adaptive events, work surfaces, final deliverable, and an evaluation matrix your team approves." />
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.08fr_.92fr]"><BuilderCard /><MatrixCard /></div>
        <div className="mt-5 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-4">
          {[{ n: "01", t: "Describe the role", b: "Talk to Aristotle—no form maze." }, { n: "02", t: "Approve the matrix", b: "You decide what matters and how much." }, { n: "03", t: "Invite candidates", b: "Each candidate enters a role-specific OS." }, { n: "04", t: "Review the evidence", b: "Scores link to observable actions." }].map((s) => <div key={s.n} className="bg-[#0c0c0c] p-6"><span className="font-mono text-[9px] text-[#ff765c]">{s.n}</span><h3 className="mt-6 text-[17px] text-white">{s.t}</h3><p className="mt-2 text-[12px] leading-relaxed text-white/40">{s.b}</p></div>)}
        </div>
      </div>
    </section>
  );
}

const professionCards = [
  { title: "Cybersecurity", icon: ShieldCheck, event: "Live incident room", output: "Patch + incident memo" },
  { title: "Sales", icon: MessageSquare, event: "Sceptical buyer call", output: "Discovery + follow-up" },
  { title: "Legal", icon: FileText, event: "SaaS contract review", output: "Redlines + risk memo" },
  { title: "Product", icon: LayoutDashboard, event: "Roadmap conflict", output: "Decision memo" },
  { title: "Data", icon: BarChart3, event: "Messy metric analysis", output: "SQL + findings" },
  { title: "HR", icon: Users, event: "Employee conflict", output: "Response plan" },
];

function EveryRole() {
  return (
    <section className="bg-[#f7f3ec] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1250px]">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><SectionHead number="03" eyebrow="Universal by design" title={<>Not another<br /><em className="font-normal text-[#f05f46]">coding test.</em></>} body="One simulation engine, adapted to the work itself. Different roles get different tools, stakeholders, decisions, and deliverables." /><p className="max-w-[300px] font-mono text-[9px] uppercase leading-loose tracking-[.15em] text-black/37">Engineering · Finance · Operations · Support · Marketing · Customer Success · Design · and more</p></div>
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {professionCards.map(({ title, icon: Icon, event, output }, i) => <motion.div key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} whileHover={{ y: -5 }} className="group rounded-[22px] border border-black/10 bg-[#fffdf9] p-5 transition-shadow hover:shadow-[0_22px_55px_rgba(34,22,15,.08)]"><div className="flex items-start justify-between"><div className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white"><Icon size={17} /></div><ArrowRight size={15} className="-translate-x-1 text-black/20 transition group-hover:translate-x-0 group-hover:text-[#f05f46]" /></div><h3 className="mt-8 text-[24px] tracking-[-.025em]">{title}</h3><div className="mt-5 space-y-2 border-t border-black/[.07] pt-4"><div className="flex justify-between gap-4 text-[10px]"><span className="font-mono uppercase tracking-wider text-black/32">Scenario</span><span className="text-right text-black/60">{event}</span></div><div className="flex justify-between gap-4 text-[10px]"><span className="font-mono uppercase tracking-wider text-black/32">Output</span><span className="text-right text-black/60">{output}</span></div></div></motion.div>)}
        </div>
      </div>
    </section>
  );
}

function SherlockCard() {
  const claims = [["React production experience", "Supported", true], ["Backend ownership", "Partial", false], ["Led a five-person team", "Unverified", false]] as const;
  return (
    <div className="engine-feature-card" id="sherlock">
      <div className="engine-feature-copy"><div className="engine-eyebrow"><Fingerprint size={12} /> Sherlock · proof verification</div><h3 className="mt-6 text-[42px] leading-[.98] tracking-[-.04em] md:text-[58px]">Résumés make claims.<br /><em className="font-normal text-[#f05f46]">Sherlock finds receipts.</em></h3><p className="mt-5 max-w-[500px] text-[15px] leading-relaxed text-black/56">Sherlock checks candidate claims against GitHub, portfolios, public professional profiles, projects, and work history—then builds an auditable proof ledger.</p><ul className="mt-7 grid gap-3 text-[12px] text-black/65 sm:grid-cols-2">{["Supported and unverified claims", "Contradiction and risk flags", "Role-specific proof scores", "Targeted follow-up questions"].map(x => <li key={x} className="flex gap-2"><Check size={14} className="text-[#f05f46]" />{x}</li>)}</ul></div>
      <div className="rounded-[22px] border border-black/10 bg-white p-4 shadow-[0_24px_70px_rgba(35,24,17,.08)] md:p-6"><div className="flex items-center justify-between border-b border-black/10 pb-4"><div><p className="text-[12px] font-semibold">Maya Chen</p><p className="text-[9px] text-black/38">Founding full-stack engineer</p></div><div className="text-right"><p className="font-mono text-[22px] font-semibold text-emerald-700">82</p><p className="font-mono text-[7px] uppercase tracking-widest text-black/35">Proof score</p></div></div><div className="mt-4 space-y-2">{claims.map(([claim, verdict, ok]) => <div key={claim} className="flex items-center gap-3 rounded-xl border border-black/[.07] bg-black/[.018] p-3"><div className={`grid h-6 w-6 place-items-center rounded-full ${ok ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-700"}`}>{ok ? <Check size={12} /> : <Search size={11} />}</div><div className="min-w-0 flex-1"><p className="truncate text-[10px] font-medium">{claim}</p><p className="mt-0.5 text-[8px] text-black/35">GitHub · Portfolio · Work history</p></div><span className={`rounded-full px-2 py-1 font-mono text-[7px] uppercase tracking-wider ${ok ? "bg-emerald-50 text-emerald-700" : "bg-orange-50 text-orange-700"}`}>{verdict}</span></div>)}</div><div className="mt-4 rounded-xl bg-black p-3 text-white"><p className="font-mono text-[7px] uppercase tracking-widest text-white/35">Suggested interview question</p><p className="mt-2 text-[10px] leading-relaxed text-white/70">Walk me through the backend architecture and the parts you personally owned.</p></div></div>
    </div>
  );
}

function AristotleCard() {
  return (
    <div className="engine-feature-card engine-feature-card-reverse" id="aristotle">
      <div className="engine-feature-copy"><div className="engine-eyebrow"><Sparkles size={12} /> Aristotle · hiring architect</div><h3 className="mt-6 text-[42px] leading-[.98] tracking-[-.04em] md:text-[58px]">From vague hiring need<br />to <em className="font-normal text-[#f05f46]">complete workflow.</em></h3><p className="mt-5 max-w-[500px] text-[15px] leading-relaxed text-black/56">Aristotle turns a job description into a structured brief, finds proof-heavy candidates, designs the simulation, and keeps the shortlist moving.</p><div className="mt-8 flex flex-wrap gap-2">{["Job brief", "Candidate discovery", "Simulation builder", "Shortlist intelligence"].map(x => <span key={x} className="rounded-full border border-black/10 bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-wider text-black/48">{x}</span>)}</div></div>
      <div className="rounded-[22px] border border-black/10 bg-[#0a0a0a] p-4 text-white shadow-[0_24px_70px_rgba(35,24,17,.12)] md:p-6"><div className="flex items-center gap-2 border-b border-white/10 pb-4"><Bot size={15} className="text-[#ff765c]" /><div><p className="text-[11px] font-medium">Founding full-stack engineer</p><p className="text-[8px] text-white/35">Sydney · Seed stage · 12 candidates</p></div><span className="ml-auto rounded-full bg-emerald-300/10 px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-emerald-300">Search live</span></div><div className="mt-5 space-y-3">{[{ name: "Maya Chen", fit: 93, proof: "Strong shipped product evidence" }, { name: "Alex Rivera", fit: 89, proof: "High startup + backend signal" }, { name: "Anika Sharma", fit: 85, proof: "Strong systems portfolio" }].map((c, i) => <div key={c.name} className="grid grid-cols-[28px_1fr_auto] items-center gap-3 rounded-xl border border-white/10 bg-white/[.045] p-3"><div className="grid h-7 w-7 place-items-center rounded-full bg-[#ff765c]/15 text-[9px] text-[#ffad9b]">0{i + 1}</div><div><p className="text-[10px]">{c.name}</p><p className="mt-1 text-[8px] text-white/35">{c.proof}</p></div><span className="font-mono text-[11px] text-emerald-300">{c.fit}%</span></div>)}</div><div className="mt-4 flex items-center gap-2 rounded-xl border border-[#ff765c]/20 bg-[#ff765c]/10 p-3 text-[9px] leading-relaxed text-white/60"><Sparkles size={13} className="shrink-0 text-[#ff765c]" />Prioritise candidates with shipped products, startup ambiguity, and strong communication evidence.</div></div>
    </div>
  );
}

function Intelligence() {
  return <section className="bg-[#efe9de] px-5 py-24 md:px-8 md:py-36"><div className="mx-auto max-w-[1250px]"><SectionHead number="04" eyebrow="The intelligence layer" title={<>Find the signal.<br /><em className="font-normal text-[#f05f46]">Then test it.</em></>} body="Aristotle finds and designs. Sherlock verifies. The simulation proves performance. One connected hiring workflow, without five disconnected tools pretending to be a stack." /><div className="mt-16 space-y-5"><SherlockCard /><AristotleCard /></div></div></section>;
}

function Report() {
  return (
    <section className="relative overflow-hidden bg-[#080808] px-5 py-24 md:px-8 md:py-36">
      <div className="engine-dark-grid absolute inset-0" />
      <div className="relative mx-auto max-w-[1250px]">
        <SectionHead dark number="05" eyebrow="Evidence-backed decisions" title={<>Every score has<br /><em className="font-normal text-[#ff765c]">a reason.</em></>} body="No ‘the AI said 84’. Review exactly what the candidate did, said, changed, submitted, and how they responded when the scenario changed." />
        <div className="mt-14 grid gap-5 lg:grid-cols-[.68fr_1.32fr]">
          <div className="rounded-[24px] border border-white/10 bg-white/[.055] p-6"><div className="flex items-start justify-between"><div><p className="text-[12px] text-white">Maya Chen</p><p className="mt-1 text-[9px] text-white/35">Security analyst simulation</p></div><span className="rounded-full bg-emerald-300/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-wider text-emerald-300">Progress</span></div><div className="mt-9 flex items-end gap-3"><span className="font-mono text-[68px] leading-none text-white">86</span><span className="mb-2 font-mono text-[10px] text-white/30">/ 100</span></div><p className="mt-4 text-[12px] leading-relaxed text-white/50">Strong incident judgement and evidence-backed communication. Progress to human interview.</p><div className="mt-6 space-y-4"><MiniScore label="Threat identification" value={92} /><MiniScore label="Remediation judgement" value={87} /><MiniScore label="Communication" value={78} /></div></div>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111]">
            <div className="grid grid-cols-3 border-b border-white/10 px-4 py-3 font-mono text-[8px] uppercase tracking-wider text-white/30 md:px-6"><span>Evidence timeline</span><span>Observed behaviour</span><span className="text-right">Signal</span></div>
            {[{ time: "08:14", title: "Inspected suspicious payload", body: "Traced input path before proposing remediation.", signal: "+ Threat ID" }, { time: "17:42", title: "Updated the incident room", body: "Separated confirmed impact from assumptions.", signal: "+ Communication" }, { time: "26:08", title: "Used AI, then verified output", body: "Rejected an unsafe recommendation after checking logs.", signal: "+ AI judgement" }, { time: "41:20", title: "Submitted final response", body: "Clear containment plan, patch, and customer impact note.", signal: "+ Deliverable" }].map((e, i) => <motion.div key={e.time} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="grid grid-cols-[54px_1fr_auto] gap-3 border-b border-white/[.07] px-4 py-5 last:border-0 md:grid-cols-[90px_1fr_120px] md:px-6"><span className="font-mono text-[9px] text-white/28">{e.time}</span><div><p className="text-[11px] text-white/80">{e.title}</p><p className="mt-1.5 text-[9px] leading-relaxed text-white/35">{e.body}</p></div><span className="text-right font-mono text-[8px] uppercase tracking-wider text-emerald-300/75">{e.signal}</span></motion.div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className="relative overflow-hidden bg-[#f05f46] px-5 py-24 text-white md:px-8 md:py-36">
      <div className="engine-grid-white absolute inset-0" />
      <div className="relative mx-auto max-w-[1100px] text-center"><div className="mx-auto font-mono text-[9px] uppercase tracking-[.18em] text-white/60">The interview after the interview</div><h2 className="mt-7 text-[58px] leading-[.9] tracking-[-.055em] md:text-[98px]">Stop interviewing résumés.<br /><em className="font-normal text-black">Start evaluating work.</em></h2><p className="mx-auto mt-7 max-w-[600px] text-[16px] leading-relaxed text-white/72">Design your first adaptive simulation and see what candidates can actually do—before your team spends another hour guessing.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/book-demo" className="engine-pill bg-black text-white hover:bg-black/85">Design your first simulation <ArrowRight size={14} /></Link><Link href="/signup" className="engine-pill border border-white/35 bg-white/10 text-white hover:bg-white/20">Join early access</Link></div></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-5 pb-8 pt-16 text-white md:px-8 md:pt-20">
      <div className="mx-auto max-w-[1400px]"><div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[1.7fr_1fr_1fr_1fr]"><div><Logo light /><p className="mt-5 max-w-[300px] text-[12px] leading-relaxed text-white/38">The AI interview simulation layer for modern hiring.</p></div>{[{ title: "Product", links: ["Simulations", "Sherlock", "Aristotle", "Pricing"] }, { title: "Company", links: ["About", "Careers", "Contact", "Trust"] }, { title: "Get started", links: ["Design a simulation", "Book a demo", "Sign in", "For candidates"] }].map(col => <div key={col.title}><p className="font-mono text-[8px] uppercase tracking-[.16em] text-white/28">{col.title}</p><ul className="mt-5 space-y-3">{col.links.map(l => <li key={l}><a href={l === "Pricing" ? "/pricing" : l === "Book a demo" ? "/book-demo" : "#"} className="text-[11px] text-white/55 transition hover:text-white">{l}</a></li>)}</ul></div>)}</div><div className="flex flex-col justify-between gap-5 pt-7 font-mono text-[8px] uppercase tracking-[.13em] text-white/25 sm:flex-row"><span>© 2026 iNGEN · Human-led hiring decisions</span><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/trust">Trust</Link></div></div><div className="mt-10 select-none overflow-hidden text-[23vw] leading-[.72] tracking-[-.08em] text-white/[.025]">iNGEN</div></div>
    </footer>
  );
}

export default function EngineLanding() {
  return <main className="engine-site"><Nav /><Hero /><SignalMarquee /><OldVsEngine /><Simulations /><EveryRole /><Intelligence /><Report /><Closing /><Footer /></main>;
}
