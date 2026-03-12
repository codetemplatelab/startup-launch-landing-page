import { ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";

const roles = [
  {
    title: "Senior Product Designer",
    location: "Remote · EMEA",
    summary: "Craft premium marketing systems and product narratives.",
  },
  {
    title: "Frontend Engineer",
    location: "Remote · Americas",
    summary: "Build high-performance landing experiences and animation systems.",
  },
  {
    title: "Growth Strategist",
    location: "Remote · APAC",
    summary: "Define launch campaigns, pricing narratives, and conversion flows.",
  },
];

const benefits = [
  "Remote-first culture with async collaboration",
  "Annual launch budget for tools and education",
  "Flexible time off and founder-led mentorship",
  "Premium hardware and creative workspace stipend",
];

export default function Careers() {
  return (
    <PageShell
      eyebrow="Company"
      title="Join the team building launch experiences"
      subtitle="We’re a global crew of builders helping startups ship with confidence."
      pageName="Careers"
      cta={
        <button className="btn-primary">
          View open roles
          <ArrowUpRight size={16} />
        </button>
      }
    >
      <section className="section">
        <div className="section-inner space-y-10">
          <div className="glass-card grid gap-8 p-10 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <p className="pill">Why Startup Launch</p>
              <h2 className="font-display text-2xl font-semibold text-white">Work on high-impact launches</h2>
              <p className="text-sm text-white/60">
                Help founders go from idea to launch with templates that feel enterprise-grade. Move fast, stay focused,
                and ship premium results.
              </p>
            </div>
            <div className="space-y-3 text-sm text-white/70">
              {benefits.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {roles.map((role) => (
              <div key={role.title} className="glass-card space-y-3 p-6">
                <p className="text-sm font-semibold text-white">{role.title}</p>
                <p className="text-xs text-white/50">{role.location}</p>
                <p className="text-sm text-white/60">{role.summary}</p>
                <button className="btn-secondary w-full">Apply now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
