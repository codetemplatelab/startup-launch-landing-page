import { Check } from "lucide-react";
import Reveal from "./Reveal";

export default function PricingCard({ plan, index }) {
  return (
    <Reveal
      delay={index * 0.1}
      className={`glass-card flex h-full flex-col gap-6 p-6 ${
        plan.highlighted ? "border-aurora/60 bg-white/10 shadow-glow" : ""
      }`}
    >
      {plan.highlighted ? (
        <span className="pill w-fit border-aurora/50 bg-aurora/10 text-aurora">Recommended</span>
      ) : null}
      <div className="space-y-2">
        <h3 className="font-display text-xl font-semibold text-white">{plan.name}</h3>
        <p className="text-sm text-white/60">{plan.description}</p>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-semibold text-white">{plan.price}</span>
        <span className="text-sm text-white/50">/month</span>
      </div>
      <ul className="space-y-3 text-sm text-white/70">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check size={16} className="text-neon" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={plan.highlighted ? "btn-primary w-full" : "btn-secondary w-full"}>
        Choose {plan.name}
      </button>
    </Reveal>
  );
}
