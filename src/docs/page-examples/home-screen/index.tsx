import { DemoPageProps } from "../../../components/DemoPage";
import HomeScreen1 from "./home-screen-1";

const HomeScreen: DemoPageProps = {
  title: "HomeScreen",
  description: "HomeScreen examples",
  showcases: [
    {
      title: "Home Screen 1",
      component: <HomeScreen1 />,
    },
    {
      title: "Home Screen 2",
      component: <HomeScreen1 />,
    },
  ],
};

export default HomeScreen;
