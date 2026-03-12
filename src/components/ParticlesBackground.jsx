import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      return undefined;
    }

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, [reducedMotion]);

  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: { repulse: { distance: 120, duration: 0.4 } },
      },
      particles: {
        color: { value: ["#7c6bff", "#73f7ff"] },
        links: {
          color: "#7c6bff",
          distance: 140,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          speed: 0.6,
        },
        number: {
          density: { enable: true, area: 900 },
          value: 40,
        },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (reducedMotion || !ready) {
    return null;
  }

  return (
    <Particles id="hero-particles" options={options} className="absolute inset-0 pointer-events-none" />
  );
}
