export default function ClosingCTA() {
  return (
    <section className="relative bg-brand-deep text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 halftone-bottom opacity-90 pointer-events-none" />
      <div className="relative mx-auto max-w-[1320px] px-6 py-28 text-center">
        <h2 className="font-display text-[44px] md:text-[64px] leading-[1.05] tracking-tightest">
          The future of recruiting starts with Juicebox.
        </h2>
        <p className="mt-5 text-[16px] text-white/80 max-w-xl mx-auto">
          Try Juicebox for free, or book a personalized demo with our team.
        </p>
        <div className="mt-9 flex items-center justify-center gap-3">
          <a href="#" className="btn-dark bg-white !text-brand-ink hover:!bg-white/90">
            Try for Free
          </a>
          <a href="#" className="btn-outline btn-outline-light">
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
