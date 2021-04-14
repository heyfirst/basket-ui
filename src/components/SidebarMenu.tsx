import React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenu: React.FC<{
  menu: { link: string; title: string };
}> = ({ menu }) => {
  return (
    <NavLink
      to={menu.link}
      exact
      className="relative block px-3 py-2 mb-2 nav-link hover:text-yellow-700"
      activeClassName="text-yellow-700 active"
    >
      <span className="absolute inset-0 rounded-md overlay hover:bg-yellow-100"></span>
      <span className="relative">{menu.title}</span>
    </NavLink>
  );
};

export default SidebarMenu;
