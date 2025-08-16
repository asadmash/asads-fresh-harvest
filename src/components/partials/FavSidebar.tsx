"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromFav } from "@/features/fav/favSlice";

interface FavSidebarProps {
  onClose: () => void;
}

export default function FavSidebar({ onClose }: FavSidebarProps) {
  const dispatch = useDispatch();
  const favItems = useSelector((state: RootState) => state.fav.items);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleRemove = (id: string) => {
    dispatch(removeFromFav(id));
  };

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center border-b border-gray-400 pb-4 mb-4">
        <h2 className="text-xl font-bold">Your Favorites</h2>
        <button
          onClick={onClose}
          className="text-2xl text-gray-500 hover:text-gray-800"
        >
          <IoMdClose />
        </button>
      </div>

      {favItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          You have no favorite items.
        </p>
      ) : (
        <div className="flex flex-col h-[calc(100%-100px)]">
          <div className="flex-grow overflow-y-auto pr-2">
            {favItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2 mb-4"
              >
                <div className="flex items-center">
                  <Image
                    src={item.images[0]}
                    alt={item.productName}
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.productName}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  <IoMdClose />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
