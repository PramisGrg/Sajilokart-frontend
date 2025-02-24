"use client";
import MaxWidthContainer from "@/layouts/max-width-container";
import { useGetUserQuery } from "@/services/queries/user.query";
import ImageWrapper from "@/components/common/image-wrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const { data: user } = useGetUserQuery();
  console.log(user, "This is user");

  return (
    <>
      <MaxWidthContainer className="mx-auto w-[1000px] space-y-10 py-10">
        <h1 className="text-3xl font-bold">Edit Profile :</h1>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <ImageWrapper
              className="w-40 h-40 rounded-full"
              image={user?.data.image}
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <div className="space-y-2">
              <Label className="font-bold">Name</Label>
              <Input className="border-gray-200" value={user?.data.name} />
            </div>
            <div className="space-y-2">
              <Label className="font-bold">Email</Label>
              <Input className="border-gray-200" value={user?.data.email} />
            </div>
          </div>
        </div>
        <div>
          <Label></Label>
          <Input value={user?.data.phoneNumber} />
        </div>
      </MaxWidthContainer>
    </>
  );
};

export default Profile;
