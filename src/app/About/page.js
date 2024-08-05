"use client";
import Image from "next/image";
import React from "react";
import image1 from "@/app/assets/aboutimage.jpg";
import Link from "next/link";
import image2 from '@/app/assets/3.jpg';


const Page = () => {
  return (
    <div className="about-section">
      <div className="flex gap-4 mx-20 mt-20 mb-10 items-center max-mobile:mx-6 max-mobile:mb-10 max-mobile:gap-2 max-mini:gap-2 max-mini:mx-10">
        <div className="h-24 w-2 bg-blue-600 rounded-2xl max-mobile:h-[56px] max-mobile:w-1 max-mini:h-16 max-mini:w-[6px]"></div>
        <span className="font-semibold text-6xl max-mobile:text-4xl max-mini:text-4xl">
          About me
        </span>
      </div>
      <div className="box p-6 flex justify-center text-[#000000] text-2xl mx-36 my-28 text-left max-mobile: gap-8 max-mobile:mx-4 max-mobile:p-0 max-mobile:my-14 max-mini: max-ipad:mx-8 max-ipad:gap-4 max-mini:mx-3 max-mini:p-0">
        <div className="img overflow-hidden max-mobile:hidden">
          <Image
            src={image2}
            alt="author image"
            // className="rounded-2xl max-ipad:h-72 max-ipad:w-96 max-mini:w-80 max-mini:h-64"
            width={650}
            height={650}
          />
        </div>
        <div className="font-roboto flex flex-col gap-8 w-1/2 max-mobile:w-full max-mobile:gap-4 max-ipad:gap-2 max-mini:gap-1">
          <div className="heading text-4xl w-3/4 font-medium max-mobile:text-2xl max-mobile:w-full max-ipad:text-xl max-mini:text-xl max-mini:w-full">
            The Journey of Web Development is Extraodirair.
          </div>
          <div className="paragraph text-gray-500 text-[16px] mr-20 font-medium max-mobile:text-sm max-mobile:mr-0 max-ipad:mr-2 max-ipad:text-sm max-mini:w-full max-mini:mr-0 max-mini:text-[10px]">
           {`Hi EveryOne, I am `}
            <span className="text-blue-600">Abdul Hadi Khan</span> form
            <span className="text-blue-600"> Nawabshah, Pakistan</span>{`. I study
            in 12th class and I learn DIT (Diploma in Information Technology)
            then I have 2 year + Experience in web development and I am
            passionate about crafting engaging and functional web experiences.
            As a web developer, I specialize in translating creative designs
            into seamless, interactive websites.I am honed my skills in HTML,
            CSS, JavaScript, and various backend technologies to build robust
            and responsive web applications. Thank you for having me.`}
          </div>
          <div className="btn flex gap-4 max-mobile:gap-2">
            <Link href={"/Services"} className="cursor-pointer">
              <button className="rounded-[40px] px-4 py-2 bg-blue-600 text-white text-sm cursor-pointer max-mobile:px-3 max-mobile:py-1 max-mobile:text-[12px] max-ipad:text-[12px] max-ipad:px-3  max-ipad:py-[4px] max-mini:text-[10px] border border-blue-600">
                Our Services
              </button>
            </Link>
            <Link href={"https://en.wikipedia.org/wiki/Web_development"} className="cursor-pointer">
              <button className="rounded-[40px] px-4 py-2 border border-gray-600 font-medium text-sm cursor-pointer max-mobile:px-3 max-mobile:py-1 max-mobile:text-[12px] max-ipad:text-[12px] max-ipad:px-3 max-ipad:py-[2px] max-mini:text-[10px]">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="information mx-36 my-10 text-2xl flex flex-col gap-4 max-mobile:mx-4 max-mobile:text-[16px] max-mobile:gap-2 max-ipad:mx-10 max-ipad:text-xl max-mini:text-[16px]">
        <div className="border-b border-slate-400 flex justify-between items-center p-2 px-10 max-mobile:px-2">
          <span className="bg-blue-600 -skew-x-12 text-white px-4 py-2 max-mobile:px-3 max-mobile:py-[2px] max-mini:py-1 max-mini:px-3">
            Age:
          </span>
          <span className="">17</span>
        </div>
        <div className="border-b border-slate-400  flex justify-between items-center p-2 px-10 max-mobile:px-2">
          <span className="bg-blue-600 -skew-x-12 text-white px-4 py-2 max-mobile:px-3 max-mobile:py-[2px] max-mini:py-1 max-mini:px-3">
            Residence:
          </span>
          <span className="">Pakistan</span>
        </div>
        <div className="border-b border-slate-400 flex justify-between items-center p-2 px-10 max-mobile:px-2">
          <span className="bg-blue-600 -skew-x-12 text-white px-4 py-2 max-mobile:px-3 max-mobile:py-[2px] max-mini:py-1 max-mini:px-3">
            Freelance:
          </span>
          <span className="">Available</span>
        </div>
        <div className="border-b border-slate-400 flex justify-between items-center p-2 px-10 max-mobile:px-2">
          <span className="bg-blue-600 -skew-x-12 text-white px-4 py-2 max-mobile:px-3 max-mobile:py-[2px] max-mini:py-1 max-mini:px-3">
            Address:
          </span>
          <span className="">Nawabshah, Pakistan</span>
        </div>
      </div>
      <div className="flex justify-center max-mobile:flex-col ">
        <div className="education ml-28 my-20 flex flex-col gap-10 max-mobile:w-full max-mobile:ml-0 max-ipad:ml-0">
          <div className="title text-4xl text-blue-600 font-semibold mx-28 max-mobile:text-3xl max-mobile:mx-4 max-mini:mx-12">
            Education
          </div>
          <div className="mx-32 flex gap-4 max-mobile:mx-6 max-mini:mx-10 max-laptop:mx-14">
            <div className="h-auto w-[2px] bg-slate-500 flex flex-col items-center">
              <div className="rounded-full h-3 w-3 bg-blue-600"></div>
              <div className="rounded-full h-3 w-3 bg-blue-600 mt-[15.5rem]"></div>
              <div className="rounded-full h-3 w-3 bg-slate-500 mt-[13.5rem]"></div>
              <div className="rounded-full h-3 w-3 bg-slate-500 mt-40"></div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="">
                <div className="year bg-transparent text-blue-600 border border-blue-600 rounded-md px-1 w-fit max-mobile:text-[14px]">
                  2023 - Present
                </div>
                <div className="university font-bold text-xl text-black mt-2 mb-1 max-mobile:text-[18px]">
                  Lal Computer Institude
                </div>
                <div className="city text-slate-500 mb-4">Nawabshah</div>
                <div className="major text-slate-600 font-semibold text-lg w-1/2 max-mobile:w-full max-mobile:text-[15px] max-mini:w-4/5 max-mini:text-[17px] max-ipad:w-2/3">
                  Diploma in information Technology at Lal Computer Institude,
                  Nawabshah.
                </div>
              </div>
              <div className="">
                <div className="year bg-transparent text-blue-600 border border-blue-600 rounded-md px-1 w-fit max-mobile:text-[14px]">
                  2023 - Present
                </div>
                <div className="university font-bold text-xl text-black mt-2 mb-1 max-mobile:text-[18px]">
                  GOVT Boys Degree College
                </div>
                <div className="city text-slate-500 mb-4">Nawabshah</div>
                <div className="major text-slate-600 font-semibold text-lg w-1/2 max-mobile:w-full max-mobile:text-[15px] max-mini:w-4/5 max-mini:text-[17px] max-ipad:w-2/3">
                  Completed Intermiate at GOVT Boys Degree College, Nawabshah.
                </div>
              </div>
              <div className="">
                <div className="year bg-transparent text-slate-500 border border-slate-500 rounded-md px-1 w-fit max-mobile:text-[14px]">
                  2021 - 2023
                </div>
                <div className="university font-bold text-xl text-black mt-2 mb-1 max-mobile:text-[18px]">
                  Shah Waliullah High School
                </div>
                <div className="city text-slate-500 mb-4">Nawabshah</div>
                <div className="major text-slate-600 font-semibold text-lg w-1/2 max-mobile:w-full max-mobile:text-[15px] max-mini:w-4/5 max-mini:text-[17px] max-ipad:w-2/3">
                  Completed Matric at Shah Waliullah High School, Nawabshah.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education my-20 flex flex-col gap-10 max-mobile:w-full max-mobile:ml-0">
          <div className="title text-4xl text-blue-600 font-semibold -mx-4 max-mobile:text-3xl max-mobile:mx-4">
            Experiences
          </div>
          <div className="flex gap-4 max-mobile:mx-6">
            <div className="h-auto w-[2px] bg-slate-500 flex flex-col items-center">
              <div className="rounded-full h-3 w-3 bg-blue-600"></div>
              <div className="rounded-full h-3 w-3 bg-slate-500 mt-[15.5rem]"></div>
              <div className="rounded-full h-3 w-3 bg-slate-500 mt-[13.5rem]"></div>
              <div className="rounded-full h-3 w-3 bg-slate-500 mt-40"></div>
            </div>
            <div className="flex flex-col gap-16">
              <div className="">
                <div className="year bg-transparent text-blue-600 border border-blue-600 rounded-md px-1 w-fit max-mobile:text-[14px]">
                  2024 - Present
                </div>
                <div className="university font-bold text-xl text-black mt-2 mb-1 max-mobile:text-[18px]">
                  UP WORK - Fiver - People per hours
                </div>
                <div className="city text-slate-500 mb-4">Remote</div>
                <div className="major text-slate-600 font-semibold text-lg w-1/2 max-mobile:w-full max-mobile:text-[15px] max-mini:w-4/5 max-mini:text-[17px] max-ipad:w-2/3">
                  Worked as a MERN stack developer for many platforms of
                  freelancing.
                </div>
              </div>
              <div className="">
                <div className="year bg-transparent text-slate-500 border border-slate-600 rounded-md px-1 w-fit max-mobile:text-[14px]">
                  2023 - 2024
                </div>
                <div className="university font-bold text-xl text-black mt-2 mb-1 max-mobile:text-[18px]">
                  Fiver
                </div>
                <div className="city text-slate-500 mb-4">Remote</div>
                <div className="major text-slate-600 font-semibold text-lg w-1/2 max-mobile:w-full max-mobile:text-[15px] max-mini:w-4/5 max-mini:text-[17px] max-ipad:w-2/3">
                  Worked as a freelance in backend web developer at Fiver.
                </div>
              </div>
              <div className="">
                <div className="year bg-transparent text-slate-500 border border-slate-500 rounded-md px-1 w-fit max-mobile:text-[14px]">
                  2022 - 2023
                </div>
                <div className="university font-bold text-xl text-black mt-2 mb-1 max-mobile:text-[18px]">
                  UP WORK
                </div>
                <div className="city text-slate-500 mb-4">Remote</div>
                <div className="major text-slate-600 font-semibold text-lg w-1/2 max-mobile:w-full max-mobile:text-[15px] max-mini:w-4/5 max-mini:text-[17px] max-ipad:w-2/3">
                  Worked as a freelance Frontend web developer at UP WORK.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
