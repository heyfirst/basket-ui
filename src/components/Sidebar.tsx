import React from "react";
import SidebaMenu from "./SidebarMenu";

const DOCUMENT_SECTIONS = [
  {
    title: "Page Examples",
    menus: [
      { title: "Home Screen", link: "/" },
      { title: "Detail Screen", link: "/" },
      { title: "Login Screen", link: "/" },
      { title: "Register Form", link: "/" },
      { title: "Detail List", link: "/" },
      { title: "Dashboard Screen", link: "/" },
      { title: "Error Screen", link: "/" },
      { title: "Interactive Map", link: "/" },
      { title: "Setting Screen", link: "/" },
      { title: "Kanban Board", link: "/" },
      { title: "Product Grid Screen", link: "/" },
    ],
  },
  {
    title: "Components",
    menus: [
      { title: "Typography", link: "/" },
      { title: "Card", link: "/" },
      { title: "Button", link: "/" },
      { title: "Button Group", link: "/" },
      { title: "Table", link: "/" },
      { title: "Breadcrumb", link: "/" },
      { title: "Form", link: "/" },
      { title: "Spinner", link: "/" },
      { title: "Tooltip", link: "/" },
      { title: "Avatar", link: "/" },
      { title: "Tabs", link: "/" },
      { title: "Icon", link: "/" },
      { title: "Timeline", link: "/" },
      { title: "Navbar", link: "/" },
      { title: "Sidebar", link: "/" },
      { title: "Pagination", link: "/" },
      { title: "Select", link: "/" },
      { title: "Dropdown", link: "/" },
      { title: "Badge", link: "/" },
      { title: "Label", link: "/" },
      { title: "Alert", link: "/" },
      { title: "Page State", link: "/" },
      { title: "Filter Bar", link: "/" },
      { title: "Skeleton", link: "/" },
      { title: "List", link: "/" },
      { title: "Modal", link: "/" },
      { title: "Progress", link: "/" },
      { title: "Toast", link: "/" },
      { title: "Calendar", link: "/" },
    ],
  },
  {
    title: "Miscellaneous",
    menus: [
      { title: "About Library", link: "/" },
      { title: "Release Note", link: "/" },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col items-center h-screen p-3 overflow-auto text-sm border-r shadow-md w-72 bg-gray-50">
      <h1 className="mt-2 mb-4 font-semibold tracking-wide text-center text-gray-700 uppercase text-md">
        🧺 Basket UI
        <small className="block mt-2 text-gray-700">
          Ready-to-use clean and simple Tailwind UI for multi-purpose
        </small>
      </h1>
      {DOCUMENT_SECTIONS.map((section) => (
        <section key={section.title} className="w-full mb-3">
          <h3 className="mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase">
            {section.title}
          </h3>
          <ul>
            {section.menus.map((menu) => (
              <li key={menu.title}>
                <SidebaMenu menu={menu} active={menu.title === "Button"} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
};

export default Sidebar;
