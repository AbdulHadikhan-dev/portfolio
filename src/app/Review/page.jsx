"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineFeedback } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    image: "",
    rate: null,
  });
  const { toast } = useToast();
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState(0);

  const overallRate1 = useRef(null);
  const overallRate2 = useRef(null);
  const overallRate3 = useRef(null);
  const overallRate4 = useRef(null);
  const overallRate5 = useRef(null);

  const showReviews = useRef();
  const [overall, setOverall] = useState({
    average: 0,
    count: 0,
  });

  const [error, setError] = useState({});
  const [review, setReview] = useState([]);

  useEffect(() => {
    // Fetch the latest review data from your server here
    // axios.get("/api/review").then((response) => setReview(response.data));
    axios.get("/api/review").then((response) => {
      console.log(response.data);
      setReview(response.data);
    });
  }, [stars]);

  let variables = false;
  const Fun = () => {
    if (parseInt(overallRate1.current.id) <= overall.average) {
      overallRate1.classList.add("bg-yellow-500");
      overallRate1.classList.remove("bg-gary-300");
    } else {
      return (variables = overallRate1);
    }
    if (parseInt(overallRate2.current.id) <= overall.average) {
      overallRate2.classList.add("bg-yellow-500");
      overallRate2.classList.remove("bg-gary-300");
    } else {
      return (variables = overallRate2);
    }
    if (parseInt(overallRate3.current.id) <= overall.average) {
      overallRate3.classList.add("bg-yellow-500");
      overallRate3.classList.remove("bg-gary-300");
    } else {
      return (variables = overallRate3);
    }
    if (parseInt(overallRate4.current.id) <= overall.average) {
      overallRate4.classList.add("bg-yellow-500");
      overallRate4.classList.remove("bg-gary-300");
    } else {
      return (variables = overallRate4);
    }
    if (parseInt(overallRate5.current.id) <= overall.average) {
      overallRate5.classList.add("bg-yellow-500");
      overallRate5.classList.remove("bg-gary-300");
    } else {
      return (variables = overallRate5);
    }
  };

  const handleChangeImage = (e) => {
    // Handle the image upload and validation here
    if (e.target.files && e.target.files.length) {
      setForm({ ...form, image: e.target.files });
      // console.log(file);
    } else {
      setForm({ ...form, image: "" });
    }
  };

  const handleChange = (e) => {
    // Handle form input changes here
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRemove = (e) => {
    // Handle the image removal here
    console.log(form.image["0"].name);
    console.log(typeof form.image === "object");
    setForm({ ...form, image: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the form data to your server using fetch or axios
    let response = await axios.post("/api/review", form);
    console.log(response.data);
    if (response.data.ok) {
      toast({
        variant: "default",
        title: response.data.msg,
        description: "There was a problem with your request.",
      });
      setValue(0)
      setError({});
      setForm({
        name: "",
        email: "",
        message: "",
        image: "",
        rate: null,
      });
    } else {
      setError(response.data);
    }
    console.log(form);
    setStars([1, 2, 3, 4, 5]);
    // console.log(typeof form.image);
  };

  const showReview = () => {
    if (showReviews.current.classList.contains("h-[800px]")) {
      showReviews.current.classList.add("h-fit");
      showReviews.current.classList.remove("h-[800px]");
    } else {
      showReviews.current.classList.add("h-[800px]");
      showReviews.current.classList.remove("h-fit");
    }
  };

  return (
    <div className="review">
      <div className="flex flex-col gap-8 items-center my-20">
        <span className="bg-blue-50 text-blue-600 rounded-sm p-3 text-2xl max-mobile:text-xl">
          TESIMONIAL
        </span>
        <div className="text-6xl font-semibold max-mobile:text-4xl text-center max-mini:text-5xl">
          What do you say about us?
        </div>
        <div className="text-gray-500 w-[960px] font-[500] text-[19px] text-center max-mobile:text-[14px] max-mobile:w-full max-ipad:w-full">
          A good domain will clearly reflect your identy purpose, be easy to
          remember, and can increase your visiblity and branding.
        </div>
      </div>
      <div
        className={
          review.length > 9
            ? `data flex flex-wrap my-10 gap-4 mx-28 gap-x-10 h-[800px] overflow-hidden duration-300 max-mobile:mx-4 max-ipad:mx-8 max-laptop:mx-6 max-ipad:justify-between`
            : `data flex flex-wrap my-10 gap-4 mx-28 gap-x-10 h-fit overflow-hidden duration-300 max-mobile:mx-4 max-ipad:mx-0 max-laptop:mx-6 max-ipad:justify-between`
        }
        ref={showReviews}
      >
        {review.map((item) => {
          console.log(item);
          return (
            <div
              className="review-box flex flex-col gap-3 rounded-xl h-fit p-4 w-96 max-mobile:w-full max-mobile:mx-0 max-mobile:p-2 max-mobile:bg-blue-50 max-ipad:w-[47%] max-laptop:w-[31%] max-ipad:mx-0 bg-blue-50"
              key={item["_id"]}
            >
              <div className="main flex gap-4">
                <div className="bg-cover flex justify-start items-center">
                  <FaUserCircle className="h-16 w-16 text-gray-400 max-mobile:h-12 max-mobile:w-12 max-mini:h-[44px] max-mini:w-[44px]" />
                </div>
                <div className="user flex flex-col gap-1 my-2 max-mini:gap-0">
                  <span className="name font-semibold text-2xl max-mobile:text-xl max-mini:text-[21px]">
                    {item.name}
                  </span>
                  <span className="email text-blue-600 max-mobile:text-sm max-mini:text-sm">
                    {item.email}
                  </span>
                </div>
              </div>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={item.rate}
                  precision={0.5}
                  readOnly
                  size="large"
                />
              </Stack>
              <div className="msg text-gray-500 text-lg font-medium max-mini:text-[16px]">
                {item.message}
              </div>
            </div>
          );
        })}
      </div>
      {review.length > 9 && (
        <div className="toogle w-full duration-300 bg-white border-t-2 z-10">
          <span
            className="text-xl cursor-pointer mx-10 text-blue-600"
            onClick={showReview}
          >
            See more
          </span>
        </div>
      )}
      {/*<div className="overall flex flex-col justify-center items-center my-40 gap-4">
        <div className="text-gray-600 text-xl text-semibold">
        Overall Rating
        </div>
        <div
        className="text-[90px] font-medium max-mobile:text-6xl"
        id="rating"
        >
        {overall.average}
        </div>
        <div className="flex gap-6 max-mobile:gap-4">
        <span
        className="star overall-review-star h-16 w-16 bg-gray-300 max-mobile:h-12 max-mobile:w-12"
        value="1"
            ref={overallRate1}
          ></span>
          <span
            className="star overall-review-star h-16 w-16 bg-gray-300 max-mobile:h-12 max-mobile:w-12"
            value="2"
            ref={overallRate2}
            ></span>
            <span
            className="star overall-review-star h-16 w-16 bg-gray-300 max-mobile:h-12 max-mobile:w-12"
            value="3"
            ref={overallRate3}
            ></span>
            <span
            className="star overall-review-star h-16 w-16 bg-gray-300 max-mobile:h-12 max-mobile:w-12"
            value="4"
            ref={overallRate4}
            ></span>
            <span
            className="star overall-review-star h-16 w-16 bg-gray-300 max-mobile:h-12 max-mobile:w-12"
            value="5"
            ref={overallRate5}
            ></span>
            </div>
            <div className="text-gray-600">{`based on ${overall.count} reviews`}</div>
            </div>*/}
      <div className="feedback-form flex flex-col gap-6 items-center my-44">
        <div className="heading flex gap-2 text-5xl items-center font-semibold text-blue-600 max-mobile:text-4xl ">
          <MdOutlineFeedback />
          <span className="">Feedback form</span>
        </div>
        <div className="box flex flex-col gap-4 bg-slate-100 rounded-sm shadow-2xl w-1/2 p-8 max-mobile:w-full max-mobile:p-4 max-ipad:w-2/3 max-mini:w-3/4">
          <div className="flex flex-col gap-1">
            <label className="font-[500] text-lg" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              className="border border-gray-400 bg-blue-50 p-2 rounded-sm focus:outline-0"
              required
              value={form.name}
              onChange={handleChange}
              name="name"
            />
            <div className="flex gap-1 items-center text-red-500 text-center">
              {error.error === "name" && error.message}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[500] text-lg" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              className="border border-gray-400 bg-blue-50 p-2 rounded-sm focus:outline-0"
              required
              value={form.email}
              onChange={handleChange}
              name="email"
            />
            <div className="flex gap-1 items-center text-red-500 text-center">
              {error.error === "email" && error.message}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-[500] text-lg" htmlFor="textarea">
              Message
            </label>
            <textarea
              type="text"
              placeholder="Enter your feedback"
              id="textarea"
              className="border border-gray-400 bg-blue-50 p-2 rounded-sm focus:outline-0 resize-none"
              required
              value={form.message}
              onChange={handleChange}
              name="message"
              rows={8}
            ></textarea>
            <div className="error flex gap-1 items-center text-red-500 text-center">
              {error.error === "message" && error.message}
            </div>
          </div>
          <input
            type="file"
            accept="image/jpg, image/png , image/jpeg"
            id="upload"
            onChange={handleChangeImage}
            className="hidden"
            alt="this is a user image"
          />
          <div className="file flex gap-1 items-center mx-2">
            {typeof form.image === "object" && (
              <>
                <RxCross2
                  className="cursor-pointer scale-125 text-gray-500"
                  onClick={handleRemove}
                />
                <span className="">{form.image["0"].name}</span>
              </>
            )}
          </div>
          <label
            htmlFor="upload"
            className="text-blue-700 flex gap-1 items-center cursor-pointer max-mobile:text-sm"
          >
            <IoMdAttach className="h-6 w-6 rotate-45" />
            Upload your attement
            <span className="optional text-gray-400 cursor-default">
              (optional)
            </span>
            {""}
          </label>
          <div className="rating bg-white flex flex-col gap-4 items-center justify-center py-4">
            <div className="text-4xl">RATE US!</div>
            <Stack spacing={1}>
              <Rating
                name="half-rating"
                defaultValue={0}
                value={value}
                precision={0.5}
                size="large"
                style={{ scale: "1.5" }}
                onChange={(e, newValue) => {
                  console.log(newValue, e.target.value);
                  setValue(newValue);
                  if (newValue === 0 || !newValue) {
                    return false;
                  }
                  setForm({ ...form, rate: newValue });
                }}
              />
            </Stack>
          </div>
          <div className="flex gap-1 items-center text-red-500 text-center">
            {error.error === "rate" && error.message}
          </div>
        <Toaster />
          <Button
            className="bg-blue-500 laptop:py-6 laptop:text-xl hover:bg-blue-600 duration-100"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
