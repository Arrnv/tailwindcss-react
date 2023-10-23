import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-hero_image w-full h-screen bg-no-repeat bg-cover bg-center rounded-xl">
      <div className="h-full flex flex-col justify-center items-center text-center gap-10 lg:gap-4 ">
        <h1 className="text-white text-5xl text-[900] italic lg:text-[84px]">
          Daptive
        </h1>
        <p className="text-white text-xl lg:text-2xl">
          Your Business Acclerator
        </p>
        <Link
          to="/form"
          className="text-white py-[12px] cursor-pointer px-[16px] rounded-full bg-[#15ACFF]"
        >
          Get Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
