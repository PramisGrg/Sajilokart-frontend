"use client";
import { cn } from "@/lib/utils";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { useState } from "react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
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
  const [active, isActive] = useState("Home");

  return (
    <div className="md:px-4 px-2 py-4">
      {items.map((item) => (
        <div key={item.title}>
          <a
            href={item.url}
            onClick={() => isActive(item.title)}
            className={cn(
              "flex gap-4 rounded-md md:p-2 py-2 justify-center md:justify-start",
              active === item.title && "bg-primary/10"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="md:block hidden">{item.title}</span>
          </a>
        </div>
      ))}
    </div>
  );
}
