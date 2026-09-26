import { Reveal } from "@/components/blog/Reveal";

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalTemplateProps {
  title: string;
  updated: string;
  sections: LegalSection[];
}

/**
 * Quiet legal layout: narrow column, plain headings, plain paragraphs.
 * No marketing flourishes.
 */
export function LegalTemplate({ title, updated, sections }: LegalTemplateProps) {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-3xl px-6 pb-24 pt-28 md:pt-36">
        <Reveal>
          <h1 className="h2 text-3xl text-foreground md:text-4xl">{title}</h1>
          <p className="mt-4 text-sm text-muted">{updated}</p>
        </Reveal>

        <div className="mt-12">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={Math.min(i * 0.03, 0.15)}>
              <div className="rule py-8 first:pt-0">
                <h2 className="h2 text-xl text-foreground">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j} className="leading-loose text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
