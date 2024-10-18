import Link from "next/link";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { GrNetwork } from "react-icons/gr";
import { MdOutlineReviews } from "react-icons/md";


const Sidebar = ({ prop, setWidth }) => {
  return (
    <div
      className={`side-bar fixed h-screen top-0 z-30 ${prop} overflow-hidden bg-white duration-200`}
    >
      <div
        className="cross text-right inline absolute top-8 right-6 font-bold"
        onClick={() => setWidth("w-0")}
      >
        <RxCross1 className="scale-[2]" />
      </div>
      <div className="links flex flex-col items-center justify-center gap-16 text-2xl font-semibold mt-40">
        <Link href={"/"} onClick={() => setWidth("w-0")} className="flex gap-2 items-center">
        <AiOutlineHome className="scale-125" />
          Home
        </Link>
        <Link href={"/About"} onClick={() => setWidth("w-0")} className="flex gap-2 items-center">
        <LuUser2 className="scale-125" />
          About
        </Link>
        <Link href={"/Services"} onClick={() => setWidth("w-0")} className="flex gap-2 items-center">
        <GrNetwork className="scale-125" />
          Services
        </Link>
        <Link href={"/Skill"} onClick={() => setWidth("w-0")} className="flex gap-2 items-center">
        <FaCode className="scale-125"/>
          Skill
        </Link>
        <Link href={"/Review"} onClick={() => setWidth("w-0")} className="flex gap-2 items-center">
        <MdOutlineReviews className="scale-125"/>
          Review
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
