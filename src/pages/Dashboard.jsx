import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import StatCard from "../components/dashboard/StatCard";
import ProfileCard from "../components/dashboard/ProfileCard";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const baseStats = [
  {
    label: "Weekly signups",
    value: 1284,
    trend: "+18%",
    min: 1100,
    max: 1800,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    label: "Activation rate",
    value: 42.0,
    trend: "+6%",
    min: 36,
    max: 52,
    format: (value) => `${value.toFixed(1)}%`,
  },
  {
    label: "MRR projection",
    value: 38.4,
    trend: "+12%",
    min: 28,
    max: 60,
    format: (value) => `$${value.toFixed(1)}k`,
  },
];

const activity = [
  { title: "Waitlist conversion", detail: "New flow increased completion by 9%" },
  { title: "Pricing experiment", detail: "Pro tier uplifted by 4.2%" },
  { title: "Email cadence", detail: "Onboarding sequence launched" },
];

const chartVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.6, ease: "easeInOut" } },
};

export default function Dashboard() {
  const reducedMotion = usePrefersReducedMotion();
  const [liveStats, setLiveStats] = useState(() =>
    baseStats.map((stat) => ({ ...stat, current: stat.value }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) =>
        prev.map((stat) => {
          let delta = 0;
          if (stat.label === "Weekly signups") {
            delta = Math.floor(Math.random() * 6) + 1;
          } else if (stat.label === "Activation rate") {
            delta = (Math.random() - 0.4) * 0.4;
          } else {
            delta = (Math.random() - 0.2) * 0.4;
          }

          const next = Math.min(stat.max, Math.max(stat.min, stat.current + delta));
          return { ...stat, current: next };
        })
      );
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="glass-card space-y-4 bg-[#0f172a]/80 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Welcome back</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live metrics
          </span>
        </div>
        <h2 className="font-display text-2xl font-semibold text-white">Your launch metrics are trending up.</h2>
        <p className="text-sm text-white/60">
          Track activation, engagement, and readiness before you push the next release.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {liveStats.map((item) => (
          <StatCard key={item.label} {...item} value={item.format(item.current)} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card space-y-4 bg-[#0f172a]/80 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Retention</p>
              <h3 className="font-display text-xl font-semibold text-white">30-day cohort lift</h3>
            </div>
            <span className="pill">Live</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0b1222]/80 p-4">
            <motion.svg
              viewBox="0 0 480 200"
              className="h-40 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <defs>
                <linearGradient id="dashGlow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C6BFF" />
                  <stop offset="100%" stopColor="#73F7FF" />
                </linearGradient>
              </defs>
              <motion.path
                d="M10 150 C90 120 130 80 190 90 C240 100 280 70 330 60 C380 50 420 30 470 40"
                fill="none"
                stroke="url(#dashGlow)"
                strokeWidth="4"
                variants={reducedMotion ? undefined : chartVariants}
              />
            </motion.svg>
          </div>
        </div>
        <div className="glass-card space-y-4 bg-[#0f172a]/80 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Pipeline</p>
              <h3 className="font-display text-xl font-semibold text-white">Growth velocity</h3>
            </div>
            <span className="pill">Weekly</span>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#0b1222]/80 p-4">
            <motion.svg
              viewBox="0 0 480 200"
              className="h-40 w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <defs>
                <linearGradient id="barGlowDash" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#73F7FF" />
                  <stop offset="100%" stopColor="#7C6BFF" />
                </linearGradient>
              </defs>
              {[70, 110, 90, 150, 120, 170, 140].map((height, index) => (
                <motion.rect
                  key={height}
                  x={20 + index * 60}
                  y={180 - height}
                  width="36"
                  height={height}
                  rx="12"
                  fill="url(#barGlowDash)"
                  initial={reducedMotion ? undefined : { height: 0, y: 180 }}
                  whileInView={reducedMotion ? undefined : { height, y: 180 - height }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                />
              ))}
            </motion.svg>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="glass-card space-y-4 bg-[#0f172a]/80 p-6">
          <h3 className="font-display text-lg font-semibold text-white">Launch activity</h3>
          <div className="space-y-4">
            {activity.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-[#0b1222]/80 p-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-white/60">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <ProfileCard />
      </div>
    </div>
  );
}
