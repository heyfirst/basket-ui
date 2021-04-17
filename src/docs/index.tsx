import NotImplementedPage from "../components/NotImplementedPage";
import Introduction from "./getting-started/introduction";
import HomeScreen from "./page-examples/home-screen";

export const DOCUMENTS = [
  {
    title: "Getting Started",
    homePage: "/",
    menus: [
      {
        title: "Introduction",
        link: "/",
        component: () => <Introduction />,
        publish: true,
      },
      {
        title: "Release Note",
        link: "/release-note",
        component: () => <NotImplementedPage>Release Note</NotImplementedPage>,
        publish: false,
      },
    ],
  },
  {
    title: "Page Examples",
    homePage: "/",
    menus: [
      {
        title: "Home Screen",
        link: "/pages/home-screen",
        component: () => <HomeScreen />,
        publish: true,
      },
      {
        title: "Detail Screen",
        link: "/pages/detail-screen",
        component: () => <NotImplementedPage>Detail Screen</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Login Screen",
        link: "/pages/login-screen",
        component: () => <NotImplementedPage>Login Screen</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Register Form",
        link: "/pages/register-form",
        component: () => <NotImplementedPage>Register Form</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Detail List",
        link: "/pages/detail-list",
        component: () => <NotImplementedPage>Detail List</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Dashboard Screen",
        link: "/pages/dashboard-screen",
        component: () => (
          <NotImplementedPage>Dashboard Screen</NotImplementedPage>
        ),
        publish: false,
      },
      {
        title: "Error Screen",
        link: "/pages/error-screen",
        component: () => <NotImplementedPage>Error Screen</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Interactive Map",
        link: "/pages/interactive-map",
        component: () => (
          <NotImplementedPage>Interactive Map</NotImplementedPage>
        ),
        publish: false,
      },
      {
        title: "Setting Screen",
        link: "/pages/setting-screen",
        component: () => (
          <NotImplementedPage>Setting Screen</NotImplementedPage>
        ),
        publish: false,
      },
      {
        title: "Kanban Board",
        link: "/pages/kanban-board",
        component: () => <NotImplementedPage>Kanban Board</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Product Grid Screen",
        link: "/pages/product-grid-screen",
        component: () => (
          <NotImplementedPage>Product Grid Screen</NotImplementedPage>
        ),
        publish: false,
      },
    ],
  },
  {
    title: "Components",
    homePage: "/",
    menus: [
      {
        title: "Typography",
        link: "/components/typography",
        component: () => <NotImplementedPage>Typography</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Card",
        link: "/components/card",
        component: () => <NotImplementedPage>Card</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Button",
        link: "/components/button",
        component: () => <NotImplementedPage>Button</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Button Group",
        link: "/components/button-group",
        component: () => <NotImplementedPage>Button</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Table",
        link: "/components/table",
        component: () => <NotImplementedPage>Table</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Breadcrumb",
        link: "/components/breadcrumb",
        component: () => <NotImplementedPage>Breadcrumb</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Form",
        link: "/components/form",
        component: () => <NotImplementedPage>Form</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Spinner",
        link: "/components/spinner",
        component: () => <NotImplementedPage>Spinner</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Tooltip",
        link: "/components/tooltip",
        component: () => <NotImplementedPage>Tooltip</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Avatar",
        link: "/components/avatar",
        component: () => <NotImplementedPage>Avatar</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Tabs",
        link: "/components/tabs",
        component: () => <NotImplementedPage>Tabs</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Icon",
        link: "/components/icon",
        component: () => <NotImplementedPage>Icon</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Timeline",
        link: "/components/timeline",
        component: () => <NotImplementedPage>Timeline</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Navbar",
        link: "/components/navbar",
        component: () => <NotImplementedPage>Navbar</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Sidebar",
        link: "/components/sidebar",
        component: () => <NotImplementedPage>Sidebar</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Pagination",
        link: "/components/pagination",
        component: () => <NotImplementedPage>Pagination</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Select",
        link: "/components/select",
        component: () => <NotImplementedPage>Select</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Dropdown",
        link: "/components/dropdown",
        component: () => <NotImplementedPage>Dropdown</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Badge",
        link: "/components/badge",
        component: () => <NotImplementedPage>Badge</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Label",
        link: "/components/label",
        component: () => <NotImplementedPage>Label</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Alert",
        link: "/components/alert",
        component: () => <NotImplementedPage>Alert</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Page State",
        link: "/components/page-state",
        component: () => <NotImplementedPage>Page State</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Filter Bar",
        link: "/components/filter-bar",
        component: () => <NotImplementedPage>Filter</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Skeleton",
        link: "/components/skeleton",
        component: () => <NotImplementedPage>Skeleton</NotImplementedPage>,
        publish: false,
      },
      {
        title: "List",
        link: "/components/list",
        component: () => <NotImplementedPage>List</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Modal",
        link: "/components/modal",
        component: () => <NotImplementedPage>Modal</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Progress",
        link: "/components/progress",
        component: () => <NotImplementedPage>Progress</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Toast",
        link: "/components/toast",
        component: () => <NotImplementedPage>Toast</NotImplementedPage>,
        publish: false,
      },
      {
        title: "Calendar",
        link: "/components/calendar",
        component: () => <NotImplementedPage>Calendar</NotImplementedPage>,
        publish: false,
      },
    ],
  },
];
