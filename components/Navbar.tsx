import Logo from "./Logo";

const navItems = [
  { label: "Features", hasMenu: true },
  { label: "Pricing", hasMenu: false },
  { label: "Resources", hasMenu: true },
  { label: "Customers", hasMenu: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-brand-bg/95 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-[1320px] px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="label-mono text-brand-ink/85 hover:text-brand-ink flex items-center gap-1.5"
            >
              {item.label}
              {item.hasMenu && (
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2.5 4.5L6 8L9.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden md:inline-block label-mono text-brand-ink/85 hover:text-brand-ink">
            Sign In
          </a>
          <a href="#" className="btn-outline hidden md:inline-flex">
            Book a Demo
          </a>
          <a href="#" className="btn-dark">
            Try for Free
          </a>
        </div>
      </div>
    </header>
  );
}
