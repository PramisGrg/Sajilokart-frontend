"use client";
import { cn } from "@/lib/utils";
import {
  Calendar,
  ListCollapse,
  Package2,
  Search,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const items = [
  {
    title: "Info",
    url: "/profile",
    icon: ListCollapse,
  },
  {
    title: "Products",
    url: "/profile/product",
    icon: Package2,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [active, isActive] = useState("Info");

  return (
    <div className="md:px-4 px-2 py-4">
      {items.map((item) => (
        <div key={item.title}>
          <Link
            href={item.url}
            onClick={() => isActive(item.title)}
            className={cn(
              "flex gap-4 rounded-md md:p-2 py-2 justify-center md:justify-start",
              active === item.title && "bg-primary/10"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="md:block hidden">{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
