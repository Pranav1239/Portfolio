import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactHead = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="max-w-[1400px] flex flex-col  gap-5">
        <div className="p-2">
          <h1 className="text-xl md:text-5xl text-center font-light">
            How about grabbing a coffee to chat about development work? ☕️
            <span className="text-redbrand">
              Let's connect and collaborate!
            </span>{" "}
            Click the button below to get in touch. Looking forward to it!{" "}
          </h1>
        </div>
        <div className="mt-3 text-center flex items-center justify-center gap-14">
          <div className="moving-arrow">
            <FaArrowRightLong size={38} />
          </div>
          <button className="px-8 py-3 border-[1px] rounded-lg text-white font-semibold">
            Contact Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactHead;
