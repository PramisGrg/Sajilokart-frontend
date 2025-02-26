import { TProductResponseData } from "@/types/product.types";
import React from "react";

const ProductCard = ({ product }: { product: TProductResponseData[] }) => {
  console.log(product);
  return (
    <div>
      {product.map((items) => (
        <div key={items.id}>
          <h1>{items.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
