"use client";
import React, { useEffect, useRef } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Card from "./components/Card";
import { LuSearchCheck } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import ai from "@/app/assets/file.png";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Home() {
  // const [mode, setMode] = useState("light");
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Freelancer.", "MERN Stack Developer."],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <div className="flex w-full max-mobile:flex-col bg-blue-50">
        <div className="left-section w-1/2 text-6xl flex flex-col font-semibold gap-2 mt-40 mb-10 max-laptop:text-4xl max-mobile:mt-10 max-mobile:mb-6 max-mobile:w-full max-ipad:text-4xl max-mini:text-[32px] max-mobile:text-3xl max-mobile:text-center">
          <span className="text-gray-400 mx-28 max-laptop:mx-14 max-mobile:mx-6 max-mini:ml-10 max-mini:mr-0 max-mobile:text-3xl max-ipad:text-4xl">
            Hi there 👏,
          </span>
          <span className="ml-28 max-laptop:mx-14 max-mobile:mx-6 max-mini:ml-10 max-mini:mr-0">{`I'm Abdul Hadi Khan`}</span>
          <div className="text-blue-700 block mx-28 max-laptop:mx-14 max-mobile:mx-6 max-mini:ml-10 max-mini:mr-0max-mobile:text-3xl max-ipad:text-4xl">
            <span className="" ref={el} />
          </div>
          <div className="flex gap-4 text-white mx-32 font-semibold text-sm my-12 max-laptop:mx-16 max-mobile:mx-8 max-mobile:my-8 max-mobile:text-[13px] max-ipad:text-[13px] max-mini:my-10 max-mini:mx-12 max-mobile:justify-center">
            <Link href={"/About"}>
              <button className="bg-blue-600 rounded-3xl py-2 px-4 flex justify-center items-center max-mini:py-1 max-mini:px-3">
                About me
                <MdOutlineArrowOutward className="h-6 w-6" />
              </button>
            </Link>
            <a href="src\app\assets\resume.pdf" download="hadi Resuma.pdf">
              <button className="text-black border border-1 border-gray-500 rounded-3xl py-2 px-4 max-mini:py-1 max-mini:px-3 flex items-center gap-2">
                <IoDocumentTextOutline className="scale-150" />
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="right-section w-[50%] flex justify-center max-mobile:w-full items-end">
          {/* <div className="rounded-xl h-[36rem] w-[22rem] overflow-hidden relative max-pc:h-[34rem] max-pc:w-[20rem] max-laptop:h-[30rem] max-laptop:w-[18rem] max-mini:w-[14rem] max-mini:h-[28rem]"> */}
          <Image
            src={ai}
            alt="Picture of the author"
            width={480}
            height={480}
            // className="max-ipad:h-[400px] max-ipad:w-[250px]"
            // priority
          />
          {/* </div> */}
        </div>
      </div>
      <div className="flex my-36 max-mobile:flex-col max-mobile:gap-8">
        <div className="flex-grow flex flex-col gap-2 border-r-4 border-blue-600 justify-center items-center max-mobile:border-0">
          <span className="text-blue-500 text-6xl font-semibold max-mobile:text-5xl max-ipad:text-5xl">
            80%
          </span>
          <span className="text-2xl font-medium text-center">
            Satisfaied Client
          </span>
        </div>
        <div className="flex-grow flex flex-col gap-2 border-r-4 border-blue-600 justify-center items-center max-mobile:border-0">
          <span className="text-blue-500 text-6xl font-semibold max-mobile:text-5xl max-ipad:text-5xl">
            200+
          </span>
          <span className="text-2xl font-medium text-center">
            Projects Completed
          </span>
        </div>
        <div className="flex-grow flex flex-col justify-center gap-2 items-center max-mobile:border-0">
          <span className="text-blue-500 text-6xl font-semibold max-mobile:text-5xl max-ipad:text-5xl">
            99+
          </span>
          <span className="text-2xl font-medium text-center">Review Given</span>
        </div>
      </div>
      <div className="hire mx-36 max-mobile:mx-4 max-ipad:mx-12">
        <div className="question font-semibold text-6xl w-[45%] my-4 max-pc:w-[60%] max-laptop:w-[68%] max-mobile:text-3xl max-mobile:w-full max-ipad:w-[68%] max-ipad:text-5xl max-mini:w-[80%]">
          <span>Why Hire Me For Your Next </span>
          <span className="text-blue-600">Projects?</span>
        </div>
        <div className="desc w-[27%] max-pc:w-[36%] max-laptop:w-[43%] max-mobile:w-full max-mobile:text-[12px] max-ipad:w-[60%] max-mini:w-[65%]">
          I am specialist in Frontend. My passion is to solve problems through
          effective design and UX reserch.
        </div>
        <div className="cards my-16 flex justify-around mx-16 max-laptop:gap-8 max-mobile:mx-4 max-mobile:flex-col max-ipad:mx-4 max-laptop:mx-8 max-mini:mx-0">
          <Card
            logo={<LuSearchCheck className="font-bold h-14 w-14 mx-4" />}
            title={"Visual Design"}
            desc={
              "the process of using visual elements to improve the look and usability of a product or service.Create your interface design with unique modern ideas. tool and technology."
            }
          />
          <Card
            logo={<FaNodeJs className="font-bold h-14 w-14 mx-4" />}
            title={"BackEnd"}
            desc={
              "responsible for the behind-the-scenes work that builds the structure and logic of a website or web application."
            }
          />
          <Card
            logo={<FaCode className="font-bold h-14 w-14 mx-4" />}
            title={"FrontEnd"}
            desc={
              "creates the user interface (UI) and user experience (UX) of websites and web applications."
            }
          />
        </div>
      </div>
    </main>
  );
}
