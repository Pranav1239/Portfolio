"use client";
import { useSession } from "next-auth/react";
import React from "react";
import NavLinks from "../Header/NavLinks";
import UserNav from "../Header/NavMenu";
import Link from "next/link";
import { ExitToApp } from "@mui/icons-material";
import { motion } from "framer-motion";

const ConnectNav = () => {
  const { data: session } = useSession();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex flex-row gap-3 items-end">
        <NavLinks />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-4"
        >
          <Link href={"/"}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <ExitToApp className="text-pink-700" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
      <div>
        <UserNav currentUser={session} />
      </div>
    </div>
  );
};

export default ConnectNav;
