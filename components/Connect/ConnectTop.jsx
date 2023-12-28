"use client";
import { motion } from "framer-motion";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const ConnectTop = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex flex-col gap-8 max-w-[550px]"
    >
      <motion.div variants={itemVariants} className="flex flex-col p-5 gap-4">
        <motion.div
          variants={itemVariants}
          className="flex flex-row items-center gap-2"
        >
          <Image
            src={
              "https://media.licdn.com/dms/image/D5603AQHNUMDhCXachw/profile-displayphoto-shrink_400_400/0/1701036428868?e=1709164800&v=beta&t=7t2irbkwgb7k95v3CzXd6Uh9koe7NeYegy4phpd27ok"
            }
            alt="photo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <motion.h1
            variants={itemVariants}
            className="text-top font-bold text1 text-8xl"
          >
            Pranav
          </motion.h1>
        </motion.div>
        <motion.p variants={itemVariants}>
          I'm a 17-year-old full-stack developer and guitarist with a passion
          for coding. Currently pursuing a diploma in computer science in Vizag.
          I thrive on exploring new places and combining my love for technology
          and creativity
        </motion.p>
      </motion.div>
      <motion.div variants={itemVariants} className="mb-10 flex justify-center lg:justify-normal flex-col p-4 gap-5">
        <motion.h2 className="text-top text1 text-5xl">
          Let's connect?
        </motion.h2>
        <motion.ul className="flex flex-row gap-10">
          <motion.li className="cursor-pointer" variants={itemVariants}>
            <Link
              href={"https://www.instagram.com/pranav._pk9"}
              target="_blank"
            >
              <Instagram className="text-pink-500 hover:text-pink-600" />
            </Link>
          </motion.li>
          <motion.li className="cursor-pointer" variants={itemVariants}>
            <Link href={"https://twitter.com/pranav7_X"} target="_blank">
              <Twitter className="text-pink-500 hover:text-pink-600" />
            </Link>
          </motion.li>
          <motion.li className="cursor-pointer" variants={itemVariants}>
            <Link href={"https://www.linkedin.com/in/pk919"} target="_blank">
              <LinkedIn className="text-pink-500 hover:text-pink-600" />
            </Link>
          </motion.li>
          <motion.li className="cursor-pointer" variants={itemVariants}>
            <Link href={"https://github.com/Pranav1239"} target="_blank">
              <GitHub className="text-pink-500 hover:text-pink-600" />
            </Link>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default ConnectTop;
