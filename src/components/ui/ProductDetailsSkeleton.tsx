import React from "react";

export default function ProductDetailsSkeleton() {
  return (
    <section className="@container bg-[#fff]">
      <div className="container_inner mt-20">
        <section className="fruites flex flex-col md:flex-row md:gap-8">
          <div className="product-image w-full border border-[#a6a6a6]/40 rounded-2xl flex-1/2 h-auto flex items-center justify-center animate-pulse bg-gray-200">
            <div className="w-[400px] h-[400px] bg-gray-300 rounded-md"></div>
          </div>
          <div className="pt-10 md:pt-0 flex-1/2">
            <div className="py-1 px-4 bg-gray-200 rounded-xl font-semibold mb-2 h-8 w-24 animate-pulse"></div>
            <div className="font-bold text-xl sm:text-2xl h-8 w-48 bg-gray-200 animate-pulse mb-2"></div>
            <div className="starCount h-6 w-32 bg-gray-200 animate-pulse mb-2"></div>
            <div className="weight text-[#ff6a19] font-bold text-lg h-6 w-24 bg-gray-200 animate-pulse mb-4"></div>
            <div className="product-desc text-[16px] h-24 w-full bg-gray-200 animate-pulse mb-4"></div>
            <div className="quantity flex gap-2 mt-20 mb-10 md:mt-10">
              <div className="h-6 w-20 bg-gray-200 animate-pulse"></div>
              <div className="box border border-[#a6a6a6] flex gap-2 w-[150px] justify-around items-center h-10 bg-gray-200 animate-pulse"></div>
              <div className="h-6 w-12 bg-gray-200 animate-pulse"></div>
            </div>

            <div className="fav-cart flex flex-col md:flex-row flex-wrap gap-4">
              <div className="add-fav px-4 py-2 bg-gray-200 h-12 w-full lg:w-fit rounded-lg animate-pulse"></div>
              <div className="add-cart px-4 py-2 bg-gray-200 h-12 w-full lg:w-fit rounded-lg animate-pulse"></div>
            </div>
          </div>
        </section>
        <section className="details my-10 md:my-20">
          <div className="navigator flex gap-2 md:gap-4">
            <div className="py-1 px-4 border border-[#a6a6a6]/40 text-lime rounded-lg font-semibold mb-2 h-10 w-32 bg-gray-200 animate-pulse"></div>
            <div className="py-1 px-4 border border-[#a6a6a6]/40 text-lime rounded-lg font-semibold mb-2 h-10 w-32 bg-gray-200 animate-pulse"></div>
          </div>
          <div className="description text[14px] md:text[16px] bg-gray-200 p-4 md:p-8 rounded-2xl text-justify mt-5 h-48 w-full animate-pulse"></div>
        </section>
        <section className="related-products text-center flex flex-col items-center">
          <div className="py-1 px-4 bg-gray-200 rounded-xl font-semibold mb-2 h-8 w-32 animate-pulse"></div>
          <div className="font-bold text-xl sm:text-2xl h-8 w-48 bg-gray-200 animate-pulse mb-4"></div>
          <div className="flex flex-wrap animate-fadeIn w-full justify-center gap-4">
            <div className="w-64 h-80 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-64 h-80 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-64 h-80 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </section>
      </div>
    </section>
  );
}
