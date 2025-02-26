import React from "react";
import CarouselContainer from "./_components/carousel";
import Products from "./_components/products";
import MaxWidthContainer from "@/layouts/max-width-container";

const page = () => {
  return (
    <div>
      <CarouselContainer />
      <MaxWidthContainer className="py-4 space-y-4">
        <Products />
      </MaxWidthContainer>
    </div>
  );
};

export default page;
