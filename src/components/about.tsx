import Image from "next/image";
import { femaleDriverOption, siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

export function About() {
  const { driver } = siteConfig;

  return (
    <section id="conheca-me" className="section-padding relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[260px_1fr]">
          <Reveal>
            <div className="group relative mx-auto aspect-[3/4] w-full max-w-[220px] overflow-hidden lg:mx-0 lg:max-w-none">
              <Image
                src={driver.image}
                alt={driver.name}
                fill
                sizes="220px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-3 text-xs uppercase tracking-[0.28em] text-cool">
                {driver.role}
              </p>
              <h2 className="font-display text-3xl tracking-tight text-white md:text-5xl">
                Conheça-me
              </h2>
              <p className="mt-2 font-display text-xl text-silver/70 md:text-2xl">
                {driver.name}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-muted md:text-lg">
                {driver.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.14} className="mt-8">
              <WhatsAppCta label="Conversar agora" />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1} className="mt-10 md:mt-12">
          <div className="flex flex-col gap-5 border border-white/10 bg-surface/40 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-cool">
                Opção de atendimento
              </p>
              <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
                {femaleDriverOption.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                {femaleDriverOption.description}
              </p>
            </div>
            <WhatsAppCta
              label={femaleDriverOption.ctaLabel}
              message={femaleDriverOption.message}
              variant="secondary"
              className="w-full shrink-0 md:w-auto"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
