"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Logo from "@/components/Logo";

/* ------------------------------------------------------------------ */
/*  Calendly-style "Select a Date & Time" booking interface            */
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
      <div className="flex flex-1 flex-col items-center justify-center px-8 py-24 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-purple/10">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12.5l4.5 4.5L19 7"
              stroke="#6c5ce7"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-[26px] text-brand-ink">
          You&apos;re booked in
        </h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-brand-ink/70">
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
          className="mt-7 text-[14px] font-medium text-brand-purple hover:underline"
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
        <div className="absolute right-[-46px] top-[22px] w-[170px] rotate-45 bg-brand-ink/85 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
          Powered by iNGen
        </div>
      </div>

      {/* event info column */}
      <div className="border-b border-black/[0.07] px-8 py-9 lg:w-[38%] lg:border-b-0 lg:border-r lg:px-10 lg:py-12">
        <Link href="/" aria-label="iNGen home" className="inline-flex">
          <Logo />
        </Link>

        <h2 className="mt-8 font-display text-[28px] leading-tight text-brand-ink">
          iNGen Product Demo
        </h2>

        <p className="mt-6 text-[14.5px] leading-relaxed text-brand-ink/70">
          A live walkthrough of iNGen — Aristotle, Sherlock, and the full
          proof-first hiring pipeline. Bring your toughest hiring questions and
          we&apos;ll show you exactly how the workspace handles them.
        </p>
      </div>

      {/* calendar column */}
      <div className="flex flex-1 flex-col px-8 py-9 lg:px-12 lg:py-12">
        <h3 className="font-display text-[22px] text-brand-ink">
          Select a Date &amp; Time
        </h3>

        {/* month nav */}
        <div className="mt-7 flex items-center justify-center gap-8">
          <button
            type="button"
            disabled={!canGoPrev}
            onClick={() => setViewMonth(new Date(year, month - 1, 1))}
            aria-label="Previous month"
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-purple/10 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className="min-w-[160px] text-center text-[16px] font-medium text-brand-ink">
            {monthLabel}
          </span>
          <button
            type="button"
            onClick={() => setViewMonth(new Date(year, month + 1, 1))}
            aria-label="Next month"
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-ink transition-colors hover:bg-brand-purple/10"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
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
        <div className="mx-auto mt-7 grid w-full max-w-[460px] grid-cols-7 gap-y-2 text-center text-[12px] font-semibold tracking-wide text-brand-ink/45">
          {WEEKDAYS.map((w) => (
            <div key={w}>{w}</div>
          ))}
        </div>

        {/* day grid */}
        <div className="mx-auto mt-1 grid w-full max-w-[460px] grid-cols-7 gap-y-2">
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
                    "flex h-11 w-11 items-center justify-center rounded-full text-[15px] transition-colors",
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
        <div className="mx-auto mt-7 w-full max-w-[460px] border-t border-black/[0.06] pt-4">
          <div className="text-[14px] font-semibold text-brand-ink">Time zone</div>
          <div className="mt-1.5 flex items-center gap-2 text-[14px] text-brand-ink/65">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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
          <div className="mx-auto mt-6 w-full max-w-[460px] border-t border-black/[0.06] pt-6">
            <div className="mb-4 text-[14px] font-medium text-brand-ink">
              {selectedDate.toLocaleDateString("default", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </div>
            <div className="grid max-h-[220px] grid-cols-2 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-4">
              {TIME_SLOTS.map((t) => {
                const active = selectedTime === t;
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={[
                      "rounded-md border py-3 text-[14px] font-medium transition-colors",
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
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-md bg-brand-purple text-[15px] font-medium text-white transition-colors hover:bg-brand-purple/90"
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
    <main className="relative min-h-screen w-full bg-brand-bg flex items-center justify-center px-3 sm:px-6 pt-16 sm:pt-10 pb-6 sm:pb-10">
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

      {/* Booking card — full width, centered */}
      <div className="relative flex w-full max-w-[1080px] flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08),0_2px_6px_-2px_rgba(0,0,0,0.04)]">
        <BookingCalendar />
      </div>
    </main>
  );
}
