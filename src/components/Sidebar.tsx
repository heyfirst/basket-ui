import React from "react";

const Sections = [
  {
    title: "Page Examples",
    topics: [
      { title: "Home Page", link: "/" },
      { title: "Detail Page", link: "/" },
      { title: "Login Page", link: "/" },
      { title: "Register Form Page", link: "/" },
      { title: "Detail List Page", link: "/" },
      { title: "Dashboard Page", link: "/" },
      { title: "Not Found Page", link: "/" },
      { title: "Error Page", link: "/" },
    ],
  },
  {
    title: "Components",
    topics: [
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
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 flex flex-col items-center w-64 h-screen p-3 overflow-auto text-sm border-r shadow-md bg-gray-50">
      <h1 className="mt-2 mb-4 font-semibold tracking-wide text-center text-gray-700 uppercase text-md">
        🧺 Basket UI
        <small className="block mt-2 text-gray-700">
          Ready-to-use clean and simple Tailwind UI for multi-purpose
        </small>
      </h1>
      {Sections.map((section) => (
        <section key={section.title} className="w-full mb-3">
          <h3 className="mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase">
            {section.title}
          </h3>
          <ul>
            {section.topics.map((topic) => (
              <li key={topic.title}>
                <a
                  href={topic.link}
                  className="relative block px-3 py-2 mb-2 text-yellow-700 transition-colors duration-200"
                >
                  <span className="absolute inset-0 bg-yellow-100 rounded-md"></span>
                  <span className="relative">{topic.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </aside>
  );
};

export default Sidebar;
