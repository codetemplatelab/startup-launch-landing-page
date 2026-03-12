import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  announcement,
  features,
  faqs,
  heroHighlights,
  pricing,
  stats,
  steps,
  testimonials,
  useCases,
} from "../data/landingData";
import ParticlesBackground from "../components/ParticlesBackground";
import HeroScene from "../components/HeroScene";
import NavBar from "../components/NavBar";
import SectionHeader from "../components/SectionHeader";
import FeatureCard from "../components/FeatureCard";
import StepCard from "../components/StepCard";
import UseCaseCard from "../components/UseCaseCard";
import TestimonialCard from "../components/TestimonialCard";
import PricingCard from "../components/PricingCard";
import FaqItem from "../components/FaqItem";
import Footer from "../components/Footer";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { ArrowUpRight, PlayCircle } from "lucide-react";

export default function Landing() {
  const glowRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const floatTransition = (duration, delay = 0) => ({
    duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  });
  const chartVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.6, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    if (!glowRef.current || reducedMotion) return undefined;

    const ctx = gsap.context(() => {
      gsap.to(".hero-glow", {
        opacity: 0.8,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, glowRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div className="bg-hero-gradient text-white">
      <NavBar />
      <main className="pt-32">
        <section id="overview" className="section relative overflow-hidden" ref={glowRef}>
          <ParticlesBackground />
          <div className="hero-glow pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,107,255,0.25),transparent_55%)] opacity-40" />
          <div className="section-inner relative">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="pill">Launching Soon</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Startup Launch Landing Page
                  </span>
                </div>
                <div className="space-y-4">
                  <h1 className="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">
                    Launch your startup faster with our powerful platform.
                  </h1>
                  <p className="text-base text-white/70 md:text-lg">
                    A clean launch landing page designed to introduce new startups with bold messaging, strong call-to-action
                    sections, and modern interactive visuals.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">
                    Start free launch
                    <ArrowUpRight size={16} />
                  </button>
                  <button className="btn-secondary">
                    Watch demo
                    <PlayCircle size={16} />
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="glass-card flex flex-col gap-2 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                      <p className="font-display text-xl font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full bg-aurora/30 blur-3xl lg:block" />
                <div className="grid gap-6">
                  <div className="aspect-[4/3] w-full overflow-hidden animate-float">
                    <HeroScene />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {heroHighlights.map((highlight) => {
                      const Icon = highlight.icon;
                      return (
                        <div key={highlight.title} className="glass-card flex items-center gap-4 p-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-neon">
                            <Icon size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">{highlight.title}</p>
                            <p className="text-xs text-white/50">{highlight.meta}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="glass-card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
              <div className="space-y-2">
                <div className="pill">{announcement.badge}</div>
                <h3 className="font-display text-2xl font-semibold text-white">{announcement.title}</h3>
                <p className="text-sm text-white/60">{announcement.description}</p>
              </div>
              <button className="btn-primary">{announcement.cta}</button>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-inner space-y-12">
            <SectionHeader
              eyebrow="Features"
              title="Conversion-focused sections built for modern launches"
              description="Every block is engineered to clarify your value, build trust, and drive signups."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} {...feature} delay={index * 0.05} />
              ))}
            </div>
          </div>
        </section>

        <section id="demo" className="section">
          <div className="section-inner space-y-12">
            <SectionHeader
              eyebrow="Product Demo"
              title="Showcase your experience with cinematic product previews"
              description="Pre-built layouts highlight dashboards, analytics, and onboarding moments with clarity."
            />
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  className="glass-card aspect-[3/2] overflow-hidden p-4"
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
                    transition={reducedMotion ? undefined : floatTransition(6)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1771923082503-0a3381c46cef?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"
                      alt="Dashboard preview"
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <div className="demo-overlay" />
                    <div className="demo-scanline" />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="glass-card aspect-[3/2] overflow-hidden p-4"
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                    transition={reducedMotion ? undefined : floatTransition(7, 0.2)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"
                      alt="Analytics preview"
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <div className="demo-overlay" />
                    <div className="demo-scanline" />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="glass-card aspect-[2/1] overflow-hidden p-4 md:col-span-2"
                  initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  <motion.div
                    className="relative h-full w-full"
                    animate={reducedMotion ? undefined : { y: [0, -5, 0] }}
                    transition={reducedMotion ? undefined : floatTransition(8, 0.15)}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1658953229625-aad99d7603b4?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1600"
                      alt="Mobile preview"
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover"
                    />
                    <div className="demo-overlay" />
                    <div className="demo-scanline" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="glass-card flex flex-col justify-between gap-6 p-6">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Interactive UI</p>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    Motion-ready visuals that feel alive
                  </h3>
                  <p className="text-sm text-white/60">
                    From floating cards to animated charts, every surface feels responsive and premium.
                  </p>
                </div>
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 overflow-hidden"
                  animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
                  transition={reducedMotion ? undefined : floatTransition(6.5, 0.1)}
                >
                  <div className="relative h-52 w-full sm:h-64">
                    <div className="absolute inset-0 rounded-xl border border-white/10 bg-slate-950/60" />
                    <div className="absolute left-4 right-4 top-4 flex items-center justify-between text-xs text-white/60">
                      <span>Realtime signals</span>
                      <span className="rounded-full border border-white/10 px-2 py-1 text-[10px] uppercase tracking-[0.25em]">
                        Live
                      </span>
                    </div>
                    <motion.svg
                      viewBox="0 0 480 180"
                      className="absolute left-4 right-4 top-12 h-32 w-[calc(100%-2rem)]"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <defs>
                        <linearGradient id="miniLine" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#7C6BFF" />
                          <stop offset="100%" stopColor="#73F7FF" />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M10 140 C80 110 140 90 190 110 C240 130 300 70 350 60 C400 50 440 30 470 40"
                        fill="none"
                        stroke="url(#miniLine)"
                        strokeWidth="4"
                        variants={reducedMotion ? undefined : chartVariants}
                      />
                    </motion.svg>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end gap-2">
                      {[32, 52, 44, 68, 56].map((height, index) => (
                        <motion.div
                          key={height}
                          className="w-full rounded-full bg-gradient-to-t from-aurora/40 to-neon/60"
                          style={{ height }}
                          initial={reducedMotion ? undefined : { height: 0 }}
                          whileInView={reducedMotion ? undefined : { height }}
                          transition={{ duration: 0.6, delay: index * 0.08 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="section">
          <div className="section-inner space-y-12">
            <SectionHeader
              eyebrow="Launch Insights"
              title="Charts that explain traction at a glance"
              description="Show investor-ready momentum with clean, animated metrics and trend lines."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="glass-card space-y-6 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Activation</p>
                    <h3 className="font-display text-2xl font-semibold text-white">42% → 58%</h3>
                  </div>
                  <span className="pill">Live</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <motion.svg
                    viewBox="0 0 480 200"
                    className="h-40 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <defs>
                      <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#7C6BFF" />
                        <stop offset="100%" stopColor="#73F7FF" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M10 150 C90 120 120 80 180 90 C240 100 260 40 320 50 C380 60 420 20 470 30"
                      fill="none"
                      stroke="url(#lineGlow)"
                      strokeWidth="4"
                      variants={reducedMotion ? undefined : chartVariants}
                    />
                  </motion.svg>
                </div>
              </div>
              <div className="glass-card space-y-6 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Revenue</p>
                    <h3 className="font-display text-2xl font-semibold text-white">$18.2k → $38.4k</h3>
                  </div>
                  <span className="pill">Weekly</span>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <motion.svg
                    viewBox="0 0 480 200"
                    className="h-40 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <defs>
                      <linearGradient id="barGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#73F7FF" />
                        <stop offset="100%" stopColor="#7C6BFF" />
                      </linearGradient>
                    </defs>
                    {[60, 110, 80, 150, 120, 170, 140].map((height, index) => (
                        <motion.rect
                          key={height}
                          x={20 + index * 60}
                          y={180 - height}
                          width="36"
                          height={height}
                          rx="12"
                          fill="url(#barGlow)"
                          initial={reducedMotion ? undefined : { height: 0, y: 180 }}
                          whileInView={reducedMotion ? undefined : { height, y: 180 - height }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        />
                    ))}
                  </motion.svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="section-inner space-y-12">
            <SectionHeader
              eyebrow="How it works"
              title="Launch in three clean steps"
              description="A streamlined flow that keeps your team aligned from setup to launch day."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <StepCard key={step.title} {...step} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="section">
          <div className="section-inner space-y-12">
            <SectionHeader
              eyebrow="Use cases"
              title="Built for founders, teams, and modern SaaS launches"
              description="The narrative is flexible enough to support any product vision."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((item, index) => (
                <UseCaseCard key={item.title} {...item} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section overflow-hidden">
          <div className="section-inner space-y-10">
            <SectionHeader
              eyebrow="Testimonials"
              title="Loved by ambitious launch teams"
              description="Real stories from teams shipping faster and converting more users."
            />
            <div className="relative">
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#05060f] to-transparent" />
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#05060f] to-transparent" />
              <motion.div
                className="flex gap-6"
                animate={reducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
                transition={reducedMotion ? { duration: 0 } : { duration: 28, repeat: Infinity, ease: "linear" }}
              >
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="section-inner space-y-12">
            <SectionHeader
              eyebrow="Pricing"
              title="Flexible plans for every launch stage"
              description="Choose the plan that fits your team today and scale anytime."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {pricing.map((plan, index) => (
                <PricingCard key={plan.name} plan={plan} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="section-inner space-y-12">
            <SectionHeader
              eyebrow="FAQ"
              title="Everything you need before launch"
              description="Answers to common questions from founders and product leads."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((item) => (
                <FaqItem key={item.question} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <div className="glass-card relative overflow-hidden p-10">
              <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-aurora/30 blur-3xl" />
              <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-neon/30 blur-3xl" />
              <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-4">
                  <p className="pill">Launch ready</p>
                  <h2 className="font-display text-3xl font-semibold text-white">
                    Build your launch narrative with clarity and speed.
                  </h2>
                  <p className="text-sm text-white/60">
                    From landing page to dashboard preview, every asset is optimized for conversion and trust.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="btn-primary w-full">
                    Start building
                    <ArrowUpRight size={16} />
                  </button>
                  <button className="btn-secondary w-full">Talk to sales</button>
                  <p className="text-xs text-white/50">No credit card required · Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
