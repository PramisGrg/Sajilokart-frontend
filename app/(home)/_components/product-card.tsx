import ImageWrapper from "@/components/common/image-wrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TProductResponseData } from "@/types/product.types";
import { ChartBarBig, Heart } from "lucide-react";
import React from "react";

const ProductCard = ({ product }: { product: TProductResponseData[] }) => {
  console.log(product);
  return (
    <div className="grid md:grid-cols-4 gap-6 grid-cols-2">
      {product.map((item) => (
        <Card
          className="border-none bg-white rounded-none space-y-2 pb-4 group relative hover:bg-gray-100 transition-all duration-300"
          key={item.id}
        >
          <ImageWrapper
            className="w-full md:h-64 h-48 object-cover"
            image={undefined}
          />
          <div className="space-y-2 px-2">
            <p className="text-center font-semibold">{item.name}</p>
            <p className="text-primary font-bold">Rs {item.price}</p>
            <div className="flex justify-center items-center">
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:-translate-x-20 ease-in-out">
                <Heart className="h-5 w-5 cursor-pointer" />
              </div>
              <Button className="border-none rounded-none">Add to Cart</Button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-20 ease-in-out">
                <ChartBarBig className="h-5 w-5 cursor-pointer" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
