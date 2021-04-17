import React from "react";
import basketIcon from "../../assets/icons/basket.svg";

const Introduction: React.FC = () => {
  return (
    <div className="container p-8 mx-auto">
      <div className="max-w-4xl mb-4">
        <h2 className="mb-4 text-3xl text-yellow-700">
          Hi! Here's{" "}
          <img src={basketIcon} className="inline w-4 h-4" alt="basket-icon" />{" "}
          Basket UI
        </h2>
        <p className="mb-2">
          Hayoo, I am creating the collection of ready-to-use clean and simple
          tailwind ui components which I use in personal project.
        </p>
        <p className="mb-2">
          I hope this collection will help you to get some ideas for your
          website, your application, your software-as-a-service then!
        </p>
        <div className="flex">
          <div className="flex items-center mr-3">
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-yellow-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div className="text-yellow-900">1 Components</div>
          </div>
          <div className="flex items-center mr-3">
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-yellow-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <div className="text-yellow-900">MIT Licensed</div>
          </div>
          <div className="flex items-center mr-3">
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-yellow-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="text-yellow-900">Last update: 17 April 2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
