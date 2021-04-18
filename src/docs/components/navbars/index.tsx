import { DemoPageProps } from "../../../components/DemoPage";
import Navbar from "./Navbar";
import LightNavbar from "./LightNavbar";

const NavbarComponent: DemoPageProps = {
  title: "Navbars",
  description: "",
  showcases: [
    {
      title: "Navbar",
      component: <Navbar />,
      type: "page",
    },
    {
      title: "Light Navbar",
      component: <LightNavbar />,
      type: "page",
    },
  ],
};

export default NavbarComponent;
