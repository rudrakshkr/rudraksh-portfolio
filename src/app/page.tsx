import Hero from "@/components/sections/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import FeaturedProjects from "@/components/sections/featured-projects/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <FeaturedProjects />
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}