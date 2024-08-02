
"use client";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const ProductsSection = async () => {
  const data = await fetch("https://ngo-server-xyum.onrender.com/api/products");
  const products = await data.json();
  

  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto pt-20">
        <Heading  title="FEATURED PRODUCTS" />
        <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-2 px-10 gap-y-8 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} color="white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
