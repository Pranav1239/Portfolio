import React from "react";
import Container from "../Container";
import { FaRegCircleUser } from "react-icons/fa6";
import KeySoft from "../../public/keysoftit_logo.jpeg";
import Image from "next/image";
const About = ({ textEnter, textLeave }) => {
  return (
    <Container>
      <div className=" flex flex-col gap-16">
        <div className="max-w-[720px]">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="text-6xl font-medium"
          >
            Work Experience
          </h1>
        </div>
        <div className="  flex justify-end items-end">
          <div className="max-w-[600px] flex flex-col justify-center items-start gap-4">
            <div className="flex flex-row gap-2 items-start justify-center">
              <Image src={KeySoft} alt="logo" width={70} height={70} />
              <div>
                <h1>KeySoft</h1>
                <h1>Nov 2023 - Dec 2023 · 2 mon</h1>
                <h1>Internship · Remote</h1>
              </div>
            </div>
            <div>
              <h1>
                I contributed to the backend development of a food delivery
                website, where I successfully implemented features such as the
                <b> dashboard</b>, <b>authentication </b> system, and integrated{" "}
                <b>Stripe payment </b>
                functionality.
              </h1>
            </div>
            <div className="flex flex-row ">
              <h1 className="font-bold">Tech Stack :</h1>
              <h1>
                Nextjs · Prisma ORM · React.js · MongoDB · Express.js · Node.js
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
