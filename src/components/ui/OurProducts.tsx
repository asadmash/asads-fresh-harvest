"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useGetProductsQuery } from "@/features/api/productApi";
import { Product } from "@/types/product";
import ProductCard from "@/components/ui/ProductCard";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton";

export default function OurProducts() {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  const products = data?.data || [];
  const [showAllProducts, setShowAllProducts] = useState(false);

  const displayedProducts = showAllProducts ? products : products.slice(0, 8);

  if (isLoading) {
    return (
      <div className="container_inner pt-16">
        <div className="flex flex-wrap animate-fadeIn">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
            >
              <ProductCardSkeleton />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div className="@container" id="new-products">
      <div className="container_inner pt-16 flex flex-col items-center">
        <p className="py-1 px-4 bg-lime text-lime w-fit rounded-xl font-semibold mb-2">
          Our Products
        </p>
        <h2 className="font-bold text-2xl md:text-4xl text-bg-black">
          Our Fresh Products
        </h2>
        <p className=" my-3 md:my-5 text-[#4a4a52] max-w-[500px] text-center">
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </p>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-16">
            No product found by this name
          </div>
        ) : (
          <div className="flex flex-wrap animate-fadeIn">
            {displayedProducts.map((product: Product) => {
              return (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
                >
                  <ProductCard key={product.id} product={product} />
                </div>
              );
            })}
          </div>
        )}
        {products.length > 8 && !showAllProducts && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAllProducts(true)}
              className="px-4 py-2 text-[#ff6a19] rounded hover:bg-[#ff6a19] hover:text-white border-[#ff6a19] border-2 transition-all font-semibold tracking-wider text-lg"
            >
              See More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
