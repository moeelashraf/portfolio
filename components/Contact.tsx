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
import { asset } from "@/lib/basePath";

const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/moeel",
    href: "https://linkedin.com/in/moeel",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    handle: "github.com/moeelashraf",
    href: "https://github.com/moeelashraf",
    Icon: Github,
  },
  {
    label: "Email",
    handle: "moeelashraf@gmail.com",
    href: "mailto:moeelashraf@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    handle: "+92 333 461 1172",
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
            <a
              href="mailto:moeelashraf@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper-50 transition-all duration-300 hover:bg-accent"
            >
              moeelashraf@gmail.com
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="https://wa.me/923334611172"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper-50/70 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:border-ink/30 hover:bg-paper-50"
            >
              <SiWhatsapp size={16} className="text-[#3f8f5f]" />
              Message on WhatsApp
            </a>
            <a
              href={asset("/moeel-resume.pdf")}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper-50/70 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:border-ink/30 hover:bg-paper-50"
            >
              <Download size={14} />
              Download CV (PDF)
            </a>
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
              className="group relative flex items-center justify-between gap-3 bg-paper-100 p-6 transition-colors duration-300 hover:bg-paper-50 md:p-7"
            >
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
                  {s.label}
                </p>
                <p className="mt-2 truncate font-serif text-base text-ink">
                  {s.handle}
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-paper-50">
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
