import type { TechKey } from "@/components/TechBadge";

export type ProjectImage = {
  src: string;
  alt: string;
  /** Frame style used to display this image */
  frame: "browser" | "phone" | "raw";
  /** Optional URL shown in the browser chrome */
  url?: string;
  /** Aspect ratio container for "splicing" long screenshots. Falls back to natural ratio when omitted. */
  cropRatio?: "16/10" | "16/9" | "4/3" | "3/4" | "1/1" | "9/16";
  /** Where to anchor the visible portion of long screenshots */
  objectPosition?: "top" | "center" | "bottom";
  /** Width slot in the layout: full-width, two columns, or "phone" sized */
  span?: "full" | "half" | "phone";
};

export type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "external";
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  description: string;
  longDescription: string[];
  tech: TechKey[];
  images: ProjectImage[];
  links?: ProjectLink[];
  /** Optional accent color override */
  accent?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "guardian-iq",
    title: "Guardian IQ",
    subtitle: "Healthcare campaign command center for Medical Guardian",
    role: "Senior Frontend Engineer",
    period: "2025 - Present",
    description:
      "Analytics dashboards, a guided campaign builder, and a responsive design system across 40+ screens.",
    longDescription: [
      "Built analytics dashboards for call metrics, device activation, and campaign performance. KPI cards, sortable tables, and tooltips give teams one clear view of how outreach is going.",
      "Designed a six-step campaign builder that walks non-technical users through audience, channels, scheduling, and AI agent setup, so they can launch outreach on their own.",
      "Made the whole platform work on phones, foldables, and tablets, and set up a shared design system across 40+ screens to keep everything consistent and ship faster.",
    ],
    tech: ["react", "nextjs", "typescript", "tailwind", "figma", "storybook"],
    images: [
      {
        src: "/projects/medguardian-landing.png",
        alt: "Guardian IQ landing page hero with SSO login",
        frame: "browser",
        url: "guardian-iq.medicalguardian.com",
        cropRatio: "16/9",
        objectPosition: "top",
        span: "full",
      },
      {
        src: "/projects/medguardian-dashboard.png",
        alt: "Guardian IQ dashboard with KPI cards and recent activity",
        frame: "browser",
        url: "guardian-iq.medicalguardian.com/dashboard",
        cropRatio: "4/3",
        objectPosition: "top",
        span: "half",
      },
      {
        src: "/projects/medguardian-mobile.png",
        alt: "Guardian IQ dashboard on mobile",
        frame: "phone",
        span: "phone",
      },
      {
        src: "/projects/medguardian-analytics.png",
        alt: "Campaign analytics with KPI metrics and performance charts",
        frame: "browser",
        url: "guardian-iq.medicalguardian.com/analytics",
        cropRatio: "16/10",
        objectPosition: "top",
        span: "full",
      },
    ],
  },
  {
    id: "amin-farm",
    title: "Amin Farm",
    subtitle: "A sustainable cattle farming platform",
    role: "Freelance Frontend Engineer",
    period: "2024",
    description:
      "Marketing site for a sustainable cattle farming brand, built with clean typography and a calm earth-tone palette.",
    longDescription: [
      "Designed the wireframes and high-fidelity screens, then built them into a responsive marketing site. Worked directly with the founder to shape the messaging across each section.",
      "Built the site as modular, reusable sections so the team can swap content without touching code. The layouts hold up cleanly across desktop, tablet, and phone.",
      "Tuned it for speed and accessibility with lazy-loaded images, semantic markup, and the right image formats.",
    ],
    tech: ["react", "nextjs", "tailwind", "figma"],
    images: [
      {
        src: "/projects/amin-farm.png",
        alt: "Amin Farm landing page",
        frame: "browser",
        url: "aminfarm.com",
        cropRatio: "16/10",
        objectPosition: "top",
        span: "full",
      },
      {
        src: "/projects/amin-farm.png",
        alt: "Amin Farm process and partners sections",
        frame: "browser",
        url: "aminfarm.com",
        cropRatio: "1/1",
        objectPosition: "center",
        span: "half",
      },
    ],
  },
  {
    id: "educative",
    title: "Quick Start Full Stack",
    subtitle: "FARM-stack interactive course on Educative.io",
    role: "Technical Content Engineer",
    period: "2022 - 2024",
    description:
      "A full-stack course on Educative covering React, FastAPI, and MongoDB. 165 lessons, 47 hours, rated 4.6 stars.",
    longDescription: [
      "Built a full course on the FARM stack (FastAPI, React, MongoDB), walking learners through a complete single-page app with hands-on projects they run right in the browser.",
      "Wrote 12 technical blogs on Hugging Face, TensorFlow, and PyTorch, and ran 15 live demos to onboard new authors.",
      "Used Docker to containerize the course environments so code runs smoothly in the browser, and helped oversee other courses on React Native, Firebase, and Unity AR.",
    ],
    tech: ["react", "fastapi", "mongodb", "docker", "python", "nodejs"],
    images: [
      {
        src: "/projects/educative.png",
        alt: "Educative Quick Start Full Stack Web Development course page",
        frame: "browser",
        url: "educative.io/courses/quick-start-full-stack",
        cropRatio: "16/9",
        objectPosition: "top",
        span: "full",
      },
    ],
  },
  {
    id: "hello-plant",
    title: "Hello Plant!",
    subtitle: "Award-winning flower recognition app (final year project)",
    role: "Lead Frontend & Integration",
    period: "2021 - 2022",
    description:
      "A React Native app that recognizes flowers with 94% accuracy in under five seconds and shows care info for your location.",
    longDescription: [
      "Built a mobile app that recognizes a flower from a photo with 94% accuracy in under five seconds, returning its species, hardiness zones, sun exposure, and care details.",
      "Used the user's location to recommend flowers that grow well in their city, and let people save their favorites on the device.",
      "Led a team of three. I designed the React Native front end, connected it to a Node.js and MongoDB backend, and scraped training data with Selenium after the original API shut down. It won the FCCU 2022 Best Senior Project Poster Award.",
    ],
    tech: ["react-native", "nodejs", "mongodb", "python", "selenium", "tensorflow"],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/MoeelAsh/helloPlant",
        type: "github",
      },
    ],
    images: [
      {
        src: "/projects/hello-plant-poster.png",
        alt: "Hello Plant final year project poster",
        frame: "raw",
        cropRatio: "3/4",
        objectPosition: "top",
        span: "full",
      },
    ],
  },
];
