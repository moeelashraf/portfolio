"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { asset } from "@/lib/basePath";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 0.08]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: useTransform(
            bgOpacity,
            (v) => `rgba(247, 242, 234, ${v})`
          ),
          borderBottom: useTransform(
            borderOpacity,
            (v) => `1px solid rgba(26, 24, 20, ${v})`
          ),
          backdropFilter: useTransform(
            bgOpacity,
            (v) => (v > 0.2 ? "blur(12px)" : "none")
          ),
        }}
      >
        <div className="container-narrow flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            className="font-serif text-lg tracking-tight text-ink md:text-xl"
          >
            moeel<span className="text-accent">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-underline text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={asset("/moeel-resume.pdf")}
              download
              className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper-50 transition-all duration-300 hover:bg-accent"
            >
              Download CV
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper-50/60 text-ink backdrop-blur md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-paper-50 p-6 shadow-lift"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg text-ink">
                  moeel<span className="text-accent">.</span>
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    className="font-serif text-3xl tracking-tight text-ink py-2"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href={asset("/moeel-resume.pdf")}
                download
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper-50"
              >
                Download CV
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
