import Image from "next/image";
import heroImage from "../../public/Hero.png";
import Stars from "../Common/Stars";
import { motion } from "framer-motion";

const Hero = ({ textEnterMouse, textLeaveMouse }) => {
  const transition = {
    duration: 0.5,
  };
  return (
    <>
      <div className="max-w-full flex   items-end lg:h-[75vh] ">
        <div className=" xl:">
          <Stars />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -90 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -90 }}
          transition={transition}
          className=" lg:absolute overflow-hidden  flex  bg-transparent max-w-[900px] p-4 flex-col text-5xl md:text-7xl"
        >
          <h1
            onMouseEnter={textEnterMouse}
            className="bg-transparent"
            onMouseLeave={textLeaveMouse}
          >
            Full Stack Web Dev & free To work and make Website
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
