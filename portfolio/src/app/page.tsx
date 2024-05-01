
import { About } from "@/components/About";
import { Experience } from "@/components/Experiences";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Projects } from "@/components/Projects";

export default function Home() {

  return (
    <main className="bg-black overflow-hidden">
      <Menu />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
