"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import loginImage from "@/public/cloud.jpeg";
import { registerSchema, TRegisterSchema } from "@/schemas/auth.schema";
import { useRegisterMutation } from "@/services/queries/auth.query";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

const Register = () => {
  const register = useRegisterMutation();
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onDrop = (acceptedFile: File[]) => {
    const file = acceptedFile[0];
    if (file) {
      form.setValue("image", file);
      setPreview(URL.createObjectURL(file));
      console.log("file is Slected");
    }
  };

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  const onSubmit = (values: TRegisterSchema) => {
    register.mutate(values);
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
                Register your account
              </h1>
              <p className="text-center font-thin">Let&apos;s get started 🚀</p>
            </div>
            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem className="flex flex-col items-center">
                  <FormControl>
                    {!preview ? (
                      <div
                        className="w-28 h-28 flex items-center cursor-pointer justify-center border border-gray-400 border-dashed rounded-full"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <p className="text-sm text-gray-400">Select Image</p>
                      </div>
                    ) : (
                      <div>
                        <Image
                          src={preview}
                          height={1000}
                          width={1000}
                          alt="This is preview alternative"
                          className="w-28 h-28 rounded-full object-cover"
                        />
                      </div>
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Name
                    <span className="text-red-500 ml-2">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      placeholder="Enter your name"
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
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">
                    Phone Number
                    <span className="text-red-500 ml-2">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-gray-400"
                      placeholder="Enter your Phonenumber"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="font-bold">Select a role</FormLabel>
                  <span className="ml-2 text-red-400">*</span>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="SELLER" />
                        </FormControl>
                        <FormLabel className="font-normal">Seller</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="BUYER" />
                        </FormControl>
                        <FormLabel className="font-normal">Buyer</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end text-sm font-semibold">
              Already have an account ?
              <Link
                href={"/auth/login"}
                className="ml-1 font-bold text-primary"
              >
                Login
              </Link>
            </div>
            <Button
              disabled={register.isPending}
              className="w-full font-bold"
              type="submit"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;
