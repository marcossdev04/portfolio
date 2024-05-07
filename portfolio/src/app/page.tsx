
import { About } from "@/components/About";
import { Experience } from "@/components/Experiences";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Projects } from "@/components/Projects";

export default function Home() {

  return (
    <main className="bg-black overflow-hidden text-white font-[roboto] ">
      <Menu />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
