type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  markAs?: "div" | "h2" | "h3" | "h4";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  markAs = "div",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const TitleTag = markAs;
  const titleClassName = `text-3xl font-bold tracking-tight sm:text-4xl ${
    light ? "text-white" : "text-primary"
  }`;

  return (
    <div className={`max-w-6xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold tracking-widest ${
            light ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <TitleTag className={titleClassName}>{title}</TitleTag>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
