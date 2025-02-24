import Navbar from "@/components/common/navbar";
import React, { ReactNode } from "react";
import { AppSidebar } from "./_components/sidebar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="md:w-56 w-12 shadow-md">
          <AppSidebar />
        </div>
        <div className="flex-1">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default layout;
