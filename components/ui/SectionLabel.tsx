import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "div";
}

export function SectionLabel({ children, className, as: Tag = "p" }: SectionLabelProps) {
  return (
    <Tag
      className={cn(
        "eyebrow mb-3",
        className
      )}
    >
      {children}
    </Tag>
  );
}
