import PageShell from "../components/PageShell";

const guides = [
  {
    title: "Launch messaging blueprint",
    description: "Turn product insights into a clear narrative and hero statement.",
  },
  {
    title: "Pricing positioning",
    description: "Structure tiers that drive upgrades without confusing new users.",
  },
  {
    title: "Onboarding that converts",
    description: "Design flows that deliver activation within the first session.",
  },
];

export default function Guides() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Guides"
      subtitle="Strategic playbooks for go-to-market clarity and conversion."
      pageName="Guides"
    >
      <section className="section">
        <div className="section-inner">
          <div className="grid gap-6 md:grid-cols-3">
            {guides.map((item) => (
              <div key={item.title} className="glass-card space-y-3 p-6">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/60">{item.description}</p>
                <button className="btn-secondary w-full">Read guide</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
