"use client";
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div>
        <ul className='flex gap-4 sm:gap-5 md:gap-10 font-normal text-xl'>
            <li  className='relative'><Link href="/" className='nav_link' >Home</Link></li>
            <li  className='relative'><Link href="/" className='nav_link' >Shop</Link></li>
            <li  className='relative'><Link href="/" className='nav_link' >About us</Link></li>
            <li  className='relative'><Link href="/" className='nav_link' >Blog</Link></li>
        </ul>
    </div>
  )
}
