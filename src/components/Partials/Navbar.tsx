import logoDark from "@/assets/images/logo/logo.png";
import logoWhite from "@/assets/images/logo/logo_white.png";

import { MdDarkMode, MdLightMode } from "react-icons/md";

import { Link } from "react-router-dom";
import { useTheme } from "../provider/theme-provider";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import AuthModal from "../Modal/AuthModal";
import { Button } from "@/components/ui/button";
import UserDropdown from "../user/user-dropdown";

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated)
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="shadow-sm mt-5">
      <div className="flex justify-between items-center pb-5 px-4 lg:px-20">
        <Link to="/">
          <img
            src={theme === "dark" ? logoWhite : logoDark}
            alt="logo"
            width={200}
            height={200}
          />
        </Link>

        <div className="flex gap-5 items-center">
          <Button variant="ghost" onClick={toggleTheme}>
            {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
          </Button>
          {isAuthenticated ? (<UserDropdown />) : (<AuthModal />)}

        </div>
      </div>
      <hr />
    </div>
  );
}
