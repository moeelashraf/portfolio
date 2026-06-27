"use client";

import { useState } from "react";
import { PROJECTS, type ProjectImage } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Lightbox } from "./Lightbox";
import { SectionLabel } from "./SectionLabel";

export function Projects() {
  const [lightbox, setLightbox] = useState<ProjectImage | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <SectionLabel
          index="01"
          label="Selected work"
          heading="Things I've shipped, lately."
          description="A few projects I've led the frontend for, across healthcare, agriculture, developer education, and a final-year mobile app."
        />
      </div>

      <div className="border-b border-ink/10">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onImageClick={setLightbox}
          />
        ))}
      </div>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt ?? ""}
        onClose={() => setLightbox(null)}
      />
    </section>
  );
}
