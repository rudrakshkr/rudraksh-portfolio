import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/hero/Hero";
import FeaturedProjects from "@/components/sections/featured-projects/FeaturedProjects";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        < Capabilities />
        <Skills />
        <Contact />
      </main>
    </>
  );
}