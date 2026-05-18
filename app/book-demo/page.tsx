"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

// Replace this with your actual Calendly URL once you have one:
// e.g. "https://calendly.com/yourname/book-a-demo"
const CALENDLY_URL = "https://calendly.com/adidogra07/book-a-demo";

export default function BookDemoPage() {
  useEffect(() => {
    // Re-init Calendly widget if script already loaded (client nav)
    if (typeof window !== "undefined" && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: document.getElementById("calendly-embed"),
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-deep text-white flex flex-col">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors label-mono text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </Link>
        <div className="h-4 w-px bg-white/10" />
        <span className="label-mono text-white/40 text-sm">Book a Demo</span>
      </div>

      {/* Hero copy */}
      <div className="mx-auto w-full max-w-[1100px] px-6 pt-12 pb-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 label-mono text-white text-xs mb-5">
          <span className="pulse-dot" />
          30-minute live walkthrough
        </span>
        <h1 className="font-display text-[40px] md:text-[56px] leading-[1.05] tracking-tightest">
          See FORGE in action.
        </h1>
        <p className="mt-4 text-white/65 text-[16px] max-w-lg mx-auto">
          Pick a time that works for you — we&apos;ll walk through Aristotle,
          Sherlock, and the full hiring pipeline live.
        </p>

        <div className="mt-6 flex items-center justify-center gap-6 text-[13px] text-white/50">
          {[
            { icon: "🗓", label: "30 min" },
            { icon: "🎥", label: "Video call" },
            { icon: "🚀", label: "Live product demo" },
          ].map(({ icon, label }) => (
            <span key={label} className="flex items-center gap-1.5">
              <span>{icon}</span>
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Calendly inline embed */}
      <div className="flex-1 mx-auto w-full max-w-[1100px] px-4 pb-12">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white">
          <div
            id="calendly-embed"
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
