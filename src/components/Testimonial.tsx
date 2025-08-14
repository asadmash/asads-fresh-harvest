import Image from "next/image";
import React from "react";

export default function Testimonial() {
  return (
    <section className="@container py-10">
      <div className="container_inner flex flex-col justify-around items-center">
        <p className="py-1 px-4 bg-lime text-lime w-fit text-center rounded-xl font-semibold mb-2 ">
          Testimonial
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mt-2">
          What Our Customers Say
        </h2>
        <p className="my-5 text-center max-w-[500px]">
          Don&apos;t just take our word for it-here&apos;s what some of our
          customers have to say about their experience with Fresh Harvest:
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around gap-10  max-w-[1000px]">
          <div className="flex flex-1/3 items-end justify-end relative">
            <Image
              src={`/desktop-client-img.png`}
              width={300}
              height={300}
              alt="avater"
            />
            <Image
              src={`/q-design.png`}
              width={60}
              height={60}
              alt="design"
              className="absolute -top-5 -right-8"
            />
          </div>
          <div className="flex-2/3 bg-[#f4f6f6] p-6 rounded-xl">
            <p>
              &quot;I absolutely love Fresh Harvest! The quality of their
              produce is outstanding. It&apos;s always fresh, flavorful, and
              delicious. The convenience of ordering online and having it
              delivered to my doorstep saves me so much time. Fresh Harvest has
              become my go-to for all my fruit and vegetable needs.&quot;
            </p>
            <p>
              <span className="font-bold mt-4 sm:mt-6 md:mt-8 inline-block">
                Jane Doe -
              </span>{" "}
              Professional chef
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
