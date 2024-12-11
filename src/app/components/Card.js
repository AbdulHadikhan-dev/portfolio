import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@/components/ui/button"

const Card = ({ logo, title, desc }) => {
  return (
    <div className="card flex flex-col gap-4 border border-blue-500 rounded-xl w-[28%] py-6 hover:scale-110 duration-300 text-blue-600 bg-sky-50 max-mobile:w-full max-mobile:active:scale-105 max-mobile:hover:scale-100 max-ipad:w-[42%] max-ipad:gap-3 max-laptop:w-[35%]">
      <div className="logo mx-4 text-blue-600 max-ipad:mx-0">{logo}</div>
      <div className="title text-3xl mx-8 font-bold text-blue-600 max-ipad:text-2xl max-ipad:mx-4 max-laptop:mx-4 max-mini:mx-2 max-mini:text-[22px] max-mobile:mx-4">{title}</div>
      <div className="desc text-slate-600 mx-8 max-ipad:text-sm max-ipad:mx-4 max-laptop:mx-4 max-mini:mx-2 max-mini:text-[12px] max-mobile:mx-4">{desc}</div>
      <Button className="btn w-fit mx-5 flex gap-2 items-center max-ipad:mx-3 max-laptop:mx-3 max-mini:mx-2 max-mobile:mx-2 bg-transparent text-blue-600 shadow-none hover:shadow hover:bg-transparent">
        Know more
        <FaArrowRightLong className="" />
      </Button>
    </div>
  );
};

export default Card;
