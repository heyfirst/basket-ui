import { DemoPageProps } from "../../../components/DemoPage";

import InformationCard from "./infomation-card";
import LabelCard from "./label-card";

const CardComponent: DemoPageProps = {
  title: "Card",
  description: "",
  showcases: [
    {
      title: "Information Card",
      component: <InformationCard />,
    },
    {
      title: "Label Card",
      component: <LabelCard />,
    },
  ],
};

export default CardComponent;
