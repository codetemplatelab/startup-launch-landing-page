import PageShell from "../components/PageShell";

const pressItems = [
  {
    title: "Startup Launch raises seed round to scale productized design",
    outlet: "Product Hunt",
    date: "Jan 18, 2026",
  },
  {
    title: "How modern startups accelerate launches with templates",
    outlet: "TechCrunch",
    date: "Dec 09, 2025",
  },
  {
    title: "The rise of premium launch systems",
    outlet: "Fast Company",
    date: "Oct 02, 2025",
  },
];

export default function Press() {
  return (
    <PageShell
      eyebrow="Company"
      title="Press & media"
      subtitle="Latest news, brand assets, and media coverage for Startup Launch."
      pageName="Press"
    >
      <section className="section">
        <div className="section-inner space-y-10">
          <div className="glass-card grid gap-8 p-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="pill">Press kit</p>
              <h2 className="font-display text-2xl font-semibold text-white">Brand assets and facts</h2>
              <p className="text-sm text-white/60">
                Download logos, product screenshots, and leadership bios for media coverage.
              </p>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Logos and marks</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Product screenshots</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Leadership bios</div>
            </div>
          </div>

          <div className="space-y-4">
            {pressItems.map((item) => (
              <div key={item.title} className="glass-card flex flex-col gap-2 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-white/50">{item.outlet}</p>
                </div>
                <span className="text-xs text-white/50">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
