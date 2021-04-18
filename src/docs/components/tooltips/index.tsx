import { DemoPageProps } from "../../../components/DemoPage";
import ToolTip from "./ToolTip";

const ToolTipComponent: DemoPageProps = {
  title: "ToolTips",
  description: "",
  showcases: [
    {
      title: "Basic ToolTip",
      component: <ToolTip />,
    },
  ],
};

export default ToolTipComponent;
