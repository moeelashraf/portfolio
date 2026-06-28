"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Reveal } from "./Reveal";
import { AnimatedButton } from "./AnimatedButton";
import { asset } from "@/lib/basePath";

// `parts` splits the handle so it can wrap at a clean point on desktop (a
// hidden-on-mobile <br/> between the two parts). On mobile it flows as one line.
const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/moeel",
    parts: ["linkedin.com", "/in/moeel"],
    href: "https://linkedin.com/in/moeel",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "github.com/moeelashraf",
    parts: ["github.com/", "moeelashraf"],
    href: "https://github.com/moeelashraf",
    Icon: Github,
  },
  {
    label: "Email",
    handle: "moeelashraf@gmail.com",
    parts: ["moeelashraf", "@gmail.com"],
    href: "mailto:moeelashraf@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    handle: "+92 333 461 1172",
    parts: ["+92 333 461 1172"],
    href: "tel:+923334611172",
    Icon: Phone,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-ink/10 bg-paper-200/40 pt-24 md:pt-36"
    >
      {/* Decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="container-narrow relative">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
            04 / Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="heading-display mt-6 text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] leading-[0.95]">
            Let's make
            <br />
            <span className="italic text-accent">something</span>
            <span className="ml-2 sm:ml-4 md:ml-6">good.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            I'm building Guardian IQ at Medical Guardian right now, and I'm
            always happy to talk about good frontend work. Send a note.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <AnimatedButton
              href="mailto:moeelashraf@gmail.com"
              variant="solid"
              icon={<ArrowUpRight size={16} />}
              iconMotion="upRight"
              iconSide="right"
            >
              moeelashraf@gmail.com
            </AnimatedButton>
            <AnimatedButton
              href="https://wa.me/923334611172"
              external
              variant="outline"
              icon={<SiWhatsapp size={16} className="text-[#3f8f5f]" />}
              iconMotion="pop"
              iconSide="left"
            >
              Message on WhatsApp
            </AnimatedButton>
            <AnimatedButton
              href={asset("/moeel-resume.pdf")}
              download
              variant="outline"
              icon={<Download size={16} />}
              iconMotion="down"
              iconSide="left"
            >
              Download CV (PDF)
            </AnimatedButton>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className="group relative flex items-start justify-between gap-3 bg-paper-100 p-6 transition-colors duration-300 hover:bg-paper-50 md:p-7"
            >
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
                  {s.label}
                </p>
                <p className="mt-2 break-words font-serif text-base leading-snug text-ink">
                  {s.parts.map((part, idx) => (
                    <span key={idx}>
                      {idx > 0 && <br className="hidden md:block" />}
                      {part}
                    </span>
                  ))}
                </p>
              </div>
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent group-hover:text-paper-50">
                <s.Icon size={16} />
              </span>
            </motion.a>
          ))}
        </div>

        <footer className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-ink/10 py-8 text-sm text-ink-faint md:flex-row md:items-center">
          <p>
            Designed and built by Moeel Ashraf,{" "}
            <span className="text-ink-muted">{new Date().getFullYear()}</span>.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </footer>
      </div>
    </section>
  );
}
