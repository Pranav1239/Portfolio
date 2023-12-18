import Image from "next/image";
import heroImage from "../../public/Hero.png";
import Stars from "../Common/Stars";

const Hero = ({ textEnter, textLeave }) => {
  return (
    <>
      <div className="max-w-full flex  items-end lg:h-[75vh] ">
        <div className="hidden xl:block">
          <Stars />
        </div>
        <div className=" lg:absolute  flex  bg-transparent max-w-[900px] p-4 flex-col text-7xl">
          <h1
            onMouseEnter={textEnter}
            className="bg-transparent"
            onMouseLeave={textLeave}
          >
            Full Stack Web Dev & free To work and make Website
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
