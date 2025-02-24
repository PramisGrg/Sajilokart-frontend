"use client";
import MaxWidthContainer from "@/layouts/max-width-container";
import { useGetUserQuery } from "@/services/queries/user.query";
import ImageWrapper from "@/components/common/image-wrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

const Profile = () => {
  const { data: user } = useGetUserQuery();
  console.log(user, "This is user");

  const form = useForm<TUpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    values: {
      name: user?.data.name || "",
      email: user?.data.email || "",
      phoneNumber: user?.data.phoneNumber || "",
    },
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
            className="border border-gray-100 p-4 rounded-md space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="image"
              control={form.control}
              render={() => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <ImageWrapper
                      image={user?.data.image}
                      className="w-36 h-36 rounded-xl"
                    />
                    <div className="space-y-2">
                      <h1 className="font-semibold">Profile Image</h1>
                      <Button>Upload</Button>
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </MaxWidthContainer>
    </>
  );
};

export default Profile;
