"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

const rings = [
  { size: "34vmax", duration: 18, delay: 0 },
  { size: "50vmax", duration: 24, delay: -5 },
  { size: "68vmax", duration: 30, delay: -10 },
];

export function CtaMotion() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_55%)]" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {rings.map((ring, index) => (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
            style={{ width: ring.size, height: ring.size }}
            animate={
              reduced
                ? { opacity: 0.3, rotate: 0 }
                : { rotate: [0, 360], opacity: [0.18, 0.45, 0.18] }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: ring.duration,
                    ease: "linear",
                    repeat: Infinity,
                    delay: ring.delay,
                  }
            }
          />
        ))}
      </div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[26vmax] w-[26vmax] -translate-x-1/2 -translate-y-1/2 border border-white/25"
        animate={
          reduced
            ? { opacity: 0.3, rotate: 45 }
            : {
                rotate: [45, 405],
                scale: [0.9, 1.08, 0.9],
                opacity: [0.2, 0.5, 0.2],
              }
        }
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 20, ease: "linear", repeat: Infinity }
        }
      />

      <motion.div
        className="absolute left-[14%] top-[28%] h-2.5 w-2.5 rounded-full bg-white/60"
        animate={
          reduced ? { opacity: 0.4 } : { y: [0, -24, 0], opacity: [0.3, 0.9, 0.3] }
        }
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 5, ease: "easeInOut", repeat: Infinity }
        }
      />
      <motion.div
        className="absolute bottom-[26%] right-[16%] h-2 w-2 rounded-full bg-white/50"
        animate={
          reduced ? { opacity: 0.35 } : { y: [0, 18, 0], opacity: [0.25, 0.8, 0.25] }
        }
        transition={
          reduced
            ? { duration: 0 }
            : { duration: 6.5, ease: "easeInOut", repeat: Infinity, delay: 1 }
        }
      />
    </div>
  );
}
