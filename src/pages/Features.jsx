import { ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import FeatureCard from "../components/FeatureCard";
import SectionHeader from "../components/SectionHeader";
import { features } from "../data/landingData";

const highlights = [
  "Launch-ready hero and CTA sections",
  "Modular pricing, FAQ, and testimonial blocks",
  "Motion system with Framer Motion + GSAP",
  "Three.js hero canvas and particles",
  "SEO-ready metadata and performance polish",
  "Dashboard and auth-ready layouts",
];

export default function Features() {
  return (
    <PageShell
      eyebrow="Product"
      title="Everything you need to ship a premium launch"
      subtitle="Each section is optimized for conversion, clarity, and enterprise-grade storytelling."
      pageName="Features"
      cta={
        <button className="btn-primary">
          Explore templates
          <ArrowUpRight size={16} />
        </button>
      }
    >
      <section className="section">
        <div className="section-inner space-y-12">
          <SectionHeader
            eyebrow="Core features"
            title="Conversion-focused components"
            description="Drop-in sections that establish trust, explain value, and drive signups."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="glass-card grid gap-8 p-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="pill">Highlights</p>
              <h2 className="font-display text-2xl font-semibold text-white">Built for serious launch velocity</h2>
              <p className="text-sm text-white/60">
                Keep teams aligned with a flexible layout system, production-ready visuals, and modern animations.
              </p>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
