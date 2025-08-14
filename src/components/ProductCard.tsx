import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  // Dummy data for design phase
  const { images, productName: title, price, id } = product;
  const img = images && images.length > 0 ? images[0] : "/desktop-hero-bg.png";

  return (
    <div className="px-0 border border-gray-200 rounded-xl max-w-[400px] h-full flex flex-col items-center">
      <div className="w-full h-[200px] bg-[#f4f6f6] relative">
        <Image
          className="w-full h-full rounded-t-xl bg-[#f4f6f6] object-contain"
          src={img}
          fill
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2 px-4">
        <div className=" px-4 text-center">
          <h2 className="text-accent font-medium uppercase line-clamp-1 mt-2 text-center">
            {title}
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
          <div className="flex flex-col items-center flex-wrap">
            <div className="font-bold flex items-center justify-center">
              <span>${price}/kg</span>
            </div>
          </div>
          <div className="w-full">
            <Link
              href={`/`}
              className=" hover:bg-[#ee623a] text-black hover:text-white font-semibold transition-all px-4 py-2 rounded-xl  block w-full text-center border-2 border-[#f4f6f6]"
            >
              Add To Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
