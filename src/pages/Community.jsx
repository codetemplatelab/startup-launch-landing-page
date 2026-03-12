import PageShell from "../components/PageShell";

const community = [
  {
    title: "Founder network",
    description: "Private Slack community for launch strategy, pricing, and messaging reviews.",
  },
  {
    title: "Office hours",
    description: "Weekly live sessions with product strategists and growth mentors.",
  },
  {
    title: "Templates vault",
    description: "Monthly drop of new hero layouts, pricing modules, and dashboard widgets.",
  },
];

export default function Community() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Community"
      subtitle="Join founders and product teams building launch narratives together."
      pageName="Community"
    >
      <section className="section">
        <div className="section-inner">
          <div className="grid gap-6 md:grid-cols-3">
            {community.map((item) => (
              <div key={item.title} className="glass-card space-y-3 p-6">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/60">{item.description}</p>
                <button className="btn-secondary w-full">Join now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
