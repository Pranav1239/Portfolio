import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEarthAsia, FaGithub } from "react-icons/fa6";
const ProjectsCardM = ({ item }) => {
  return (
    <div>
      <div className="   card rounded-md">
        <Image src={item.image} width={450} height={450} alt="image" />
        <div className="card-body">
          <h2 className="text-white">{item.name}</h2>
          <h5>{item.description}</h5>
          <div className="flex flex-row gap-8 bg-bgbrand">
            <Link
              href={`${item.link}`}
              target="_blank"
              className="flex flex-row gap-2 items-center"
            >
              <span>
                <FaEarthAsia />
              </span>
              Live Link
            </Link>
            <Link
              href={`${item.gitLink}`}
              target="_blank"
              className="flex flex-row gap-2 items-center"
            >
              <span>
                <FaGithub />
              </span>
              Source Code Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCardM;
