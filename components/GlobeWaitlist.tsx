"use client";

import { useState, useMemo, Component, ReactNode } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useAudience } from "./AudienceContext";

const World = dynamic(
  () => import("./ui/globe").then((m) => m.World),
  { ssr: false }
);

function GlobeFallback({ tone }: { tone: "dark" | "light" }) {
  const bg =
    tone === "dark"
      ? "radial-gradient(circle at 50% 50%, #B054E7 0%, #5B2A8A 35%, #2A232A 70%, #1A1620 100%)"
      : "radial-gradient(circle at 50% 50%, #F5A623 0%, #D88010 35%, #1A1A1F 75%, #0E0E10 100%)";
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto">
      <div
        className="absolute inset-0 rounded-full opacity-90"
        style={{ background: bg }}
      />
    </div>
  );
}

class GlobeErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function ThemedGlobe({ tone }: { tone: "dark" | "light" }) {

  const { globeConfig, sampleArcs } = useMemo(() => {
    if (tone === "dark") {
      // Recruiter / dark — brand purple palette
      const colors = ["#B054E7", "#DA60D4", "#9B51E0"];
      return {
        globeConfig: {
          pointSize: 4,
          globeColor: "#2A232A",
          showAtmosphere: true,
          atmosphereColor: "#B054E7",
          atmosphereAltitude: 0.12,
          emissive: "#1D161D",
          emissiveIntensity: 0.18,
          shininess: 0.9,
          polygonColor: "rgba(238,232,253,0.55)",
          ambientLight: "#B054E7",
          directionalLeftLight: "#ffffff",
          directionalTopLight: "#ffffff",
          pointLight: "#EEE8FD",
          arcTime: 1400,
          arcLength: 0.9,
          rings: 1,
          maxRings: 3,
          initialPosition: { lat: 22.3193, lng: 114.1694 },
          autoRotate: true,
          autoRotateSpeed: 0.5,
        },
        sampleArcs: buildArcs(colors),
      };
    }
    // Student / light — forge amber + indigo palette
    const colors = ["#F5A623", "#6366F1", "#7DD3C0"];
    return {
      globeConfig: {
        pointSize: 4,
        globeColor: "#1A1A1F",
        showAtmosphere: true,
        atmosphereColor: "#F5A623",
        atmosphereAltitude: 0.12,
        emissive: "#0E0E10",
        emissiveIntensity: 0.2,
        shininess: 0.9,
        polygonColor: "rgba(245,239,230,0.7)",
        ambientLight: "#F5A623",
        directionalLeftLight: "#FFB347",
        directionalTopLight: "#ffffff",
        pointLight: "#FBF7EF",
        arcTime: 1400,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
      },
      sampleArcs: buildArcs(colors),
    };
  }, [tone]);

  return (
    <GlobeErrorBoundary fallback={<GlobeFallback tone={tone} />}>
      <div className="relative w-full aspect-square max-w-[520px] mx-auto">
        <div className="absolute inset-0">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </GlobeErrorBoundary>
  );
}

function buildArcs(colors: string[]) {
  const pick = () => colors[Math.floor(Math.random() * colors.length)];
  return [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: pick() },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: pick() },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: pick() },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: pick() },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: pick() },
    { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: pick() },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: pick() },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: pick() },
    { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: pick() },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: pick() },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: pick() },
    { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: pick() },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: pick() },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: pick() },
    { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: pick() },
    { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: pick() },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: pick() },
    { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: pick() },
    { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: pick() },
    { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: pick() },
    { order: 7, startLat: 52.52, startLng: 13.405, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: pick() },
    { order: 8, startLat: -8.833221, startLng: 13.264837, endLat: -33.936138, endLng: 18.436529, arcAlt: 0.2, color: pick() },
    { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2, color: pick() },
    { order: 8, startLat: 1.3521, startLng: 103.8198, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: pick() },
    { order: 9, startLat: 51.5072, startLng: -0.1276, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: pick() },
    { order: 9, startLat: 22.3193, startLng: 114.1694, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.7, color: pick() },
    { order: 9, startLat: 1.3521, startLng: 103.8198, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.5, color: pick() },
    { order: 10, startLat: -22.9068, startLng: -43.1729, endLat: 28.6139, endLng: 77.209, arcAlt: 0.7, color: pick() },
    { order: 10, startLat: 34.0522, startLng: -118.2437, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.3, color: pick() },
    { order: 10, startLat: -6.2088, startLng: 106.8456, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.3, color: pick() },
    { order: 11, startLat: 41.9028, startLng: 12.4964, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: pick() },
    { order: 11, startLat: -6.2088, startLng: 106.8456, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.2, color: pick() },
    { order: 11, startLat: 22.3193, startLng: 114.1694, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: pick() },
    { order: 12, startLat: 34.0522, startLng: -118.2437, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.1, color: pick() },
    { order: 12, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.2, color: pick() },
    { order: 12, startLat: 22.3193, startLng: 114.1694, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.3, color: pick() },
    { order: 13, startLat: 52.52, startLng: 13.405, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: pick() },
    { order: 13, startLat: 11.986597, startLng: 8.571831, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: pick() },
    { order: 13, startLat: -22.9068, startLng: -43.1729, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.1, color: pick() },
    { order: 14, startLat: -33.936138, startLng: 18.436529, endLat: 21.395643, endLng: 39.883798, arcAlt: 0.3, color: pick() },
  ];
}

function WaitlistForm({ audience }: { audience: "recruiter" | "student" }) {
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
          <motion.div
            className="order-2 md:order-1 relative h-[460px] md:h-[560px]"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <ThemedGlobe tone={isStudent ? "light" : "dark"} />
          </motion.div>
          <div className="order-1 md:order-2">
            <WaitlistForm audience={audience} />
          </div>
        </div>
      </div>
    </section>
  );
}
