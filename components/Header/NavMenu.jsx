"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import UserItem from "./UserItem";
import { signOut } from "next-auth/react";
import BlurBack from "../Common/Blurback";
import Image from "next/image";
import Avatar from "../../public/Avatar.png";

export default function UserNav({ currentUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <>
      <div className="relative bg-brand rounded-2xl z-30">
        <div
          className="p-2 border-none bg-transparent flex flex-row items-center gap-1 rounded-full cursor-pointer text-white"
          onClick={toggleOpen}
        >
          <div>
            {currentUser ? (
              <div>
                <Image
                  src={currentUser.image}
                  width={52}
                  height={50}
                  alt="user"
                />
              </div>
            ) : (
              <div>
                <Image src={Avatar} width={52} height={50} alt="user" />
              </div>
            )}
          </div>
          <BsFillCaretDownFill />
        </div>
        {isOpen && (
          <div className="absolute bg-transparent rounded-md shadow-md w-[170px]  overflow-hidden right-0 top-[48px] text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                <Link href="/blogs">
                  <UserItem onClick={toggleOpen}>Blogs</UserItem>
                </Link>
                <Link href="/connect">
                  <UserItem onClick={toggleOpen}>Connect</UserItem>
                </Link>
                {currentUser.role === "USER" ? (
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
                <Link href="/login">
                  <UserItem onClick={toggleOpen}>Login</UserItem>
                </Link>
                <Link href="/blogs">
                  <UserItem onClick={toggleOpen}>Blogs</UserItem>
                </Link>
                <Link href="/connect">
                  <UserItem onClick={toggleOpen}>Connect</UserItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BlurBack onClick={toggleOpen} /> : null}
    </>
  );
}
