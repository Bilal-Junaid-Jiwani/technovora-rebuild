import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  accentWord?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

function renderTitle(title: string, accentWord?: string) {
  if (!accentWord || !title.includes(accentWord)) {
    return <>{title}</>;
  }
  const [before, after] = title.split(accentWord);
  return (
    <>
      {before}
      <span className="gradient-text">{accentWord}</span>
      {after}
    </>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  accentWord,
  description,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight">
        {renderTitle(title, accentWord)}
      </h2>
      {description && (
        <p className="mt-4 text-text-muted text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
