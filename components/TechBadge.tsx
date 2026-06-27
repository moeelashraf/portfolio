"use client";

import clsx from "clsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiDocker,
  SiFigma,
  SiReactrouter,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiFastapi,
  SiUnity,
  SiTensorflow,
  SiWordpress,
  SiMysql,
  SiRedux,
  SiFirebase,
  SiSelenium,
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGit,
  SiStorybook,
} from "react-icons/si";
import { type IconType } from "react-icons";

const ICON_MAP: Record<string, { Icon: IconType; color: string; label?: string }> = {
  react: { Icon: SiReact, color: "#61DAFB", label: "React" },
  "react-native": { Icon: SiReact, color: "#61DAFB", label: "React Native" },
  nextjs: { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
  typescript: { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E", label: "Node.js" },
  mongodb: { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
  python: { Icon: SiPython, color: "#3776AB", label: "Python" },
  docker: { Icon: SiDocker, color: "#2496ED", label: "Docker" },
  figma: { Icon: SiFigma, color: "#F24E1E", label: "Figma" },
  framer: { Icon: SiFramer, color: "#0055FF", label: "Framer Motion" },
  html: { Icon: SiHtml5, color: "#E34F26", label: "HTML5" },
  css: { Icon: SiCss3, color: "#1572B6", label: "CSS3" },
  bootstrap: { Icon: SiBootstrap, color: "#7952B3", label: "Bootstrap" },
  fastapi: { Icon: SiFastapi, color: "#009688", label: "FastAPI" },
  unity: { Icon: SiUnity, color: "#000000", label: "Unity" },
  tensorflow: { Icon: SiTensorflow, color: "#FF6F00", label: "TensorFlow" },
  wordpress: { Icon: SiWordpress, color: "#21759B", label: "WordPress" },
  mysql: { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
  redux: { Icon: SiRedux, color: "#764ABC", label: "Redux" },
  firebase: { Icon: SiFirebase, color: "#DD2C00", label: "Firebase" },
  selenium: { Icon: SiSelenium, color: "#43B02A", label: "Selenium" },
  vscode: { Icon: SiVisualstudiocode, color: "#007ACC", label: "VS Code" },
  postman: { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
  vercel: { Icon: SiVercel, color: "#000000", label: "Vercel" },
  git: { Icon: SiGit, color: "#F05032", label: "Git" },
  storybook: { Icon: SiStorybook, color: "#FF4785", label: "Storybook" },
  "react-router": { Icon: SiReactrouter, color: "#CA4245", label: "React Router" },
};

type TechBadgeProps = {
  tech: keyof typeof ICON_MAP;
  size?: "sm" | "md";
  showLabel?: boolean;
  className?: string;
};

export function TechBadge({
  tech,
  size = "md",
  showLabel = true,
  className,
}: TechBadgeProps) {
  const entry = ICON_MAP[tech];
  if (!entry) return null;

  const { Icon, color, label } = entry;
  const iconSize = size === "sm" ? 17 : 19;

  // Icon-only badge: reveal the name in a tooltip on hover.
  if (!showLabel) {
    return (
      <span
        className={clsx(
          "group relative inline-flex items-center justify-center rounded-full border border-ink/10 bg-paper-50/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-soft",
          size === "sm" ? "h-9 w-9" : "h-10 w-10",
          className
        )}
        title={label}
      >
        <Icon
          className="transition-colors duration-300"
          style={{ color }}
          size={iconSize}
          aria-hidden
        />
        <span
          role="tooltip"
          className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-medium text-paper-50 opacity-0 shadow-soft transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
        >
          {label}
        </span>
      </span>
    );
  }

  return (
    <span
      className={clsx(
        "group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper-50/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-soft",
        size === "sm" ? "px-3 py-1.5 text-xs" : "px-3.5 py-2 text-sm",
        className
      )}
    >
      <Icon
        className="transition-colors duration-300"
        style={{ color }}
        size={iconSize}
        aria-hidden
      />
      <span className="font-sans font-medium text-ink-muted group-hover:text-ink">
        {label}
      </span>
    </span>
  );
}

export function TechIcon({
  tech,
  size = 20,
  className,
}: {
  tech: keyof typeof ICON_MAP;
  size?: number;
  className?: string;
}) {
  const entry = ICON_MAP[tech];
  if (!entry) return null;
  const { Icon, color } = entry;
  return <Icon style={{ color }} size={size} className={className} aria-hidden />;
}

export type TechKey = keyof typeof ICON_MAP;
