"use client";
import { useGetProductQuery } from "@/services/queries/product.query";
import React from "react";
import ProductCard from "./product-card";

const Products = () => {
  const { data: product } = useGetProductQuery();

  if (!product) return null;

  return (
    <div className="space-y-10 py-6">
      <div className="flex items-center w-full my-4">
        <div className="flex-grow h-[1px] bg-gray-200"></div>
        <span className="px-3 text-gray-500 text-xl">Products</span>
        <div className="flex-grow h-[1px] bg-gray-300"></div>
      </div>
      <ProductCard product={product.data} />
    </div>
  );
};

export default Products;
