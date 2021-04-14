import DocumentPage from "../components/DocumentPage";

export const DOCUMENTS = [
  {
    title: "Getting Started",
    homePage: "/",
    menus: [
      {
        title: "Introduction",
        link: "/",
        component: () => (
          <DocumentPage title="Introduction">Introduction</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Release Note",
        link: "/release-note",
        component: () => (
          <DocumentPage title="Release Note">Release Note</DocumentPage>
        ),
        publish: true,
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
        component: () => (
          <DocumentPage title="Home Screen">Home Screen</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Detail Screen",
        link: "/pages/detail-screen",
        component: () => (
          <DocumentPage title="Detail Screen">Detail Screen</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Login Screen",
        link: "/pages/login-screen",
        component: () => (
          <DocumentPage title="Login Screen">Login Screen</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Register Form",
        link: "/pages/register-form",
        component: () => (
          <DocumentPage title="Register Form">Register Form</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Detail List",
        link: "/pages/detail-list",
        component: () => (
          <DocumentPage title="Detail List">Detail List</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Dashboard Screen",
        link: "/pages/dashboard-screen",
        component: () => (
          <DocumentPage title="Dashboard Screen">Dashboard Screen</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Error Screen",
        link: "/pages/error-screen",
        component: () => (
          <DocumentPage title="Error Screen">Error Screen</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Interactive Map",
        link: "/pages/interactive-map",
        component: () => (
          <DocumentPage title="Interactive Map">Interactive Map</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Setting Screen",
        link: "/pages/setting-screen",
        component: () => (
          <DocumentPage title="Setting Screen">Setting Screen</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Kanban Board",
        link: "/pages/kanban-board",
        component: () => (
          <DocumentPage title="Kanban Board">Kanban Board</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Product Grid Screen",
        link: "/pages/product-grid-screen",
        component: () => (
          <DocumentPage title="Product Grid Screen">
            Product Grid Screen
          </DocumentPage>
        ),
        publish: true,
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
        component: () => (
          <DocumentPage title="Typography">Typography</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Card",
        link: "/components/card",
        component: () => <DocumentPage title="Card">Card</DocumentPage>,
        publish: true,
      },
      {
        title: "Button",
        link: "/components/button",
        component: () => <DocumentPage title="Button">Button</DocumentPage>,
        publish: true,
      },
      {
        title: "Button Group",
        link: "/components/button-group",
        component: () => <DocumentPage title="Button">Button</DocumentPage>,
        publish: true,
      },
      {
        title: "Table",
        link: "/components/table",
        component: () => <DocumentPage title="Table">Table</DocumentPage>,
        publish: true,
      },
      {
        title: "Breadcrumb",
        link: "/components/breadcrumb",
        component: () => (
          <DocumentPage title="Breadcrumb">Breadcrumb</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Form",
        link: "/components/form",
        component: () => <DocumentPage title="Form">Form</DocumentPage>,
        publish: true,
      },
      {
        title: "Spinner",
        link: "/components/spinner",
        component: () => <DocumentPage title="Spinner">Spinner</DocumentPage>,
        publish: true,
      },
      {
        title: "Tooltip",
        link: "/components/tooltip",
        component: () => <DocumentPage title="Tooltip">Tooltip</DocumentPage>,
        publish: true,
      },
      {
        title: "Avatar",
        link: "/components/avatar",
        component: () => <DocumentPage title="Avatar">Avatar</DocumentPage>,
        publish: true,
      },
      {
        title: "Tabs",
        link: "/components/tabs",
        component: () => <DocumentPage title="Tabs">Tabs</DocumentPage>,
        publish: true,
      },
      {
        title: "Icon",
        link: "/components/icon",
        component: () => <DocumentPage title="Icon">Icon</DocumentPage>,
        publish: true,
      },
      {
        title: "Timeline",
        link: "/components/timeline",
        component: () => <DocumentPage title="Timeline">Timeline</DocumentPage>,
        publish: true,
      },
      {
        title: "Navbar",
        link: "/components/navbar",
        component: () => <DocumentPage title="Navbar">Navbar</DocumentPage>,
        publish: true,
      },
      {
        title: "Sidebar",
        link: "/components/sidebar",
        component: () => <DocumentPage title="Sidebar">Sidebar</DocumentPage>,
        publish: true,
      },
      {
        title: "Pagination",
        link: "/components/pagination",
        component: () => (
          <DocumentPage title="Pagination">Pagination</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Select",
        link: "/components/select",
        component: () => <DocumentPage title="Select">Select</DocumentPage>,
        publish: true,
      },
      {
        title: "Dropdown",
        link: "/components/dropdown",
        component: () => <DocumentPage title="Dropdown">Dropdown</DocumentPage>,
        publish: true,
      },
      {
        title: "Badge",
        link: "/components/badge",
        component: () => <DocumentPage title="Badge">Badge</DocumentPage>,
        publish: true,
      },
      {
        title: "Label",
        link: "/components/label",
        component: () => <DocumentPage title="Label">Label</DocumentPage>,
        publish: true,
      },
      {
        title: "Alert",
        link: "/components/alert",
        component: () => <DocumentPage title="Alert">Alert</DocumentPage>,
        publish: true,
      },
      {
        title: "Page State",
        link: "/components/page-state",
        component: () => (
          <DocumentPage title="Page State">Page State</DocumentPage>
        ),
        publish: true,
      },
      {
        title: "Filter Bar",
        link: "/components/filter-bar",
        component: () => <DocumentPage title="Filter">Filter</DocumentPage>,
        publish: true,
      },
      {
        title: "Skeleton",
        link: "/components/skeleton",
        component: () => <DocumentPage title="Skeleton">Skeleton</DocumentPage>,
        publish: true,
      },
      {
        title: "List",
        link: "/components/list",
        component: () => <DocumentPage title="List">List</DocumentPage>,
        publish: true,
      },
      {
        title: "Modal",
        link: "/components/modal",
        component: () => <DocumentPage title="Modal">Modal</DocumentPage>,
        publish: true,
      },
      {
        title: "Progress",
        link: "/components/progress",
        component: () => <DocumentPage title="Progress">Progress</DocumentPage>,
        publish: true,
      },
      {
        title: "Toast",
        link: "/components/toast",
        component: () => <DocumentPage title="Toast">Toast</DocumentPage>,
        publish: true,
      },
      {
        title: "Calendar",
        link: "/components/calendar",
        component: () => <DocumentPage title="Calendar">Calendar</DocumentPage>,
        publish: true,
      },
    ],
  },
];
