"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, RefreshCw, Lock } from "lucide-react";

type Demo = {
  key: "sherlock" | "aristotle";
  tag: string;
  label: string;
  headline: string;
  subline: string;
  support: string;
  displayUrl: string;
  url: string;
  accent: string;
  ringColor: string;
};

const SHERLOCK: Demo = {
  key: "sherlock",
  tag: "Sherlock",
  label: "Proof analyzer",
  headline: "Live proof scan.",
  subline: "Paste a candidate URL and watch Sherlock reveal the evidence.",
  support: "Triangulates GitHub · work history · university · clubs · projects.",
  displayUrl: "ingenworkspace.com/analyse-profile",
  url: "https://ingen-hrandstudent.vercel.app/analyse-profile",
  accent: "#6B2F8E",
  ringColor: "rgba(176,84,231,0.35)",
};

const ARISTOTLE: Demo = {
  key: "aristotle",
  tag: "Aristotle",
  label: "Roadmap engine",
  headline: "Live roadmap build.",
  subline: "Three inputs, one curriculum — see Aristotle map the next 90 days.",
  support: "Sequences topics · scores profile · tracks readiness in real time.",
  displayUrl: "ingenworkspace.com/student",
  url: "https://ingen-hrandstudent.vercel.app/student",
  accent: "#F5A623",
  ringColor: "rgba(245,166,35,0.4)",
};

// The hosted demo app is designed for a ~1440px desktop layout.
// We render the iframe at that fixed size, then CSS-scale it down to
// whatever width the container has — so the full app always fits.
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;

function ScaledIframe({
  url,
  iframeKey,
  onLoad,
  loaded,
  accent,
  agentTag,
}: {
  url: string;
  iframeKey: number;
  onLoad: () => void;
  loaded: boolean;
  accent: string;
  agentTag: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / DESIGN_WIDTH);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-[#FBFAF8]"
      style={{ height: scaledHeight }}
    >
      {!loaded && (
        <>
          <div className="absolute inset-0 flex items-center justify-center text-[12px] font-mono uppercase tracking-[0.18em] text-ink/40 z-20">
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ background: accent }}
              />
              Scanning {agentTag}…
            </span>
          </div>
          <div
            className="absolute inset-x-0 top-0 h-[2px] z-20 scan-line"
            style={{
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
            aria-hidden
          />
        </>
      )}
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <iframe
          key={iframeKey}
          src={url}
          title={`${agentTag} live preview`}
          onLoad={onLoad}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write"
          style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT }}
          className="bg-white border-0 block"
        />
      </div>
      <style jsx>{`
        .scan-line {
          animation: scan 1.6s ease-in-out infinite;
        }
        @keyframes scan {
          0% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(${scaledHeight}px);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}

function BrowserChrome({
  displayUrl,
  liveUrl,
  onReload,
}: {
  displayUrl: string;
  liveUrl: string;
  onReload: () => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 h-11 border-b border-ink/10 bg-[#F4F1EE]">
      <div className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 flex items-center gap-2 bg-white border border-ink/10 rounded px-3 h-7 max-w-[640px]">
        <Lock className="w-3 h-3 text-ink/40" />
        <span className="text-[12px] font-mono text-ink/70 truncate">
          {displayUrl}
        </span>
      </div>
      <button
        onClick={onReload}
        aria-label="Reload preview"
        className="text-ink/50 hover:text-ink transition-colors"
      >
        <RefreshCw className="w-4 h-4" />
      </button>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink/50 hover:text-ink transition-colors"
        aria-label="Open in new tab"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function LiveDemo() {
  const [active, setActive] = useState<"sherlock" | "aristotle">("sherlock");
  const [iframeKey, setIframeKey] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const v = active === "sherlock" ? SHERLOCK : ARISTOTLE;

  const reload = () => {
    setLoaded(false);
    setIframeKey((k) => k + 1);
  };

  const switchTo = (next: "sherlock" | "aristotle") => {
    if (next === active) return;
    setActive(next);
    setLoaded(false);
    setIframeKey((k) => k + 1);
  };

  return (
    <section
      className="relative bg-brand-bg overflow-hidden"
      aria-label="Live product demo"
    >
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none halftone-light-top opacity-80"
        aria-hidden
      />

      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-20 pb-24 relative">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-center mb-8 text-center lg:text-left">
          <div>
            <div className="text-[12px] font-mono uppercase tracking-[0.18em] text-ink/55 mb-3">
              [02] LIVE — {v.tag.toUpperCase()}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={v.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <h2 className="font-display text-[40px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink mb-4">
                  {v.headline}
                </h2>
                <p className="text-[17px] leading-[1.5] text-ink/75 max-w-[44ch] mx-auto lg:mx-0">
                  {v.subline}
                </p>
                <p className="mt-3 text-[13px] font-mono text-ink/55 max-w-[48ch] mx-auto lg:mx-0">
                  {v.support}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
              <a
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-mono uppercase tracking-[0.1em] bg-ink text-white px-5 py-3 inline-flex items-center gap-2"
              >
                Open full app
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="/book-demo"
                className="text-[12px] font-mono uppercase tracking-[0.1em] border border-ink text-ink px-5 py-3"
              >
                Book a demo
              </a>
            </div>
          </div>

          <div className="lg:pt-2">
            <div
              role="tablist"
              aria-label="Switch demo"
              className="inline-flex items-center gap-1 rounded-full border border-ink/15 bg-white/70 backdrop-blur p-1 mb-5"
            >
              {[SHERLOCK, ARISTOTLE].map((d) => {
                const isOn = active === d.key;
                return (
                  <button
                    key={d.key}
                    role="tab"
                    aria-selected={isOn}
                    onClick={() => switchTo(d.key)}
                    className="relative text-[11px] font-mono uppercase tracking-[0.14em] px-4 py-2 rounded-full transition-colors"
                    style={{
                      color: isOn ? "#fff" : "rgba(14,14,16,0.7)",
                    }}
                  >
                    {isOn && (
                      <motion.span
                        layoutId="demo-toggle-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: d.accent }}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative inline-flex items-center gap-1.5">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: isOn ? "#fff" : d.accent }}
                      />
                      {d.tag}
                    </span>
                  </button>
                );
              })}
            </div>
            <p className="text-[12px] font-mono uppercase tracking-[0.14em] text-ink/45 hidden lg:block">
              {v.tag} — {v.label}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <motion.div
            key={`glow-${v.key}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.6 }}
            className="absolute -inset-3 rounded-2xl blur-2xl pointer-events-none"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${v.ringColor}, transparent 60%)`,
            }}
            aria-hidden
          />
          <div
            className="relative rounded-2xl overflow-hidden border bg-white shadow-[0_40px_80px_-30px_rgba(14,14,16,0.35)]"
            style={{ borderColor: "rgba(14,14,16,0.10)" }}
          >
            <BrowserChrome
              displayUrl={v.displayUrl}
              liveUrl={v.url}
              onReload={reload}
            />

            <ScaledIframe
              url={v.url}
              iframeKey={iframeKey}
              onLoad={() => setLoaded(true)}
              loaded={loaded}
              accent={v.accent}
              agentTag={v.tag}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-ink/45">
            <span>Live · proof, not assumptions</span>
            <a
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              Open full app
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
