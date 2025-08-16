"use client";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-1 sm:gap-2 md:gap-4 font-normal text-[16px]">
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
  );
}
