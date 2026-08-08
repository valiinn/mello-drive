"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { HeroMotion } from "@/components/shared/hero-motion";
import { easeOutExpo, usePrefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[85svh] items-end overflow-hidden pb-14 pt-28 md:min-h-[90svh] md:items-center md:pb-0 md:pt-0"
    >
      <HeroMotion />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="max-w-xl">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.2 }}
            className="mb-4 text-[11px] uppercase tracking-[0.28em] text-cool"
          >
            Motorista particular
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.85, ease: easeOutExpo, delay: 0.35 }}
            className="font-display text-[2.6rem] leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Seu destino.
            <br />
            Nosso compromisso.
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, ease: easeOutExpo, delay: 0.55 }}
            className="mt-5 max-w-md text-base leading-relaxed text-silver/80 md:text-lg"
          >
            Transporte particular com conforto, segurança e atendimento
            personalizado.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.75 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <WhatsAppCta label="Solicitar atendimento" />
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                document
                  .querySelector("#servicos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conheça o serviço
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
