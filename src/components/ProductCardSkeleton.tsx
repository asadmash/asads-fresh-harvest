import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="border border-gray-200 rounded-xl max-w-[400px] h-full flex flex-col items-center animate-pulse">
      <div className="w-full h-[200px] bg-gray-300 rounded-t-xl"></div>
      <div className="space-y-2 py-2 px-4 w-full">
        <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
        <div className="flex justify-center items-center flex-wrap gap-4 mt-4">
          <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto"></div>
          <div className="w-full">
            <div className="h-10 bg-gray-300 rounded-xl w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}