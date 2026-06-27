"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { asset } from "@/lib/basePath";

const NAME_WORDS = ["Moeel", "Ashraf."];
const TAGLINE = [
  "Senior",
  "Frontend",
  "Engineer",
  "based",
  "in",
  "Lahore,",
  "building",
  "interfaces",
  "that",
  "feel",
  "considered.",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32"
    >
      {/* Background blob */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-32 top-12 h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl md:h-[640px] md:w-[640px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="pointer-events-none absolute -left-20 bottom-12 h-[280px] w-[280px] rounded-full bg-accent-soft/40 blur-3xl"
      />

      <div className="container-narrow relative grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-8 lg:gap-16">
        <div className="md:col-span-7 lg:col-span-7">
          <h1 className="heading-display text-[12vw] sm:text-7xl md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem]">
            {NAME_WORDS.map((word, i) => (
              <motion.span
                key={word}
                className="inline-block"
                initial={{ opacity: 0, y: reduce ? 0 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {i === 0 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </h1>

          <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-ink-muted md:text-xl">
            {TAGLINE.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
                {i < TAGLINE.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper-50 transition-all duration-300 hover:bg-accent"
            >
              See selected work
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={asset("/moeel-resume.pdf")}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper-50/60 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:border-ink/30 hover:bg-paper-50"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex items-center gap-2 text-sm text-ink-faint"
          >
            <MapPin size={14} />
            Lahore, Pakistan
            <span className="mx-2">·</span>
            <span>Open to remote roles worldwide</span>
          </motion.div>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : 40, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[420px]"
          >
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-accent/20" />
            <div className="absolute inset-0 rotate-1 rounded-3xl bg-paper-200" />
            <div className="relative h-full w-full overflow-hidden rounded-3xl border border-ink/10 bg-paper-200 shadow-card">
              <Image
                src={asset("/portrait.png")}
                alt="Moeel Ashraf"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-4 -left-4 rounded-full border border-ink/10 bg-paper-50 px-4 py-2 text-xs font-medium shadow-soft sm:-bottom-5 sm:-left-5"
            >
              <span className="text-ink-muted">Currently @ </span>
              <span className="text-ink">Medical Guardian</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-faint md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
