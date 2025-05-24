import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo (1).png";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button} from "../button";

function NavBar() {
  return (
    <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
      <Link href="/">
        <Image src={logo} alt="logo" width={40} />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="focus: outline-none">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-black">CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuSeparator />
          <Link href={"/auth"}>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default NavBar;
