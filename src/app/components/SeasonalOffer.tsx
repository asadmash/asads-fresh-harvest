"use client";
import React, { useState, useEffect } from "react";

export default function SeasonalOffer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-08-31T23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-auto w-full bg-[url(/mobile-special-offer.png)] md:bg-[url(/desktop-special-offer.png)] bg-cover bg-no-repeat @container bg-right">
      <div className="container_inner bg-contain repeat-none py-[50px] md:py-[300px] h-[300px] flex items-center">
        <div>
          <p className="py-1 px-4 bg-lime text-lime w-fit rounded-xl font-semibold mb-2">
            Special Offer
          </p>
          <h2 className="font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-bg-black">
            Seasonal Fruit Bundle
          </h2>
          <h3 className="font-semibold text-xl sm:text-2xl md:text-4xl my-2 md:my-4">
            Discount up to <span className="uppercase">80% off</span>
          </h3>
          <div className="countdown flex gap-0 sm:gap-4 md:gap-5 w-full">
            <div className="card flex flex-col">
              <span className="font-semibold text-3xl">
                {days < 10 ? `0${days}` : days}
              </span>
              <p> Days</p>
            </div>
            <div className="card flex flex-col">
              <span className="font-semibold text-3xl">
                {hours < 10 ? `0${hours}` : hours}
              </span>{" "}
              <p>Hour</p>
            </div>
            <div className="card flex flex-col">
              <span className="font-semibold text-3xl">
                {minutes < 10 ? `0${minutes}` : minutes}
              </span>{" "}
              <p>Min</p>
            </div>
            <div className="card flex flex-col">
              <span className="font-semibold text-3xl">
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>{" "}
              <p>Second</p>
            </div>
          </div>
          <div className="code font-bold uppercase text-2xl bg-green w-fit px-4 py-2 mt-4 rounded-full text-[#ecc116]">
            <span className="text-white">code:</span> fresh28
          </div>
        </div>
      </div>
    </section>
  );
}
