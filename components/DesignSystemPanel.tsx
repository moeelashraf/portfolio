"use client";

import { motion } from "framer-motion";

import type { DesignSystem, FontFace } from "@/lib/projects";
import { LUCIDE_MAP } from "./IconLibrary";

const reveal = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.25 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const FONT_CLASS: Record<FontFace, string> = {
  fraunces: "font-serif",
  inter: "font-sans",
  playfair: "font-playfair",
  jetbrains: "font-jetbrains",
  poppins: "font-poppins",
  roboto: "font-roboto",
};

export function DesignSystemPanel({ system }: { system: DesignSystem }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper-50/60 p-5 backdrop-blur-sm md:p-6">
      <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
        Design system
      </p>

      {/* Palette: each swatch with its hex aligned directly beneath it */}
      <div className="mt-4 grid grid-cols-4 gap-2">
        {system.colors.slice(0, 4).map((c, i) => (
          <motion.div
            key={c.hex + i}
            variants={reveal}
            custom={i}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
            title={c.name}
          >
            <span
              className="h-14 w-full rounded-lg border border-ink/10"
              style={{ backgroundColor: c.hex }}
            />
            <span className="mt-1.5 w-full text-center font-mono text-[10px] uppercase tracking-tight text-ink-faint">
              {c.hex}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Typography: showcase rendered in the actual (or nearest) typeface.
          Display sits a step larger than Body to read the type hierarchy. */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {system.fonts.map((f, i) => (
          <motion.div
            key={f.role}
            variants={reveal}
            custom={i + 2}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center rounded-xl border border-ink/10 bg-paper-100/50 px-4 py-4"
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-ink-faint">
              {f.role}
            </p>
            <p
              className={`mt-1.5 leading-tight text-ink ${FONT_CLASS[f.face]} ${
                i === 0 ? "text-2xl" : "text-lg"
              }`}
            >
              {f.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Icon library used, with a few representative glyphs */}
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-baseline justify-between">
          <p className="text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            Icon library
          </p>
          <p className="font-mono text-[11px] text-ink-muted">
            {system.iconLibrary.name}
          </p>
        </div>
        <div className="mt-3 flex flex-1 items-center justify-between gap-2">
          {system.iconLibrary.icons.map((key, i) => {
            const Icon = LUCIDE_MAP[key];
            return (
              <motion.span
                key={key}
                variants={reveal}
                custom={i + 4}
                initial="hidden"
                animate="show"
                className="flex h-11 flex-1 items-center justify-center rounded-xl border border-ink/10 bg-paper-100/40 text-ink-muted transition-colors duration-300 hover:border-ink/20 hover:bg-paper-50 hover:text-ink"
              >
                <Icon size={20} strokeWidth={1.6} aria-hidden />
              </motion.span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
