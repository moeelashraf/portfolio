import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </>
  );
}
