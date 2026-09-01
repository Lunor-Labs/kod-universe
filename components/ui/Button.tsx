import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  showArrow?: boolean;
  ariaLabel?: string;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  disabled,
  showArrow = false,
  ariaLabel,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 font-metropolis font-medium tracking-wide",
    "transition-all duration-200 focus-visible:outline-solar-gold rounded-sm",
    "disabled:opacity-50 disabled:pointer-events-none",
    {
      "btn-primary": variant === "primary",
      "btn-secondary": variant === "secondary",
      "btn-ghost": variant === "ghost",
      "text-xs py-2 px-4": size === "sm",
      "text-sm py-3 px-6": size === "md",
      "text-base py-4 px-8": size === "lg",
    },
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, "group")} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, "group")}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
