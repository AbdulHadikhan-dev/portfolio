import React from "react";
import FrontEnd from "@/app/assets/frontend.jpg";
import BackEnd from "@/app/assets/backend.png";
import Responsive from "@/app/assets/responsive.jpg";
import Mern from "@/app/assets/mern.jpg";
import Next from "@/app/assets/next1.png";
import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 my-24 max-mobile:my-16 max-mobile:gap-2">
        <div className="title text-5xl font-semibold max-mini:text-4xl max-mobile:text-[24px] text-center">
          Explore My <span className="text-blue-600">Offerings</span> for you
        </div>
        <div className="desc text-slate-500 w-1/2 mx-auto text-center max-ipad:w-[82%] max-mini:text-sm max-laptop:w-[70%] max-mobile:text-[11px] max-mobile:w-full max-mobile:leading-tight">
          The journey of a web developer is a dynamic quest of mastering
          languages, frameworks, and creativity to craft interactive and
          user-friendly digital experiences.
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center my-32 max-mini:mx-10 max-ipad:mx-10">
        <div className="flex gap-8 max-mobile:flex-col">
          <div className="left-section max-ipad:w-1/2 max-mini:w-1/2 max-mobile:w-full">
            <Image
              src={Responsive}
              alt="responsive"
              className="rounded-lg"
              width={540}
              height={540}
            />
          </div>
          <div className="right-section flex flex-col gap-6 w-[34rem] max-ipad:w-1/2 max-mini:w-1/2 max-ipad:gap-4 max-mini:gap-4 max-mobile:w-full">
            <div className="title text-3xl font-semibold max-mini:text-2xl max-ipad:text-[28px]">
              Responsive Design
            </div>
            <div className="desc w-[33rem] flex flex-col gap-4 max-ipad:w-full max-mini:w-full">
              <span className="text-slate-700 text-[15px] max-ipad:text-[12px] max-mini:text-[10px] max-mobile:text-[12px]">
                {`Responsive design is a fundamental approach to web development that ensures websites adapt seamlessly to various devices and screen sizes, providing optimal viewing and interaction experiences. responsive design enhances usability and accessibility, catering to the diverse ways users access information in today's digital landscape. It not only improves user satisfaction but also boosts search engine rankings, making it an indispensable strategy for modern web development.`}
              </span>
              <Link
                href={
                  "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
                }
              >
                <button className="bg-blue-600 text-sm text-white rounded-2xl px-4 py-[6px] w-fit flex gap-1 items-center duration-200 hover:text-blue-600 border border-blue-600 hover:bg-white max-mini:text-[10px] max-ipad:text-[12px] max-ipad:px-3 max-mini:px-3 max-ipad:py-1 max-mini:py-[2px] max-mobile:text-[12px] max-mobile:py-1 max-mobile:px-4">
                  See more
                  <FaArrowRightLong className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-row-reverse max-mobile:flex-col">
          <div className="left-section max-ipad:w-1/2 max-mini:w-1/2 max-mobile:w-full">
            <Image
              src={FrontEnd}
              alt="responsive"
              className="rounded-lg"
              width={540}
              height={540}
            />
          </div>
          <div className="right-section flex flex-col gap-6 w-[34rem] max-ipad:w-1/2 max-mini:w-1/2 max-ipad:gap-4 max-mini:gap-4 max-mobile:w-full">
            <div className="title text-3xl font-semibold  max-mini:text-2xl max-ipad:text-[28px]">
              FrontEnd website
            </div>
            <div className="desc w-[33rem] flex flex-col gap-4 max-ipad:w-full max-mini:w-full">
              <span className="text-slate-700 text-[15px] max-ipad:text-[12px] max-mini:text-[10px] max-mobile:text-[12px]">
                {`Frontend development involves the creation and implementation of the visible parts of a website or application that users interact with directly. It encompasses the design and functionality of user interfaces, often using technologies like HTML, CSS, and JavaScript. Frontend developers focus on ensuring that the user experience is intuitive, visually appealing, and responsive across various devices and browsers. They collaborate closely with backend developers and designers to integrate backend functionality with frontend elements seamlessly, ultimately aiming to create engaging and user-friendly digital experiences.`}
              </span>
              <Link href={"https://airfocus.com/glossary/what-is-a-front-end/"}>
                <button className="bg-blue-600 text-sm text-white rounded-2xl px-4 py-[6px] w-fit flex gap-1 items-center duration-200 hover:text-blue-600 border border-blue-600 hover:bg-white max-mini:text-[10px] max-ipad:text-[12px] max-ipad:px-3 max-mini:px-3 max-ipad:py-1 max-mini:py-[2px] max-mobile:text-[12px] max-mobile:py-1 max-mobile:px-4">
                  See More
                  <FaArrowRightLong className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-8 max-mobile:flex-col">
          <div className="left-section max-ipad:w-1/2 max-mini:w-1/2 max-mobile:w-full">
            <Image
              src={BackEnd}
              alt="responsive"
              className="rounded-lg"
              width={540}
              height={540}
            />
          </div>
          <div className="right-section flex flex-col gap-6 w-[34rem] max-ipad:w-1/2 max-mini:w-1/2 max-ipad:gap-4 max-mini:gap-4 max-mobile:w-full">
            <div className="title text-3xl font-semibold max-mini:text-2xl max-ipad:text-[28px]">
              Backend website
            </div>
            <div className="desc w-[33rem] flex flex-col gap-4 max-ipad:w-full max-mini:w-full">
              <span className="text-slate-700 text-[15px] max-ipad:text-[12px] max-mini:text-[10px] max-mobile:text-[12px]">
                {`Backend development refers to the server-side of web and software applications, where data processing, storage, and management occur. Backend developers primarily work with server-side languages like Java, Python, Ruby, or JavaScript (Node.js), and frameworks such as Django, Flask, Spring, or Express.js. Their responsibilities include handling database operations, server logic, authentication, and ensuring the smooth functioning of the application's core functionality. Backend developers collaborate closely with frontend developers and database administrators to create robust, scalable, and secure applications that meet both user and business needs.`}
              </span>
              <Link href={"https://airfocus.com/glossary/what-is-a-back-end/"}>
                <button className="bg-blue-600 text-sm text-white rounded-2xl px-4 py-[6px] w-fit flex gap-1 items-center duration-200 hover:text-blue-600 border border-blue-600 hover:bg-white max-mini:text-[10px] max-ipad:text-[12px] max-ipad:px-3 max-mini:px-3 max-ipad:py-1 max-mini:py-[2px] max-mobile:text-[12px] max-mobile:py-1 max-mobile:px-4">
                  See more
                  <FaArrowRightLong className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-8 flex-row-reverse max-mobile:flex-col">
          <div className="left-section max-ipad:w-1/2 max-mini:w-1/2 max-mobile:w-full">
            <Image
              src={Mern}
              alt="responsive"
              className="rounded-lg"
              width={540}
              height={540}
            />
          </div>
          <div className="right-section flex flex-col gap-6 w-[34rem] max-ipad:w-1/2 max-mini:w-1/2 max-ipad:gap-4 max-mini:gap-4 max-mobile:w-full">
            <div className="title text-3xl font-semibold  max-mini:text-2xl max-ipad:text-[28px]">
              MERN Stack
            </div>
            <div className="desc w-[33rem] flex flex-col gap-4 max-ipad:w-full max-mini:w-full">
              <span className="text-slate-700 text-[15px] max-ipad:text-[12px] max-mini:text-[10px] max-mobile:text-[12px]">
                {`The MERN stack is a powerful combination of technologies used for building dynamic web applications. It consists of four main components: MongoDB, a NoSQL database that stores data in JSON-like documents; Express.js, a backend framework for building web applications and APIs using Node.js; React.js, a frontend library for building user interfaces; and Node.js, a runtime environment for executing JavaScript code server-side. Together, these technologies provide a robust framework for developers to create scalable and efficient full-stack applications, leveraging JavaScript throughout the entire development process from database to user interface.`}
              </span>
              <Link href={"https://www.coursera.org/articles/mern-stack"}>
                <button className="bg-blue-600 text-sm text-white rounded-2xl px-4 py-[6px] w-fit flex gap-1 items-center duration-200 hover:text-blue-600 border border-blue-600 hover:bg-white max-mini:text-[10px] max-ipad:text-[12px] max-ipad:px-3 max-mini:px-3 max-ipad:py-1 max-mini:py-[2px] max-mobile:text-[12px] max-mobile:py-1 max-mobile:px-4">
                  See more
                  <FaArrowRightLong className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-8 max-mobile:flex-col">
          <div className="left-section max-ipad:w-1/2 max-mini:w-1/2 max-mobile:w-full">
            <Image
              src={Next}
              alt="responsive"
              className="rounded-lg"
              width={540}
              height={540}
            />
          </div>
          <div className="right-section flex flex-col gap-6 w-[34rem] max-ipad:w-1/2 max-mini:w-1/2 max-ipad:gap-4 max-mini:gap-4 max-mobile:w-full">
            <div className="title text-3xl font-semibold  max-mini:text-2xl max-ipad:text-[28px]">
              Next.js Fullstack
            </div>
            <div className="desc w-[33rem] flex flex-col gap-4 max-ipad:full max-mini:w-full">
              <span className="text-slate-700 text-[15px] max-ipad:text-[12px] max-mini:text-[10px] max-mobile:text-[12px]">
                {`Next.js is a powerful React framework that allows for efficient, server-side rendering of React applications. It offers a streamlined developer experience with built-in features like automatic code splitting, server-side rendering, and optimized performance. Next.js supports both static site generation and server-side rendering, making it versatile for a wide range of projects from simple websites to complex web applications. Its strong focus on performance, SEO, and developer productivity has made it a popular choice among developers looking to build modern, fast-loading web applications.`}
              </span>
              <Link
                href={
                  "https://nextjs.org/docs/getting-started/project-structure"
                }
              >
                <button className="bg-blue-600 text-sm text-white rounded-2xl px-4 py-[6px] w-fit flex gap-1 items-center duration-200 hover:text-blue-600 border border-blue-600 hover:bg-white max-mini:text-[10px] max-ipad:text-[12px] max-ipad:px-3 max-mini:px-3 max-ipad:py-1 max-mini:py-[2px] max-mobile:text-[12px] max-mobile:py-1 max-mobile:px-4">
                  See more
                  <FaArrowRightLong className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
