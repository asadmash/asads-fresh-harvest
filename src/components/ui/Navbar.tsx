"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-1 sm:gap-2 md:gap-4 font-normal text-[16px]">
        <li className="relative">
          <a href="#home" className="nav_link">
            Home
          </a>
        </li>
        <li className="relative">
          <a href="#shop" className="nav_link">
            Shop
          </a>
        </li>
        <li className="relative">
          <a href="#about-us" className="nav_link">
            About us
          </a>
        </li>
        <li className="relative">
          <a href="#blog" className="nav_link">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}
