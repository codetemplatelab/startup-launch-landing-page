import Reveal from "./Reveal";

export default function StepCard({ icon: Icon, title, description, index }) {
  return (
    <Reveal delay={index * 0.1} className="glass-card flex h-full flex-col gap-4 p-6">
      <div className="flex items-center justify-between text-white/50">
        <span className="text-xs uppercase tracking-[0.3em]">Step {index + 1}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
          <Icon size={18} />
        </div>
      </div>
      <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/60">{description}</p>
    </Reveal>
  );
}
