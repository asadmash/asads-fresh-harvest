import React from "react";
import ProductCard from "./ProductCard";

export default function OurProducts() {
  // Dummy products for design phase
  const products = [
    {
      id: 1,
      image: "/blog-img-2.png", // use a file in /public or an online placeholder
      title: "Sample Product 1",
      description:
        "This is a short placeholder description for product one. It's here for layout testing.",
      rating: { rate: 4.5, count: 120 },
      price: 199,
    },
    {
      id: 2,
      image: "/blog-img-2.png",
      title: "Sample Product 2",
      description:
        "Another placeholder product description to simulate real data in the UI.",
      rating: { rate: 3.5, count: 85 },
      price: 149,
    },
    {
      id: 3,
      image: "/blog-img-2.png",
      title: "Sample Product 3",
      description:
        "A third sample product with a slightly longer description for testing line clamping.",
      rating: { rate: 5, count: 230 },
      price: 299,
    },
    {
      id: 4,
      image: "/blog-img-2.png",
      title: "Sample Product 4",
      description:
        "This is just filler data to check how the grid layout looks with more items.",
      rating: { rate: 4, count: 64 },
      price: 179,
    },
  ];

  // Unique key for when real data changes
  const productsKey = products.map((p) => p.id).join("-");

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
          <div
            key={productsKey}
            className="flex flex-wrap -mx-4 animate-fadeIn"
          >
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8"
                >
                  <ProductCard
                    img={item.image}
                    title={item.title}
                    desc={item.description}
                    rating={item.rating.rate}
                    count={item.rating.count}
                    price={item.price}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
