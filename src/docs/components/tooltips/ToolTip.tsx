import React from "react";

const ToolTip: React.FC = () => (
  <div>
    <style>
      {`
      .tooltip:before {
        content: attr(data-info);
        position: absolute;
        color: white;
        text-align: center;
        white-space: nowrap;
        padding: .25rem .5rem;
        background-color: rgba(75, 85, 99, .6);
        border-radius: .25rem;
        pointer-events: none;
        z-index: -1;
        top: 2.5rem;
        opacity: 0;
        transition: all 0.2s;
        font-size: .6rem;
      }

      .tooltip:hover:before {
        opacity: 1;
      }
    `}
    </style>
    <button
      className="relative inline px-3 py-2 text-sm text-white transition-colors duration-200 bg-gray-700 rounded-full cursor-pointer tooltip hover:bg-gray-600"
      data-info="Tooltip"
    >
      Tooltips
    </button>
  </div>
);

export default ToolTip;
