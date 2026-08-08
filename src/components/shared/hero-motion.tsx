"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

const bars = [
  { top: "10%", height: "14%", delay: 0, duration: 14 },
  { top: "32%", height: "12%", delay: -4, duration: 18 },
  { top: "52%", height: "16%", delay: -8, duration: 16 },
  { top: "74%", height: "10%", delay: -2, duration: 20 },
];

export function HeroMotion() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(255,255,255,0.08),transparent_50%)]" />

      {bars.map((bar, index) => (
        <div
          key={index}
          className="absolute left-0 right-0 overflow-hidden"
          style={{ top: bar.top, height: bar.height }}
        >
          <motion.div
            className="absolute top-[10%] h-[80%] w-[34%] rounded-sm border border-white/15 bg-gradient-to-r from-white/[0.08] via-white/[0.14] to-white/[0.04]"
            animate={
              reduced
                ? { x: "40%", opacity: 0.45 }
                : { x: ["-40%", "120%"], opacity: [0.25, 0.7, 0.25] }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: bar.duration,
                    ease: "linear",
                    repeat: Infinity,
                    delay: bar.delay,
                  }
            }
          />
        </div>
      ))}

      <motion.div
        className="absolute right-[10%] top-[20%] h-44 w-32 border border-white/20 md:h-64 md:w-44"
        animate={
          reduced
            ? { opacity: 0.35 }
            : { y: [0, -24, 0], opacity: [0.25, 0.55, 0.25] }
        }
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 8, ease: "easeInOut", repeat: Infinity }
        }
      />

      <motion.div
        className="absolute bottom-[20%] left-[10%] h-px w-52 bg-gradient-to-r from-transparent via-white/50 to-transparent md:w-80"
        animate={
          reduced
            ? { opacity: 0.4 }
            : { scaleX: [0.35, 1.1, 0.35], opacity: [0.25, 0.8, 0.25] }
        }
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 6, ease: "easeInOut", repeat: Infinity }
        }
      />
    </div>
  );
}
