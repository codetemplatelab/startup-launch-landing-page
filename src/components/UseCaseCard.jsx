import Reveal from "./Reveal";

export default function UseCaseCard({ icon: Icon, title, description, delay }) {
  return (
    <Reveal delay={delay} className="glass-card flex h-full flex-col gap-4 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-neon">
        <Icon size={22} />
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </Reveal>
  );
}
