import Logo from "./Logo";

const cols = [
  {
    title: "Product",
    links: ["Search (PeopleGPT)", "Outreach", "Juicebox Agent", "Chrome Extension"],
  },
  {
    title: "Resources",
    links: ["Docs", "Pricing", "Referral", "Partners", "Search Library", "Help Center", "Customers"],
  },
  {
    title: "Company",
    links: ["Blog", "Careers", "LinkedIn", "X / Twitter"],
  },
  {
    title: "Security",
    links: ["Status", "Trust Center", "AI Audit Center", "Privacy Choices", "Responsible Disclosure"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="label-mono text-white/55 mb-4">{c.title}</h4>
              <ul className="space-y-2.5 text-[13px]">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/85 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="label-mono text-white/55 mb-4">Juicebox in action</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#" className="text-white/85 hover:text-white">Free Trial</a>
              </li>
              <li>
                <a href="#" className="text-white/85 hover:text-white">Sign In</a>
              </li>
            </ul>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 transition rounded-md px-3 py-2 text-[12px]"
            >
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M3 2L9 6L3 10V2Z" fill="white" />
                </svg>
              </span>
              Watch Demo
            </a>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="font-display text-[120px] md:text-[180px] leading-none text-white/5 tracking-tightest select-none pointer-events-none">
            Juicebox
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/60">
            <div className="flex items-center gap-3">
              <Logo light />
              <span>© 2026 Juicebox</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white">Privacy policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Cookie Choices</a>
              <a href="#" className="hover:text-white">GDPR &amp; CCPA</a>
              <a href="#" className="hover:text-white">Do Not Sell or Share My Personal Information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
