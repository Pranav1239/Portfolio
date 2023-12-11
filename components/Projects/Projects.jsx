"use client";
import ProjectsCard from "./ProjectsCard";
import ProjectsCardM from "./ProjectsCardM";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useTransform, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AllProjects, projects, projects1, projects2 } from "@/utils/projects";

const Projects = () => {
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
    <section ref={targetRef} className="relative h-[250vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center  overflow-hidden">
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
                    duration: 0.7,
                    delay: index * 0.5, // Adjust delay for staggered animation
                  },
                });
              }
            }, [controls, inView, index]);

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 100 }}
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

export default Projects;

// "use client";
// import ProjectsCard from "./ProjectsCard";
// import ProjectsCardM from "./ProjectsCardM";
// import { useEffect, useRef } from "react";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { projects, projects1, projects2 } from "@/utils/projects";

// const Projects = () => {
//   const controls1 = useAnimation();
//   const { ref: ref1, inView: inView1 } = useInView({
//     triggerOnce: true,
//   });

//   const controls2 = useAnimation();
//   const { ref: ref2, inView: inView2 } = useInView({
//     triggerOnce: true,
//   });

//   const controls3 = useAnimation();
//   const { ref: ref3, inView: inView3 } = useInView({
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     if (inView1) {
//       controls1.start("visible");
//     }
//     if (inView2) {
//       controls2.start("visible");
//     }
//     if (inView3) {
//       controls3.start("visible");
//     }
//   }, [controls1, controls2, controls3, inView1, inView2, inView3])

//   return (
//     <div className="flex overflow-hidden justify-center gap-24 items-center flex-row">
//       <motion.div
//         initial="hidden"
//         animate={controls1}
//         variants={{
//           visible: { opacity: 1, y: 0 },
//           hidden: { opacity: 0, y: 300 },
//         }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="flex flex-col gap-40"
//         ref={ref1}
//       >
//         {projects.map((item) => {
//           return <ProjectsCard item={item} />;
//         })}
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         animate={controls2}
//         variants={{
//           visible: { opacity: 1, y: 0 },
//           hidden: { opacity: 0, y: 200 },
//         }}
//         transition={{ duration: 0.5 ,
//           delay: 0.2,}}
//         className="flex flex-col gap-40"
//         ref={ref2}
//       >
//         {projects1.map((item) => {
//           return <ProjectsCard item={item} />;
//         })}
//       </motion.div>
//       <motion.div
//         initial="hidden"
//         animate={controls3}
//         variants={{
//           visible: { opacity: 1, y: 0 },
//           hidden: { opacity: 0, y: 200 },
//         }}
//         transition={{ duration: 0.5 ,
//           delay: 0.2,}}
//         className="flex flex-col gap-40"
//         ref={ref3}
//       >
//         {projects2.map((item) => {
//           return <ProjectsCard item={item} />;
//         })}
//       </motion.div>
//     </div>
//   );
// };

// export default Projects;

{
  /* <div className="flex justify-center items-center flex-col" ref={ref}>
<div className="hidden xl:block">
  <motion.div
    initial="hidden"
    animate={controls}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 },
    }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-40"
  >
    {projects.map((item) => {
      return <ProjectsCard item={item} />;
    })}
  </motion.div>
</div>
<div className="xl:hidden">
  <ProjectsCardM />
</div>
</div> */
}
