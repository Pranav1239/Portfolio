"use client";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Header/Navbar";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectsTest from "@/components/Projects/ProjectsTest";
import Stars from "@/components/Common/Stars";
export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
    text: {
      height: 200,
      width: 200,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "blue",
      mixBlendMode: "difference",
      color: "red",
    },
  };

  const textEnter = () => {
    setCursorVariant("text");
  };

  const textLeave = () => {
    setCursorVariant("default");
  };
  return (
    <main>
      <div className="">
        <Navbar />
      </div>
      <motion.div
        animate={cursorVariant}
        variants={variants}
        className="cursor"
      />
      <div className="mt-20 mb-20 ">
        <Hero textEnter={textEnter} textLeave={textLeave} />
      </div>
      <div className="mt-20 mb-20">
        <div className="hidden xl:block">
          <Projects />
        </div>
      </div>
      {/* <div className="mt-20 mb-20"><Skills /></div> */}
      <div className="mt-20 mb-20">
        <Contact />
      </div>
    </main>
  );
}
