import { ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";

const values = [
  {
    title: "Craft with clarity",
    description: "Every layout tells a story that makes complex products easy to understand.",
  },
  {
    title: "Speed without compromise",
    description: "Fast launch cycles with no design debt or rushed experiences.",
  },
  {
    title: "Global-ready execution",
    description: "Ship messaging that resonates across regions and product stages.",
  },
];

const stats = [
  { label: "Launches powered", value: "1,240+" },
  { label: "Avg. time to ship", value: "14 days" },
  { label: "Global teams", value: "98 countries" },
];

export default function About() {
  return (
    <PageShell
      eyebrow="Company"
      title="We build launch experiences that feel world-class"
      subtitle="Startup Launch is a premium system for founders, product teams, and marketers ready to ship faster."
      pageName="About"
      cta={
        <button className="btn-primary">
          Partner with us
          <ArrowUpRight size={16} />
        </button>
      }
    >
      <section className="section">
        <div className="section-inner">
          <div className="glass-card grid gap-8 p-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="pill">Our story</p>
              <h2 className="font-display text-2xl font-semibold text-white">Founded by product builders</h2>
              <p className="text-sm text-white/60">
                We’ve led launches at fast-moving SaaS and AI startups. This template captures the best patterns we’ve
                refined across dozens of go-to-market pushes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-card flex flex-col gap-2 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                  <p className="font-display text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="glass-card space-y-3 p-6">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
