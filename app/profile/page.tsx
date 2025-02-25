"use client";
import MaxWidthContainer from "@/layouts/max-width-container";
import { useGetUserQuery } from "@/services/queries/user.query";
import ImageWrapper from "@/components/common/image-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  updateProfileSchema,
  TUpdateProfileSchema,
} from "@/schemas/profile.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const Profile = () => {
  const { data: user } = useGetUserQuery();
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<TUpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    values: {
      name: user?.data.name || "",
      email: user?.data.email || "",
      phoneNumber: user?.data.phoneNumber || "",
      image: undefined,
    },
  });

  const onDrop = (acceptedFile: File[]) => {
    const file = acceptedFile[0];
    if (file) {
      form.setValue("image", file, { shouldDirty: true });
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getInputProps, getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  const onSubmit = (values: TUpdateProfileSchema) => {
    console.log(values, "This is update vlaue");
  };

  return (
    <>
      <MaxWidthContainer className="py-4 space-y-4">
        <h1 className="font-bold">Personal Details</h1>
        <Form {...form}>
          <form
            className="border border-gray-200 p-4 rounded-lg space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="image"
              control={form.control}
              render={() => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <ImageWrapper
                      image={preview}
                      className="w-36 h-36 rounded-xl"
                    />
                    <div className="space-y-2">
                      <h1 className="">Profile Image</h1>
                      <div {...getRootProps()}>
                        <input className="hidden" {...getInputProps()} />
                        <Button type="button">Upload</Button>
                      </div>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Name</FormLabel>
                    <FormControl>
                      <Input className="border-gray-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Email</FormLabel>
                    <FormControl>
                      <Input className="border-gray-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-bold">Phone Number</FormLabel>
                    <FormControl>
                      <Input className="border-gray-200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button disabled={!form.formState.isDirty} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </MaxWidthContainer>
    </>
  );
};

export default Profile;
