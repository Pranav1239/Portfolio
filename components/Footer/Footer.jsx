"use client";
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Footer({ textEnter, textLeave }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleEmailClick = () => {
    // Replace 'your@email.com' with your actual email address
    const emailAddress = "pranavkumar192192@gmail.com";

    // Open a new window or popup with the mailto link
    window.open(`mailto:${emailAddress}`, "_blank");
  };

  return (
    <div>
      <div className="mt-10 w-full flex items-center justify-center">
        <motion.div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-7xl font-bold">
            <motion.h1
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: -80 },
              }}
              transition={{ duration: 1 }}
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="w-full md:w-2/3"
            >
              How can we help you. get in touch
            </motion.h1>
          </div>
          <div className=" flex mt-8 flex-col md:flex-row md:justify-between">
            <motion.p
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -80 },
              }}
              transition={{ duration: 1 }}
              className="w-full md:w-2/3 text-white"
            >
              Do you want to discuss with the creator of this website? Contact
              me using the link below. Feel free to collaborate or simply chat.
              <span className="text-yellow-600"> Have a great day!</span>
            </motion.p>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 80 },
              }}
              transition={{ duration: 1 }}
              className=" flex  mt-8 text-center xl:hidden items-center justify-start lg:justify-center gap-14"
            >
              <div className="moving-arrow bg-transparent">
                <FaArrowRightLong size={38} />
              </div>
              <Link href={"/connect"}>
                <button className="relative px-4 py-2 bg-orange-800 hover:bg-orange-900 rounded-md">
                  ContactMe!
                </button>
              </Link>
            </motion.div>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 80 },
              }}
              transition={{ duration: 1 }}
              className="hidden  mt-3 text-center xl:flex items-center justify-start lg:justify-center gap-14"
            >
              <div className="moving-arrow bg-transparent">
                <FaArrowRightLong size={38} />
              </div>
              <Link href={"/connect"}>
                <button className="relative px-4 py-2 bg-orange-800 hover:bg-orange-900 rounded-md">
                  ContactMe!
                </button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 80 },
            }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <Link
                href={"https://www.instagram.com/pranav._pk9"}
                target="_blank"
                className="relative bg-transparent cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"https://twitter.com/pranav7_X"}
                target="_blank"
                className="relative cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaTwitter />
              </Link>
              <Link
                href={"https://github.com/Pranav1239"}
                target="_blank"
                className="relative cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/pk919"}
                target="_blank"
                className="relative cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaLinkedin />
              </Link>
            </div>
            <hr className="border-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
