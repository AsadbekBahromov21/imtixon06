import React from "react";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import {} from "number-brm";
import { useStateValue } from "../context/Index";
import { FaHeart } from "react-icons/fa";
const Cart = () => {
  const [data, dispatch] = useStateValue();
  console.log(data);

  let items = data?.cart.map((product) => {
    let percentageCount =
      product.price - (product.price * 100) / product.discountPercentage;
    return (
      <div
        className="rounded-[15px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center border mb-7 relative"
        key={product.id}
      >
        <div className="w-full h-60  rounded-lg">
          <img
            className="w-full h-full object-contain duration-300 hover:scale-105"
            src={product.images[0]}
            alt="Photo"
          />
        </div>
        <div className="flex flex-col gap-2 p-[5px_0_25px_16px] items-start justify-end">
          <p className="text-start text-[12px] text-[#ADADAD]">
            {product.category}
          </p>
          <p className="text-[20px] font-[700] text-[#253D4E] text-start">
            {product.title}
          </p>
          <div className="flex gap-6 items-baseline">
            <FaStar className="text-yellow-400" />
            <p className="text-[#B6B6B6] text-[14px] font-[400]">
              ({product.rating})
            </p>
          </div>
          <div className="absolute top-0 right-0">
            <button
              onClick={() =>
                dispatch({ type: "ADD_TO_WISHLIST", payload: product })
              }
              className="rounded-[0_15px] px-[10px] text-[16px] text-[#fff] py-[5px] bg-[#3BB77E]"
            >
              <FaHeart />
            </button>
          </div>
          <div>
            <div className="flex">
              <p className="text-[#B6B6B6] text-[14px] text-start  lg-[500px]">
                {product.description}
              </p>
            </div>
            <div className="flex  gap-[20px]">
              <div className="flex gap-2 mt-2 items-center">
                <strong className="text-[18px] text-[#3BB77E] font-[700]">
                  ${product.price}
                </strong>
                <strong className="line-through text-[12px] text-[#B6B6B6] font-[700] ">
                  ${percentageCount.brm()}
                </strong>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-end">
          <button
            onClick={() => dispatch({ type: "CART", payload: product })}
            className="  text-20px hover:rounded-[5px] hover:text-[#fff] hover:bg-red-900 w-[100px] mr-4"
          >
            {" "}
            Delete
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 ">{items}</div>
    </div>
  );
};

export default Cart;
