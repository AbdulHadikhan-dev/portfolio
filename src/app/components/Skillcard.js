import Image from "next/image";
import React from "react";

const Skillname = ({ image, name, desc, alt, classProp }) => {
  return (
    <div className="box flex flex-col gap-4 w-[28%] rounded-xl p-4 h-fit max-mobile:w-full max-mobile:gap-2 max-mobile:p-2 max-ipad:w-1/2 max-laptop:w-1/2 max-pc:w-1/3 border relative overflow-hidden">
      {/* <div className="absolute right-[-95px] rotate-[45deg] bg-blue-50 h-48 w-48 top-[-100px] z-10 border-b max-mobile:h-44 max-mobile:w-44"></div> */}
      <div className="logo rounded-full w-36 h-36 flex justify-center items-center mx-auto max-mobile:h-28">
        <Image
          src={image}
          alt={alt}
          className={classProp}
          width={180}
          height={180}
        />
      </div>
      <div className="name font-semibold text-4xl text-center max-mobile:text-3xl">
        {name}
      </div>
      <div className="definition font-medium text-lg text-center text-gray-500 mx-4 my-4 max-mobile:text-sm max-mobile:mx-2 max-mini:text-[16px] max-mini:mx-2">
        {desc}
      </div>
    </div>
  );
};

export default Skillname;
