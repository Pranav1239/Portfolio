import AllSkills from "./AllSkills";
import AllSkillsText from "./AllSkillsText";

const Skills = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row md:justify-evenly justify-center gap-10  overflow-hidden ">
      <div className=" ">
        <AllSkills />
      </div>
      <div className="max-w-[900px]">
        <AllSkillsText />
      </div>
    </div>
  );
};

export default Skills;
