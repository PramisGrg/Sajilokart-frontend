"use client";
import { ColumnDef } from "@tanstack/react-table";

export type TProductType = {
  id: string;
  name: string;
  //   image: string;
  description: string;
  price: number;
  stock: number;
};

export const columns: ColumnDef<TProductType>[] = [
  {
    accessorKey: "name",
    header: "Product",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
