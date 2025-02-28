"use client";
import MaxWidthContainer from "@/layouts/max-width-container";
import { useGetSellerProductQuery } from "@/services/queries/product.query";
import React from "react";
import { DataTable } from "../_components/product-table";
import { columns } from "../_components/column";

const Product = () => {
  const { data } = useGetSellerProductQuery();

  const sellerProduct = data?.data || [];

  return (
    <MaxWidthContainer className="py-4 space-y-4">
      <h1 className="font-bold">Product Details</h1>
      <DataTable columns={columns} data={sellerProduct} />
    </MaxWidthContainer>
  );
};

export default Product;
