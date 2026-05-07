export default function SectionShift() {
  return (
    <section className="relative bg-brand-deep text-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-32 halftone-top opacity-90 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-44 halftone-bottom opacity-90 pointer-events-none" />
      <div className="mx-auto max-w-[1100px] px-6 py-28 text-center relative">
        <h2 className="font-display text-[44px] md:text-[64px] leading-[1.05] tracking-tightest">
          Recruiting is being rewritten.
        </h2>
        <p className="mt-6 text-[20px] md:text-[26px] text-white/85 max-w-3xl mx-auto leading-snug">
          AI-led, precision-driven, and built for teams that demand speed and
          results.
        </p>
      </div>
    </section>
  );
}
