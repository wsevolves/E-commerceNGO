import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/BannerNGO.jpg"
        layout="fill"
        objectFit="cover"
        alt="NGO product"
        className="absolute inset-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-center px-4">
        <h1 className="text-4xl text-orange-400 font-bold mb-3 md:text-6xl lg:text-7xl">
          SUPPORT OUR CAUSE
        </h1>
        <p className="text-white text-sm mb-6 md:text-lg lg:text-xl max-w-2xl">
          Join us in our mission to make the world a better place. Your support
          can change lives and bring hope to those in need.
        </p>
        <div className="flex flex-col md:flex-row md:gap-x-3">
          <button className="bg-orange-400 text-white font-bold px-8 py-3 mb-3 md:mb-0 md:mr-3 hover:bg-cyan-800">
            BUY NOW
          </button>
          <button className="bg-transparent border border-white text-white font-bold px-8 py-3 hover:bg-white hover:text-cyan-800">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
