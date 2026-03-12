import PageShell from "../components/PageShell";

const faqs = [
  {
    title: "How do I customize the template?",
    description: "Update `src/data/landingData.js` and Tailwind tokens to match your brand.",
  },
  {
    title: "Can I use this for client work?",
    description: "Yes. The template is licensed for commercial projects and client launches.",
  },
  {
    title: "How do I add new sections?",
    description: "Duplicate an existing component in `src/components` and wire it into the page.",
  },
];

export default function HelpCenter() {
  return (
    <PageShell
      eyebrow="Resources"
      title="Help Center"
      subtitle="Quick answers and troubleshooting tips for your launch workflow."
      pageName="Help Center"
    >
      <section className="section">
        <div className="section-inner space-y-6">
          {faqs.map((item) => (
            <div key={item.title} className="glass-card space-y-2 p-6">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-sm text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
