import { DemoPageProps } from "../../../components/DemoPage";
import DetailScreen1 from "./detail-screen-1";

const DetailScreen: DemoPageProps = {
  title: "Detail Screen",
  description: "",
  showcases: [
    {
      title: "Detail Screen 1",
      component: <DetailScreen1 />,
      type: "page",
    },
  ],
};

export default DetailScreen;
