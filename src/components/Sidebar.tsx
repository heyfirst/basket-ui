import React from "react";
import { DOCUMENTS } from "../docs";
import SidebarMenu from "./SidebarMenu";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col items-center h-screen p-3 overflow-auto text-sm border-r shadow-md w-72 bg-gray-50">
      <h1 className="mt-2 mb-4 font-semibold tracking-wide text-center text-gray-700 uppercase text-md">
        🧺 Basket UI
        <small className="block mt-2 text-gray-700">
          Ready-to-use clean and simple Tailwind UI for multi-purpose
        </small>
      </h1>
      {DOCUMENTS.map((section) => (
        <section key={section.title} className="w-full mb-3">
          <h3 className="mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase">
            {section.title}
          </h3>
          <ul>
            {section.menus.map((menu) => (
              <li key={menu.title}>
                <SidebarMenu menu={menu} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
};

export default Sidebar;
