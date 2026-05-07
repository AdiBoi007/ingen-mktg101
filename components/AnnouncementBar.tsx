export default function AnnouncementBar() {
  return (
    <div className="w-full bg-brand-purple text-white text-[12px] py-2 px-4 text-center relative z-50">
      <span className="font-medium">
        Juicebox raises $80M Series B at an $850M Valuation
      </span>
      <span className="mx-2 opacity-70">→</span>
      <a href="#" className="underline underline-offset-2 hover:opacity-90">
        Watch Announcement
      </a>
    </div>
  );
}
