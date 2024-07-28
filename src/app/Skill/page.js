import Image from "next/image";
import React from "react";
import HTML from "@/app/assets/html.png";
import CSS from "@/app/assets/css-3.png";
import NODE from "@/app/assets/node.png";
import JS from "@/app/assets/js.png";
import TAILWIND from "@/app/assets/tailwind-css-svg.png";
// import GITHUB from "@/app/assets/github.jpg";
import GIT from "@/app/assets/git.png";
import TYPESCRIPT from "@/app/assets/typescript.webp";
import MONGODB from "@/app/assets/mongodb-icon-1.svg";
import REACT from "@/app/assets/react1.svg";
import express from "@/app/assets/express.webp";
import NEXT from "@/app/assets/next.png";
import Skillname from "../components/Skillcard";

const page = () => {
  return (
    <div className="conatiner">
      <div className="flex flex-row-reverse gap-4 my-20 items-center max-mobile:my-20 max-mobile:gap-3 justify-end mx-20 max-mobile:mx-6">
        <div className="title text-6xl font-semibold max-mobile:text-4xl max-mini: max-ipad:text-4xl max-ipad:">My Skills</div>
        <div className="bg-blue-600 rounded-xl w-2 h-24 max-mobile:w-1 max-ipad:w-[21%] max-laptop:w-[18%] max-mobile:h-14"></div>
      </div> 
      <div className="skill-section my-32">
        <div className="boxs flex flex-wrap mx-20 gap-32 max-mobile:gap-4 max-mobile:mx-4 max-ipad:gap-0 max-mini:mx-4 max-laptop:mx-14 max-laptop:gap-0 max-pc:gap-0 max-pc:mx-6">
          <Skillname
            image={HTML}
            name={"HTML 5"}
            desc={
              "HTML is stand for Hypertext Markup Language, is the standard language for creating web pages. It defines the structure and content of web documents and build interactive elements, facilitating communication between web browsers and servers."
            }
            classProp={"w-20 h-20  max-mobile:h-16 max-mobile:w-16"}
            alt={"html is hypertext markup language"}
          />
          <Skillname
            image={CSS}
            name={"CSS 3"}
            desc={
              "Cascading Style Sheets (CSS) is a computer language that allows developers to style and present web pages written in markup languages like HTML or XML. CSS is a fundamental technology of the World Wide Web, along with HTML and JavaScript."
            }
            classProp={"w-20 h-20  max-mobile:h-16 max-mobile:w-16"}
            alt={"image"}
          />
          <Skillname
            image={JS}
            name={"JavaScript"}
            desc={
              "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS."
            }
            classProp={"w-20 h-20  max-mobile:h-16 max-mobile:w-16"}
            alt={"image"}
          />
          <Skillname
            image={TAILWIND}
            name={"Tailwind CSS"}
            desc={
              "Tailwind CSS is a CSS framework that helps developers build and design web pages by providing pre-designed utility classes for rapid styling. Tailwind CSS is considered a utility-first framework, meaning it's opinionated and flexible, while also specifying some constraints on styling"
            }
            classProp={"w-24 h-24  max-mobile:h-20 max-mobile:w-20"}
            alt={"image"}
          />
          <Skillname
            image={REACT}
            name={"React.js"}
            desc={
              "React is a free and open-source front-end JavaScript library for building user interfaces based on components.React introduced by facebook in 2011. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page."
            }
            classProp={"w-28 h-28  max-mobile:h-24 max-mobile:w-24"}
            alt={"image"}
          />
          <Skillname
            image={NEXT}
            name={"Next.js"}
            desc={
              "Next.js is an open-source web development framework created by the private company Vercel. it is a fullstack framework providing React-based web applications with server-side rendering and static website generation.Next.js enables you to create high-quality web applications with the power of React components."
            }
            classProp={"w-28 h-16  max-mobile:h-16 max-mobile:w-28"}
            alt={"image"}
          />
          <Skillname
            image={NODE}
            name={"Node.js"}
            desc={
              "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting."
            }
            classProp={"w-20 h-22  max-mobile:h-20 max-mobile:w-[4.5rem]"}
            alt={"image"}
          />
          <Skillname
            image={express}
            name={"Express.js"}
            desc={
              "Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
            }
            classProp={"w-20 h-20  max-mobile:h-16 max-mobile:w-16"}
            alt={"image"}
          />
          <Skillname
            image={MONGODB}
            name={"MongoDB"}
            desc={
              "MongoDB is a non-relational, open source database management system (DBMS) that stores data in documents instead of tables MongoDB's document model is flexible and simple for developers to learn and use. Documents are formatted as Binary JSON (Java Script Object Notation) and can store a wide variety of data types."
            }
            classProp={"w-28 h-28  max-mobile:h-24 max-mobile:w-24"}
            alt={"image"}
          />
          <Skillname
            image={TYPESCRIPT}
            name={"Typescript"}
            desc={
              "TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript"
            }
            classProp={"w-20 h-20  max-mobile:h-16 max-mobile:w-16"}
            alt={"image"}
          />
          <Skillname
            image={GIT}
            name={"Git"}
            desc={
              "Git is a version control tool that track our changes and history and GitHub is a developer platform that allows developers to create, store, manage and share their code. It uses Git software, providing the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project."
            }
            classProp={"w-20 h-20  max-mobile:h-16 max-mobile:w-16"}
            alt={"image"}
          />
          {/* <div className="w"></div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
