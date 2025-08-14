"use client";

import React, { useState } from "react";
//import rtk hook to query product
import { useGetProductsQuery } from "@/features/api/productApi";
import ProductCard from "./ProductCard";

export default function OurProducts() {
  // load 12 products
  const [limit, setLimit] = useState(12);
  const { data: products, isLoading } = useGetProductsQuery({ limit });

  // handler function to load more product
  const handleLoadMore = () => setLimit((prev) => prev + 12);

  // Unique key for when real data changes
  // const productsKey = products.map((p) => p.id).join("-");

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {products?.length >= limit && (
          <div className="text-center mt-6">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
