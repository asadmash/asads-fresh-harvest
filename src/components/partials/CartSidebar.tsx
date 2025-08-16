"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "@/features/cart/cartSlice";

interface CartSidebarProps {
  onClose: () => void;
}

export default function CartSidebar({ onClose }: CartSidebarProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
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
    dispatch(removeFromCart(id));
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div
      ref={sidebarRef}
      className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out"
    >
      <div className="flex justify-between items-center border-b border-gray-400 pb-4 mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button
          onClick={onClose}
          className="text-2xl text-gray-500 hover:text-gray-800"
        >
          <IoMdClose />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col h-[calc(100%-100px)]">
          <div className="flex-grow overflow-y-auto pr-2">
            {cartItems.map((item) => (
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
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity || 1}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          dispatch(decreaseItemQuantity(item.id))
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button
                        onClick={() =>
                          dispatch(increaseItemQuantity(item.id))
                        }
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
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
          <div className="border-t pt-4 border-gray-400">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-[#7755ff] text-white py-2 rounded-lg mt-4 hover:bg-[#ee623a] border-2 border-gray-400 outline-0 transition-all">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
