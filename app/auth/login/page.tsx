"use client";
import Image from "next/image";
import React from "react";
import loginImage from "@/public/cloud.jpeg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TloginSchema } from "@/schemas/auth.schema";

const Login = () => {
  const form = useForm<TloginSchema>({
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 min-w-[380px]"
          >
            <div className="space-y-2">
              <h1 className="text-center text-3xl font-serif">
                Login to your account
              </h1>
              <p className="text-center font-thin">Let&apos;s get started 🚀</p>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Email
                    <span className="text-red-500 ml-2">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Password
                    <span className="text-red-500 ml-2">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end text-sm font-semibold">
              Don&apos;t have an account ?{" "}
              <Link
                href={"/auth/register"}
                className="ml-1 font-bold text-primary"
              >
                Register
              </Link>
            </div>
            <Button className="w-full font-bold" type="submit">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
