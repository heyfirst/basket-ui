import React from "react";
import Showcase from "../../../components/Showcase";
import HomeScreen1 from "./home-screen-1";

const HomeScreen: React.FC = () => {
  return (
    <div className="container p-8 mx-auto">
      <div className="max-w-4xl mb-4">
        <h2 className="mb-4 text-3xl">Home Screen</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          minima dolorem quo dolor quos ex consequatur? Sit beatae quaerat
          laboriosam provident architecto eligendi, delectus nobis voluptatum
          veniam adipisci labore doloribus?
        </p>
      </div>
      <Showcase title={"Home Screen 1"} component={<HomeScreen1 />} />
      <Showcase title={"Home Screen 2"} component={<HomeScreen1 />} />
    </div>
  );
};

export default HomeScreen;
