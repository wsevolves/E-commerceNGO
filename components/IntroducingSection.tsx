import Link from "next/link";
import Image from "next/image";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className=" pt-20 bg-gradient-to-l from-white to-cyan-800">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-6xl font-extrabold text-center mb-2 max-md:text-5xl max-[480px]:text-3xl">
          INTRODUCING <span className="text-black">NGO</span><span className="text-cyan-800">PRODUCTS</span>
        </h2>
        <div>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Support our mission by purchasing these products.
          </p>
          <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            All proceeds go towards our cause.
          </p>
          <Link href="/shop" className=" block text-white bg-orange-400 font-bold px-12 py-3 text-xl hover:bg-cyan-800 w-96 mt-2 max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
            SHOP NOW
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className="max-w-xs">
            <Image
              src="/ProductNGO1.png"
              width={300}
              height={300}
              alt="Product 1"
              className="w-full h-auto"
            />
            <h3 className="text-white text-xl font-bold mt-3">
              Product 1
            </h3>
            <p className="text-white text-lg">
              Description of product 1.
            </p>
          </div>
          <div className="max-w-xs">
            <Image
              src="/ProductNGO2.png"
              width={300}
              height={300}
              alt="Product 2"
              className="w-full h-auto"
            />
            <h3 className="text-white text-xl font-bold mt-3">
              Product 2
            </h3>
            <p className="text-white text-lg">
              Description of product 2.
            </p>
          </div>
          <div className="max-w-xs">
            <Image
              src="/ProductNGO3.png"
              width={300}
              height={300}
              alt="Product 3"
              className="w-full h-auto"
            />
            <h3 className="text-white text-xl font-bold mt-3">
              Product 3
            </h3>
            <p className="text-white text-lg">
              Description of product 3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
