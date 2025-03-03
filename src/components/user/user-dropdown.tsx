import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { CiLogout } from "react-icons/ci";
import { RiAccountCircleLine, RiPriceTag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdPayments } from "react-icons/md";

export default function UserDropdown() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarFallback className="bg-yellow-600 dark:bg-yellow-500 text-white outline-none">
              SX
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          <DropdownMenuLabel className="text-lg p-2 ">
            Sevinchbek Xolboyev
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={"/dashboard"}>
            <DropdownMenuItem className="flex gap-2 items-center text-lg hover:cursor-pointer ">
              {" "}
              <RiAccountCircleLine className="text-lg" /> Profil
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link to={"/dashboard/payment"}>
            <DropdownMenuItem className="flex gap-2 items-center text-lg hover:cursor-pointer ">
              {" "}
              <MdPayments className="text-lg" /> To'lov
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link to={"/dashboard/subscriber"}>
            <DropdownMenuItem className="flex gap-2 items-center text-lg hover:cursor-pointer ">
              {" "}
              <RiPriceTag2Line className="text-lg" /> Obunalar
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator className="border-red-600 border" />
          <DropdownMenuItem className="flex gap-2 items-center text-red-700 text-lg hover:cursor-pointer ">
            {" "}
            <CiLogout className="text-lg" /> Chiqish
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
