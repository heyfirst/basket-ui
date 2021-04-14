import React from "react";
import cx from "classnames";

const SidebaMenu: React.FC<{
  menu: { link: string; title: string };
  active: boolean;
}> = ({ menu, active }) => {
  return (
    <a
      href={menu.link}
      className={cx("relative block px-3 py-2 mb-2 hover:text-yellow-700", {
        "text-yellow-700": active,
      })}
    >
      <span
        className={cx("absolute inset-0 rounded-md hover:bg-yellow-100 ", {
          "bg-yellow-100": active,
        })}
      ></span>
      <span className="relative">{menu.title}</span>
    </a>
  );
};

export default SidebaMenu;
