import type { TechKey } from "@/components/TechBadge";

export type Experience = {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: TechKey[];
  thumbnail?: { src: string; alt: string };
};

export const EXPERIENCES: Experience[] = [
  {
    id: "medical-guardian",
    company: "Medical Guardian",
    role: "Senior Frontend Engineer",
    location: "Philadelphia, PA (Remote)",
    period: "Nov 2025 - Present",
    summary:
      "Building Guardian IQ, a healthcare engagement platform, with product, design, backend, and QA. Shipped 25+ releases without breaking the production trunk.",
    highlights: [
      "Built analytics dashboards for call metrics, device activation, and campaign performance.",
      "Built a six-step campaign builder that non-technical teams use on their own.",
      "Led a company-wide product rebrand across the web app and landing page in one release.",
      "Made the platform fully responsive on phones, foldables, and tablets.",
      "Set up a shared design system across 40+ screens with consistent type and components.",
    ],
    tech: ["react", "nextjs", "typescript", "tailwind", "figma", "storybook"],
    thumbnail: {
      src: "/projects/medguardian-dashboard.png",
      alt: "Guardian IQ dashboard",
    },
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Frontend Engineer & UI/UX Developer",
    location: "Worldwide (Remote)",
    period: "Jun 2024 - Aug 2025",
    summary:
      "Designed and built custom websites and web apps for clients, turning their goals into responsive, accessible, fast interfaces.",
    highlights: [
      "Created wireframes, user flows, and high-fidelity screens with stakeholders.",
      "Built reusable component architectures with React, Next.js, and TypeScript.",
      "Integrated REST APIs and third-party services for auth, analytics, and content.",
      "Improved speed, accessibility, and SEO with code splitting, lazy loading, and image optimization.",
    ],
    tech: ["react", "nextjs", "typescript", "tailwind", "figma", "wordpress"],
    thumbnail: {
      src: "/projects/amin-farm.png",
      alt: "Amin Farm site",
    },
  },
  {
    id: "educative",
    company: "Educative Inc.",
    role: "Technical Content Engineer",
    location: "Lahore, Pakistan",
    period: "May 2022 - Apr 2024",
    summary:
      "Wrote and supervised interactive technical courses for a top developer education platform, covering the FARM stack, React Native, Unity AR, and Docker.",
    highlights: [
      "Built a FARM-stack course covering full single-page apps with FastAPI, React, and MongoDB.",
      "Led React Native projects with hooks and Firebase for state and real-time sync.",
      "Supervised a Unity course on AR, building immersive environments for AR/VR tracking.",
      "Used Docker to run course environments smoothly across languages in the browser.",
      "Wrote 12 interactive technical blogs on Hugging Face, TensorFlow, and PyTorch.",
      "Ran 15 live demos to onboard and train new technical authors.",
    ],
    tech: ["react", "react-native", "fastapi", "mongodb", "docker", "python", "unity", "firebase"],
    thumbnail: {
      src: "/projects/educative.png",
      alt: "Educative course",
    },
  },
];

export const SKILLS: TechKey[] = [
  "react",
  "nextjs",
  "typescript",
  "javascript",
  "tailwind",
  "react-native",
  "nodejs",
  "python",
  "fastapi",
  "mongodb",
  "mysql",
  "docker",
  "figma",
  "git",
];
