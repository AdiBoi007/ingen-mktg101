const stories = [
  {
    co: "Starbridge",
    headline: "How Starbridge Scaled from 20 to 50 Employees with Talent Engineering",
    bg: "from-orange-200 to-orange-100",
  },
  {
    co: "Merge",
    headline: "How Merge Filled 10+ Critical Roles with a Lean Recruiting Team",
    bg: "from-blue-200 to-purple-100",
  },
  {
    co: "Speechify",
    headline: "How Speechify Built a Global Recruiting Engine in Six Months",
    bg: "from-emerald-200 to-teal-100",
  },
  {
    co: "CoinTracker",
    headline: "How CoinTracker Doubled Its Engineering Team in One Quarter",
    bg: "from-amber-200 to-yellow-100",
  },
];

export default function CustomerStories() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="label-mono text-brand-mute mb-3">[04] Customer Stories</div>
        <div className="flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl">
            How top teams win with Juicebox
          </h2>
          <a href="#" className="btn-outline">View all stories</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {stories.map((s) => (
            <a
              key={s.co}
              href="#"
              className="group bg-white rounded-md overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`relative h-56 bg-gradient-to-br ${s.bg} flex items-center justify-center`}>
                <div className="text-[44px] font-display text-white/80 tracking-tightest drop-shadow-sm">
                  {s.co}
                </div>
              </div>
              <div className="p-6">
                <div className="label-mono text-brand-mute mb-2">Customer Story</div>
                <h3 className="font-display text-[22px] leading-snug text-brand-ink group-hover:text-brand-purple transition-colors">
                  {s.headline}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
