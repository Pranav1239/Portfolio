import { FaArrowRightLong } from "react-icons/fa6";
const AllSkillsText = () => {
  return (
    <div className="p-3 flex flex-col gap-5">
      {/* <div className="text-[28px] md:text-3xl text-center  font-medium">
        <h1>
          Skilled full-stack web developer proficient in front-end and back-end
          technologies, Delivering user-friendly.
        </h1>
      </div> */}
      <div className="flex flex-col gap-4 text-base md:text-xl text-right ">
        <li>
          Good in
          {"  "}
          <b>
            MERN stack, Next.js, Prisma, MongoDB, TypeScript, Firebase, and
            Supabase
          </b>{" "}
          for crafting lightning-fast, scalable, and secure applications
        </li>
      </div>
      <div>
        <h1 className="text-xl md:text-3xl text-center  font-medium">
          How about grabbing a coffee to chat about development work? ☕️ Let's
          connect and collaborate! Click the button below to get in touch.
          Looking forward to it!{" "}
        </h1>
      </div>
      <div className="text-center flex items-center justify-center gap-14">
        <div className="moving-arrow">
        <FaArrowRightLong size={38} />
        </div>
        <button className="px-8 py-3 bg-slate-700 hover:bg-slate-800 rounded-lg text-white font-semibold">
          Contact Me!
        </button>
      </div>
    </div>
  );
};

export default AllSkillsText;
