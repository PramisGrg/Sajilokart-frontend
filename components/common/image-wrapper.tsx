import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageWrapperProps {
  image: string | undefined;
  className?: string;
}

const ImageWrapper = ({ image, className }: ImageWrapperProps) => {
  const imageUri = image ? image : "https://picsum.photos/200/300";

  return (
    <Image
      className={cn(className)}
      src={imageUri}
      alt="This is image wrapper"
      width={1000}
      height={1000}
    />
  );
};

export default ImageWrapper;
