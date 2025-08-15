"use client";

import { useParams } from "next/navigation";
import { useGetProductByIdQuery } from "@/features/api/productApi";
import { useAppSelector } from "@/hooks/reduxHooks";
import AuthModal from "@/components/AuthModal";
import { section } from "motion/react-client";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params?.id;

  // const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const { data: response, isLoading } = useGetProductByIdQuery(
    productId as string
  );

  // if (!isAuthenticated) return <AuthModal />;
  if (!productId) return <p>Invalid product</p>;
  if (isLoading) return <p>Loading product...</p>;
  if (!response || !response.data) return <p>Product not found.</p>;

  const product = response.data;

  return (
    <section className="@container bg-[#fff]">
      <div className="container_inner mt-20">
        <section className="fruites flex flex-col md:flex-row md:gap-8">
          <div className="product-image w-full border border-[#a6a6a6]/40 rounded-2xl flex-1/2 h-auto flex items-center justify-center">
            <Image
              src={
                product.images && product.images.length > 0
                  ? product.images[0]
                  : "/desktop-hero-bg.png"
              }
              width={400}
              height={400}
              alt="product-image"
            />
          </div>
          <div className="pt-10 md:pt-0 flex-1/2">
            <p className="py-1 px-4 bg-lime text-lime w-fit rounded-xl font-semibold mb-2">
              Fruits
            </p>
            <h2 className="font-bold text-xl sm:text-2xl">Coconut</h2>
            <div className="starCount">
              <p>5.0(1 review)</p>
            </div>
            <div className="weight text-[#ff6a19] font-bold text-lg">$6.3/kg</div>
            <p className="product-desc text-[16px]">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </p>
            <div className="quantity flex gap-2 mt-20 mb-10 md:mt-10">
              <h3>Quantity</h3>
              <div className="box border border-[#a6a6a6] flex gap-2 w-[150px] justify-around items-center">
                <span className="decrese border-r border-[#a6a6a6] flex-1/3 text-center">-</span>
                <strong className="flex-1/3 text-center">1</strong>
                <span className="increase border-l border-[#a6a6a6] flex-1/3 text-center">+</span>
              </div>
              <span>/kg</span>
            </div>

            <div className="fav-cart flex flex-col md:flex-row flex-wrap gap-4">
              <button className="add-fav px-4 py-2 bg-[#f4f6f6] hover:bg-[#d9d9d9] flex gap-2 justify-center items-center rounded-lg w-full lg:w-fit">
                <FaHeart className="text-[#d9d9d9]" />
                <p className="text-[#4a4a52] font-semibold">Save as favorite</p>
              </button>
              <button className="add-cart px-4 py-2 bg-[#ff6a19] hover:bg-[#d9d9d9] flex gap-2 justify-center items-center rounded-lg w-full lg:w-fit">
                <FaShoppingCart className="text-white" />
                
                <p className="text-white font-semibold">Add to cart</p>
              </button>
            </div>
          </div>
        </section>
        <section className="details">
          <div className="navigator">
            <div>Description</div>
            <div>Reviews</div>
          </div>
          <div className="description">
            Our coconuts are sustainably grown, ensuring the best quality and
            taste. Each coconut is handpicked and carefully prepared, offering
            you the freshest product possible. Rich in healthy fats,
            electrolytes, and essential nutrients, coconuts provide both
            hydration and nourishment. Whether youre using the water, flesh, or
            milk, our coconuts bring versatility to your kitchen while
            supporting healthy living. Perfect for smoothies, desserts, curries,
            and more - let the natural sweetness of the coconut elevate your
            recipes. Enjoy the tropical goodness in its purest form, directly
            from nature.
          </div>
        </section>
        <section className="related-products">
          <p>Our Poducts</p>
          <h2>Related Products</h2>
          <div className="product-container">product</div>
        </section>
      </div>
    </section>
  );
}
