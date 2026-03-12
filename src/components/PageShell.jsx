import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PageShell({ eyebrow, title, subtitle, children, cta, pageName }) {
  return (
    <div className="bg-hero-gradient text-white">
      <NavBar />
      <main className="pt-32">
        <section className="section">
          <div className="section-inner">
            <div className="glass-card relative overflow-hidden p-6 sm:p-8 md:p-10">
              <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-aurora/30 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-neon/30 blur-3xl" />
              <div className="relative z-10 space-y-4">
                {eyebrow ? <span className="pill">{eyebrow}</span> : null}
                <h1 className="font-display text-3xl font-semibold text-white md:text-4xl">{title}</h1>
                {pageName ? (
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    This is the {pageName} page
                  </p>
                ) : null}
                {subtitle ? <p className="max-w-2xl text-sm text-white/70 md:text-base">{subtitle}</p> : null}
                {cta ? <div className="pt-4 flex flex-col gap-3 sm:flex-row">{cta}</div> : null}
              </div>
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
