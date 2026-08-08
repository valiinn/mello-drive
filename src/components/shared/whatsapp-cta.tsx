"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type WhatsAppCtaProps = Omit<ButtonProps, "onClick"> & {
  label?: string;
  message?: string;
  onAfterClick?: () => void;
};

export function WhatsAppCta({
  label = "Falar conosco",
  message = siteConfig.whatsapp.defaultMessage,
  onAfterClick,
  className,
  variant = "primary",
  size = "lg",
  ...props
}: WhatsAppCtaProps) {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => {
        openWhatsApp(message);
        onAfterClick?.();
      }}
      {...props}
    >
      {label}
    </Button>
  );
}
