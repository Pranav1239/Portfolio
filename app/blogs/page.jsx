import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Blogs are coming soon</h1>
        <p className="text-gray-500">Stay tuned for our latest updates!</p>
        <div className="mt-4">
          <span className="flex items-center">
            <Link href={"/"} className="flex items-center">
              <FaArrowLeft className="mr-2" />
              <span className="hover:underline cursor-pointer">Go back</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
