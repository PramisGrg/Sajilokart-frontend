import ImageWrapper from "@/components/common/image-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TProductResponseData } from "@/types/product.types";
import React from "react";

const ProductCard = ({ product }: { product: TProductResponseData[] }) => {
  console.log(product);
  return (
    <div className="grid md:grid-cols-4 gap-6 grid-cols-2">
      {product.map((item) => (
        <Card
          className="border-none bg-white rounded-none space-y-4"
          key={item.id}
        >
          <div className="space-y-4">
            <ImageWrapper
              className="w-full h-80 object-cover"
              image={undefined}
            />
            <p className="text-xl text-center">{item.name}</p>
          </div>
          <div className="flex justify-between px-8">
            <p>Price: Rs {item.price}</p>
            <p>Stock: {item.stock}</p>
          </div>
          <div className="flex justify-center px-8 pb-4">
            <Button className="border-none rounded-none">Add to Cart</Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
