import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";

export default function Home() {

  return (
    <main className="bg-black overflow-hidden">
      <Menu />
      <Hero />
    </main>
  );
}
