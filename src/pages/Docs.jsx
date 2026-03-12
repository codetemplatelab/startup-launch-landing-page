import PageShell from "../components/PageShell";

const topics = [
  {
    title: "Getting started",
    description: "Install dependencies, run locally, and customize content in minutes.",
  },
  {
    title: "Brand customization",
    description: "Swap fonts, colors, and sections with Tailwind-friendly tokens.",
  },
  {
    title: "Deploying",
    description: "Build and deploy to any static host or modern platform.",
  },
  {
    title: "Animation system",
    description: "Tune Framer Motion and GSAP for custom motion sequences.",
  },
];

export default function Docs() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Documentation"
      subtitle="Installation, customization, and deployment notes for the Startup Launch template."
      pageName="Docs"
    >
      <section className="section">
        <div className="section-inner">
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((item) => (
              <div key={item.title} className="glass-card space-y-3 p-6">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-sm text-white/60">{item.description}</p>
                <button className="btn-secondary w-full">Read article</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
