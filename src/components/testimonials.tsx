"use client";

import { useRef, useState } from "react";
import { Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/config/site";
import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/motion";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return <TestimonialsMarquee items={testimonials} />;
}

function TestimonialsMarquee({ items }: { items: Testimonial[] }) {
  const reduced = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const loop = [...items, ...items, ...items];

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    isDragging.current = true;
    setPaused(true);
    startX.current = e.clientX;
    scrollLeft.current = dragRef.current.scrollLeft;
    dragRef.current.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !dragRef.current) return;
    const walk = startX.current - e.clientX;
    dragRef.current.scrollLeft = scrollLeft.current + walk;
  };

  const onPointerUp = () => {
    isDragging.current = false;
    setPaused(false);
  };

  return (
    <section
      id="avaliacoes"
      className="section-padding relative overflow-hidden border-y border-white/[0.05] bg-ink-soft"
      aria-label="Opiniões de clientes"
    >
      <Container>
        <Reveal className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-cool">
            Opiniões
          </p>
          <h2 className="font-display text-3xl tracking-tight text-white md:text-5xl">
            Quem já viajou conosco.
          </h2>
        </Reveal>
      </Container>

      <div
        className="marquee-mask relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          if (!isDragging.current) setPaused(false);
        }}
      >
        {reduced ? (
          <div
            ref={dragRef}
            className="flex gap-4 overflow-x-auto px-5 pb-2 scrollbar-none md:px-8"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {items.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div
            className={cn(
              "flex w-max gap-4 px-5 md:px-8",
              "animate-marquee",
              paused && "animate-marquee-paused"
            )}
          >
            {loop.map((item, index) => (
              <TestimonialCard
                key={`${item.id}-${index}`}
                item={item}
                ariaHidden={index >= items.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function TestimonialCard({
  item,
  ariaHidden = false,
}: {
  item: Testimonial;
  ariaHidden?: boolean;
}) {
  return (
    <article
      aria-hidden={ariaHidden}
      className="w-[300px] shrink-0 border border-white/[0.08] bg-[#0a0a0a] p-6 transition-colors duration-300 hover:border-white/18 sm:w-[340px]"
    >
      <div
        className="mb-4 flex gap-1"
        aria-label={`${item.rating} de 5 estrelas`}
      >
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-silver text-silver"
          />
        ))}
      </div>
      <blockquote className="font-display text-xl leading-relaxed text-offwhite">
        “{item.quote}”
      </blockquote>
      <footer className="mt-6 border-t border-white/[0.06] pt-4">
        <p className="text-sm text-white">{item.name}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-muted">
          {item.meta}
        </p>
      </footer>
    </article>
  );
}
