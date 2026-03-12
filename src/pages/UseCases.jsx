import { ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";
import UseCaseCard from "../components/UseCaseCard";
import { useCases } from "../data/landingData";

const personas = [
  {
    title: "Founder launches",
    description: "Clarify your product narrative and build investor confidence in days, not weeks.",
  },
  {
    title: "Product-led growth",
    description: "Support onboarding, activation, and conversion with a premium marketing layer.",
  },
  {
    title: "Engineering teams",
    description: "Ship production-grade marketing experiences without custom design debt.",
  },
];

export default function UseCases() {
  return (
    <PageShell
      eyebrow="Product"
      title="Use cases that scale with every launch"
      subtitle="From new MVPs to global releases, the structure adapts to your audience."
      pageName="Use Cases"
      cta={
        <button className="btn-primary">
          Launch with confidence
          <ArrowUpRight size={16} />
        </button>
      }
    >
      <section className="section">
        <div className="section-inner space-y-12">
          <SectionHeader
            eyebrow="Teams"
            title="Designed for modern startup roles"
            description="Craft the right story for founders, product teams, developers, and growth leaders."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((item, index) => (
              <UseCaseCard key={item.title} {...item} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="glass-card grid gap-6 p-10 md:grid-cols-3">
            {personas.map((item) => (
              <div key={item.title} className="space-y-3">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
