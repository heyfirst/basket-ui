import React from "react";
import Showcase from "./Showcase";

const DocumentPage: React.FC<React.PropsWithChildren<{ title: string }>> = ({
  title,
}) => {
  return (
    <div className="container p-8 mx-auto">
      <div className="max-w-4xl mb-4">
        <h2 className="text-2xl">{title}</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
          minima dolorem quo dolor quos ex consequatur? Sit beatae quaerat
          laboriosam provident architecto eligendi, delectus nobis voluptatum
          veniam adipisci labore doloribus?
        </p>
      </div>
      <Showcase />
      <Showcase />
      <Showcase />
      <Showcase />
    </div>
  );
};

export default DocumentPage;
