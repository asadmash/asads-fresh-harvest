import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCard() {
  // Dummy data for design phase
  const img = "/blog-img-2.png"; // put a file in /public or use "https://via.placeholder.com/300x400"
  const title = "Sample Product";
  const price = 199;
  const id = 1;

  return (
    <div className="border border-gray-200 rounded-xl max-w-[400px] h-full p-2">
      <div className="w-full h-[280px] p-0 m-0">
        <Image
          className="w-full h-full object-contain rounded-t-xl"
          src={img}
          width={300}
          height={280}
          alt={title}
        />
      </div>
      <div className="space-y-2 px-4 text-center">
        <h2 className="text-accent font-medium uppercase line-clamp-1 mt-2 text-center">
          {title}
        </h2>
        <div className="flex flex-col items-center flex-wrap gap-4 mt-4">
          <div className="font-bold flex gap-2 items-center justify-center">
            <span>${price}</span>
          </div>
          <div className="w-full">
            <Link
              href={`/`}
              className="bg-[#7955fa] hover:bg-[#ee623a] text-white transition-all px-4 py-2 rounded-xl font-medium block w-full text-center"
            >
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
