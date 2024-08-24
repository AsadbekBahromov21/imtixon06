import { useState } from "react";
import navbar from "../../assets/Header.png";
import "./header.css";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "../context/Index";
const Hader = () => {
  const [{ wishlist, cart }, dispatch] = useStateValue();
  console.log(wishlist.length);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex items-center  gap-[69px] justify-between">
          <Link to={"/"}>
            <img src={navbar} alt="" />
          </Link>
          <div className="border hidden gap-2 w-[40%] py-[10px] lg:flex rounded-[5px]">
            <select
              className="border-none outline-none text-[14px] font-[700] text-[#253D4E] pl-2"
              name=""
              id=""
            >
              <option value="">All Categories</option>
              <option value="">All Foot</option>
              <option value="">Appl</option>
              <option value="">Car</option>
            </select>
            <hr className="w-[1px] h-[20px] bg-[#eee]" />
            <input
              className="border-none outline-none w-[60%] pl-2 text-[14px]"
              type="text"
              placeholder="Search for items..."
            />
            <button>
              <CiSearch />
            </button>
          </div>

          <div className=" rounded-[5px] border hidden gap-3 py-[6px] px-[8px] sm:flex md:flex lg:flex ">
            <button>
              <CiLocationOn />
            </button>
            <select
              className="border-none outline-none text-[14px] text-[#3BB77E]  "
              name=""
              id=""
            >
              <option value="">Your Location</option>
              <option value="">Toshkent</option>
              <option value="">Samarqand</option>
              <option value="">Namangan</option>
              <option value="">Andijon</option>
              <option value="">Fargona</option>
            </select>
          </div>
          <div
            className={`nav__collect flex  gap-3 ${isMenuOpen ? "show" : ""}`}
          >
            <div className="flex items-center gap-4 navbar navbar__collection">
              <div className="flex items-center gap-1">
                <CiHeart className="text-[24px] " />
                <sup>{wishlist.length}</sup>
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/Wishlist"}
                >
                  Wishlist
                </NavLink>
              </div>
              <div className="flex items-center gap-1 navbar__collection">
                <IoCartOutline className="text-[24px] " />
                <sup>{cart.length}</sup>
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] "
                  }
                  to={"/Cart"}
                >
                  Cart
                </NavLink>
              </div>
              <div className="flex items-center gap-1">
                <IoPersonOutline className="text-[24px] " />
                <NavLink
                  className={
                    "text-[16px] font-[400] text-[#fff] lg:text-[#7e7e7e] navbar__collection"
                  }
                  to={"/Account"}
                >
                  Account
                </NavLink>
              </div>
            </div>
          </div>
          <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hader;
