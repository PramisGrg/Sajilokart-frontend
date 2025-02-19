import { cn } from "@/lib/utils";
import React from "react";

interface TMaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const MaxWidthContainer = ({
  children,
  className,
}: TMaxWidthContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1350px] px-4", className)}>
      {children}
    </div>
  );
};

export default MaxWidthContainer;
