import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import Frame from "react-frame-component";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import beautifyMarkup from "../utils/beautifyMarkup";

export type Showcase = {
  title: string;
  type?: "component" | "page";
  component: React.ReactNode;
};

const ShowcaseCard: React.FC<Showcase> = ({
  title,
  type = "component",
  component,
}) => {
  const markupRef = useRef<HTMLDivElement>(null);
  const [markup, setMarkup] = useState("");
  const [isCodeOpen, setCodeOpen] = useState(false);

  useEffect(() => {
    if (markupRef.current) {
      setMarkup(markupRef.current?.innerHTML);
    }
  }, [markupRef]);

  return (
    <div className="max-w-6xl mb-4 overflow-hidden border border-t border-b border-gray-200 rounded-lg">
      <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200">
        <div className="flex items-center flex-shrink min-w-0">
          <h3 className="flex-shrink min-w-0 text-base leading-snug truncate font-regular">
            {title}
          </h3>
        </div>
        <div className="flex items-center flex-shrink-0 ml-4">
          <button
            className={cx("p-1 text-xs cursor-pointer focus:outline-none", {
              "text-yellow-700": isCodeOpen,
            })}
            onClick={() => setCodeOpen(!isCodeOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 mr-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            view code
          </button>
        </div>
      </div>
      <div className="relative h-full bg-gray-100">
        <Frame
          className="w-full h-96"
          head={
            <>
              <link
                href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.1.1/tailwind.min.css"
                rel="stylesheet"
              />
              <style>
                {type &&
                  `body {
                  margin: 1rem;
                }`}
              </style>
            </>
          }
        >
          {component}
        </Frame>
        {isCodeOpen && (
          <div className="text-sm leading-relaxed transition-all duration-200 border-t">
            <SyntaxHighlighter
              language="htmlbars"
              showLineNumbers
              style={atomOneLight}
            >
              {beautifyMarkup(markup)}
            </SyntaxHighlighter>
          </div>
        )}
        <div className="hidden" ref={markupRef}>
          {component}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
