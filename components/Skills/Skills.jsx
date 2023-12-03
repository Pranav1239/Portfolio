import AllSkills from "./AllSkills";
import SkillsHead from "./SkillsHead";
import SkillsHeadText from "./SkillsHeadText";

const Skills = () => {
  return (
    <>
      <div className="mt-10 mb-20">
        <SkillsHeadText />
      </div>
      <div className="mt-10 mb-20">
        {/* <SkillsHead /> */}
      </div>
      <div className="flex flex-col  lg:flex-row md:justify-evenly justify-center gap-10  overflow-hidden ">
        <AllSkills />
      </div>
    </>
  );
};

export default Skills;
