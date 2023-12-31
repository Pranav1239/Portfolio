"use client";
import Link from "next/link";
import {
  FaGithub,
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const NavLinks = () => {
  const iconVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const iconHoverVariants = {
    hover: { scale: 1.2 },
    tap: { scale: 0.8 },
  };
  return (
    <motion.div
      className="flex flex-row gap-5"
      variants={iconVariants}
      initial="initial"
      animate="animate"
    >
      <div className="xl:hidden">
        <Link
          href={
            "https://drive.google.com/file/d/1bKqlpe3E4zDRAbAZVCAH6DKqgQ_T-ImB/view?usp=sharing"
          }
          target="_blank"
        >
          <button className="custom-btn btn-15">
            Resume
          </button>
        </Link>
      </div>
      <div className="hidden xl:block">
        <Link
          href={
            "https://drive.google.com/file/d/1bKqlpe3E4zDRAbAZVCAH6DKqgQ_T-ImB/view?usp=sharing"
          }
          target="_blank"
        >
          <button className="custom-btn btn-15">Resume</button>
        </Link>
      </div>

      {/* <Link href={"/"}>
      <motion.div whileHover="hover" whileTap="tap" variants={iconHoverVariants}>
        <FaGithub size={20} />
      </motion.div>
    </Link>
    <Link href={"/"}>
      <motion.div whileHover="hover" whileTap="tap" variants={iconHoverVariants}>
        <FaTwitter size={20} />
      </motion.div>
    </Link>
    <Link href={"/"}>
      <motion.div whileHover="hover" whileTap="tap" variants={iconHoverVariants}>
        <FaLinkedin size={20} />
      </motion.div>
    </Link>
    <Link href={"/"}>
      <motion.div whileHover="hover" whileTap="tap" variants={iconHoverVariants}>
        <FaInstagram size={20} />
      </motion.div>
    </Link> */}
    </motion.div>
  );
};

export default NavLinks;
