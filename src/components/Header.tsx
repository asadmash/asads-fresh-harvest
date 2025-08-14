"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
// import SearchBar from "./SearchBar";
// import UserAvatar from "./UserAvatar";
// import { useStateValue } from "../context/StateContext";
// import CartSidebar from "./CartSidebar";
import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`py-3 @container w-full fixed h-auto top-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-[#ecc116] " : "bg-transparent"
        }`}
      >
        <div className="container_inner sm:flex justify-between items-center">
          <div className="font-bold text-center pb-4 sm:pb-0 text-blackfish">
            <Link href="/" className="flex items-center">
              <Image
                src="/header-logo.png"
                width={60}
                height={50}
                alt="logo"
                priority
                className="w-[60px] h-[50px]"
              />
              <h2 className="text-2xl">Fresh Harvest</h2>
            </Link>
          </div>
          <Navbar />
          <div className="hidden lg:flex text-gray-500 text-[30px] gap-8 items-center">
            {/* <UserAvatar /> */}
            <div className="relative">
              <FiHeart className="text-white" />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                {/* {state.favorites.length} */}
              </div>
            </div>
            <div className="relative cursor-pointer">
              <HiOutlineShoppingBag className="text-white" />
              <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                {/* {state.cart.length} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {isCartOpen && <CartSidebar onClose={toggleCart} />} */}
    </>
  );
};

export default Header;
