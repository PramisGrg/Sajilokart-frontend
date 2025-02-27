import { cn } from "@/lib/utils";
interface TMaxWidthContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxWidthContainer({
  children,
  className,
}: TMaxWidthContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1200px] px-4 md:px-10", className)}>
      {children}
    </div>
  );
}
