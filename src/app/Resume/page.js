"use client";
import React from "react";
import resume from "@/app/assets/resume.jpg";
import Image from "next/image";
import { TbDownload } from "react-icons/tb";
import { Button } from "@/components/ui/button"

const Page = () => {
  return (
    <div className="main flex flex-col items-center py-32 h-fit w-full bg-blue-50 gap-16">
      <div className="download">
        <a
          href="Abdul_Hadi_Resume_fullStack.pdf"
          className="text-4xl text-white flex gap-2 bg-blue-600 hover:bg-blue-700 items-center p-4 max-mobile:text-lg max-mobile:p-2"
          download
        >
          <TbDownload className="h-8 w-8 max-mobile:h-5 max-mobile:w-5" />
          <span className="text-xl max-mobile:text-lg text-white">
            Download Resume
          </span>
        </a>
      </div>
      <Image src={resume} alt="resume" height={1100} width={1100} />
      <div className="download">
        <a
          href="Abdul_Hadi_Resume_fullStack.pdf"
          className="text-4xl text-white flex gap-2 bg-blue-600 hover:bg-blue-700 items-center p-4 max-mobile:text-lg max-mobile:p-2"
          download
        >
          <TbDownload className="h-8 w-8 max-mobile:h-5 max-mobile:w-5" />
          <span className="text-xl max-mobile:text-lg text-white">
            Download Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default Page;
