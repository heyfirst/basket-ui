import DemoPage from "../components/DemoPage";

import Introduction from "./getting-started/introduction";

import DetailScreen from "./page-examples/detail-screen";
import HomeScreen from "./page-examples/home-screen";

import NavbarComponent from "./components/navbars";
import CardComponent from "./components/cards";
import ToolTipComponent from "./components/tooltips";

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
        component: () => null,
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
        component: () => <DemoPage {...HomeScreen} />,
        publish: false,
      },
      {
        title: "Detail Screen",
        link: "/pages/detail-screen",
        component: () => <DemoPage {...DetailScreen} />,
        publish: false,
      },
      {
        title: "Login Screen",
        link: "/pages/login-screen",
        component: () => null,
        publish: false,
      },
      {
        title: "Register Form",
        link: "/pages/register-form",
        component: () => null,
        publish: false,
      },
      {
        title: "Detail List",
        link: "/pages/detail-list",
        component: () => null,
        publish: false,
      },
      {
        title: "Dashboard Screen",
        link: "/pages/dashboard-screen",
        component: () => null,
        publish: false,
      },
      {
        title: "Error Screen",
        link: "/pages/error-screen",
        component: () => null,
        publish: false,
      },
      {
        title: "Interactive Map",
        link: "/pages/interactive-map",
        component: () => null,
        publish: false,
      },
      {
        title: "Setting Screen",
        link: "/pages/setting-screen",
        component: () => null,
        publish: false,
      },
      {
        title: "Kanban Board",
        link: "/pages/kanban-board",
        component: () => null,
        publish: false,
      },
      {
        title: "Product Grid Screen",
        link: "/pages/product-grid-screen",
        component: () => null,
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
        component: () => null,
        publish: false,
      },
      {
        title: "Cards",
        link: "/components/cards",
        component: () => <DemoPage {...CardComponent} />,
        publish: true,
      },
      {
        title: "Button",
        link: "/components/button",
        component: () => null,
        publish: false,
      },
      {
        title: "Button Group",
        link: "/components/button-group",
        component: () => null,
        publish: false,
      },
      {
        title: "Table",
        link: "/components/table",
        component: () => null,
        publish: false,
      },
      {
        title: "Breadcrumb",
        link: "/components/breadcrumb",
        component: () => null,
        publish: false,
      },
      {
        title: "Form",
        link: "/components/form",
        component: () => null,
        publish: false,
      },
      {
        title: "Spinner",
        link: "/components/spinner",
        component: () => null,
        publish: false,
      },
      {
        title: "Tooltip",
        link: "/components/tooltip",
        component: () => <DemoPage {...ToolTipComponent} />,
        publish: true,
      },
      {
        title: "Avatar",
        link: "/components/avatar",
        component: () => null,
        publish: false,
      },
      {
        title: "Tabs",
        link: "/components/tabs",
        component: () => null,
        publish: false,
      },
      {
        title: "Icon",
        link: "/components/icon",
        component: () => null,
        publish: false,
      },
      {
        title: "Timeline",
        link: "/components/timeline",
        component: () => null,
        publish: false,
      },
      {
        title: "Navbars",
        link: "/components/navbars",
        component: () => <DemoPage {...NavbarComponent} />,
        publish: true,
      },
      {
        title: "Sidebar",
        link: "/components/sidebar",
        component: () => null,
        publish: false,
      },
      {
        title: "Pagination",
        link: "/components/pagination",
        component: () => null,
        publish: false,
      },
      {
        title: "Select",
        link: "/components/select",
        component: () => null,
        publish: false,
      },
      {
        title: "Dropdown",
        link: "/components/dropdown",
        component: () => null,
        publish: false,
      },
      {
        title: "Badge",
        link: "/components/badge",
        component: () => null,
        publish: false,
      },
      {
        title: "Label",
        link: "/components/label",
        component: () => null,
        publish: false,
      },
      {
        title: "Alert",
        link: "/components/alert",
        component: () => null,
        publish: false,
      },
      {
        title: "Page State",
        link: "/components/page-state",
        component: () => null,
        publish: false,
      },
      {
        title: "Filter Bar",
        link: "/components/filter-bar",
        component: () => null,
        publish: false,
      },
      {
        title: "Skeleton",
        link: "/components/skeleton",
        component: () => null,
        publish: false,
      },
      {
        title: "List",
        link: "/components/list",
        component: () => null,
        publish: false,
      },
      {
        title: "Modal",
        link: "/components/modal",
        component: () => null,
        publish: false,
      },
      {
        title: "Progress",
        link: "/components/progress",
        component: () => null,
        publish: false,
      },
      {
        title: "Toast",
        link: "/components/toast",
        component: () => null,
        publish: false,
      },
      {
        title: "Calendar",
        link: "/components/calendar",
        component: () => null,
        publish: false,
      },
    ],
  },
];
