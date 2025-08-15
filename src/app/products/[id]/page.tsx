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
    <section className="@container">
      <div className="container_inner">
        <section className="fruites">
          <div className="product-image w-full md:w-[50%]">
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
          <div>
            <p>Fruits</p>
            <h2>Coconut</h2>
            <div className="starCount">
              <p>5.0(1 review)</p>
            </div>
            <div className="weight">$6.3/kg</div>
            <p className="product-desc">
              From our farm directly to your door, our fresh coconuts are
              harvested at the peak of ripeness, offering you a sweet, hydrating
              treat full of flavor. Packed with natural nutrients, coconut is
              perfect for a variety of culinary uses, from smoothies to savory
              dishes, or even for a refreshing drink straight from the shell.
            </p>
            <div className="quantity flex gap-2">
              <h3>Quantity</h3>
              <div className="box">
                <span className="decrese">-</span>
                <strong>1</strong>
                <span className="increase">+</span>
              </div>
              <span>/kg</span>
            </div>

            <div className="fav-cart">
              <div className="add-fav">
                <FaHeart />
                Save as favorite
              </div>
              <div className="add-cart">
                <FaShoppingCart />
                Add to cart
              </div>
            </div>
          </div>
        </section>
        <section className="details">
<div className="navigator">
  <div>Description</div>
  <div>Reviews</div>
</div>
<div className="description">

Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and carefully prepared, offering you the freshest product possible. Rich in healthy fats, electrolytes, and essential nutrients, coconuts provide both hydration and nourishment. Whether you're using the water, flesh, or milk, our coconuts bring versatility to your kitchen while supporting healthy living.
Perfect for smoothies, desserts, curries, and more - let the natural sweetness of the coconut elevate your recipes. Enjoy the tropical goodness in its purest form, directly from nature.
</div>
        </section>
        <section className="related-products">
          <p>Our Poducts</p>
          <h2>Related Products</h2>
          <div className="product-container">
           product
          </div>
        </section>
      </div>
    </section>
  );
}
