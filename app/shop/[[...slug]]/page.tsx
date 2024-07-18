export const dynamic = "force-dynamic";
export const revalidate = 0;

import {
  Breadcrumb,
  Filters,
  Pagination,
  Products,
  SortBy,
} from "@/components";
import NgoCard from "@/components/NgoCard";
import React from "react";

// improve readabillity of category text, for example category text "smart-watches" will be "smart watches"
const improveCategoryText = (text: string): string => {
  if (text.indexOf("-") !== -1) {
    let textArray = text.split("-");

    return textArray.join(" ");
  } else {
    return text;
  }
};

const ngoData = {
  id: 1,
  name: "NGO Name 1",
  logoUrl: "https://cdn.sanity.io/images/kts928pd/production/03c5e1f41a08f714c252b6763457b843f8b8bc31-731x731.png", // Replace with the actual URL of the logo
  description: "The term NGO is generally accepted to refer to usually non-profit, private organizations that operate outside of government control. Some NGOs rely primarily on volunteers while others support a paid staff. The World Bank identifies two broad groups of NGOs",
  contact: {
    type: "Email",
    details: "contact@ngo1.org"
  }
};

const ShopPage = (slug: any) => {
  
  return (
    <div className="text-black bg-white">
      <div className=" max-w-screen-2xl mx-auto px-10 max-sm:px-5">
        <Breadcrumb />
        <div className="grid grid-cols-[200px_1fr] gap-x-10 max-md:grid-cols-1 max-md:gap-y-5">
          <Filters />
          <div>
          <div className="bg-gray-100 p-4 ">
          <NgoCard ngo={ngoData} />
          </div>
            <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-y-5">
              <h2 className="text-2xl font-bold max-sm:text-xl max-[400px]:text-lg uppercase">
                {slug?.params?.slug && slug?.params?.slug[0]?.length > 0
                  ? improveCategoryText(slug?.params?.slug[0])
                  : "All products"}
              </h2>
              <SortBy />
            </div>
            <div className="divider"></div>
            <Products slug={slug} />
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
