import Image from "next/image";
import Chatv2 from "../../public/projectsImages/Chatv2.png";
import Link from "next/link";
import {
  FaEarthAsia,
  FaGithub,
  FaGolfBallTee,
  FaStarHalfStroke,
} from "react-icons/fa6";

const ProjectsCard = ({ item }) => {
  return (
    <div>
      <div className="hidden xl:flex p-4 w-[1100px] h-[380px] bg-bgbrand  flex-col  xl:flex-row gap-5 ">
        <section className="w-[684px] relative h-[350px] ">
          <Image
            src={item.image}
            fill
            objectFit="true"
            className="opacity-50 rounded-3xl"
            alt="Project"
          />
        </section>
        <section className="flex max-w-[400px] bg-bgbrand flex-col gap-4">
          {/* Title */}
          <div className="flex bg-bgbrand">
            <h1 className="text-5xl text2 ">{item.name}</h1>
          </div>
          {/* Title */}

          {/* Description */}
          <div>
            <p className="text-sm bg-bgbrand">{item.description}</p>
          </div>
          {/* Description */}

          {/* TechStack */}
          <div className=" gap-5 mb-5">
            <h1 className="bg-bgbrand text-2xl">Tech Stack</h1>
            <li className="bg-bgbrand">{item.techStack}</li>
          </div>
          {/* TechStack */}

          {/* Links */}
          <div className="flex flex-row gap-8 bg-bgbrand">
            <Link
              href={`${item.link}`}
              target="_blank"
              className="flex flex-row gap-2 bg-bgbrand items-center"
            >
              <FaEarthAsia />

              <div className="hover:underline">Live Link</div>
            </Link>
            <Link
              href={`${item.gitLink}`}
              target="_blank"
              className="flex flex-row gap-2 bg-bgbrand items-center"
            >
              <FaGithub />
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
