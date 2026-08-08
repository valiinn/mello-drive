"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig, vehicles } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { cn } from "@/lib/utils";
import { easeOutExpo, usePrefersReducedMotion } from "@/lib/motion";

export function Vehicles() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = vehicles[activeIndex];
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 18, reduced ? 0 : -18]);

  const selectVehicle = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      id="veiculos"
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/[0.05] bg-[#ececec] py-16 text-ink md:py-24 lg:py-28"
    >
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-muted md:text-xs">
            Exclusividade em movimento
          </p>
          <h2 className="font-display text-3xl uppercase tracking-[0.04em] text-ink md:text-5xl lg:text-[3.5rem]">
            Conheça nossos veículos
          </h2>
        </Reveal>

        <div className="relative mt-8 md:mt-12">
          <div className="relative mx-auto flex min-h-[240px] w-full max-w-6xl items-center justify-center px-2 sm:min-h-[300px] md:min-h-[420px] lg:min-h-[480px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active.id}
                custom={direction}
                variants={{
                  enter: (d: number) => ({
                    opacity: 0,
                    x: d * 28,
                    scale: 0.985,
                  }),
                  center: { opacity: 1, x: 0, scale: 1 },
                  exit: (d: number) => ({
                    opacity: 0,
                    x: d * -28,
                    scale: 0.985,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: easeOutExpo }}
                className="relative flex w-full flex-col items-center"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] select-none font-display text-[18vw] uppercase leading-none tracking-[0.08em] text-ink/[0.05] sm:text-[14vw] md:text-[10rem] lg:text-[11rem]"
                >
                  {active.watermark}
                </span>

                <motion.div
                  style={{ y: parallaxY }}
                  className="group relative z-10 mx-auto w-[92%] max-w-5xl sm:w-[88%] md:w-[82%]"
                >
                  <div className="relative aspect-[2/1] w-full drop-shadow-[0_40px_80px_rgba(0,0,0,0.55)] transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      priority={activeIndex === 0}
                      sizes="(max-width: 768px) 92vw, 82vw"
                      className="object-contain object-center"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Reveal className="mt-6 md:mt-8" delay={0.05}>
            <div
              role="tablist"
              aria-label="Selecionar veículo"
              className="mx-auto flex max-w-xl items-center justify-center gap-2 border-t border-ink/10 pt-6 sm:gap-8"
            >
              {vehicles.map((vehicle, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={vehicle.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => selectVehicle(index)}
                    className={cn(
                      "relative px-3 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 sm:text-xs md:tracking-[0.24em]",
                      selected ? "text-ink" : "text-ink/35 hover:text-ink/70"
                    )}
                  >
                    {vehicle.shortName}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-center bg-ink transition-transform duration-300",
                        selected ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          <div className="mx-auto mt-8 max-w-lg text-center md:mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "-info"}
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
              >
                <h3 className="font-display text-2xl uppercase tracking-[0.06em] text-ink md:text-3xl">
                  {active.shortName}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                  {active.badge}
                </p>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/60 md:text-base">
                  {active.description}
                </p>
                <div className="mt-7 flex justify-center">
                  <WhatsAppCta
                    label="Consultar este veículo"
                    message={`${siteConfig.whatsapp.availabilityMessage} Interesse no ${active.name}.`}
                    variant="dark"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
