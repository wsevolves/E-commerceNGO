// *********************
// Role of the component: Category item that will contain an image and title
// Name of the component: CategoryItem.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryItem title="Category" href="/category">
// Input parameters: title (string), href (string), children (ReactNode)
// Output: image and title in a styled card
// *********************

import Link from "next/link";
import Image from "next/image";
import React, { type ReactNode } from "react";

interface CategoryItemProps {
  children: ReactNode;
  title: string;
  href: string;
}

const CategoryItem = ({ title, children, href }: CategoryItemProps) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-y-2 cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:bg-gray-100">
        <div className="relative w-full h-48">
          {children}
        </div>
        <h3 className="font-semibold text-xl p-2 text-center">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryItem;
