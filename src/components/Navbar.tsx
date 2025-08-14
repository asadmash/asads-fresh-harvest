"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
  return (
    <div>
        <ul className='hidden md:flex gap-4 md:gap-5 lg:gap-10 font-normal text-xl'>
            <li  className='relative'><Link href="/" className='nav_link' >Home</Link></li>
            <li  className='relative'><Link href="/" className='nav_link' >Shop</Link></li>
            <li  className='relative'><Link href="/" className='nav_link' >About us</Link></li>
            <li  className='relative'><Link href="/" className='nav_link' >Blog</Link></li>
        </ul>
        <div className="md:hidden">
        <button onClick={toggleSidebar} className="md:hidden">
          {isSidebarOpen ? (
            <svg
              className="w-6 h-6"
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
            <GiHamburgerMenu />
          )}
        </button>
      </div>

      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#ff6a19] shadow-lg p-5 md:hidden">
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
    </div>
  )
}
