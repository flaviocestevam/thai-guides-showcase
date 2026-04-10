import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 font-body font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground rounded-full text-lg md:text-xl px-8 py-5 glow-orange hover:scale-105 hover:brightness-110 pulse-glow",
        secondary:
          "bg-secondary text-secondary-foreground rounded-full text-base px-6 py-4 border-glow hover:bg-primary hover:text-primary-foreground",
      },
      size: {
        default: "",
        lg: "text-xl md:text-2xl px-10 py-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "lg";
  href?: string;
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(ctaVariants({ variant, size, className }))}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        className={cn(ctaVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
CTAButton.displayName = "CTAButton";

export { CTAButton };