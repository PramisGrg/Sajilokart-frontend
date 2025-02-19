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
import { useGetUserQuery } from "@/services/queries/user.query";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: user, isError } = useGetUserQuery();

  return (
    <MaxWidthContainer className="flex justify-between items-center py-2">
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
                  className="w-8 h-8 rounded-full"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-gray-200">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </MaxWidthContainer>
  );
};

export default Navbar;
