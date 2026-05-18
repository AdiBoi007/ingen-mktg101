"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Logo from "@/components/Logo";

/* ------------------------------------------------------------------ */
/*  LEFT WELCOME PANEL — copied from the signup/waitlist page so this   */
/*  page is fully self-contained and the signup page is untouched.     */
/* ------------------------------------------------------------------ */

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

type Chip = {
  label: string;
  cls: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
};

const chips: Chip[] = [
  { label: "Prabh just got placed", cls: "chip-mint", top: "10%", left: "4%" },
  { label: "Aren is hiring-ready", cls: "chip-amber", top: "16%", right: "4%" },
  { label: "Maya matched with a recruiter", cls: "chip-lavender", bottom: "18%", right: "4%" },
  { label: "Riya mapped her AI engineer path", cls: "chip-yellow", bottom: "8%", left: "4%" },
];

const integrations: { name: string; domain: string }[] = [
  { name: "LinkedIn", domain: "linkedin.com" },
  { name: "GitHub", domain: "github.com" },
  { name: "Glassdoor", domain: "glassdoor.com" },
  { name: "Indeed", domain: "indeed.com" },
  { name: "Wellfound", domain: "wellfound.com" },
  { name: "Lever", domain: "lever.co" },
  { name: "Greenhouse", domain: "greenhouse.io" },
  { name: "Slack", domain: "slack.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Workday", domain: "workday.com" },
  { name: "Calendly", domain: "calendly.com" },
  { name: "Coursera", domain: "coursera.org" },
];

function buildArcs() {
  const colors = ["#ffffff", "#cfcfcf", "#9aa0a6"];
  const pick = () => colors[Math.floor(Math.random() * colors.length)];
  return [
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: pick() },
    { order: 1, startLat: 40.7128, startLng: -74.006, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.4, color: pick() },
    { order: 2, startLat: 37.7749, startLng: -122.4194, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.5, color: pick() },
    { order: 2, startLat: -33.8688, startLng: 151.2093, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.4, color: pick() },
    { order: 3, startLat: 52.52, startLng: 13.405, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.3, color: pick() },
    { order: 3, startLat: 19.076, startLng: 72.8777, endLat: 48.8566, endLng: 2.3522, arcAlt: 0.4, color: pick() },
    { order: 4, startLat: -22.9068, startLng: -43.1729, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: pick() },
    { order: 4, startLat: 55.7558, startLng: 37.6173, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.4, color: pick() },
  ];
}

function AuthGlobe() {
  const { globeConfig, sampleArcs } = useMemo(
    () => ({
      globeConfig: {
        pointSize: 3,
        globeColor: "#2A2A2E",
        showAtmosphere: true,
        atmosphereColor: "#ffffff",
        atmosphereAltitude: 0.14,
        emissive: "#1A1A1F",
        emissiveIntensity: 0.18,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,1)",
        ambientLight: "#ffffff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1600,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.7,
      },
      sampleArcs: buildArcs(),
    }),
    []
  );

  return (
    <div
      className="relative mx-auto"
      style={{ width: "clamp(240px, 26vw, 320px)", aspectRatio: "1 / 1" }}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/70 via-transparent to-black/10 blur-2xl" />
      <div className="absolute inset-0 [&>div]:!w-full [&>div]:!h-full [&_canvas]:!w-full [&_canvas]:!h-full">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>

      {chips.map((c) => (
        <div
          key={c.label}
          className={`chip ${c.cls} absolute whitespace-nowrap shadow-sm z-10 !text-[10px] !px-2 !py-[3px] !gap-1.5`}
          style={{ top: c.top, bottom: c.bottom, left: c.left, right: c.right }}
        >
          <span>{c.label}</span>
          <span className="opacity-50">×</span>
        </div>
      ))}
    </div>
  );
}

function IntegrationLogo({ name, domain }: { name: string; domain: string }) {
  return (
    <div className="flex items-center gap-2 px-5 shrink-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
        alt={name}
        width={20}
        height={20}
        loading="lazy"
        className="w-[20px] h-[20px] object-contain rounded-sm"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
        }}
      />
      <span className="text-[13px] font-medium text-brand-ink/80 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

function IntegrationsMarquee() {
  const loop = [...integrations, ...integrations];
  return (
    <div className="rounded-xl border border-black/[0.06] bg-white px-3 sm:px-4 pt-4 pb-3.5 overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
      <div
        className="text-center label-mono text-brand-ink/75 whitespace-nowrap mb-5"
        style={{ fontSize: "clamp(8.5px, 1.05vw, 10.5px)", letterSpacing: "0.12em" }}
      >
        Connects with the tools you already use
      </div>
      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10"
          style={{
            background:
              "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="flex w-max animate-marquee">
          {loop.map((it, i) => (
            <IntegrationLogo key={`${it.domain}-${i}`} name={it.name} domain={it.domain} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  RIGHT — Calendly-style "Select a Date & Time" booking interface    */
/* ------------------------------------------------------------------ */

const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const TIME_SLOTS = [
  "9:00am", "9:30am", "10:00am", "10:30am", "11:00am", "11:30am",
  "12:00pm", "12:30pm", "1:00pm", "1:30pm", "2:00pm", "2:30pm",
  "3:00pm", "3:30pm", "4:00pm", "4:30pm",
];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function BookingCalendar() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [viewMonth, setViewMonth] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const tz = useMemo(() => {
    try {
      const name = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const time = new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
      return `${name.replace(/_/g, " ")} (${time})`;
    } catch {
      return "Local time";
    }
  }, []);

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const monthLabel = viewMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Monday-first leading blanks
  const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));

  const isAvailable = (d: Date) => {
    const dow = d.getDay();
    return d >= today && dow !== 0 && dow !== 6;
  };
  const sameDay = (a: Date | null, b: Date | null) =>
    !!a && !!b && a.getTime() === b.getTime();

  /* -------- confirmed success state -------- */
  if (confirmed && selectedDate && selectedTime) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple/10">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="#6c5ce7"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-[22px] text-brand-ink">
          You&apos;re booked in
        </h3>
        <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-brand-ink/70">
          Your iNGen product demo is scheduled for{" "}
          <span className="font-medium text-brand-ink">
            {selectedDate.toLocaleDateString("default", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>{" "}
          at <span className="font-medium text-brand-ink">{selectedTime}</span>.
          A calendar invite with the video link is on its way to your inbox.
        </p>
        <button
          type="button"
          onClick={() => {
            setConfirmed(false);
            setSelectedTime(null);
            setSelectedDate(null);
          }}
          className="mt-6 text-[13px] font-medium text-brand-purple hover:underline"
        >
          Pick a different time
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex flex-1 flex-col lg:flex-row">
      {/* diagonal corner ribbon */}
      <div className="pointer-events-none absolute -right-[1px] -top-[1px] z-10 overflow-hidden">
        <div className="absolute right-[-46px] top-[20px] w-[160px] rotate-45 bg-brand-ink/85 py-1 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-white">
          Powered by iNGen
        </div>
      </div>

      {/* event info column */}
      <div className="border-b border-black/[0.07] px-7 py-7 lg:w-[42%] lg:border-b-0 lg:border-r">
        <Link href="/" aria-label="iNGen home" className="inline-flex">
          <Logo />
        </Link>

        <h2 className="mt-7 font-display text-[24px] leading-tight text-brand-ink">
          iNGen Product Demo
        </h2>

        <div className="mt-5 space-y-3.5 text-[14px] text-brand-ink/70">
          <div className="flex items-center gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M12 7.5V12l3 2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-medium text-brand-ink">30 min</span>
          </div>
          <div className="flex items-start gap-2.5">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="mt-[1px] shrink-0"
            >
              <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M16 10l5-3v10l-5-3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span>Web conferencing details provided upon confirmation.</span>
          </div>
        </div>

        <p className="mt-5 text-[13.5px] leading-relaxed text-brand-ink/70">
          A live walkthrough of iNGen — Aristotle, Sherlock, and the full
          proof-first hiring pipeline. Bring your toughest hiring questions and
          we&apos;ll show you exactly how the workspace handles them.
        </p>
      </div>

      {/* calendar column */}
      <div className="flex flex-1 flex-col px-7 py-7">
        <h3 className="font-display text-[19px] text-brand-ink">
          Select a Date &amp; Time
        </h3>

        {/* month nav */}
        <div className="mt-5 flex items-center justify-center gap-6">
          <button
            type="button"
            disabled={!canGoPrev}
            onClick={() => setViewMonth(new Date(year, month - 1, 1))}
            aria-label="Previous month"
            className="flex h-9 w-9 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-purple/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="min-w-[140px] text-center text-[15px] font-medium text-brand-ink">
            {monthLabel}
          </span>
          <button
            type="button"
            onClick={() => setViewMonth(new Date(year, month + 1, 1))}
            aria-label="Next month"
            className="flex h-9 w-9 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-purple/10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* weekday header */}
        <div className="mt-5 grid grid-cols-7 gap-y-2 text-center text-[11px] font-semibold tracking-wide text-brand-ink/45">
          {WEEKDAYS.map((w) => (
            <div key={w}>{w}</div>
          ))}
        </div>

        {/* day grid */}
        <div className="mt-1 grid grid-cols-7 gap-y-1.5">
          {cells.map((date, i) => {
            if (!date) return <div key={`b-${i}`} />;
            const available = isAvailable(date);
            const selected = sameDay(date, selectedDate);
            return (
              <div key={date.toISOString()} className="flex justify-center">
                <button
                  type="button"
                  disabled={!available}
                  onClick={() => {
                    setSelectedDate(date);
                    setSelectedTime(null);
                  }}
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-full text-[14px] transition-colors",
                    selected
                      ? "bg-brand-purple font-semibold text-white"
                      : available
                      ? "bg-brand-purple/10 font-semibold text-brand-purple hover:bg-brand-purple/20"
                      : "text-brand-ink/25",
                  ].join(" ")}
                >
                  {date.getDate()}
                </button>
              </div>
            );
          })}
        </div>

        {/* time zone */}
        <div className="mt-6 border-t border-black/[0.06] pt-4">
          <div className="text-[13px] font-semibold text-brand-ink">Time zone</div>
          <div className="mt-1.5 flex items-center gap-2 text-[13px] text-brand-ink/65">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
            {tz}
          </div>
        </div>

        {/* time slots — shown after a date is picked */}
        {selectedDate && (
          <div className="mt-5 border-t border-black/[0.06] pt-5">
            <div className="mb-3 text-[13px] font-medium text-brand-ink">
              {selectedDate.toLocaleDateString("default", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="grid max-h-[176px] grid-cols-2 gap-2 overflow-y-auto pr-1 sm:grid-cols-3">
              {TIME_SLOTS.map((t) => {
                const active = selectedTime === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={[
                      "rounded-md border py-2.5 text-[13px] font-medium transition-colors",
                      active
                        ? "border-brand-purple bg-brand-purple text-white"
                        : "border-brand-purple/40 text-brand-purple hover:border-brand-purple hover:bg-brand-purple/[0.06]",
                    ].join(" ")}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {selectedTime && (
              <button
                type="button"
                onClick={() => setConfirmed(true)}
                className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-md bg-brand-purple text-[14px] font-medium text-white transition-colors hover:bg-brand-purple/90"
              >
                Schedule demo — {selectedTime}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

export default function BookDemoPage() {
  return (
    <main className="relative min-h-screen w-full bg-brand-bg flex items-center justify-center px-3 sm:px-4 pt-16 sm:pt-6 pb-4 sm:pb-6">
      <Link
        href="/"
        aria-label="Go back to home"
        title="Go back to home"
        className="group fixed top-4 left-4 sm:top-5 sm:left-5 z-30 inline-flex items-center h-10 rounded-full border border-black/[0.08] bg-white/85 text-brand-ink shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] backdrop-blur-md pl-[11px] pr-[11px] hover:pr-4 transition-all duration-300 ease-out hover:bg-white hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="shrink-0 transition-transform duration-300 ease-out group-hover:-translate-x-[2px]"
        >
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="overflow-hidden whitespace-nowrap text-[13px] font-medium max-w-0 opacity-0 group-hover:max-w-[80px] group-hover:opacity-100 group-hover:ml-1.5 transition-[max-width,opacity,margin] duration-300 ease-out">
          Go back
        </span>
      </Link>

      <div className="grid w-full max-w-[1080px] grid-cols-1 items-stretch gap-4 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-5">
        {/* LEFT: Welcome card — same as signup page */}
        <div className="relative flex flex-col rounded-2xl border border-black/[0.06] bg-[#f1eef1] px-5 py-5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08),0_2px_6px_-2px_rgba(0,0,0,0.04)] sm:px-6 sm:py-6 lg:px-7 lg:py-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-3 right-0 hidden w-3 lg:block"
            style={{
              background: "linear-gradient(to left, rgba(0,0,0,0.05), rgba(0,0,0,0))",
              borderTopRightRadius: "1rem",
              borderBottomRightRadius: "1rem",
            }}
          />
          <div className="text-center">
            <h1
              className="font-display leading-[1.15] text-brand-ink"
              style={{ fontSize: "clamp(20px, 2.2vw, 24px)" }}
            >
              Book a demo with iNGEN
            </h1>
            <p
              className="mt-1.5 leading-snug text-brand-ink/70"
              style={{ fontSize: "clamp(12px, 1.05vw, 13px)" }}
            >
              Proof-first hiring for teams. Career mapping for talent.
            </p>
          </div>

          <div className="mb-7 mt-2 flex flex-1 items-center justify-center sm:mb-9 sm:mt-3">
            <AuthGlobe />
          </div>

          <IntegrationsMarquee />
        </div>

        {/* RIGHT: Booking interface */}
        <div className="relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08),0_2px_6px_-2px_rgba(0,0,0,0.04)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-3 left-0 z-20 hidden w-3 lg:block"
            style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0))",
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          />
          <BookingCalendar />
        </div>
      </div>
    </main>
  );
}
