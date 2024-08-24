import React from "react";
import { Banner } from "..";
import images from "@/assets/banner.png";
import images1 from "@/assets/banner1.png";
import images2 from "@/assets/banner2.png";

const Banners = () => {
  return (
    <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[45px]">
      <Banner title={"Make your BreakfastHealthy and Easy"} bg={images} />
      <Banner title={"Everyday Fresh &Clean with OurProducts"} bg={images1} />
      <Banner title={"The best OrganicProducts Online"} bg={images2} />
    </div>
  );
};

export default Banners;
