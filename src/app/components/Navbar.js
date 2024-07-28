"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { SlMenu } from "react-icons/sl";
import Sidebar from "./Sidebar";
import { AiOutlineHome } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { GrNetwork } from "react-icons/gr";
import { MdOutlineReviews } from "react-icons/md";

const Navbar = () => {
  useEffect(() => {
    window.onscroll = function () {
      checkNavbar();
      // console.log("hello world!");
    };
  });
  const [width, setWidth] = useState("w-0");
  const navbar = useRef(null);
  const showsidebar = () => {
    if (width === "w-0") {
      setWidth("w-full");
    } else {
      setWidth("w-0");
    }
  };

  const checkNavbar = () => {
    if (window.scrollY >= 50) {
      navbar.current.classList.add("fixed");
      navbar.current.classList.add("backdrop-blur-lg");
      navbar.current.classList.add("bg-opacity-10");
      navbar.current.classList.add("bg-slate-600");
      navbar.current.classList.remove("bg-blue-50");
    } else {
      navbar.current.classList.remove("fixed");
      navbar.current.classList.remove("backdrop-blur-lg");
      navbar.current.classList.remove("bg-opacity-10");
      navbar.current.classList.remove("bg-slate-600");
      navbar.current.classList.add("bg-blue-50");
    }
  };
  return (
    <>
      <nav
        className="w-full flex justify-between px-10 py-4 items-center max-mobile:px-6 top-0 z-20 bg-blue-50"
        ref={navbar}
      >
        <div className="text-3xl font-semibold text-blue-600 max-mobile:text-2xl max-ipad:text-2xl max-mini:text-[22px]">{`Hadi's portfolio`}</div>
        {/* <div className="flex gap-4 items-center"> */}
        <div className="flex justify-between gap-14 font-semibold text-xl items-center max-mobile:hidden max-ipad:text-[16px] max-ipad:gap-8 max-mini:text-[12px] max-mini:gap-4">
          <div className="flex flex-col justify-center navigation">
            <Link href={"/"}>
              <span className="cursor-pointer flex gap-2 items-center">
                <AiOutlineHome className="scale-125" />
                Home
              </span>
            </Link>
            <div className="w-0 h-1 bg-blue-600 origin-left duration-500"></div>
          </div>
          <div className="flex flex-col justify-center navigation">
            <Link href={"/About"}>
              <span className="cursor-pointer flex gap-2 items-center">
                <LuUser2 className="scale-125" />
                About
              </span>
            </Link>
            <div className="w-0 h-1 bg-blue-600 origin-left duration-500"></div>
          </div>
          <div className="flex flex-col justify-center navigation">
            <Link href={"/Services"}>
              <span className="cursor-pointer flex gap-2 items-center">
                <GrNetwork className="scale-125" />
                Services
              </span>
            </Link>
            <div className="w-0 h-1 bg-blue-600 origin-left duration-500"></div>
          </div>
          <div className="flex flex-col justify-center navigation">
            <Link href={"/Skill"}>
              <span className="cursor-pointer flex gap-2 items-center">
                <FaCode className="scale-125" />
                Skill
              </span>
            </Link>
            <div className="w-0 h-1 bg-blue-600 origin-left duration-500"></div>
          </div>
          <Link href={"/Review"}>
            <div className="Review border border-1 border-blue-600 text-blue-600 rounded-3xl mx-4 px-4 py-[2px] cursor-pointer flex gap-2 items-center hover:bg-blue-600 hover:text-white duration-300 max-mobile:hidden max-ipad:text-[15px] max-mini:text-[12px] font-[400] text-[16px] max-mini:py-0 max-mini:px-3">
              <span>Review</span>
              <MdOutlineReviews className="scale-125" />
            </div>
          </Link>
        </div>
        <div className="side-menu mobile:hidden" onClick={showsidebar}>
          <SlMenu className="h-8 w-8" />
        </div>
        {/* </div> */}
      </nav>
      <Sidebar prop={width} setWidth={setWidth} />
    </>
  );
};

export default Navbar;
