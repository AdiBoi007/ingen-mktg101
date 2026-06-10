"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useAudience } from "../AudienceContext";

type Page = {
  key: string;
  label: string;
  path: string;
  accent: string;
};

const BASE = "https://ingen-hrandstudent.vercel.app";

const PAGES: Page[] = [
  { key: "sherlock",   label: "Sherlock",   path: "/analyse-profile", accent: "#6B2F8E" },
  { key: "aristotle",  label: "Aristotle",  path: "/job-brief",       accent: "#F5A623" },
  { key: "chat",       label: "Chat",       path: "/chat",            accent: "#2E7DAF" },
  { key: "interviews", label: "Interviews", path: "/interviews",      accent: "#0E8F6E" },
  { key: "settings",   label: "Settings",   path: "/settings",        accent: "#C24A4A" },
];

// The hosted demo app is a full-height (100vh) app shell — it reflows to
// fill whatever viewport it's given rather than having a fixed content
// height. We render the iframe at a realistic desktop aspect ratio
// (16:9, like a maximized laptop browser) so the app looks natural with
// no over-stretched dead space, then CSS-scale it down to the container
// width so the full app always fits.
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 810;

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

  // Cross-origin iframes may not fire onLoad reliably; force-clear the
  // overlay after a short delay so the embed stays interactive.
  useEffect(() => {
    const t = window.setTimeout(onLoad, 2500);
    return () => window.clearTimeout(t);
  }, [iframeKey, onLoad]);

  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-[#FBFAF8]"
      style={{ height: scaledHeight }}
    >
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
          referrerPolicy="no-referrer-when-downgrade"
          allow="clipboard-read; clipboard-write"
          style={{ width: DESIGN_WIDTH, height: DESIGN_HEIGHT }}
          className="bg-white border-0 block"
        />
      </div>
      {!loaded && (
        <div
          className="absolute inset-0 flex items-center justify-center text-[12px] font-mono uppercase tracking-[0.18em] text-ink/40 z-20 bg-[#FBFAF8]/85 backdrop-blur-sm pointer-events-none"
        >
          <span className="inline-flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full animate-pulse"
              style={{ background: accent }}
            />
            Loading {label}…
          </span>
        </div>
      )}
    </div>
  );
}

export default function LiveDemo() {
  const { audience } = useAudience();
  const isStudent = audience === "student";
  const [activeKey, setActiveKey] = useState<string>(PAGES[0].key);
  const [iframeKey, setIframeKey] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const active = useMemo(
    () => PAGES.find((p) => p.key === activeKey) ?? PAGES[0],
    [activeKey]
  );

  const liveUrl = `${BASE}${active.path}`;

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
          {isStudent && (
            <div className="text-[13px] font-mono uppercase tracking-[0.18em] text-ink/55 mb-3">
              [02] LIVE STUDENT PREVIEW
            </div>
          )}
          <h2 className="font-display text-[40px] lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink mb-4">
            {isStudent
              ? "Step into the FORGE workspace."
              : "Live preview."}
          </h2>
          <p className="text-[17px] leading-[1.5] text-ink/70 max-w-[52ch] mx-auto">
            {isStudent
              ? "Aristotle on the left, your roadmap, jobs, profile, and collections on the right. The same canvas you’ll use to go from curious to interview-ready."
              : "Try interacting with the interface below."}
          </p>
          {isStudent && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-4 py-1.5 text-[12px] font-mono text-ink/60">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              ingenworkspace.com/student
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-mono uppercase tracking-[0.1em] bg-ink text-white px-5 py-3 inline-flex items-center gap-2"
            >
              {isStudent ? "Open student workspace" : "Open full app"}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={isStudent ? "/signup" : "/book-demo"}
              className="text-[12px] font-mono uppercase tracking-[0.1em] border border-ink text-ink px-5 py-3"
            >
              {isStudent ? "Join waitlist" : "Book a demo"}
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
            className="relative rounded-2xl bg-white shadow-[0_40px_80px_-30px_rgba(14,14,16,0.35)] overflow-hidden"
            style={{ border: "1px solid rgba(14,14,16,0.10)" }}
          >
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
            <span>
              {isStudent
                ? "Live · Roadmap · Columbus job scout · Proof profile · Collections"
                : "Live · proof, not assumptions"}
            </span>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              {isStudent ? "Open student workspace" : "Open full app"}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
