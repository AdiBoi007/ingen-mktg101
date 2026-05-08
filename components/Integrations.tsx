"use client";

import Image from "next/image";
import { useAudience } from "./AudienceContext";

const recruiterCells: { label: string; type: "logo" | "title" | "diag" | "more"; status?: "Connected" | "Not connected"; }[] = [
  { label: "GitHub", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "LinkedIn", type: "logo", status: "Not connected" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Google Calendar", type: "logo", status: "Connected" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Gmail", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "Notion", type: "logo", status: "Not connected" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "Slack", type: "logo", status: "Not connected" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "", type: "diag" },
  { label: "Sherlock GH Pull", type: "logo", status: "Connected" },

  { label: "Aristotle Briefs", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "Chrome", type: "logo" },
  { label: "", type: "diag" },
  { label: "Cal · Manual", type: "logo" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "AUD / USD / GBP / EUR", type: "logo" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "more", type: "more" },
];

function RecruiterIntegrations() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="grid grid-cols-6 border-l border-t border-black/10 relative">
          {recruiterCells.map((c, i) => {
            const span = c.type === "title" && i === 14 ? "col-span-2 row-span-2 -mr-px -mb-px" : "";
            if (c.type === "title" && i !== 14) return null;
            return (
              <div
                key={i}
                className={`relative aspect-[3/2] border-r border-b border-black/10 flex items-center justify-center ${span} ${
                  c.type === "diag" ? "diag-pattern" : "bg-brand-bg"
                }`}
              >
                {c.type === "logo" && (
                  <div className="flex flex-col items-center gap-1.5 text-center px-2">
                    <span className="text-[15px] font-medium text-brand-ink/70 tracking-tight leading-tight">
                      {c.label}
                    </span>
                    {c.status && (
                      <span
                        className={`label-mono text-[9px] ${
                          c.status === "Connected"
                            ? "text-brand-good"
                            : "text-brand-mute"
                        }`}
                      >
                        {c.status}
                      </span>
                    )}
                  </div>
                )}
                {c.type === "title" && i === 14 && (
                  <div className="text-center px-6">
                    <div className="label-mono text-brand-mute mb-3">[03] Integrations</div>
                    <h2 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-tightest text-brand-ink">
                      Native to the tools your hiring loop already lives in
                    </h2>
                  </div>
                )}
                {c.type === "more" && (
                  <span className="label-mono text-brand-mute">Tooling sprawl, collapsed</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- STUDENT: Integrations grid -------------------- */

const studentCells: { label: string; type: "logo" | "title" | "diag" | "more"; status?: "Connected" | "Not connected" }[] = [
  { label: "GitHub", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "LinkedIn", type: "logo", status: "Not connected" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Coursera", type: "logo", status: "Connected" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Devfolio", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "Notion", type: "logo", status: "Not connected" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "Resume PDF", type: "logo", status: "Connected" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "", type: "diag" },
  { label: "Aristotle Roadmap", type: "logo", status: "Connected" },

  { label: "Columbus Scout", type: "logo", status: "Connected" },
  { label: "", type: "diag" },
  { label: "Chrome Extension", type: "logo" },
  { label: "", type: "diag" },
  { label: "Personal site", type: "logo" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "Discord community", type: "logo" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "more", type: "more" },
];

function StudentIntegrations() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="grid grid-cols-6 border-l border-t border-black/10 relative">
          {studentCells.map((c, i) => {
            const span = c.type === "title" && i === 14 ? "col-span-2 row-span-2 -mr-px -mb-px" : "";
            if (c.type === "title" && i !== 14) return null;
            return (
              <div
                key={i}
                className={`relative aspect-[3/2] border-r border-b border-black/10 flex items-center justify-center ${span} ${
                  c.type === "diag" ? "diag-pattern" : "bg-brand-bg"
                }`}
              >
                {c.type === "logo" && (
                  <div className="flex flex-col items-center gap-1.5 text-center px-2">
                    <span className="text-[15px] font-medium text-brand-ink/70 tracking-tight leading-tight">
                      {c.label}
                    </span>
                    {c.status && (
                      <span className={`label-mono text-[9px] ${c.status === "Connected" ? "text-brand-good" : "text-brand-mute"}`}>
                        {c.status}
                      </span>
                    )}
                  </div>
                )}
                {c.type === "title" && i === 14 && (
                  <div className="text-center px-6">
                    <div className="label-mono text-brand-mute mb-3">[03] Integrations</div>
                    <h2 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-tightest text-brand-ink">
                      Native to the tools your proof stack already lives in
                    </h2>
                  </div>
                )}
                {c.type === "more" && (
                  <span className="label-mono text-brand-mute">Your proof stack, connected</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Integrations() {
  const { audience } = useAudience();
  return audience === "student" ? <StudentIntegrations /> : <RecruiterIntegrations />;
}
