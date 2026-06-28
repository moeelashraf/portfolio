"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import clsx from "clsx";

type IconMotion = "down" | "upRight" | "right" | "pop";

const ICON_VARIANTS: Record<IconMotion, Variants> = {
  // Download: icon dips down and returns.
  down: {
    rest: { y: 0 },
    hover: { y: [0, 4, 0], transition: { duration: 0.5, ease: "easeInOut" } },
  },
  // Email / outbound: nudges up and to the right.
  upRight: {
    rest: { x: 0, y: 0 },
    hover: { x: 2, y: -2, transition: { duration: 0.25, ease: "easeOut" } },
  },
  // Forward action: nudges right.
  right: {
    rest: { x: 0 },
    hover: { x: 3, transition: { duration: 0.25, ease: "easeOut" } },
  },
  // WhatsApp: a small pop + wiggle.
  pop: {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: [1, 1.18, 1],
      rotate: [0, -8, 8, 0],
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },
};

type AnimatedButtonProps = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
  iconMotion: IconMotion;
  /** Icon position relative to the label. */
  iconSide?: "left" | "right";
  variant?: "solid" | "outline";
  download?: boolean;
  external?: boolean;
  className?: string;
};

export function AnimatedButton({
  href,
  children,
  icon,
  iconMotion,
  iconSide = "left",
  variant = "outline",
  download,
  external,
  className,
}: AnimatedButtonProps) {
  const iconEl = (
    <motion.span variants={ICON_VARIANTS[iconMotion]} className="flex">
      {icon}
    </motion.span>
  );

  return (
    <motion.a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300",
        variant === "solid"
          ? "bg-ink text-paper-50 hover:bg-accent"
          : "border border-ink/15 bg-paper-50/70 text-ink backdrop-blur hover:border-ink/30 hover:bg-paper-50",
        className
      )}
    >
      {iconSide === "left" && iconEl}
      {children}
      {iconSide === "right" && iconEl}
    </motion.a>
  );
}
