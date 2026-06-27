"use client";

import { Reveal } from "./Reveal";

type SectionLabelProps = {
  index: string;
  label: string;
  heading: string;
  description?: string;
};

export function SectionLabel({
  index,
  label,
  heading,
  description,
}: SectionLabelProps) {
  return (
    <div className="mb-12 md:mb-20">
      <Reveal>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ink-faint">
          <span className="text-accent">{index}</span>
          <span className="h-px w-10 bg-ink/15" />
          <span>{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="heading-section mt-5 max-w-3xl text-balance text-5xl sm:text-6xl md:text-7xl">
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
