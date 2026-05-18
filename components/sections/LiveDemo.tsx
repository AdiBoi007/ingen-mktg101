"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, RefreshCw, Lock } from "lucide-react";

type Page = {
  key: string;
  label: string;
  path: string;
  accent: string;
};

const BASE = "https://ingen-hrandstudent.vercel.app";
const DISPLAY_BASE = "ingenworkspace.com";

const PAGES: Page[] = [
  { key: "sherlock",   label: "Sherlock",   path: "/analyse-profile", accent: "#6B2F8E" },
  { key: "aristotle",  label: "Aristotle",  path: "/job-brief",       accent: "#F5A623" },
  { key: "chat",       label: "Chat",       path: "/chat",            accent: "#2E7DAF" },
  { key: "interviews", label: "Interviews", path: "/interviews",      accent: "#0E8F6E" },
  { key: "settings",   label: "Settings",   path: "/settings",        accent: "#C24A4A" },
];

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
  label,
}: {
  url: string;
  iframeKey: number;
  onLoad: () => void;
  loaded: boolean;
  accent: string;
  label: string;
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
          <div className="absolute inset-0 flex items-center justify-center text-[12px] font-mono uppercase tracking-[0.18em] text-ink/40 z-20 bg-[#FBFAF8]">
            <span className="inline-flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full animate-pulse"
                style={{ background: accent }}
              />
              Loading {label}…
            </span>
          </div>
          <div
            className="absolute inset-x-0 top-0 h-[2px] z-30 scan-line"
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
          title={`${label} live preview`}
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
    <div className="flex items-center gap-3 px-4 h-11 bg-[#F4F1EE] border-b border-ink/10 shrink-0">
      <div className="flex items-center gap-1.5 shrink-0">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 min-w-0 flex items-center gap-2 bg-white border border-ink/10 rounded px-3 h-7 max-w-[640px]">
        <Lock className="w-3 h-3 text-ink/40 shrink-0" />
        <span className="text-[12px] font-mono text-ink/70 truncate">
          {displayUrl}
        </span>
      </div>
      <button
        onClick={onReload}
        aria-label="Reload preview"
        className="text-ink/50 hover:text-ink transition-colors shrink-0"
      >
        <RefreshCw className="w-4 h-4" />
      </button>
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-ink/50 hover:text-ink transition-colors shrink-0"
        aria-label="Open in new tab"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export default function LiveDemo() {
  const [activeKey, setActiveKey] = useState<string>(PAGES[0].key);
  const [iframeKey, setIframeKey] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const active = useMemo(
    () => PAGES.find((p) => p.key === activeKey) ?? PAGES[0],
    [activeKey]
  );

  const liveUrl = `${BASE}${active.path}`;
  const displayUrl = `${DISPLAY_BASE}${active.path}`;

  const reload = () => {
    setLoaded(false);
    setIframeKey((k) => k + 1);
  };

  const switchTo = (next: string) => {
    if (next === activeKey) return;
    setActiveKey(next);
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
        {/* Headline + CTAs */}
        <div className="text-center max-w-[820px] mx-auto mb-10">
          <h2 className="font-display text-[40px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink mb-4">
            Live preview.
          </h2>
          <p className="text-[17px] leading-[1.5] text-ink/70 max-w-[44ch] mx-auto">
            Try interacting with the interface below.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <a
              href={liveUrl}
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

        {/* Page selector tabs — ABOVE the frame, do not overlap it */}
        <div
          role="tablist"
          aria-label="Switch preview page"
          className="flex flex-nowrap justify-start lg:justify-center gap-2 mb-5 overflow-x-auto pb-1 -mx-6 px-6 lg:mx-0 lg:px-0 no-scrollbar"
        >
          {PAGES.map((p) => {
            const isOn = activeKey === p.key;
            return (
              <button
                key={p.key}
                role="tab"
                aria-selected={isOn}
                onClick={() => switchTo(p.key)}
                className="relative shrink-0 text-[11px] font-mono uppercase tracking-[0.14em] px-4 py-2.5 rounded-full border transition-colors"
                style={{
                  background: isOn ? p.accent : "transparent",
                  color: isOn ? "#fff" : "rgba(14,14,16,0.75)",
                  borderColor: isOn ? p.accent : "rgba(14,14,16,0.15)",
                }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: isOn ? "#fff" : p.accent }}
                  />
                  {p.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Browser frame — chrome and iframe are siblings; no overlap */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`glow-${active.key}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -inset-3 rounded-2xl blur-2xl pointer-events-none"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${active.accent}55, transparent 60%)`,
              }}
              aria-hidden
            />
          </AnimatePresence>

          <div
            className="relative rounded-2xl bg-white shadow-[0_40px_80px_-30px_rgba(14,14,16,0.35)] overflow-hidden flex flex-col"
            style={{ border: "1px solid rgba(14,14,16,0.10)" }}
          >
            <BrowserChrome
              displayUrl={displayUrl}
              liveUrl={liveUrl}
              onReload={reload}
            />

            <ScaledIframe
              url={liveUrl}
              iframeKey={iframeKey}
              onLoad={() => setLoaded(true)}
              loaded={loaded}
              accent={active.accent}
              label={active.label}
            />
          </div>

          <div className="mt-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.14em] text-ink/45">
            <span>Live · proof, not assumptions</span>
            <a
              href={liveUrl}
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
