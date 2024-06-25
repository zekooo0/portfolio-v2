import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="top-0 left-0 sticky flex flex-col items-center bg-[#080808] h-full">
      <span className="flex justify-center items-center bg-background my-5 rounded-md w-[45px] h-[45px] font-black text-xl">
        A<span className="-mb-2 -ml-[2px] text-end text-main">•</span>
      </span>
      <ul className="flex flex-col">
        <Link
          href={"/about"}
          className="[writing-mode:vertical-lr] flex justify-center items-center hover:border-main opacity-50 hover:opacity-100 border-transparent border-r w-[60px] h-[100px] font-extralight transition-all"
        >
          About
        </Link>

        <Link
          href={"/projects"}
          className="[writing-mode:vertical-lr] flex justify-center items-center hover:border-main opacity-50 hover:opacity-100 border-transparent border-r w-[60px] h-[100px] font-extralight transition-all"
        >
          Projects
        </Link>

        <Link
          href={"/experience"}
          className="[writing-mode:vertical-lr] flex justify-center items-center hover:border-main opacity-50 hover:opacity-100 border-transparent border-r w-[60px] h-[100px] font-extralight transition-all"
        >
          Exp.
        </Link>

        <Link
          href={"/contact"}
          className="[writing-mode:vertical-lr] flex justify-center items-center hover:border-main opacity-50 hover:opacity-100 border-transparent border-r w-[60px] h-[100px] font-extralight transition-all"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
