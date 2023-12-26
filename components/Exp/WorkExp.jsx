import React, { useRef, useEffect } from "react";
import Container from "../Container";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRegCircleUser } from "react-icons/fa6";
import KeySoft from "../../public/keysoftit_logo.jpeg";
import Image from "next/image";

const WorkExp = ({ textEnter, textLeave }) => {
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
      <div className=" flex flex-col gap-16">
        <div className="max-w-[720px]">
          <motion.h1
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
            className="text-6xl text1 font-medium"
          >
            Work Experience
          </motion.h1>
        </div>
        <div className="  flex justify-end items-end">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 80 },
            }}
            transition={{ duration: 1 }}
            className="relative max-w-[600px] flex flex-col justify-center items-start gap-4"
          >
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -80 },
              }}
              transition={{ duration: 1 }}
              className=" flex flex-row gap-2 items-start justify-center"
            >
              <Image src={KeySoft} alt="logo" width={70} height={70} />
              <div>
                <h1>KeySoft</h1>
                <h1>Nov 2023 - Dec 2023 · 2 mon</h1>
                <h1>Internship · Remote</h1>
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
            >
              <h1>
                I contributed to the backend development of a food delivery
                website, where I successfully implemented features such as the
                <b> dashboard</b>, <b>authentication </b> system, and integrated{" "}
                <b>Stripe payment </b>
                functionality.
              </h1>
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
              className="flex flex-row"
            >
              <h1 className="font-bold">Tech Stack :</h1>
              <h1>
                Nextjs · Prisma ORM · React.js · MongoDB · Express.js · Node.js
              </h1>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default WorkExp;
