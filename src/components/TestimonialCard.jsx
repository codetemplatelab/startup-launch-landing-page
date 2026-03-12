export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card flex min-w-[260px] flex-1 flex-col gap-4 p-6">
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 rounded-full border border-white/20 bg-gradient-to-br from-aurora/40 to-neon/40" />
        <div>
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-white/50">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-sm text-white/70">“{testimonial.quote}”</p>
    </div>
  );
}
