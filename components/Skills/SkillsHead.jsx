"use client";
import { motion } from "framer-motion";

const techskills = [
  {
    id: "1",
    name: "Html",
  },

  {
    id: "2",
    name: "Css",
  },

  {
    id: "3",
    name: "Tailwind",
  },

  {
    id: "4",
    name: "Sass",
  },

  {
    id: "5",
    name: "Boostrap",
  },

  {
    id: "6",
    name: "FireBase",
  },
  {
    id: "8",
    name: "Supabase",
  },
  {
    id: "7",
    name: "Git",
  },

  {
    id: "10",
    name: "JavaScript",
  },

  {
    id: "11",
    name: "TypeScript",
  },

  {
    id: "12",
    name: "NodeJs",
  },

  {
    id: "13",
    name: "Expressjs",
  },

  {
    id: "14",
    name: "MongoDB",
  },

  {
    id: "15",
    name: "React",
  },

  {
    id: "16",
    name: "Nextjs",
  },
];

const SkillsHead = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <motion.div className="max-w-[1400px] Box grid grid-cols-3 md:grid-cols-6 text-xl gap-5">
        {techskills.map((skill) => {
          return (
            <div key={skill.id} className="rounded-lg mx-4">
              <div>
                <h2 className="text-xs cursor-default md:text-lg bg-[#131313] font-semibold">
                  {skill.name}
                </h2>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SkillsHead;
