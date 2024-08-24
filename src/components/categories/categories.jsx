import React from "react";
import { SectionTitle } from "..";
import { categories } from "@/static";

const Categories = () => {
  let categoriesItms = categories?.map((item) => (
    <div
      key={item.id}
      className="flex flex-col gap-3 items-center justify-center rounded-[10px] py-[8px]"
      style={{
        backgroundColor: item.bg,
      }}
    >
      <img src={item.img} alt="" />
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-[500] text-[#253D4E]">{item.title}</p>
        <p className="text-[13px] text-[#7E7E7E]">{item.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="container mx-auto mt-[90px] ">
      <div className="flex flex-col md:flex-row items-baseline gap-3">
        <SectionTitle title={"Featured Categories "} />
        <div className="flex gap-[20px] items-baseline overflow-x-auto w-full scroll-none">
          <button className=" text-[#253D4E] text-[15px] whitespace-nowrap md:text-[15px] lg:text-[16px] font-[600]  font-quicksand hover:text-[#3BB77E]">
            Cake & Milk
          </button>
          <button className=" text-[#253D4E] text-[15px] whitespace-nowrap md:text-[15px] lg:text-[16px] font-[600]  font-quicksand hover:text-[#3BB77E]">
            Coffes & Teas
          </button>
          <button className=" text-[#253D4E] text-[15px] whitespace-nowrap md:text-[15px] lg:text-[16px] font-[600]  font-quicksand hover:text-[#3BB77E]">
            Pet Foods
          </button>
          <button className=" text-[#253D4E] text-[15px] whitespace-nowrap md:text-[15px] lg:text-[16px] font-[600]  font-quicksand hover:text-[#3BB77E]">
            Vegetables
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-[24px] mt-[48px]">
        {categoriesItms}
      </div>
    </div>
  );
};

export default Categories;
