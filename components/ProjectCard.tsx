"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, Plus } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import clsx from "clsx";

import type { Project, ProjectImage } from "@/lib/projects";
import { asset } from "@/lib/basePath";
import { BrowserFrame } from "./BrowserFrame";
import { DesignSystemPanel } from "./DesignSystemPanel";
import { PhoneFrame } from "./PhoneFrame";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onImageClick: (img: ProjectImage) => void;
};

export function ProjectCard({
  project,
  index,
  isOpen,
  onToggle,
  onImageClick,
}: ProjectCardProps) {
  const open = isOpen;
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLElement>(null);
  // Viewport-relative top of this card captured at click time. Used to keep the
  // card visually anchored while a sibling above it collapses (animated), which
  // would otherwise shift this card and displace the viewport.
  const anchorTop = useRef<number | null>(null);

  const handleToggle = () => {
    if (cardRef.current) {
      anchorTop.current = cardRef.current.getBoundingClientRect().top;
    }
    onToggle();
  };

  // A sibling card's collapse is animated (height tween), so its effect on our
  // position plays out over several frames. Re-anchor on each frame for the
  // duration of the animation so this card stays put under the cursor.
  useLayoutEffect(() => {
    if (anchorTop.current === null || !cardRef.current) return;
    const target = anchorTop.current;
    anchorTop.current = null;

    let raf = 0;
    const start = performance.now();
    const correct = (now: number) => {
      if (!cardRef.current) return;
      const delta = cardRef.current.getBoundingClientRect().top - target;
      if (Math.abs(delta) > 0.5) {
        window.scrollBy({ top: delta, behavior: "auto" });
      }
      // Keep correcting until the sibling collapse/expand tweens settle.
      if (now - start < 650) raf = requestAnimationFrame(correct);
    };
    raf = requestAnimationFrame(correct);
    return () => cancelAnimationFrame(raf);
  }, [open]);

  return (
    <article
      ref={cardRef}
      className={clsx(
        "group relative border-t border-ink/10 py-10 transition-colors duration-500 md:py-14",
        open && "bg-paper-200/40"
      )}
    >
        <button
          type="button"
          onClick={handleToggle}
          className="container-narrow flex w-full flex-col items-start gap-6 text-left md:flex-row md:items-center md:justify-between md:gap-12"
          aria-expanded={open}
        >
          <div className="flex flex-1 items-start gap-6 md:gap-10">
            <span className="mt-2 font-serif text-base text-ink-faint md:text-lg">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
                <h3 className="heading-section text-3xl text-ink transition-colors duration-300 group-hover:text-accent sm:text-4xl md:text-5xl lg:text-6xl">
                  {project.title}
                </h3>
                <span className="text-sm text-ink-faint">{project.period}</span>
              </div>
              <p className="mt-3 max-w-2xl text-base text-ink-muted md:text-lg">
                {project.subtitle}
              </p>
              <TechPills tech={project.tech} />
            </div>
          </div>

          {/* Mobile: full-width pill action that clearly reads as tappable */}
          <span
            className={clsx(
              "flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors duration-300 md:hidden",
              open
                ? "border-accent bg-accent text-paper-50"
                : "border-ink/15 bg-paper-50 text-ink"
            )}
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              <Plus size={16} />
            </motion.span>
            {open ? "Close project" : "View project"}
          </span>

          {/* Desktop: label + circular icon on the right */}
          <span className="hidden shrink-0 items-center gap-3 md:flex">
            <span
              className={clsx(
                "text-xs uppercase tracking-[0.2em] transition-colors duration-300",
                open ? "text-accent" : "text-ink-faint group-hover:text-ink"
              )}
            >
              {open ? "Close" : "Expand"}
            </span>
            <motion.span
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={clsx(
                "flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300",
                open
                  ? "border-accent bg-accent text-paper-50"
                  : "border-ink/15 bg-paper-50 text-ink group-hover:border-accent group-hover:bg-accent group-hover:text-paper-50"
              )}
            >
              <Plus size={20} />
            </motion.span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.4, delay: 0.15 },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.2 },
                },
              }}
              className="overflow-hidden"
            >
              <div className="container-narrow pt-12">
                <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-12 md:gap-12">
                  <div className="flex flex-col md:col-span-7 lg:col-span-7">
                    {project.longDescription.map((para, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                        className="mb-5 text-base leading-relaxed text-ink-muted md:text-lg"
                      >
                        {para}
                      </motion.p>
                    ))}

                    {project.links && project.links.length > 0 && (
                      <div className="mt-auto flex flex-wrap gap-3 pt-2">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-paper-50 transition-all duration-300 hover:bg-accent"
                          >
                            {link.type === "github" ? (
                              <Github size={15} />
                            ) : (
                              <ArrowUpRight size={15} />
                            )}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-5 lg:col-span-5">
                    <DesignSystemPanel system={project.designSystem} />
                  </div>
                </div>

                <ProjectGallery
                  images={project.images}
                  onImageClick={onImageClick}
                  reduce={!!reduce}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </article>
  );
}

function TechPills({ tech }: { tech: Project["tech"] }) {
  const visible = tech.slice(0, 5);
  const hidden = tech.slice(5);

  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      {visible.map((t) => (
        <TechBadge key={t} tech={t} size="sm" />
      ))}

      {hidden.length > 0 && (
        <>
          {/* Hidden pills reveal on card hover */}
          <div className="grid grid-cols-[0fr] transition-[grid-template-columns] duration-500 ease-out group-hover:grid-cols-[1fr]">
            <div className="overflow-hidden">
              <div className="flex flex-nowrap items-center gap-2 pl-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {hidden.map((t) => (
                  <TechBadge key={t} tech={t} size="sm" />
                ))}
              </div>
            </div>
          </div>
          {/* "+N more" hint, hides on hover once the pills appear */}
          <span className="text-xs text-ink-faint transition-opacity duration-200 group-hover:pointer-events-none group-hover:opacity-0">
            +{hidden.length} more
          </span>
        </>
      )}
    </div>
  );
}

function ProjectGallery({
  images,
  onImageClick,
  reduce,
}: {
  images: ProjectImage[];
  onImageClick: (img: ProjectImage) => void;
  reduce: boolean;
}) {
  // Group images by row based on span: fulls take their own row,
  // halves+phones share rows of two.
  const rows: ProjectImage[][] = [];
  let buffer: ProjectImage[] = [];

  for (const img of images) {
    if (img.span === "full") {
      if (buffer.length) {
        rows.push(buffer);
        buffer = [];
      }
      rows.push([img]);
    } else {
      buffer.push(img);
      if (buffer.length === 2) {
        rows.push(buffer);
        buffer = [];
      }
    }
  }
  if (buffer.length) rows.push(buffer);

  return (
    <div className="mt-12 flex flex-col gap-8 md:mt-16 md:gap-12">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={clsx(
            "grid gap-6 md:gap-10",
            row.length === 1
              ? "grid-cols-1"
              : "grid-cols-1 items-center md:grid-cols-2"
          )}
        >
          {row.map((img, i) => (
            <motion.div
              key={`${img.src}-${i}`}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                delay: i * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={clsx(img.span === "phone" && "flex justify-center")}
            >
              <ImageInFrame img={img} onClick={() => onImageClick(img)} />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ImageInFrame({
  img,
  onClick,
}: {
  img: ProjectImage;
  onClick: () => void;
}) {
  const ratioClass = {
    "16/10": "aspect-[16/10]",
    "16/9": "aspect-[16/9]",
    "4/3": "aspect-[4/3]",
    "3/4": "aspect-[3/4]",
    "1/1": "aspect-square",
    "9/16": "aspect-[9/16]",
  }[img.cropRatio || "16/10"];

  const positionClass = {
    top: "object-top",
    center: "object-center",
    bottom: "object-bottom",
  }[img.objectPosition || "center"];

  // Match the rendered slot width so Next.js generates a sharp source
  // instead of upscaling a smaller optimized image.
  const sizes =
    img.span === "half"
      ? "(max-width: 768px) 100vw, 600px"
      : "(max-width: 1200px) 100vw, 1200px";

  const imageEl = (
    <div className={clsx("relative w-full overflow-hidden", ratioClass)}>
      <Image
        src={asset(img.src)}
        alt={img.alt}
        fill
        quality={95}
        sizes={sizes}
        className={clsx("object-cover", positionClass)}
      />
    </div>
  );

  if (img.frame === "phone") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group relative block transition-transform duration-500 hover:-translate-y-1"
        aria-label={`Expand ${img.alt}`}
      >
        <PhoneFrame>
          <div className="aspect-[9/16] w-full">
            <Image
              src={asset(img.src)}
              alt={img.alt}
              width={520}
              height={924}
              quality={95}
              sizes="280px"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </PhoneFrame>
      </button>
    );
  }

  if (img.frame === "browser") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="group relative block w-full transition-transform duration-500 hover:-translate-y-1"
        aria-label={`Expand ${img.alt}`}
      >
        <BrowserFrame url={img.url}>{imageEl}</BrowserFrame>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative block w-full overflow-hidden rounded-xl border border-ink/10 shadow-card transition-transform duration-500 hover:-translate-y-1"
      aria-label={`Expand ${img.alt}`}
    >
      {imageEl}
    </button>
  );
}
