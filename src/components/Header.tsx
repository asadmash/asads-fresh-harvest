"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Navbar from "./Navbar";
// to show cart count
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import CartSidebar from "./CartSidebar";
import HeaderAuthButton from "./HeaderAuthBtn";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
    const [isCartOpen, setCartOpen] = useState(false);
 

  // read the cart state
    const cartCount = useSelector((state: RootState) => state.cart.items.length);
    const favCount = useSelector((state: RootState) => state.fav.items.length);
    // check if sidebar open or close


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
// open cart handler
   const openCart = () => {
    setCartOpen(true);
  };
// close cart handler
  const closeCart = () => {
    setCartOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);

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
  }, [lastScrollY]);

  useEffect(() => {
    if (isSidebarOpen || isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen, isCartOpen]);

  return (
    <>
      <div
        className={`py-3 @container w-full fixed h-auto z-40 transition-all duration-300 ${
          isScrolled ? "bg-[#749b3f]/60 backdrop-blur-sm" : "bg-transparent"
        } ${showHeader ? "top-0" : "-top-full"}`}
      >
        <div className="container_inner flex justify-between items-center">
          <div className="font-bold text-center pb-4 sm:pb-0 text-blackfish">
            <Link href="/" className="flex items-center">
              <Image
                src="/header-logo.png"
                width={60}
                height={50}
                alt="logo"
                priority
                className="w-[50px] h-[40px] sm:w-[60px] sm:h-[50px]"
              />
              <h2 className="text-2xl">Fresh Harvest</h2>
            </Link>
          </div>
          <div className="flex items-center gap-10">
            <div className="hidden sm:block">
              <Navbar />
            </div>
            <div className="flex items-center gap-5 text-white">
              <div className="relative hidden sm:block">
                <FiHeart className="text-3xl" />
                <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                  {favCount}
                </div>
              </div>
              <div className="relative cursor-pointer" onClick={openCart}>
                <HiOutlineShoppingBag className="text-3xl" />
                <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                  {/* show the cart item count */}
                  {cartCount} 
                </div>
              </div>
              <div className="sm:hidden">
                <button onClick={toggleSidebar}>
                  {isSidebarOpen ? (
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  ) : (
                    <GiHamburgerMenu className="text-white text-2xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <HeaderAuthButton />
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-[80%] bg-[#ff6a19] shadow-lg p-5 sm:hidden z-50">
          <ul className="flex flex-col gap-5 mt-10 font-normal text-xl">
            <li className="relative">
              <Link href="/" className="nav_link">
                Home
              </Link>
            </li>
            <li className="relative">
              <Link href="/" className="nav_link">
                Shop
              </Link>
            </li>
            <li className="relative">
              <Link href="/" className="nav_link">
                About us
              </Link>
            </li>
            <li className="relative">
              <Link href="/" className="nav_link">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      )}

        {/* Cart Sidebar */}
      {isCartOpen && <CartSidebar onClose={closeCart} />}
    </>
  );
};

export default Header;
