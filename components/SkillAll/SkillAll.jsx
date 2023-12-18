import React from "react";
import Container from "../Container";

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
  {
    id: 2,
    name: "MySql",
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
  return (
    <Container>
      <div>
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-6xl font-medium"
        >
          What I know
        </h1>
      </div>
      <div className="mt-10 xl:mt-24">
        <div className="flex bg-transparent relative flex-col xl:flex-row gap-10">
          <div className="Box-Skills">
            <h1 className="bg-bgbrand">Front-End</h1>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {FrontEnd.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Box-Skills">
            <h1 className="bg-bgbrand">Back-End</h1>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {BackEnd.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Box-Skills">
            <h1 className="bg-bgbrand">Data-Base</h1>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {DataBase.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="Box-Skills">
            <h1 className="bg-bgbrand">Tools</h1>
            <div className="flex flex-wrap gap-5 mt-10 bg-bgbrand">
              {Tools.map((item) => {
                return (
                  <div className="" key={item.id}>
                    <h1 className="bg-bgbrand">{item.name}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
