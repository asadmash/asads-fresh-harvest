import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="@container bg-[#f4f6f6] py-10">
      <div className="container_inner">
        <div className="md:flex  md:gap-10 items-start sm:justify-between">
          <div className="footer-logo flex items-center md:flex-1/3">
            <Image
              src={`/header-logo.png`}
              width={60}
              height={60}
              alt="footer-logo"
            />
            <h2 className="text-xl sm:text-3xl md:text-4xl">Fresh Harvest</h2>
          </div>
          <div className="footer-links flex gap-5 items-start sm:justify-around md:flex-2/3 py-5 md:py-0">
            <div className="link-container">
              <h3 className="text-sm sm:text-lg">Quick Links 1</h3>
              <ul className="text-[14px] sm:text-[16px]">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#shop">Shop</a>
                </li>
                <li>
                  <a href="#about-us">About us</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <Link href={`#blog`}>Detail Blog</Link>
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h3 className="text-sm sm:text-lg">Quick Links 2</h3>
              <ul className="text-[14px] sm:text-[16px]">
                <li>
                  <Link href={`/`}>Favorites</Link>
                </li>
                <li>
                  <Link href={`/`}>Cart</Link>
                </li>
                <li>
                  <Link href={`/`}>Sign in</Link>
                </li>
                <li>
                  <Link href={`/`}>Register</Link>
                </li>
              </ul>
            </div>
            <div className="link-container">
              <h3 className="text-sm sm:text-lg">Contact us</h3>
              <ul className="text-[12px] sm:text-[14px]">
                <li>
                  <Link href={`/`}>1234 5678 90</Link>
                </li>
                <li>
                  <Link href={`/`}>Freshharvest@gmail.com</Link>
                </li>
                <li>
                  <Link href={`/`}>Tanjun Street, Pantianak, Indonesia</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* externals */}
        <div className="externals flex flex-col md:flex-row-reverse items-center md:justify-between md:gap-5">
          {/* payment methods */}
          <div>
            <h3>Accepted Payment Methods</h3>
            <div className="payment flex gap-0 sm:gap-1 md:gap-2 w-full">
              <div className="footer-card flex items-center w-fit h-14 lg:h-18">
                <Image
                  src={`/logo-visa.png`}
                  width={100}
                  height={20}
                  alt="logo-visa"
                  className="w-[70px] lg:w-[100px]"
                />
              </div>
              <div className="footer-card flex items-center  w-fit h-14 lg:h-18">
                <Image
                  src={`/logo-paypal.png`}
                  width={100}
                  height={50}
                  alt="logo-paypal"
                  className="w-[70px] lg:w-[100px]"
                />
              </div>
              <div className="footer-card flex items-center w-fit h-14 lg:h-18">
                <Image
                  src={`/logo-apple-pay.png`}
                  width={100}
                  height={50}
                  alt="logo-applepay"
                  className="w-[70px] lg:w-[100px]"
                />
              </div>
            </div>
          </div>

          {/* app store */}
          <div className=" pt-5 pb-10 md:mt-10">
            <p className="mb-5 font-semibold text-[17px] sm:text-xl">
              Download app:
            </p>
            <div className="flex gap-2 lg:gap-5 ">
              <div className="apple-store flex p-2 bg-[#000] items-center text-white rounded-2xl cursor-pointer w-fit">
                <Image
                  src="/brand-apple.svg"
                  width={40}
                  height={40}
                  alt="apple-logo"
                />
                <div>
                  <p className="text-[10px] sm:text-[14px]">Download on the</p>
                  <h2 className=" text-[14px] sm:text-lg">App Store</h2>
                </div>
              </div>
              <div className="play-store flex p-2 bg-[#000] text-white rounded-2xl cursor-pointer w-fit">
                <Image
                  src={`/brand-google-play.svg`}
                  width={40}
                  height={40}
                  alt="play-logo"
                />
                <div>
                  <p className="uppercase text-[10px] sm:text-[14px]">
                    get it on
                  </p>
                  <h2 className="text-[14px] sm:text-lg">Google Play</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* social & copywrite */}
        <hr />
        <div className="social-copywrite flex flex-col md:flex-row-reverse justify-between py-5 items-center">
          <div className="social flex gap-3">
            <FaTwitter className="bg-black rounded-2xl text-white p-2 w-10 h-10 cursor-pointer hover:bg-[#ff6a19] transition-all" />
            <FaFacebook className="bg-black rounded-2xl text-white p-2 w-10 h-10 cursor-pointer hover:bg-[#ff6a19] transition-all" />
            <FaInstagramSquare className="bg-black rounded-2xl text-white p-2 w-10 h-10 cursor-pointer hover:bg-[#ff6a19] transition-all" />
          </div>

          {/* copywrite */}
          <div>
            <p className=" text-[14px] sm:text-sm mt-5">
              &copy; Copywrite 2024. All Rights Reserved by Banana Studio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
