const cells: { label: string; type: "logo" | "title" | "diag" | "more"; }[] = [
  { label: "Lever", type: "logo" },
  { label: "", type: "diag" },
  { label: "SmartRecruiters", type: "logo" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Greenhouse", type: "logo" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "Ashby", type: "logo" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "Outlook", type: "logo" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "Crelate", type: "logo" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "title", type: "title" },
  { label: "title", type: "title" },
  { label: "", type: "diag" },
  { label: "Recruiterflow", type: "logo" },

  { label: "Bullhorn", type: "logo" },
  { label: "", type: "diag" },
  { label: "Gmail", type: "logo" },
  { label: "", type: "diag" },
  { label: "Chrome", type: "logo" },
  { label: "", type: "diag" },

  { label: "", type: "diag" },
  { label: "Workday", type: "logo" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "", type: "diag" },
  { label: "more", type: "more" },
];

export default function Integrations() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="grid grid-cols-6 border-l border-t border-black/10 relative">
          {cells.map((c, i) => {
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
                  <span className="text-[15px] font-medium text-brand-ink/70 tracking-tight">
                    {c.label}
                  </span>
                )}
                {c.type === "title" && i === 14 && (
                  <div className="text-center px-6">
                    <div className="label-mono text-brand-mute mb-3">[03] ATS &amp; CRM Integrations</div>
                    <h2 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-tightest text-brand-ink">
                      Integrates with tools you use
                    </h2>
                  </div>
                )}
                {c.type === "more" && (
                  <span className="label-mono text-brand-mute">And 40+ more</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
