"use client";
import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-4 bg-slate-200 max-mobile:p-4">
      {/* <hr className="mx-10 my-6" /> */}
      <div className="container flex justify-between items-center mx-10 min-w-[95%] max-mobile:mx-0">
        <div className="left-section ml-4 max-mobile:text-[12px] max-mobile:ml-0">&copy; 2024, All right reseved</div>
        <div className="right-section flex justify-end gap-6 items-center mr-14 text-slate-700 max-mobile:mr-0 max-mobile:gap-2">
          <FaLinkedin className="h-6 w-6 hover:text-blue cursor-pointer hover:scale-110 duration-200 max-mobile:scale-75" />
          <FaTwitter className="h-6 w-6 hover:text-blue cursor-pointer hover:scale-110 duration-200 max-mobile:scale-75" />
          <FaGithub className="h-6 w-6 hover:text-blue cursor-pointer hover:scale-110 duration-200 max-mobile:scale-75" />
          <FaFacebook className="h-6 w-6 hover:text-blue cursor-pointer hover:scale-110 duration-200 max-mobile:scale-75" />
          <FaSquareInstagram className="h-6 w-6 hover:text-blue cursor-pointer hover:scale-110 duration-200 max-mobile:scale-75" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
