import Image from "next/image";
import React from "react";
import loginImage from "@/public/cloud.jpeg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full relative">
        <Image
          src={loginImage}
          alt="This is login image"
          width={1000}
          height={1000}
          style={{
            objectFit: "cover",
          }}
          className="max-h-screen"
        />
        <h1 className="absolute top-4 font-bold text-2xl text-white left-4">
          SajiloKart
        </h1>
      </div>

      <div className="flex justify-center items-center min-h-screen">
        <div className="p-8 rounded-md space-y-6 min-w-[400px]">
          <div className="space-y-2">
            <h1 className="text-center text-3xl font-serif">
              Login to your account
            </h1>
            <p className="text-center font-thin">Let get started 🚀</p>
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input
              className="border border-gray-300"
              placeholder="Enter you email"
            />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input
              className="border border-gray-300"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <Button className="w-full">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
