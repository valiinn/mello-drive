import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.05] bg-ink py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl tracking-[0.08em] text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-muted">{siteConfig.tagline}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted md:items-end">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors hover:text-white"
            >
              WhatsApp: {siteConfig.contact.phoneDisplay}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline transition-colors hover:text-white"
            >
              {siteConfig.social.instagramHandle}
            </a>
            <p>{siteConfig.region.area}</p>
          </div>
        </div>

        <p className="mt-8 border-t border-white/[0.06] pt-6 text-xs text-muted">
          © {year} {siteConfig.legalName}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
