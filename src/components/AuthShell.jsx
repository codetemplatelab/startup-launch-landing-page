import { Link } from "react-router-dom";

export default function AuthShell({ title, subtitle, children, footer, pageName }) {
  return (
    <div className="min-h-screen bg-hero-gradient text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-aurora to-neon text-sm font-semibold text-slate-950">
            SL
          </span>
          <div>
            <p className="font-display text-lg font-semibold">Startup Launch</p>
            <p className="text-xs text-white/60">Landing Suite</p>
          </div>
        </Link>
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card p-6 sm:p-8">
            <h1 className="font-display text-2xl font-semibold">{title}</h1>
            {pageName ? (
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
                This is the {pageName} page
              </p>
            ) : null}
            <p className="mt-2 text-sm text-white/60">{subtitle}</p>
            <div className="mt-6 space-y-4">{children}</div>
          </div>
          <div className="glass-card flex flex-col justify-between gap-6 p-6 sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Launch Ready</p>
              <h2 className="mt-3 font-display text-2xl font-semibold">
                Build your product narrative before day one.
              </h2>
              <p className="mt-3 text-sm text-white/60">
                Access premium sections, live analytics previews, and a polished dashboard experience.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              “This kit saved us weeks of design time. The onboarding flow feels enterprise-grade.”
              <p className="mt-3 text-xs text-white/50">— Mira Patel, Neuron Labs</p>
            </div>
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}
