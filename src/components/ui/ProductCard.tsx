"use client";
import Image from "next/image";
import React from "react";
import { Product } from "@/types/product";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";

import { RootState } from "@/store/store";
import {
  openAuthModal,
  setRedirectAfterLogin,
} from "@/features/auth/authSlice";
import { useRouter } from "next/navigation";
// to manage cart state
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";

export default function ProductCard({ product }: { product: Product }) {
  const { data: session } = useSession();
  const isAuthenticated = !!session;

  // const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  // cart items
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // check if this item is in cart or not
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault();
      dispatch(setRedirectAfterLogin(product.id));
      dispatch(openAuthModal(product.id));
      return;
    }
    router.push(`/products/${product.id}`);
  };

  const { images, productName: title, price, id } = product;
  const img = images && images.length > 0 ? images[0] : "/desktop-hero-bg.png";

  return (
    <div
      className="px-0 border border-gray-200 rounded-xl max-w-[400px] h-full flex flex-col items-center z-10 hover:shadow-2xl transition-all hover:border-[#749b3f]"
      onClick={handleClick}
    >
      <div className="block w-full h-[200px] bg-white relative rounded-t-xl overflow-hidden z-10">
        <Image
          className="object-cover w-full h-full"
          src={img}
          fill
          alt={title}
        />
      </div>
      <div className="space-y-2 py-2 px-4 bg-white z-10 w-full rounded-b-xl">
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
            {/* Cart button */}
            <button
              className=" hover:bg-[#ee623a] text-black hover:text-white font-semibold transition-all px-4 py-2 rounded-xl  block w-full text-center border-2 border-[#f4f6f6]"
              onClick={(e) => {
                e.stopPropagation(); // prevent card onClick
                isInCart
                  ? dispatch(removeFromCart(product.id))
                  : dispatch(addToCart(product));
              }}
            >
              {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
