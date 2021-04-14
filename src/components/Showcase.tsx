import React from "react";
import Frame from "react-frame-component";

const Showcase: React.FC = () => {
  return (
    <div className="max-w-4xl mb-4 overflow-hidden border border-t border-b border-gray-200 rounded-lg">
      <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200">
        <div className="flex items-center flex-shrink min-w-0">
          <h3 className="flex-shrink min-w-0 text-base leading-snug truncate font-regular">
            <a href="#x">Button Set</a>
          </h3>
        </div>
        <div className="flex items-center flex-shrink-0 ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 mr-2 cursor-pointer stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        </div>
      </div>
      <div className="relative h-32 bg-gray-100">
        <Frame
          head={
            <>
              <link
                href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.1/tailwind.min.css"
                rel="stylesheet"
              />
            </>
          }
        >
          <aside className="fixed top-0 left-0 flex flex-col items-center h-screen p-3 overflow-auto text-sm border-r shadow-md w-72 bg-gray-50">
            <h1 className="mt-2 mb-4 font-semibold tracking-wide text-center text-gray-700 uppercase text-md">
              🧺 Basket UI
              <small className="block mt-2 text-gray-700">
                Ready-to-use clean and simple Tailwind UI for multi-purpose
              </small>
            </h1>
          </aside>
        </Frame>
      </div>
    </div>
  );
};

export default Showcase;
