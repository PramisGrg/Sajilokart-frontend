"use client";
import ImageWrapper from "@/components/common/image-wrapper";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export type TProductType = {
  id: string;
  name: string;
  image: string | undefined;
  description: string;
  price: number;
  stock: number;
};

const ActionsCell = ({ productId }: { productId: string }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="border-none bg-white">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => router.push(`product/${productId}`)}>
            Edit Product
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Delete Product
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md border-none">
          <DialogHeader>
            <DialogTitle>Delete Product</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the product ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <Button className="bg-red-400">Delete</Button>
            <DialogClose asChild>
              <Button className="text-white" type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const columns: ColumnDef<TProductType>[] = [
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ row }) => {
      return (
        <div className="flex gap-4 items-center">
          <ImageWrapper
            className="w-10 h-10 rounded-lg"
            image={row.original.image}
          />
          <h1>{row.original.name}</h1>
        </div>
      );
    },
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
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const productId = row.original.id;
      return <ActionsCell productId={productId} />;
    },
  },
];
