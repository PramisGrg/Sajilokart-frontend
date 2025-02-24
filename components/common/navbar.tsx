"use client";
import MaxWidthContainer from "@/layouts/max-width-container";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import profile from "@/public/cloud.jpeg";
import Link from "next/link";
import { useGetUserQuery } from "@/services/queries/user.query";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

const UserNavSkeletion = () => {
  return (
    <MaxWidthContainer className="flex justify-between py-2">
      <div className="flex items-center">
        <Skeleton className="w-20 h-6" />
      </div>
      <div>
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </MaxWidthContainer>
  );
};
const Navbar = () => {
  const router = useRouter();
  const { data: user, isError, isLoading } = useGetUserQuery();

  if (isLoading) return <UserNavSkeletion />;

  return (
    <MaxWidthContainer className="flex justify-between border-b border-gray-200 items-center py-2 z-50">
      <div className="font-bold">Sajilo Kart</div>
      {!user || isError ? (
        <div className="flex gap-4">
          <Button onClick={() => router.push("/auth/login")}>Login</Button>
          <Button onClick={() => router.push("/auth/register")}>
            Register
          </Button>
        </div>
      ) : (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex gap-4 items-center">
                <h1>{user.data.name}</h1>
                <Image
                  src={profile}
                  alt="Profile Image"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-gray-200">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={"/profile"}>Profile</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </MaxWidthContainer>
  );
};

export default Navbar;
