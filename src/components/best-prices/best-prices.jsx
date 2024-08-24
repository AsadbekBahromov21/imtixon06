import React from "react";
import images from "@/assets/div.banner-icon.png";
import images1 from "@/assets/div.banner-icon1.png";
import images2 from "@/assets/div.banner-icon2.png";
import images3 from "@/assets/div.banner-icon4.png";
import images4 from "@/assets/div.banner-icon3.png";
const BestPrices = () => {
  const pricesCart = [
    {
      id: 1,
      url: images,
      titli: "Best prices & offers",
      desc: "Orders $50 or more",
    },
    {
      id: 2,
      url: images1,
      titli: "Free delivery",
      desc: "24/7 amazing services",
    },
    {
      id: 3,
      url: images2,
      titli: "Great daily deal",
      desc: "When you sign up",
    },
    {
      id: 4,
      url: images3,
      titli: "Wide assortment",
      desc: "Mega Discounts",
    },
    {
      id: 5,
      url: images4,
      titli: "Easy returns",
      desc: "Within 30 days",
    },
  ];
  let priceCart = pricesCart?.map((items) => (
    <div
      className="bg-[#F4F6FA] flex items-center gap-1 p-[20px_5px_10px_10px] rounded-[10px]"
      key={items.id}
    >
      <img className="object-contain w-[50px] " src={items.url} alt="" />
      <div className="flex flex-col gap-1">
        <p className="text-[15px] text-[#242424] font-[600]">{items.titli}</p>
        <p className="text-[14px] text-[#ADADAD]">{items.desc}</p>
      </div>
    </div>
  ));
  return (
    <div className="container mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[16px]">
        {priceCart}
      </div>
    </div>
  );
};

export default BestPrices;
