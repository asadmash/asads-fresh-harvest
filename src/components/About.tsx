import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="@container py-10">
      <div className="container_inner md:flex gap-8 items-center">
        <div className="image flex-1">
          <Image
            src={`/desktop-about.png`}
            width={800}
            height={1000}
            alt="about"
            className="w-full h-auto"
          />
        </div>
        <div className="description flex-1">
          <p className="py-1 px-4 bg-lime text-lime w-fit rounded-xl font-semibold mb-2">
            About us
          </p>
          <h2 className="font-bold text-2xl md:text-4xl text-bg-black">
            About Fresh Harvest
          </h2>
          <p className=" my-3 md:my-5 text-[#4a4a52] line-clamp-6">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>
          <button className="px-4 py-2 border-[#ff6a19] border-2 text-[#ff6a19] hover:text-white hover:bg-[#ff6a19] hover:border-white cursor-pointer transition-all rounded-xl">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
