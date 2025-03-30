import { IoMdTime } from "react-icons/io";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiCoinsFill } from "react-icons/ri";
import { Badge } from "../ui/badge";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { IsUser } from "@/types/type";
import { useEffect, useState } from "react";

export default function MenuNavbar() {
  const [loginTime, setLoginTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const storedTime = localStorage.getItem("login_time");
    if (storedTime) {
      setLoginTime(parseInt(storedTime, 10));
    }
  }, []);

  useEffect(() => {
    if (loginTime) {
      const interval = setInterval(() => {
        setElapsedTime(Date.now() - loginTime);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [loginTime]);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / (1000 * 60)) % 60;
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));

    let formattedTime = "";
    if (hours > 0) formattedTime += `${hours}h `;
    if (minutes > 0) formattedTime += `${minutes}m `;
    if (seconds > 0) formattedTime += `${seconds}s`;

    return formattedTime.trim();
  };

  const auth = useAuthUser() as IsUser | null;

  return (
    <div className="px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mt-4 sm:mt-6 mb-4">
        {/* Left Section: Attempts and Time */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <p className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
            <MdOutlineSignalCellularAlt className="text-base sm:text-lg opacity-50" />
            Sizning urinishlaringiz:{" "}
            <span className="font-bold">{auth?.attempts} ta</span>
          </p>
          <span className="hidden sm:inline font-bold text-lg">·</span>
          <p className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
            <IoMdTime className="text-base sm:text-lg opacity-50" />
            Kunlik o'rtacha vaqtingiz:{" "}
            <span className="font-bold">{formatTime(elapsedTime)}</span>
          </p>
        </div>

        {/* Right Section: Balance Badge */}
        <div className="flex justify-start sm:justify-end w-full sm:w-auto">
          <Badge
            className="p-1.5 sm:p-2 pl-2 sm:pl-3 pr-2 sm:pr-3 hover:cursor-pointer bg-yellow-600 dark:bg-yellow-500 text-white flex items-center gap-1 sm:gap-2 transition-all duration-200"
          >
            <RiCoinsFill className="text-lg sm:text-xl" />
            <span className="text-xs sm:text-sm">{auth?.balance} so'm</span>
          </Badge>
        </div>
      </div>
    </div>
  );
}