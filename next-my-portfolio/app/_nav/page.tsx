import React from "react";
import NavHome from "./nav-web/NavHome";
import NavProject from "./nav-web/NavProject";
import NavContact from "./nav-web/NavContact";
import NavBlog from "./nav-web/NavBlog";
import { CpuIcon } from "@/app/_nav/HomeIcon";
import ThemeController from "./ThemeController";

const NavWeb = () => {
  return (
    <nav className='nav-web'>
      <CpuIcon />
      <NavHome/>
      <NavProject />
      <NavContact />
      <NavBlog />
      <ThemeController />
    </nav>
  );
};

export default NavWeb;
