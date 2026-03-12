import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";

const releases = [
  {
    date: "Mar 10, 2026",
    title: "Launch Storytelling Pack",
    summary: "Introduced new hero layouts, product demo grids, and premium CTA clusters.",
  },
  {
    date: "Feb 22, 2026",
    title: "Dashboard Refresh",
    summary: "Added live metric updates, activity modules, and profile cards.",
  },
  {
    date: "Jan 30, 2026",
    title: "Motion System",
    summary: "Integrated Framer Motion, GSAP, and Lenis scrolling improvements.",
  },
];

export default function Changelog() {
  return (
    <PageShell
      eyebrow="Product"
      title="Changelog"
      subtitle="Track new layouts, animation upgrades, and performance improvements across releases."
      pageName="Changelog"
    >
      <section className="section">
        <div className="section-inner space-y-12">
          <SectionHeader
            eyebrow="Release notes"
            title="What’s new"
            description="Consistent improvements to keep your launch pages fresh and competitive."
          />
          <div className="space-y-6">
            {releases.map((item) => (
              <div key={item.title} className="glass-card space-y-3 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{item.date}</p>
                <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/60">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
