"use client";
import ProjectsCard from "./ProjectsCard";
import ProjectsCardM from "./ProjectsCardM";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AllProjects, projects, projects1, projects2 } from "@/utils/projects";

const ProjectsTest = () => {
  return (
    <div className="bg-bgbrand">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20">
          {AllProjects.map((item, index) => {
            // Use the useInView hook to track visibility of each card
            const controls = useAnimation();
            const { ref, inView } = useInView();

            useEffect(() => {
              if (inView) {
                // If card is in view, start the animation
                controls.start({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2, // Adjust delay for staggered animation
                  },
                });
              }
            }, [controls, inView, index]);

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
              >
                <ProjectsCard item={item} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsTest;
