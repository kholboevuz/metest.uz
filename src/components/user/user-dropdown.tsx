import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { Avatar, AvatarFallback } from "../ui/avatar";
import { CiLogout } from "react-icons/ci";
import { RiAccountCircleLine, RiPriceTag2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdPayments } from "react-icons/md";
import { IsUser } from '@/types/type';
import { Button } from '../ui/button';
import { ChevronsUpDown } from 'lucide-react';

export default function UserDropdown() {
  const auth = useAuthUser() as IsUser | null;
  const signOut = useSignOut();
  const signOutFunction = () => {
    signOut();
    window.location.href = "/";
  };
  if (!auth) {
    return null;
  }


  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className='flex items-center gap-2 border p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-900 hover:border-slate-200 dark:hover:border-gray-700 focus:border-none'>
            <Avatar>
              <AvatarFallback className="bg-yellow-600 dark:bg-yellow-500 text-white outline-none uppercase">
                {auth.fullname[0]}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{auth.fullname}</span>
              <span className="truncate text-xs">{auth.balance} so'm</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </div>

        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          <DropdownMenuLabel className="text-lg p-2 flex flex-col">
            {auth.fullname}
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {auth.attempts} ta urunishlar
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={"/dashboard"}>
            <DropdownMenuItem className="flex gap-2 items-center text-lg hover:cursor-pointer ">
              {" "}
              <RiAccountCircleLine className="text-lg" /> Dashboard
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
          <DropdownMenuItem className="flex gap-2 items-center text-red-700 text-lg hover:cursor-pointer " >
            {" "}
            <Button variant="ghost" onClick={signOutFunction} className="text-lg">
              Chiqish
              <CiLogout className="text-lg" />
            </Button>

          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
