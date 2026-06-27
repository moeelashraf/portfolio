"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Reveal, Stagger, itemVariants } from "./Reveal";
import { TechBadge } from "./TechBadge";
import { SKILLS } from "@/lib/experience";

export function About() {
  return (
    <section id="about" className="container-narrow py-24 md:py-36">
      <SectionLabel index="03" label="About" heading="I build interfaces with care." />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <p className="text-xl leading-relaxed text-ink md:text-2xl">
              I'm a senior frontend engineer. I like building interfaces that
              are quiet, responsive, and easy to use.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-ink-muted">
              Right now I'm building Guardian IQ, a healthcare platform, for
              Medical Guardian. Before that I freelanced, shipping product
              sites and web apps for clients around the world. And before that
              I was at Educative, writing full-stack and React Native courses.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-ink-muted">
              I care about responsive design that holds up under pressure,
              animation that has a reason to be there, and design systems that
              help small teams ship like bigger ones.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal>
            <div className="rounded-2xl border border-ink/10 bg-paper-50/50 p-6 backdrop-blur md:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
                Stack
              </p>
              <Stagger className="mt-5 flex flex-wrap gap-2" stagger={0.03}>
                {SKILLS.map((skill) => (
                  <motion.div key={skill} variants={itemVariants}>
                    <TechBadge tech={skill} size="sm" />
                  </motion.div>
                ))}
              </Stagger>

              <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ink/10 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
                    Based in
                  </p>
                  <p className="mt-2 font-serif text-2xl text-ink">Lahore, PK</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
                    Experience
                  </p>
                  <p className="mt-2 font-serif text-2xl text-ink">3+ years</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
                    Education
                  </p>
                  <p className="mt-2 font-serif text-lg text-ink leading-tight">
                    BS Computer Science
                    <br />
                    <span className="text-sm text-ink-muted">
                      Forman Christian College
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-ink-faint">
                    Award
                  </p>
                  <p className="mt-2 font-serif text-lg text-ink leading-tight">
                    Best Senior Project
                    <br />
                    <span className="text-sm text-ink-muted">FCCU 2022</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
