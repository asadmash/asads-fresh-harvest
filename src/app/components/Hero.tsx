import React from "react";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-[url(/mobile-hero-bg.png)] lg:bg-[url(/desktop-hero-bg.png)] @container bg-cover relative z-10 bg-right">
      <div className="container_inner z-30">
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
      </div>
    </section>
  );
}
