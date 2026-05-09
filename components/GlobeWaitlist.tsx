"use client";

import { useState } from "react";
import { useAudience } from "./AudienceContext";

function Globe({ tone }: { tone: "dark" | "light" }) {
  const ringColor =
    tone === "dark" ? "rgba(255,255,255,0.16)" : "rgba(14,14,16,0.18)";
  const ringStrong =
    tone === "dark" ? "rgba(255,255,255,0.32)" : "rgba(14,14,16,0.32)";
  const glow =
    tone === "dark"
      ? "radial-gradient(circle at 35% 30%, rgba(176,84,231,0.55), rgba(107,47,142,0.0) 60%)"
      : "radial-gradient(circle at 35% 30%, rgba(245,166,35,0.45), rgba(245,166,35,0.0) 60%)";
  const pinColor = tone === "dark" ? "#B054E7" : "#F5A623";

  const longitudes = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5];

  return (
    <div className="relative w-full aspect-square max-w-[460px] mx-auto select-none">
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-80"
        style={{ background: glow }}
        aria-hidden
      />
      <div
        className="globe-3d absolute inset-0"
        style={{ perspective: "1000px" }}
        aria-hidden
      >
        <div className="globe-spin absolute inset-0">
          {/* sphere outline */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: `1px solid ${ringStrong}` }}
          />
          {/* longitudes */}
          {longitudes.map((deg) => (
            <div
              key={deg}
              className="absolute inset-0 rounded-full"
              style={{
                border: `1px solid ${ringColor}`,
                transform: `rotateY(${deg}deg)`,
              }}
            />
          ))}
          {/* latitudes (flattened circles) */}
          {[0.25, 0.5, 0.75].map((y) => (
            <div
              key={y}
              className="absolute left-0 right-0 rounded-[50%] mx-auto"
              style={{
                top: `${y * 100}%`,
                height: 1,
                width: `${Math.sin(Math.PI * y) * 100}%`,
                background: ringColor,
              }}
            />
          ))}
          {/* pulsing pins */}
          <span
            className="globe-pin"
            style={{ top: "28%", left: "62%", background: pinColor }}
          />
          <span
            className="globe-pin"
            style={{
              top: "55%",
              left: "30%",
              background: pinColor,
              animationDelay: "0.6s",
            }}
          />
          <span
            className="globe-pin"
            style={{
              top: "70%",
              left: "70%",
              background: pinColor,
              animationDelay: "1.2s",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .globe-3d {
          transform-style: preserve-3d;
        }
        .globe-spin {
          transform-style: preserve-3d;
          animation: globeSpin 22s linear infinite;
        }
        @keyframes globeSpin {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        .globe-pin {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.08),
            0 0 18px 2px currentColor;
          animation: globePulse 2.4s ease-in-out infinite;
        }
        @keyframes globePulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

function WaitlistForm({
  audience,
}: {
  audience: "recruiter" | "student";
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isStudent = audience === "student";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const eyebrow = isStudent ? "Early access" : "Private beta";
  const heading = isStudent
    ? "Join the iNGEN waitlist"
    : "Join the FORGE waitlist";
  const subhead = isStudent
    ? "Be first in line when Aristotle and Columbus open to your university."
    : "Get early access to the proof-first hiring stack — Aristotle, Sherlock, and the FORGE workflow.";

  if (submitted) {
    return (
      <div className="space-y-3">
        <span
          className={`label-mono ${
            isStudent ? "text-forge-amber" : "text-brand-lavender"
          }`}
        >
          {eyebrow}
        </span>
        <h2
          className={`font-display text-[40px] md:text-[52px] leading-[1.02] tracking-tightest ${
            isStudent ? "text-forge-ink" : "text-white"
          }`}
        >
          You&rsquo;re on the list.
        </h2>
        <p
          className={`text-[16px] leading-relaxed ${
            isStudent ? "text-forge-ink/70" : "text-white/75"
          }`}
        >
          We&rsquo;ll email <span className="font-medium">{email}</span> when your
          spot is ready.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <span
        className={`label-mono ${
          isStudent ? "text-forge-amber" : "text-brand-lavender"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-[40px] md:text-[52px] leading-[1.02] tracking-tightest ${
          isStudent ? "text-forge-ink" : "text-white"
        }`}
      >
        {heading}
      </h2>
      <p
        className={`text-[16px] leading-relaxed max-w-md ${
          isStudent ? "text-forge-ink/70" : "text-white/75"
        }`}
      >
        {subhead}
      </p>

      <form
        onSubmit={onSubmit}
        className={`flex items-center gap-2 rounded-md p-1.5 max-w-md ${
          isStudent
            ? "bg-white border border-forge-line shadow-sm"
            : "bg-white/10 border border-white/15 backdrop-blur"
        }`}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className={`flex-1 bg-transparent outline-none px-3 py-2 text-[15px] ${
            isStudent
              ? "text-forge-ink placeholder:text-forge-mute"
              : "text-white placeholder:text-white/50"
          }`}
        />
        <button
          type="submit"
          className={isStudent ? "btn-amber" : "btn-dark !bg-white !text-brand-ink hover:!bg-white/90"}
        >
          Join waitlist
        </button>
      </form>

      <div
        className={`flex items-center gap-4 text-[13px] ${
          isStudent ? "text-forge-ink/60" : "text-white/60"
        }`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: isStudent ? "#F5A623" : "#B054E7" }}
          />
          No spam, unsubscribe anytime
        </span>
      </div>
    </div>
  );
}

export default function GlobeWaitlist() {
  const { audience } = useAudience();
  const isStudent = audience === "student";

  return (
    <section
      className={`relative overflow-hidden ${
        isStudent ? "bg-forge-cream text-forge-ink" : "bg-brand-deep text-white"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-32 pointer-events-none ${
          isStudent ? "halftone-light-top" : "halftone-top opacity-80"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-32 pointer-events-none ${
          isStudent ? "halftone-light-top" : "halftone-bottom opacity-80"
        }`}
      />

      <div className="mx-auto max-w-[1320px] px-6 py-24 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <Globe tone={isStudent ? "light" : "dark"} />
          </div>
          <div className="order-1 md:order-2">
            <WaitlistForm audience={audience} />
          </div>
        </div>
      </div>
    </section>
  );
}
