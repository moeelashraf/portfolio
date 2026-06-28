import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Playfair_Display,
  JetBrains_Mono,
  Poppins,
  Roboto,
} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

// Showcase fonts used by the project Design System panels.
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "moeel - Portfolio",
  description:
    "Portfolio of Moeel Ashraf, a senior frontend engineer based in Lahore, building thoughtful, responsive interfaces for healthcare, education, and beyond.",
  keywords: [
    "Moeel Ashraf",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Lahore",
  ],
  authors: [{ name: "Moeel Ashraf" }],
  openGraph: {
    title: "Moeel Ashraf, Senior Frontend Engineer",
    description:
      "Senior frontend engineer crafting interfaces that feel considered, not generated.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${playfair.variable} ${jetbrains.variable} ${poppins.variable} ${roboto.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
