"use client";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const [preview, setPreview] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      console.log(file, "This is file");
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  return (
    <div className="space-y-4">
      {!preview ? (
        <div
          {...getRootProps()}
          className="border-dashed flex items-center justify-center border-2 p-6 text-center cursor-pointer rounded-md hover:bg-gray-50 transition-colors w-48 h-48"
        >
          <input {...getInputProps()} />
          <p className="text-gray-500">
            Drag & drop an image here, or click to select
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative w-48 h-48">
            <Image
              src={preview}
              fill
              alt="Preview"
              className="object-cover rounded-md"
            />
          </div>
          <Button
            onClick={() => setPreview(null)}
            variant="destructive"
            className="w-full"
          >
            Delete Image
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
