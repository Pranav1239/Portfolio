"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import UserItem from "./UserItem";
import { signOut } from "next-auth/react";
import BlurBack from "../Common/Blurback";
import Image from "next/image";
import Avatar from "../../public/Avatar.png";
import Login from "../Login/Login";
import { motion } from "framer-motion";

export default function UserNav({ currentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev); 
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  console.log(currentUser)
  return (
    <>
      <div className="relative bg-brand rounded-2xl z-30">
        <motion.div
          whileHover={{ scale: 1.05 }}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="p-2 border-none bg-transparent flex flex-row items-center gap-1 rounded-full cursor-pointer text-white"
          onClick={toggleOpen}
        >
          <div>
            {currentUser ? (
              <div>
                <Image
                  src={currentUser.user.image}
                  width={46}
                  height={46}
                  alt="user"
                  className="rounded-full"
                />
              </div>
            ) : (
              <div>
                <Image src={Avatar} width={52} height={50} alt="user" />
              </div>
            )}
          </div>
          <BsFillCaretDownFill />
        </motion.div>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="absolute bg-transparent rounded-md shadow-md w-[170px] overflow-hidden right-0 top-[48px] text-sm flex flex-col cursor-pointer"
          >
            {currentUser ? (
              <div>
                <Link href="/blogs">
                  <UserItem onClick={toggleOpen}>Blogs</UserItem>
                </Link>
                <Link href="/connect">
                  <UserItem onClick={toggleOpen}>Connect</UserItem>
                </Link>
                {currentUser.role !== "USER" ? (
                  <></>
                ) : (
                  <>
                    <Link href="/admin">
                      <UserItem onClick={toggleOpen}>Admin Dashboard</UserItem>
                    </Link>
                  </>
                )}

                <UserItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                >
                  Logout
                </UserItem>
              </div>
            ) : (
              <div>
                <div>
                  <Login />
                </div>
                <Link href="/blogs">
                  <UserItem onClick={toggleOpen}>Blogs</UserItem>
                </Link>
                <Link href="/connect">
                  <UserItem onClick={toggleOpen}>Connect</UserItem>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </div>
      {isOpen ? <BlurBack onClick={toggleOpen} /> : null}
    </>
  );
}
