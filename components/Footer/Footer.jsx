import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer({ textEnter, textLeave }) {
  return (
    <div>
      <div className="mt-10 w-full flex items-center justify-center">
        <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
          <div className="w-full text-7xl font-bold">
            <h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="w-full md:w-2/3"
            >
              How can we help you. get in touch
            </h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between">
            <p
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="w-full md:w-2/3 text-white"
            >
              Do you want to discuss with the creator of this website? Contact
              me using the link below. Feel free to collaborate or simply chat. 
              <span className="text-yellow-600"> Have a great day!</span>
            </p>
            <div className="mt-3 text-center flex items-center justify-center gap-14">
              <div className="moving-arrow">
                <FaArrowRightLong size={38} />
              </div>
              <button className="px-8 py-3 border-[1px] rounded-lg text-white font-semibold">
                Contact Me!
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-between">
              <Link
                href={"https://www.instagram.com/pranav._pk9"}
                target="_blank"
                className="cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaInstagram />
              </Link>
              <Link
                href={"https://twitter.com/pranav7_X"}
                target="_blank"
                className=" cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaTwitter />
              </Link>
              <Link
                href={"https://github.com/Pranav1239"}
                target="_blank"
                className="cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaGithub />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/pk919"}
                target="_blank"
                className="cursor-pointer text-gray-600 hover:text-white uppercase"
              >
                <FaLinkedin />
              </Link>
            </div>
            <hr className="border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
