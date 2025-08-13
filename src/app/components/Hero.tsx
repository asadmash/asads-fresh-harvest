import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-[url(/mobile-hero-bg.png)] lg:bg-[url(/desktop-hero-bg.png)] @container bg-cover relative z-10 bg-right">
      <div className="container_inner z-30">
        {/* texts */}
        <div className=" w-full sm:w[400px] md:w-[500px] mt-30 md:mt-50 left-0">
          <p className="p-2 bg-lime text-lime w-fit rounded-2xl font-semibold">
            Welcome to Fresh Harvest
          </p>
          <h1 className="text-2xl text-black sm:text-4xl md:text-6xl py-4 md:py-8 font-bold">Fresh Fruits and Vegetables</h1>
          <p>
            At Fresh Harvest, we are passionate about providing you with the
            freshest and most flavorful fruits and vegetables
          </p>
          <button className="bg-orange mt-10 px-3 md:px-6 py-2 md:py-4 font-bold text-xl md:text-2xl text-white rounded-xl">Shop Now</button>
        </div>

        {/* offer card */}
        <div className=" ml-5 md:ml-20 mt-5 flex">
          <div className="hidden md:block">
            <Image src={`/arrow.png`} width={100} height={100} alt="arrow" className="w-[100px] h-[100px]" />
          </div>
          <div className="flex px-2 py-2 bg-grey-card text-sm xsm:text-lg md:text-xl rounded-2xl items-center gap-2">
            <div>
              <p className="text-green">Special Offer</p>
              <h2>Fresh Salad</h2>
              <p><span className="text-green">Up to </span><strong>70% </strong> off</p>
            </div>
            <div>
              <Image src={`/salad-2.png`} width={100} height={100} alt="salad" className="w-[50px] h-[50px] xsm:w-[80px] xsm:h-[80px] sm:w-[100px] sm:h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
