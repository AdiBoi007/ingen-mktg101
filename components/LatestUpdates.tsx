const featured = {
  tag: "Product Update",
  title: "Introducing Network Sourcing",
  date: "Apr 28, 2026",
  read: "5 MIN",
};

const posts = [
  {
    tag: "Product Updates",
    title: "Talent Flow Chat, Interactive Maps, and More",
    date: "Apr 14, 2026",
    read: "3 MIN",
  },
  {
    tag: "Product Updates",
    title: "Company Data and Talent Insights Just Got a Major Upgrade",
    date: "Apr 14, 2026",
    read: "3 MIN",
  },
  {
    tag: "Product Updates",
    title: "Candidate Tenure, Healthcare Filters, and More",
    date: "Mar 29, 2026",
    read: "4 MIN",
  },
  {
    tag: "Product Updates",
    title: "Healthcare Filters, Find Similar Candidates from any Resume",
    date: "Mar 20, 2026",
    read: "4 MIN",
  },
  {
    tag: "Product Updates",
    title: "Multi-Sender Sequences, ATS Export Triggers, New Advanced Company Filters",
    date: "Mar 8, 2026",
    read: "5 MIN",
  },
];

export default function LatestUpdates() {
  return (
    <section className="bg-brand-bg">
      <div className="mx-auto max-w-[1320px] px-6 py-24">
        <div className="text-center mb-12">
          <div className="label-mono text-brand-mute mb-3">[05] Latest Updates</div>
          <h2 className="font-display text-[44px] md:text-[58px] leading-[1.05] tracking-tightest text-brand-ink max-w-3xl mx-auto">
            See what&apos;s coming next in AI-driven recruiting
          </h2>
          <a href="#" className="btn-outline mt-7">View our blog</a>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <a href="#" className="group bg-white border border-black/5 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-72 bg-gradient-to-br from-brand-tint via-white to-brand-tint p-8">
              <div className="absolute top-6 left-6">
                <span className="label-mono bg-brand-purple text-white px-2.5 py-1 rounded-sm">
                  {featured.tag}
                </span>
              </div>
              <div className="h-full flex items-center justify-center">
                <div className="font-display text-[28px] tracking-tightest text-brand-ink text-center max-w-xs">
                  Introducing Network Sourcing
                </div>
              </div>
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-ink" />
                <span className="text-[12px] font-medium text-brand-ink">Juicebox</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-[22px] leading-snug text-brand-ink group-hover:text-brand-purple transition-colors">
                {featured.title}
              </h3>
              <div className="mt-3 label-mono text-brand-mute">
                {featured.date} · {featured.read}
              </div>
            </div>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {posts.slice(0, 4).map((p) => (
              <a key={p.title} href="#" className="group bg-white border border-black/5 rounded-md overflow-hidden flex flex-col">
                <div className="h-32 bg-gradient-to-br from-brand-tint to-white p-3 flex items-end">
                  <span className="label-mono bg-brand-deep text-white px-2 py-0.5 rounded-sm">
                    {p.tag}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-display text-[15px] leading-snug text-brand-ink group-hover:text-brand-purple transition-colors flex-1">
                    {p.title}
                  </h3>
                  <div className="mt-3 label-mono text-brand-mute text-[10px]">
                    {p.date} · {p.read}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
