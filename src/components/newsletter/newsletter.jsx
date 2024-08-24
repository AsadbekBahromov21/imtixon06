import React from "react";
import hero from "@/assets/Hero.png";
import { IoMdPaperPlane } from "react-icons/io";
const Newsletter = ({ bg }) => {
  console.log(bg);

  return (
    <div
      className="container mx-auto w-full bg-no-repeat bg-contain bg-right bg-[#d8f1e5]"
      style={{
        backgroundImage: `url("${bg}")`,
      }}
    >
      <div className="mt-[100px] relative w-full sm:h-[40vh] md:h-[60vh] lg:h-[60vh] overflow-hidden rounded-lg">
        <img
          src={hero}
          alt=""
          className="absolute top-0 left-0 object-cover w-full h-full -z-10"
        />
        <div className=" sm:p-5 p-4 md:p-8 lg:p-10  sm:w-[400px] md:w-[470px] lg:w-[601px] gap-[20px] flex flex-col sm:gap-[25px] md:gap-[25px] lg:gap-[31px]">
          <p className="  md:text-[40px] lg:text-[55px] text-[26px] font-[700] text-[#253D4E] text-start font-quicksand">
            Fresh Vegetables Big discount
          </p>
          <p className=" lg:text-[20px] font-[400] text-[#7E7E7E] text-start">
            {" "}
            Save up to 50% off on your first order
          </p>
          <div className="flex border w-[250px] lg:gap-2 sm:w-[340px] md:w-[350px] lg:w-[350px]  rounded-full items-center  bg-white">
            <IoMdPaperPlane className="pl-1" />
            <input
              type="text"
              className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] border-none outline-none w-[65%] ml-[10px]"
              placeholder="Your emaill address"
            />
            <button className=" py-[8px] sm:py-[6px] md:py-[10px] lg:py-[10px] text-[12px] sm:text-[15px] md:text-[15px] lg:text-[16px] px-[15px]  rounded-full bg-[#3BB77E] text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
