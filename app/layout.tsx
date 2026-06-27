import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Moeel Ashraf, Senior Frontend Engineer",
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
