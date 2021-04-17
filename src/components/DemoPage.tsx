import React from "react";
import ShowcaseCard, { Showcase } from "./Showcase";

export type DemoPageProps = {
  title: string;
  description: string;
  showcases: Showcase[];
};

const DemoPage: React.FC<DemoPageProps> = ({
  title,
  description,
  showcases,
}) => {
  return (
    <div className="container p-8 mx-auto">
      <div className="max-w-4xl mb-4">
        <h2 className="mb-4 text-3xl">{title}</h2>
        <div className="text-sm">{description}</div>
      </div>
      <div className="flex flex-col">
        {showcases.map((showcase) => (
          <ShowcaseCard {...showcase} />
        ))}
      </div>
    </div>
  );
};

export default DemoPage;
