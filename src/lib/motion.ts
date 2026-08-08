"use client";

import { useEffect, useState } from "react";

export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const revealTransition = {
  duration: 0.75,
  ease: easeOutExpo,
};

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}
