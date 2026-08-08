"use client";

import { Reveal } from "@/components/shared/reveal";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { CtaMotion } from "@/components/shared/cta-motion";

export function CtaFinal() {
  return (
    <section id="contato" className="relative overflow-hidden py-28 md:py-36">
      <CtaMotion />
      <div className="absolute inset-0 bg-ink/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-cool">
            Contato
          </p>
          <h2 className="font-display text-4xl text-white md:text-6xl">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-silver/70 md:text-lg">
            Conte o que você precisa e consulte a disponibilidade pelo WhatsApp.
          </p>
          <div className="mt-9 flex justify-center">
            <WhatsAppCta
              className="min-w-[240px]"
              label="Chamar no WhatsApp"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
