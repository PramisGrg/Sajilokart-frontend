"use client";
import Image from "next/image";
import React from "react";
import loginImage from "@/public/cloud.jpeg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TloginSchema } from "@/schemas/auth.schema";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TloginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (values: TloginSchema) => {
    console.log(values);
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 rounded-md space-y-6 min-w-[400px]"
        >
          <div className="space-y-2">
            <h1 className="text-center text-3xl font-serif">
              Login to your account
            </h1>
            <p className="text-center font-thin">Let get started 🚀</p>
          </div>
          <div className="space-y-2">
            <Label className="font-bold">Email</Label>
            <span className="text-red-500 ml-2">*</span>
            <Input
              {...register("email")}
              className="border border-gray-300"
              placeholder="Enter you email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="font-bold">Password</Label>
            <span className="text-red-500 ml-2">*</span>
            <Input
              {...register("password")}
              className="border border-gray-300"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div className="flex gap-1 text-sm justify-end">
            <p className="font-bold">Don&apos;t have an account ?</p>
            <Link
              className="text-primary justify-end font-bold"
              href={"/auth/register"}
            >
              SignUp
            </Link>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Page;
