
"use client";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";



const CategoryMenu = () => {

  const [categories, setCategories] = useState<Category[]>([]);

  // getting all categories to be displayed on the all categories page
  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        console.log(categories)
      });
  }, []);
  return (
    <div className="py-10 bg-gradient-to-l from-white to-cyan-800">
       <h2 className="text-white text-6xl font-extrabold text-center mb-2 max-md:text-5xl max-[480px]:text-3xl">
       BROWSE <span className="text-cyan-800">NGO'S</span>
        </h2>
      {/* <Heading title="BROWSE CATEGORIES" /> */}
      <div className="max-w-screen-2xl mx-auto py-10 gap-x-5 px-16 max-md:px-10 gap-y-5 grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-[450px]:grid-cols-1">
        {categories.map((item) => (
          <CategoryItem title={item.name} key={item.id} href={'/shop/'+item.name}>
            <Image src={"/NGo1.jpg"} layout="fill" objectFit="cover" alt={item.name} />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
