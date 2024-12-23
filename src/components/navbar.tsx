import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "./ui/menubar";

import { Link, NavLink } from "react-router-dom";
import { MenuIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full py-3 px-5 flex items-center justify-between z-50">
      <Link to="/">
        <div className="py-1 px-5 flex items-center rounded-md">
          <img className="w-10 p-0 m-0" src="../public/logo.png" alt="" />
          <p>OinsPick</p>
        </div>
      </Link>
      <div className="hidden sm:flex items-center gap-8">
        <Link to="/Dashboard">
          <p className="inline-block hover:animate-push cursor-pointer">
            Dashboard
          </p>
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <MenuIcon />
            </MenubarTrigger>
            <MenubarContent>
              <Link to="/dashboard">
                <MenubarItem>Dashboard</MenubarItem>
              </Link>
              <MenubarItem>Exchanges</MenubarItem>
              <MenubarItem>
                <Link to="/sign-up">Signup</Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>My Watch list</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>MyAccount</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </nav>
  );
}

export default Navbar;
