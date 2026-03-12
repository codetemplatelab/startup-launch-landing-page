import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

export default function useLenis() {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const isMobile =
      window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion || isMobile) {
      return undefined;
    }

    const lenis = new Lenis({
      lerp: 0.15,
      duration: 0.35,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [reducedMotion]);
}
