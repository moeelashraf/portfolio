"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { useState } from "react";
import { EXPERIENCES, type Experience as ExperienceType } from "@/lib/experience";
import { asset } from "@/lib/basePath";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";
import { TechBadge } from "./TechBadge";
import { Lightbox } from "./Lightbox";

type LightboxState = { src: string; alt: string } | null;

export function Experience() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <SectionLabel
          index="02"
          label="Experience"
          heading="Where I've worked, what I worked on."
        />

        <div className="relative">
          {/* Timeline rail (md+) */}
          <div
            aria-hidden
            className="absolute left-3 top-3 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-ink/20 via-ink/10 to-transparent md:block"
          />

          <div className="flex flex-col gap-14 md:gap-20">
            {EXPERIENCES.map((exp) => (
              <Reveal key={exp.id} delay={0.05}>
                <ExperienceCard exp={exp} onThumbnailClick={setLightbox} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}

function ExperienceCard({
  exp,
  onThumbnailClick,
}: {
  exp: ExperienceType;
  onThumbnailClick: (s: LightboxState) => void;
}) {
  // Pills expand to full form while the card is hovered, collapse when it leaves.
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
      {/* Dot */}
      <motion.div
        aria-hidden
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: 0.15,
          duration: 0.5,
          type: "spring",
          stiffness: 200,
        }}
        viewport={{ once: false, amount: 0.6 }}
        className="absolute left-0 top-2 hidden h-6 w-6 items-center justify-center rounded-full border border-ink/15 bg-paper-50 md:flex"
      >
        <span className="h-2 w-2 rounded-full bg-accent" />
      </motion.div>

      <div className="md:col-span-3 md:pl-12">
        <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
          {exp.period}
        </p>
        <p className="mt-2 text-sm text-ink-muted">{exp.location}</p>
      </div>

      <div className="md:col-span-9">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group rounded-2xl border border-ink/10 bg-paper-50/40 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-soft md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="flex-1">
              <h3 className="heading-section text-3xl sm:text-4xl">{exp.role}</h3>
              <p className="mt-2 text-base text-ink-muted">{exp.company}</p>
              <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
                {exp.summary}
              </p>

              <ul className="mt-6 flex flex-col gap-3">
                {exp.highlights.map((h, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.4 }}
                    transition={{
                      delay: 0.1 + j * 0.05,
                      duration: 0.5,
                    }}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted md:text-base"
                  >
                    <span className="mt-2.5 h-px w-4 shrink-0 bg-accent/60" />
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                    size="sm"
                    showLabel={false}
                    expanded={hovered}
                  />
                ))}
              </div>
            </div>

            {exp.thumbnail && (
              <button
                type="button"
                onClick={() =>
                  onThumbnailClick({
                    src: exp.thumbnail!.src,
                    alt: exp.thumbnail!.alt,
                  })
                }
                aria-label={`View ${exp.thumbnail.alt}`}
                className="group/thumb relative hidden w-40 shrink-0 overflow-hidden rounded-lg border border-ink/10 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card lg:block"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={asset(exp.thumbnail.src)}
                    alt={exp.thumbnail.alt}
                    fill
                    sizes="160px"
                    className="object-cover object-top"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover/thumb:bg-ink/35 group-hover/thumb:opacity-100">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-50/90 text-ink shadow-soft">
                      <Maximize2 size={16} />
                    </span>
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
