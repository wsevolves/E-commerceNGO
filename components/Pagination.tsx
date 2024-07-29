// *********************
// Role of the component: Pagination for navigating the shop page
// Name of the component: Pagination.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Pagination />
// Input parameters: no input parameters
// Output: Component with the current page and buttons for incrementing and decrementing page
// *********************

"use client";
import { usePaginationStore } from "@/app/_zustand/paginationStore";
import React from "react";

const Pagination = () => {
  // getting from Zustand store current page and methods for incrementing and decrementing current page
  const { page, incrementPage, decrementPage } = usePaginationStore();
  return (
    <div className="join flex justify-center py-16">
      <button
        className="join-item btn btn-lg bg-cyan-600 text-white hover:bg-white hover:text-cyan-600"
        onClick={() => decrementPage()}
      >
        «
      </button>
      <button className="join-item btn btn-lg bg-cyan-600 text-white hover:bg-white hover:text-cyan-600">
        Page {page}
      </button>
      <button
        className="join-item btn btn-lg bg-cyan-600 text-white hover:bg-white hover:text-cyan-600"
        onClick={() => incrementPage()}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
