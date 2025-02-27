"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import cover from "@/public/cover.png";
import cover1 from "@/public/cover-1.png";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import ImageWrapper from "@/components/common/image-wrapper";

const CarouselContainer = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="md:h-full h-72 object-cover">
        <CarouselItem>
          <ImageWrapper
            className="w-full h-full object-cover"
            image={cover.src}
          />
        </CarouselItem>
        <CarouselItem>
          <ImageWrapper
            className="w-full h-full object-cover"
            image={cover1.src}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="ml-14 border-none" />
      <CarouselNext className="mr-14 border-none" />
    </Carousel>
  );
};

export default CarouselContainer;
