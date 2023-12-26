import React, { useEffect } from "react";
import Container from "../Container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FrontEnd = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "Tailwind",
  },
  {
    id: 4,
    name: "Javascript",
  },
  {
    id: 5,
    name: "Typescript",
  },
  {
    id: 6,
    name: "React.js",
  },
  {
    id: 7,
    name: "Next.js",
  },
];

const BackEnd = [
  {
    id: 1,
    name: "Node.js",
  },
  {
    id: 2,
    name: "Express.js",
  },
  {
    id: 3,
    name: "FastApi",
  },
  {
    id: 4,
    name: "Next Auth",
  },
];

const DataBase = [
  {
    id: 1,
    name: "MongoDB",
  },
];

const Tools = [
  {
    id: 1,
    name: "Git",
  },
  {
    id: 2,
    name: "Github",
  },
  {
    id: 3,
    name: "Postman",
  },
];  

export default function SkillAll({ textEnter, textLeave }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Container>
      <motion.div className="flex">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 80 },
          }}
          transition={{ duration: 1 }}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-6xl font-medium text1"
        >
          What I know
        </motion.h2>
      </motion.div>
      <div className="mt-10 xl:mt-24">
        <div className="flex bg-transparent relative flex-wrap justify-center xl:flex-row gap-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -80 },
            }}
            transition={{ duration: 1 }}
            className="Box-Skills"
          >
            <h3 className="bg-bgbrand text1">Front-End</h3>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {FrontEnd.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 80 },
            }}
            transition={{ duration: 1 }}
            className="Box-Skills"
          >
            <h3 className="bg-bgbrand text1">Back-End</h3>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {BackEnd.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 80 },
            }}
            transition={{ duration: 1 }}
            className="Box-Skills"
          >
            <h3 className="bg-bgbrand text1">Data-Base</h3>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {DataBase.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 80 },
            }}
            transition={{ duration: 1 }}
            className="Box-Skills"
          >
            <h3 className="bg-bgbrand text1">Tools</h3>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {Tools.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
}
