import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-ink shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:bg-offwhite hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]",
        secondary:
          "border border-white/20 bg-transparent text-offwhite hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/[0.04] hover:text-white",
        ghost:
          "bg-transparent text-silver hover:text-white",
        dark:
          "bg-surface text-offwhite hover:-translate-y-0.5 hover:bg-surface-soft",
        soft:
          "bg-offwhite text-ink hover:-translate-y-0.5 hover:bg-silver",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
