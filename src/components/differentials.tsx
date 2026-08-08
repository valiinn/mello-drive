import { differentials } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { WhatsAppCta } from "@/components/shared/whatsapp-cta";

export function Differentials() {
  return (
    <section id="diferenciais" className="section-padding relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container>
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-cool">
            Diferenciais
          </p>
          <h2 className="max-w-xl font-display text-3xl tracking-tight text-white md:text-5xl">
            Por que escolher nosso serviço?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {differentials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="group border-t border-white/10 pt-6 transition-colors duration-300 hover:border-white/30">
                <span className="font-display text-4xl text-white/15 transition-colors group-hover:text-white/30">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12" delay={0.1}>
          <WhatsAppCta label="Quero saber mais" />
        </Reveal>
      </Container>
    </section>
  );
}
