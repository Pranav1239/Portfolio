import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <Navbar />
      </div>
      <div className="mt-20 mb-28">
        <Hero />
      </div>
      <div className="mt-20 mb-20">
        <Projects />
      </div>
      <div className="mt-20 mb-20">
        <Skills />
      </div>
      <div className="mt-20 mb-20">
        <Contact />
      </div>
    </main>
  );
}
