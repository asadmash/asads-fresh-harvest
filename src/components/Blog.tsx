import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
  return (
    <section className="@container py-20">
      <div className="container_inner flex flex-col items-center">
        <p className="py-1 px-4 bg-lime text-lime w-fit text-center rounded-xl font-semibold mb-2 ">
          Our Blog
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2">
          Fresh Harvest Blog
        </h2>
        <p className="my-5 text-center max-w-[500px]">
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </p>

        <div className="blog-posts flex gap-8 sm:gap-10 md:gap-5 flex-col md:flex-row">
          <div className="post">
            <Image
              src={`/blog-img-1.png`}
              width={500}
              height={500}
              alt="blog-image"
            />
            <p className="mt-4">May 23, 2024</p>
            <h3 className="my-2">
              Exploring Seasonal Delights: A Guide to What&atps;s Fresh Right
              Now
            </h3>
            <button className="text-[#ff6a19] flex items-center gap-3 cursor-pointer hover:underline">
              Read More <FaArrowRight />
            </button>
          </div>
          <div className="post">
            <Image
              src={`/blog-img-2.png`}
              width={500}
              height={500}
              alt="blog-image"
            />
            <p className="mt-4">May 23, 2024</p>
            <h3 className="my-2">
              Exploring Seasonal Delights: A Guide to What&atps;s Fresh Right
              Now
            </h3>
            <button className="text-[#ff6a19] flex items-center gap-3 cursor-pointer hover:underline">
              Read More <FaArrowRight />
            </button>
          </div>
          <div className="post">
            <Image
              src={`/blog-img-3.png`}
              width={500}
              height={500}
              alt="blog-image"
            />
            <p className="mt-4">May 23, 2024</p>
            <h3 className="my-2">
              Exploring Seasonal Delights: A Guide to What&atps;s Fresh Right
              Now
            </h3>
            <button className="text-[#ff6a19] flex items-center gap-3 cursor-pointer hover:underline">
              Read More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
