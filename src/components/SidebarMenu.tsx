import React from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";

const SidebarMenu: React.FC<{
  menu: { link: string; title: string; publish: boolean };
}> = ({ menu }) => {
  return (
    <NavLink
      exact
      to={menu.link}
      className={cx(
        "relative flex justify-between items-center px-3 py-2 mb-2",
        {
          "hover:text-yellow-700 nav-link": menu.publish,
          "opacity-30 cursor-not-allowed": !menu.publish,
        }
      )}
      activeClassName="text-yellow-800 active"
      onClick={(e) => !menu.publish && e.preventDefault()}
    >
      <span className="absolute inset-0 rounded-md overlay "></span>
      <span className="relative">{menu.title}</span>
      {!menu.publish && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      )}
    </NavLink>
  );
};

export default SidebarMenu;
