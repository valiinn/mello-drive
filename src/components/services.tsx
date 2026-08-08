"use client";

import {
  CalendarDays,
  Clock3,
  GraduationCap,
  Plane,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";
import { openWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  user: UserRound,
  plane: Plane,
  school: GraduationCap,
  calendar: CalendarDays,
  clock: Clock3,
};

export function Services() {
  return (
    <section
      id="servicos"
      className="section-padding relative border-y border-white/[0.05] bg-ink-soft"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-30" />
      <Container className="relative">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-cool">
            Serviços
          </p>
          <h2 className="max-w-xl font-display text-3xl tracking-tight text-white md:text-5xl">
            O que posso fazer por você.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon] ?? UserRound;
            return (
              <Reveal key={service.id} delay={index * 0.05}>
                <button
                  type="button"
                  onClick={() => openWhatsApp(service.message)}
                  className={cn(
                    "group flex h-full w-full flex-col border bg-ink/40 p-6 text-left transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:border-white/20 hover:bg-surface/60",
                    service.highlight
                      ? "border-white/15"
                      : "border-white/[0.07]"
                  )}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-display text-2xl text-white/25 transition-colors group-hover:text-white/45">
                      {service.id}
                    </span>
                    <Icon className="h-4 w-4 text-silver/50 transition-colors group-hover:text-silver" />
                  </div>
                  <h3 className="font-display text-xl text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <span className="mt-5 text-[10px] uppercase tracking-[0.18em] text-silver/50 transition-colors group-hover:text-silver">
                    {service.ctaLabel}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex justify-center md:justify-start" delay={0.12}>
          <WhatsAppCta label="Pedir orçamento" />
        </Reveal>
      </Container>
    </section>
  );
}
