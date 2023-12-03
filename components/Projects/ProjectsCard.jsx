import Image from "next/image";
import Chatv2 from "../../public/projectsImages/Chatv2.png";
import Link from "next/link";
import { FaEarthAsia, FaGithub, FaGolfBallTee, FaStarHalfStroke } from "react-icons/fa6";

const ProjectsCard = () => {
  return (
    <div>
      <div className="p-4 w-[1164px] h-[440px] bg-bgbrand flex flex-col items-center xl:flex-row gap-5 ">
        <section className="w-[684px]  h-[411px] ">
          <Image
            src={Chatv2}
            className="opacity-50 rounded-3xl"
            alt="Project"
          />
        </section>
        <section className="flex max-w-[400px] bg-bgbrand flex-col gap-4">
          {/* Title */}
          <div>
            <h1 className="text-5xl bg-bgbrand">ChatV2._</h1>
          </div>
          {/* Title */}

          {/* Description */}
          <div>
            <p className="text-sm bg-bgbrand ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              mollitia totam porro sunt voluptas placeat atque quaerat ducimus
              reprehenderit, et expedita accusamus! Iste ea cumque cupiditate
              odit, alias architecto at mollitia explicabo enim!
            </p>
          </div>
          {/* Description */}

          {/* TechStack */}
          <div className="flex flex-col gap-5 mb-28">
            <h1 className="bg-bgbrand text-2xl">Tech Stack</h1>
          </div>
          {/* TechStack */}

          {/* Links */}
          <div className="flex flex-row gap-8 bg-bgbrand">
            <Link href={"/"} className="flex flex-row gap-2 items-center">
              <span>
                <FaEarthAsia />
              </span>
              Live Link
            </Link>
            <Link href={"/"} className="flex flex-row gap-2 items-center">
              <span>
                <FaGithub />
              </span>
              Source Code Link
            </Link>
          </div>
          {/* Links */}
        </section>
      </div>
    </div>
  );
};

export default ProjectsCard;
