import Reveal from "./Reveal";

export default function FeatureCard({ icon: Icon, title, description, delay }) {
  return (
    <Reveal delay={delay} className="glass-card group flex h-full flex-col gap-4 p-6 transition hover:-translate-y-1 hover:border-white/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aurora/30 to-neon/30 text-aurora">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
      <div className="mt-auto h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
    </Reveal>
  );
}
