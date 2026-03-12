import PageShell from "../components/PageShell";

export default function Contact() {
  return (
    <PageShell
      eyebrow="Company"
      title="Talk to the launch team"
      subtitle="Reach out for partnerships, enterprise pricing, or template support."
      pageName="Contact"
    >
      <section className="section">
        <div className="section-inner">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card space-y-6 p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">We reply within 24 hours</h2>
                <p className="mt-2 text-sm text-white/60">
                  Share your launch timeline, product details, and what you need help with.
                </p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-aurora"
                />
                <input
                  type="email"
                  placeholder="Work email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-aurora"
                />
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-aurora">
                  <option>Launch partnership</option>
                  <option>Template support</option>
                  <option>Enterprise pricing</option>
                  <option>Press inquiry</option>
                </select>
                <textarea
                  rows="4"
                  placeholder="Tell us about your launch"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-aurora"
                />
                <button type="submit" className="btn-primary w-full">Send message</button>
              </form>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-6">
                <p className="text-sm font-semibold text-white">Launch HQ</p>
                <p className="text-sm text-white/60">120 Market Street · San Francisco · CA</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm font-semibold text-white">Email</p>
                <p className="text-sm text-white/60">hello@startuplaunch.io</p>
              </div>
              <div className="glass-card p-6">
                <p className="text-sm font-semibold text-white">Sales</p>
                <p className="text-sm text-white/60">sales@startuplaunch.io</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
