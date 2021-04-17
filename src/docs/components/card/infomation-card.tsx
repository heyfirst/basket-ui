import React from "react";

const InformationCard: React.FC = () => (
  <div className="relative p-4 mb-4 bg-white rounded shadow-md w-96">
    <div className="flex flex-wrap">
      <div className="w-full">
        <div className="mb-2">
          <label className="block text-xs text-gray-500">Customer Name:</label>
          <div className="leading-tight text-gray-900">Peter Pan & Pencil</div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-3 mr-2">
          <label className="block mb-1 text-xs text-gray-500 ">Segment:</label>
          <div className="leading-tight text-gray-900">Traditional Shop</div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-2">
          <label className="block text-xs text-gray-500">ID:</label>
          <div className="leading-tight text-gray-900">CTS0000001</div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-3 mr-2">
          <label className="block mb-1 text-xs text-gray-500 ">
            Contact Name:
          </label>
          <div className="leading-tight text-gray-900">Peter</div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="mb-2">
          <label className="block text-xs text-gray-500">Tel:</label>
          <div className="leading-tight text-gray-900">+66-88-111-2222</div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2">
          <label className="block text-xs text-gray-500">Address:</label>
          <div className="text-sm leading-tight text-gray-900">
            192 Rama XL road, Huai Kwang, Bangkok 10140
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-2">
          <label className="block text-xs text-gray-500">Note:</label>
          <div className="text-sm leading-tight text-gray-900">-</div>
        </div>
      </div>
    </div>
  </div>
);

export default InformationCard;
