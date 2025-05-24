import React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Folder,
  LayoutDashboard,
  MessageCircleHeartIcon,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

function SideBar() {
  return (
    <Command className="border-none shadow-md border-0 bg-slate-100">
      <CommandInput
        placeholder="Type a command or search..."
        className="border-none"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard />
            <Link href={"/"}>
              <span>Dashboard</span>
            </Link>
          </CommandItem>

          <CommandItem>
            <MessageCircleHeartIcon />
            <Link href={"/posts"}>
              <span>Posts</span>
            </Link>
          </CommandItem>

          <CommandItem>
            <Folder />
            <Link href={"/categories"}>
              <span>Categories</span>
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export default SideBar;
